"""Generate matching pixel-cat header artwork and static browser icons."""

from copy import deepcopy
from pathlib import Path
import xml.etree.ElementTree as ET

from PIL import Image, ImageDraw


HERE = Path(__file__).resolve().parent
ASSETS = HERE.parent / "assets"
NS = "http://www.w3.org/2000/svg"
ET.register_namespace("", NS)
template = ET.parse(HERE / "pixel-cat-template.svg").getroot()

PALETTES = {
    "tabby": {
        "#344843": "#514c45",
        "#91a6a0": "#a29b8e",
        "#f5f7f4": "#f0eee5",
        "#c59292": "#c79b92",
        "#263d37": "#34392d",
        "#806e71": "#9e7774",
    },
    "black": {
        "#344843": "#191c22",
        "#91a6a0": "#343943",
        "#f5f7f4": "#282d36",
        "#c59292": "#6b5b6c",
        "#263d37": "#d8bd75",
        "#806e71": "#bb858a",
        "#1769ae": "#535f70",
    },
}


def rect(parent, x, y, width, height, fill):
    return ET.SubElement(parent, f"{{{NS}}}rect", {
        "x": str(x), "y": str(y), "width": str(width), "height": str(height), "fill": fill,
    })


def cat(species):
    drawing = deepcopy(template)
    for node in drawing.iter():
        if node.get("fill") in PALETTES[species]:
            node.set("fill", PALETTES[species][node.get("fill")])
        if node.get("id"):
            node.set("id", node.get("id").replace("pet-", f"{species}-"))
    if species == "tabby":
        stripes = ET.SubElement(drawing, f"{{{NS}}}g", {"id": "tabby-stripes"})
        for bounds in [
            (10, 10, 2, 2), (14, 10, 2, 4), (18, 10, 2, 2),
            (6, 14, 2, 2), (20, 14, 2, 2),
            (10, 22, 2, 2), (20, 22, 2, 2), (8, 24, 4, 2),
        ]:
            rect(stripes, *bounds, "#665f55")
        tail = drawing.find(".//*[@id='tabby-tail']")
        for bounds in [(28, 20, 2, 2), (24, 24, 2, 2)]:
            rect(tail, *bounds, "#665f55")
    return drawing


def rasterize(drawing, blink=False, tail_offset=(0, 0)):
    """Render the source's integer rectangles on their native pixel grid."""
    canvas = Image.new("RGBA", (32, 32), (0, 0, 0, 0))
    painter = ImageDraw.Draw(canvas)

    def visit(node, fill=None, dx=0, dy=0):
        identifier = node.get("id", "")
        closed = identifier.endswith("-eyes-closed")
        eyes = identifier.endswith("-eyes")
        if (closed and not blink) or (eyes and blink):
            return
        if node.get("opacity") == "0" and not closed:
            return
        if identifier.endswith("-tail"):
            dx += tail_offset[0]
            dy += tail_offset[1]
        fill = node.get("fill", fill)
        tag = node.tag.rsplit("}", 1)[-1]
        if tag == "rect":
            x, y, width, height = (int(node.get(k)) for k in ("x", "y", "width", "height"))
            x, y = x + dx, y + dy
            assert 0 <= x < x + width <= 32 and 0 <= y < y + height <= 32
            painter.rectangle((x, y, x + width - 1, y + height - 1), fill=fill)
        else:
            assert tag in {"svg", "g", "title"}, tag
            for child in node:
                visit(child, fill, dx, dy)

    visit(drawing)
    return canvas


def root_svg(width, height, title):
    root = ET.Element(f"{{{NS}}}svg", {
        "width": str(width), "height": str(height),
        "viewBox": f"0 0 {width} {height}", "shape-rendering": "crispEdges",
    })
    ET.SubElement(root, f"{{{NS}}}title").text = title
    return root


def save_svg(root, name):
    ET.indent(root, space="  ")
    (ASSETS / name).write_text(ET.tostring(root, encoding="unicode") + "\n")


def make_scene(tabby, black):
    scene = ET.Element(f"{{{NS}}}g")
    for species, drawing, position in [
        ("tabby", tabby, "translate(32 4) scale(-1 1)"),
        ("black", black, "translate(32 4)"),
    ]:
        actor = ET.SubElement(scene, f"{{{NS}}}g", {"id": f"{species}-actor"})
        placement = ET.SubElement(actor, f"{{{NS}}}g", {"transform": position})
        for child in drawing:
            if child.tag.rsplit("}", 1)[-1] != "title":
                placement.append(deepcopy(child))
    return scene


