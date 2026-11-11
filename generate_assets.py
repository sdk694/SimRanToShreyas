from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parent
BACKGROUND = ROOT / "assets" / "images" / "wedding-background.png"
LOGO = ROOT / "assets" / "logo" / "ss-logo.png"
OUTPUTS = (
    ("og-day1-day2.jpg", "Wedding Celebrations", "01-02 February 2027"),
    ("og-day2.jpg", "Wedding Invitation", "02 February 2027"),
)
SIZE = (1200, 630)


def load_font(size):
    candidates = (
        Path("C:/Windows/Fonts/georgiab.ttf"),
        Path("C:/Windows/Fonts/georgia.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"),
    )
    for candidate in candidates:
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size)
    return ImageFont.load_default()


def make_preview(logo, title, date):
    with Image.open(BACKGROUND) as source:
        canvas = ImageOps.fit(source.convert("RGB"), SIZE, method=Image.Resampling.LANCZOS)
    canvas = canvas.convert("RGBA")

    veil = Image.new("RGBA", SIZE, (255, 250, 241, 150))
    canvas = Image.alpha_composite(canvas, veil)
    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle((34, 28, 1166, 602), radius=28, outline=(193, 160, 107, 220), width=3)

    logo_size = (150, 150)
    mark = ImageOps.contain(logo, logo_size, method=Image.Resampling.LANCZOS)
    canvas.alpha_composite(mark, ((SIZE[0] - mark.width) // 2, 88))

    title_font = load_font(58)
    subtitle_font = load_font(26)
    date_font = load_font(38)

    def centered_text(text, y, font, fill):
        bounds = draw.textbbox((0, 0), text, font=font)
        x = (SIZE[0] - (bounds[2] - bounds[0])) // 2
        draw.text((x, y), text, font=font, fill=fill)

    centered_text("Shreyas & Simran", 272, title_font, (39, 56, 58, 255))
    centered_text(title, 354, subtitle_font, (74, 101, 91, 255))
    centered_text(date, 430, date_font, (135, 101, 47, 255))
    return canvas.convert("RGB")


def main():
    if not BACKGROUND.is_file() or not LOGO.is_file():
        raise FileNotFoundError("The supplied wedding background and logo are required.")

    with Image.open(LOGO) as source_logo:
        logo = source_logo.convert("RGBA")

    for filename, title, date in OUTPUTS:
        output = ROOT / "assets" / "images" / filename
        make_preview(logo, title, date).save(
            output,
            format="JPEG",
            quality=92,
            optimize=True,
            progressive=True,
        )
        print(f"Generated {output.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
