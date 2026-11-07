from PIL import Image, ImageDraw, ImageFont
import os

base = os.path.dirname(os.path.abspath(__file__))
logo_dir = os.path.join(base, 'assets', 'logo')
images_dir = os.path.join(base, 'assets', 'images')
os.makedirs(logo_dir, exist_ok=True)
os.makedirs(images_dir, exist_ok=True)

# Create logo PNG with transparent background.
img = Image.new('RGBA', (500, 500), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)
for i in range(4):
    outline = (197 + i * 8, 165 + i * 6, 108 + i * 3, 255)
    draw.rounded_rectangle((60 + i, 60 + i, 440 - i, 440 - i), radius=110, outline=outline, width=18)
curve = (196, 159, 105, 255)
for offset in (0, 6, 12):
    draw.arc((120 + offset, 90 + offset, 380 - offset, 390 - offset), 220, 120, fill=curve, width=18)
    draw.arc((120 + offset, 115 + offset, 410 - offset, 420 - offset), 330, 218, fill=curve, width=18)

sage = (165, 178, 154, 255)
leaf_specs = [
    (350, 130, 420, 200),
    (355, 330, 425, 405),
    (90, 308, 160, 380),
    (90, 172, 160, 245),
]
for x1, y1, x2, y2 in leaf_specs:
    draw.ellipse((x1, y1, x2, y2), fill=sage)
    draw.line(((x1 + x2) / 2, (y1 + y2) / 2, (x1 + x2) / 2, y1 - 10), fill=curve, width=3)

for x, y in [(140, 380), (210, 120), (322, 260), (388, 263), (160, 170), (360, 405)]:
    draw.ellipse((x - 6, y - 6, x + 6, y + 6), fill=(204, 170, 106, 255))

for x, y in [(110, 250), (372, 150), (286, 340), (370, 420)]:
    draw.ellipse((x - 12, y - 12, x + 12, y + 12), fill=sage)
img.save(os.path.join(logo_dir, 'ss-logo.png'))

# Create OG images.
font_title = ImageFont.truetype('DejaVuSerif-Bold.ttf', 54)
font_subtitle = ImageFont.truetype('DejaVuSans.ttf', 24)

for name, subtitle, target in [
    ('Shreyas & Simran', 'Wedding Celebrations | 1–2 February 2027', os.path.join(images_dir, 'og-day1-day2.jpg')),
    ('Shreyas & Simran', 'Wedding Invitation | 2 February 2027', os.path.join(images_dir, 'og-day2.jpg')),
]:
    og = Image.new('RGB', (1200, 630), (250, 248, 241))
    d = ImageDraw.Draw(og)
    for i in range(8):
        d.rounded_rectangle((30 + i, 30 + i, 1170 - i, 600 - i), radius=28, outline=(197, 164, 109), width=2)

    monogram = Image.new('RGBA', (520, 520), (0, 0, 0, 0))
    dm = ImageDraw.Draw(monogram)
    dm.arc((80, 50, 420, 400), 200, 150, fill=(197, 164, 109, 255), width=16)
    dm.arc((90, 70, 430, 420), 330, 228, fill=(197, 164, 109, 255), width=16)
    dm.arc((120, 150, 380, 450), 40, 320, fill=(197, 164, 109, 255), width=14)
    for lx, ly, rx, ry in [(340, 85, 430, 170), (330, 280, 425, 360), (130, 340, 210, 420)]:
        dm.ellipse((lx, ly, rx, ry), fill=(165, 178, 154, 255))
    mm = monogram.resize((350, 350))
    og.paste(mm, (70, 140), mm)
    d.text((480, 220), name, fill=(57, 58, 52), font=font_title)
    d.text((480, 294), subtitle, fill=(90, 92, 81), font=font_subtitle)
    d.text((480, 430), '01–02 February 2027' if '1–2' in subtitle else '2 February 2027', fill=(169, 133, 73), font=font_title)
    og.save(target, quality=92)

print('Generated assets successfully.')