ANIMATION = """
    @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
      #tabby-actor { animation: tabby-approach 16s step-end infinite; }
      #black-actor { animation: black-approach 16s step-end infinite; }
      #tabby-eyes { animation: tabby-open 16s step-end infinite; }
      #tabby-eyes-closed { animation: tabby-closed 16s step-end infinite; }
      #black-eyes { animation: black-open 16s step-end infinite; }
      #black-eyes-closed { animation: black-closed 16s step-end infinite; }
      #tabby-tail { animation: tabby-tail-flick 16s step-end infinite; }
      #black-tail { animation: black-tail-flick 16s step-end infinite; }
      #shared-heart { animation: shared-heart 16s step-end infinite; }
      #tabby-actor, #black-actor, #tabby-eyes, #tabby-eyes-closed,
      #black-eyes, #black-eyes-closed, #tabby-tail, #black-tail, #shared-heart {
        animation-delay: -8s;
      }
      @keyframes tabby-approach {
        0%, 78%, 100% { transform: translateX(0); }
        65%, 76% { transform: translateX(2px); }
        67% { transform: translateX(4px); }
      }
      @keyframes black-approach {
        0%, 78%, 100% { transform: translateX(0); }
        65%, 76% { transform: translateX(-2px); }
        67% { transform: translateX(-4px); }
      }
      @keyframes tabby-open {
        0%, 21%, 75%, 100% { opacity: 1; }
        20%, 68% { opacity: 0; }
      }
      @keyframes tabby-closed {
        0%, 21%, 75%, 100% { opacity: 0; }
        20%, 68% { opacity: 1; }
      }
      @keyframes black-open {
        0%, 29%, 75%, 100% { opacity: 1; }
        28%, 68% { opacity: 0; }
      }
      @keyframes black-closed {
        0%, 29%, 75%, 100% { opacity: 0; }
        28%, 68% { opacity: 1; }
      }
      @keyframes tabby-tail-flick {
        0%, 22%, 100% { transform: translate(0, 0); }
        18% { transform: translate(-2px, 0); }
      }
      @keyframes black-tail-flick {
        0%, 82%, 86%, 100% { transform: translate(0, 0); }
        80%, 84% { transform: translate(-2px, 0); }
      }
      @keyframes shared-heart {
        0%, 75%, 100% { opacity: 0; }
        69% { opacity: 1; }
      }
    }
"""


def build():
    tabby, black = cat("tabby"), cat("black")
    scene = make_scene(tabby, black)
    header = root_svg(64, 36, "Hongchen Wei - a tabby cat and a little black cat")
    ET.SubElement(header, f"{{{NS}}}style").text = ANIMATION
    header.append(deepcopy(scene))
    heart = ET.SubElement(header, f"{{{NS}}}g", {"id": "shared-heart", "opacity": "0"})
    for bounds in [(29, 0, 2, 1), (33, 0, 2, 1), (28, 1, 8, 2), (29, 3, 6, 1), (30, 4, 4, 1), (31, 5, 2, 1)]:
        rect(heart, *bounds, "#b97872")
    save_svg(header, "pixel-cats.svg")

    favicon = root_svg(64, 64, "Hongchen Wei - tabby and black cats")
    centered = ET.SubElement(favicon, f"{{{NS}}}g", {"transform": "translate(0 14)"})
    centered.append(scene)
    save_svg(favicon, "favicon.svg")

    pair = Image.new("RGBA", (64, 36), (0, 0, 0, 0))
    pair.alpha_composite(rasterize(tabby).transpose(Image.Transpose.FLIP_LEFT_RIGHT), (0, 4))
    pair.alpha_composite(rasterize(black), (32, 4))
    icon = Image.new("RGBA", (64, 64), (0, 0, 0, 0))
    icon.alpha_composite(pair, (0, 14))
    icon.resize((32, 32), Image.Resampling.NEAREST).save(ASSETS / "favicon-32.png", optimize=True)
    apple = Image.new("RGB", (180, 180), "#ffffff")
    enlarged = pair.resize((128, 72), Image.Resampling.NEAREST)
    apple.paste(enlarged, (26, 54), enlarged)
    apple.save(ASSETS / "apple-touch-icon.png", optimize=True)
    print("Generated paired-cat header SVG, static SVG favicon, and PNG icons")


if __name__ == "__main__":
    build()
