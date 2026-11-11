# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# S&S – SHREYAS & SIMRAN WEDDING INVITATION WEBSITE

Version: 3.0
Status: Ready for Development

GROOM: Shreyas Kulkarni
BRIDE: Simran Bhambhani

WEDDING DATES:
01–02 February 2027

VENUE:
Pushp Vatika Resort & Lawns
Panvel, Maharashtra, India

TECHNOLOGY:
HTML5 + CSS3 + Vanilla JavaScript + SVG

HOSTING:
GitHub Pages

PRIMARY DEVICE:
Mobile phones


==================================================
1. PRODUCT VISION
==================================================

Create an exceptionally beautiful, premium,
mobile-first digital wedding invitation.

The website should feel like an interactive,
animated luxury Indian wedding invitation card.

The experience should combine:

- Traditional Hindu wedding aesthetics.
- Botanical luxury.
- Elegant wedding typography.
- Beautiful CSS animations.
- Premium visual storytelling.
- An immersive scrolling experience.

The website must be designed primarily for mobile.

It should feel as though the guest is opening
a beautifully designed digital wedding invitation
on their smartphone.

IMPORTANT DESIGN DECISION:

I WILL PROVIDE A BACKGROUND IMAGE.

THIS IMAGE MUST BE USED AS THE PRIMARY BACKGROUND
THROUGHOUT THE ENTIRE WEBSITE.

The entire website must be designed around this image.

Do not independently design unrelated backgrounds
for individual sections.

The supplied image must establish the overall
visual identity and atmosphere of the website.

All website content, typography, illustrations,
decorative elements and animations must complement it.


==================================================
2. PRIMARY DESIGN REQUIREMENT:
SUPPLIED IMAGE AS THE WEBSITE BACKGROUND
==================================================

2.1 BACKGROUND IMAGE

I will provide a background image separately.

Expected location:

assets/images/wedding-background.jpg

The actual file extension may be different.

The supplied image must be used as the continuous
visual background throughout the invitation.

It should remain visually consistent while guests
scroll through the entire website.

Do not replace it with:

- Stock images.
- Generic gradients.
- Unrelated floral backgrounds.
- Different backgrounds for every section.

The supplied image is the primary design asset.


2.2 BACKGROUND IMPLEMENTATION

Use CSS to create a continuous background experience.

Suggested implementation:

- Fixed background layer.
- Full viewport coverage.
- Background-size: cover.
- Appropriate background-position.
- Background-repeat: no-repeat.
- Responsive positioning.
- Subtle overlays only when required for readability.

The image must never be stretched or distorted.

Do not use background-size: 100% 100%.

Use object positioning and responsive CSS
to control the visible image composition.


2.3 MOBILE BACKGROUND OPTIMISATION

Mobile is the primary experience.

The background must be specifically adapted
for portrait mobile screens.

Target aspect ratios:

- 9:16
- 9:19.5
- 9:20
- 9:21

Use responsive media queries and background positioning.

The image must:

- Cover the available viewport.
- Maintain its original proportions.
- Avoid awkward cropping of important elements.
- Remain visually balanced behind the content.
- Work across different iPhone and Android screens.

If necessary, use CSS background-position
adjustments at different breakpoints.

If the supplied image has important visual details
near its edges, ensure they are not unnecessarily cropped.

The agent must inspect the actual image before
choosing the background positioning strategy.


2.4 CONTENT READABILITY

The background must remain visible.

Do not cover it with large opaque content cards.

Use:

- Subtle translucent overlays.
- Soft text shadows where appropriate.
- Delicate gradients only when necessary.
- Elegant typography.
- Minimal decorative separators.

The goal is to preserve the beauty of the
original background image while ensuring
all invitation information is readable.


==================================================
3. BRAND IDENTITY
==================================================

The existing S&S wedding logo must be integrated.

The logo is an ornamental combination of
intertwined S lettering, champagne gold and
botanical detailing.

Requirements:

- Preserve the original logo.
- Do not recreate it.
- Maintain aspect ratio.
- Preserve transparency.
- Do not apply destructive filters.
- Use it as a prominent design element.

Expected location:

assets/logo/ss-logo.png

The supplied background image and S&S logo
must work together as one visual identity.

Colour palette should complement the background.

Suggested supporting colours:

Warm Ivory: #FAF8F1
Champagne Gold: #C5A46D
Antique Gold: #A98549
Sage Green: #A5B29A
Deep Green: #596B51
Warm Charcoal: #393A34

These are supporting colours, not mandatory
replacement colours for the supplied image.


==================================================
4. MOBILE-FIRST DESIGN STRATEGY
==================================================

MOBILE IS THE PRIMARY PRODUCT EXPERIENCE.

The website should be designed for smartphones first.

Primary target widths:

- 360px
- 375px
- 390px
- 393px
- 402px
- 430px

Also support:

- 320px
- 480px
- 768px
- Desktop screens.

Mobile design requirements:

- Portrait-oriented compositions.
- Full-width visual experience.
- Large elegant typography.
- Appropriate vertical spacing.
- Touch-friendly interactions.
- Smooth vertical scrolling.
- No horizontal scrolling.
- No unnecessary navigation bars.
- No desktop-style multi-column layouts.
- No tiny event information.
- No overlapping decorations.

The experience should feel like a digital invitation,
not a conventional corporate website.

DESKTOP BEHAVIOUR:

Desktop support is secondary.

Use a beautiful centered invitation composition
with an appropriate maximum width.

Do not unnecessarily stretch the invitation
across a large desktop monitor.


==================================================
5. GUEST VARIANTS
==================================================

There will be TWO invitation links.

VARIANT A: DAY 1 + DAY 2

URL:

/day1-day2/

Audience:
Extremely close relatives invited to both days.

Display:
- Day 1 celebrations.
- Day 2 wedding ceremonies.
- Relevant venue information.

VARIANT B: DAY 2 ONLY

URL:

/day2/

Audience:
Guests invited exclusively to the wedding day.

Display:
- Day 2 wedding ceremonies.
- Day 2 venue information.

CRITICAL:

Day 1 information must never appear
in the Day 2-only invitation.

Both variants must use the same codebase.

Use a central JavaScript configuration
to determine which events are displayed.


==================================================
6. LANGUAGE REQUIREMENTS
==================================================

Support three languages:

1. English.
2. Hindi.
3. Marathi.

When a guest opens either invitation link,
display an elegant language selection screen.

Language options:

English
हिन्दी
मराठी

After selection:

- Load the invitation in the selected language.
- Preserve the selected language during the session.
- Allow language switching.
- Translate all visible website content.
- Maintain the selected guest variant.

Use:

- Noto Serif Devanagari for Hindi and Marathi.
- Cormorant Garamond for English headings.
- DM Sans for English body text.

All translations must be culturally appropriate.

Do not leave any visible interface text untranslated.


==================================================
7. WEBSITE STORYTELLING AND SECTION FLOW
==================================================

The entire website must remain one continuous
scrollable invitation.

All sections must share the supplied background image.

Do not create separate background designs
for individual sections.


SECTION 0: LANGUAGE SELECTION

Purpose:
Allow guests to select their language.

Visual:

- Supplied wedding background.
- S&S logo.
- Elegant language options.
- Subtle gold decoration.

Heading:

A Celebration of Togetherness.

Interaction:

Guest selects a language and proceeds
to the invitation.


SECTION 1: LORD GANESHA

Display an elegant Lord Ganesha illustration.

Text:

ॐ श्री गणेशाय नमः

Animation:

- Ganesha gradually fades into view.
- Decorative elements reveal themselves.
- Invocation appears elegantly.
- Subtle floral particles or petals may appear.

Maintain a traditional and auspicious atmosphere.


SECTION 2: WEDDING LOGO

Display the supplied S&S logo prominently.

Animation:

- Smooth logo reveal.
- Subtle gold shimmer.
- Botanical leaf movement.
- Elegant ornamental transitions.

Do not distort the logo.


SECTION 3: FORMAL INVITATION

Display:

Together with their families,

SHREYAS KULKARNI

&

SIMRAN BHAMBHANI

cordially invite you to join them in celebrating
their joyous union.

With the blessings of their families, they look
forward to beginning this beautiful new chapter
of togetherness with you.

01–02 February 2027

Pushp Vatika Resort & Lawns, Panvel.

For Day 2-only guests, focus on 02 February 2027.

The names must be the primary focal point.


SECTION 4: WEDDING CELEBRATIONS


DAY 1
01 FEBRUARY 2027

Title:
The Celebrations Begin

Location:
Temple Lawn,
Pushp Vatika Resort & Lawns.

Events:

- Pooja.
- Family Get-Together.
- Engagement Ceremony.
- Celebration Party.

Suggested illustrations:

Pooja: Traditional diya.
Family: Floral gathering motif.
Engagement: Elegant ring.
Party: Celebration lights and floral details.


DAY 2
02 FEBRUARY 2027

Title:
The Wedding Day

Location:
Glass House Banquet Hall,
Pushp Vatika Resort & Lawns.

Events:

07:00 AM onwards:
Wedding Vidhi.

11:30 AM:
Varmala.

11:30 AM:
Mantra Pushpanjali.

Following the ceremonies:
Reception.

Do not invent missing timings.

Day 2-only guests must see only Day 2.


EVENT PRESENTATION:

Use elegant vertical storytelling.

Each event should appear progressively
as the guest scrolls.

Avoid generic rectangular cards.

Prefer:

- Decorative illustrations.
- Fine gold dividers.
- Elegant date typography.
- Subtle floral separators.
- Timeline-inspired layouts.


SECTION 5: VENUE EXPERIENCE

Venue:
Pushp Vatika Resort & Lawns.

Address:

Village Pale Budruk,
Panvel Vavanja Road,
Panvel, Raigad District,
Navi Mumbai, Maharashtra.

Google Maps:

https://maps.app.goo.gl/ADJ2fM5mtyUa5VXr6

Display:

Day 1: Temple Lawn.
Day 2: Glass House Banquet Hall.

Use venue-inspired illustrations.

Add a button:

FIND YOUR WAY TO THE CELEBRATIONS

The button must open Google Maps.


SECTION 6: MESSAGE FROM THE COUPLE

Display:

Some moments become memories, and some
memories become a lifetime.

As we begin this beautiful journey together,
your presence and blessings would mean the
world to us.

We look forward to celebrating this special
occasion with you and creating cherished memories.

Provide Hindi and Marathi translations.


SECTION 7: SAVE THE DATE

Display:

SAVE THE DATE

01 & 02 FEBRUARY 2027

SHREYAS & SIMRAN

Pushp Vatika Resort & Lawns, Panvel.

For Day 2-only guests:

02 FEBRUARY 2027.

End with an elegant floral and gold animation.


==================================================
8. CSS ANIMATION REQUIREMENTS
==================================================

THIS IS A MAJOR PRODUCT REQUIREMENT.

The website must have rich, beautiful,
wedding-appropriate CSS animations.

The animation experience should be one of
the defining characteristics of the website.

Use CSS3 as the primary animation technology.

Use JavaScript only to trigger animations
and coordinate scroll-based interactions.


8.1 WEDDING ANIMATION LIBRARY

Implement the following animations:

A. FLORAL ANIMATIONS

- Floating flower petals.
- Falling rose petals.
- Gentle leaf movement.
- Subtle floral reveal.
- Botanical vine growth.
- Flower opening animation.

B. GOLD ANIMATIONS

- Subtle gold shimmer.
- Metallic text reveal.
- Elegant gold border drawing.
- Fine golden sparkle.
- Light passing over the wedding logo.

C. TYPOGRAPHY ANIMATIONS

- Letter-by-letter reveal.
- Word-by-word fade-in.
- Elegant heading reveal.
- Vertical text reveal.
- Smooth opacity transitions.

D. WEDDING DECORATIVE ANIMATIONS

- Diya flame flickering.
- Hanging decorative elements swaying.
- Mandap elements revealing.
- Floral garland movement.
- Decorative arch reveal.

E. SCROLL ANIMATIONS

- Section fade-in.
- Staggered event reveal.
- Image and illustration reveal.
- Background depth transitions.
- Parallax movement.
- Elegant section transitions.

F. FINAL SCREEN

- S&S logo reveal.
- Gold shimmer.
- Falling petals.
- Date typography animation.
- Gentle closing transition.


8.2 ANIMATION BEHAVIOUR

Animations must feel elegant and premium.

Avoid:

- Cartoon-like movement.
- Excessive bouncing.
- Flashing effects.
- Distracting rotations.
- Aggressive zooming.
- Excessive simultaneous animations.

Use different animation styles for different
sections so the experience feels carefully art-directed.


8.3 TECHNICAL IMPLEMENTATION

Use:

- CSS @keyframes.
- CSS transitions.
- CSS transforms.
- Intersection Observer API.
- Vanilla JavaScript.
- SVG animations where useful.

Use Intersection Observer to trigger
animations as elements enter the viewport.

Use animation delays to create staggered reveals.

Use transform and opacity wherever possible
for smooth GPU-friendly animations.

Do not run hundreds of continuous animations.

Respect prefers-reduced-motion.

Ensure all content remains accessible
when animations are disabled.


==================================================
9. BACKGROUND AND ANIMATION PERFORMANCE
==================================================

The supplied background image is the most
important visual asset.

Optimise it without damaging visual quality.

Requirements:

- Compress the image appropriately.
- Preserve its original aspect ratio.
- Avoid unnecessary repeated image downloads.
- Avoid layout shifts.
- Use responsive image techniques if needed.
- Test background positioning on mobile.

Do not place a large number of animated elements
over the background.

Use carefully selected animation layers.

The background must remain visually dominant.


==================================================
10. WHATSAPP PREVIEW REQUIREMENTS
==================================================

Create two separate HTML entry points.

Each must contain static Open Graph metadata.

DAY 1 + DAY 2:

Shreyas & Simran | Wedding Celebrations |
01–02 February 2027.

DAY 2 ONLY:

Shreyas & Simran | Wedding Invitation |
02 February 2027.

Include:

- og:title
- og:description
- og:image
- og:type
- og:url
- Twitter card metadata.

Use the supplied background image and S&S logo
to create attractive social preview images.

Metadata must exist in initial HTML.

Do not generate metadata dynamically using JavaScript.


==================================================
11. TECHNICAL ARCHITECTURE
==================================================

Use ONLY:

- HTML5.
- CSS3.
- Vanilla JavaScript.
- SVG.

No frameworks.

No backend.

No database.

No build tools.

No npm dependencies.

Suggested structure:

/
|
|-- index.html
|
|-- day1-day2/
|   |-- index.html
|
|-- day2/
|   |-- index.html
|
|-- assets/
|   |-- logo/
|   |   |-- ss-logo.png
|   |
|   |-- images/
|   |   |-- wedding-background.jpg
|   |   |-- og-day1-day2.jpg
|   |   |-- og-day2.jpg
|   |
|   |-- illustrations/
|   |   |-- ganesha.svg
|   |   |-- botanical.svg
|   |   |-- mandap.svg
|   |
|   |-- fonts/
|
|-- css/
|   |-- base.css
|   |-- background.css
|   |-- typography.css
|   |-- layout.css
|   |-- animations.css
|   |-- responsive.css
|
|-- js/
|   |-- app.js
|   |-- language.js
|   |-- translations.js
|   |-- events.js
|   |-- animations.js
|
|-- data/
|   |-- wedding-config.js
|
|-- .github/
|   |-- workflows/
|       |-- deploy.yml
|
|-- .nojekyll
|
|-- README.md


==================================================
12. GITHUB PAGES DEPLOYMENT
==================================================

The complete website must be deployable
directly using GitHub Pages.

Create:

.github/workflows/deploy.yml

The workflow must:

- Trigger on push to main.
- Support manual workflow_dispatch.
- Use GitHub Actions.
- Upload the static website.
- Deploy to GitHub Pages.

Use official actions:

actions/checkout@v4
actions/configure-pages@v5
actions/upload-pages-artifact@v3
actions/deploy-pages@v4

Do not require npm installation or compilation.

Include correct relative paths for nested URLs.

Include .nojekyll.

Ensure both invitation links work after deployment.


==================================================
13. ACCESSIBILITY AND PERFORMANCE
==================================================

Target:

Lighthouse Performance: 90+
Lighthouse Accessibility: 90+
Lighthouse Best Practices: 90+
Lighthouse SEO: 90+

Requirements:

- Mobile-first performance.
- Optimised background image.
- Lazy-load non-critical images.
- Minimise JavaScript.
- Avoid excessive DOM elements.
- Avoid layout shifts.
- Use semantic HTML.
- Support keyboard navigation.
- Provide accessible contrast.
- Respect reduced motion.
- Ensure readable text over background.


==================================================
14. TESTING AND ACCEPTANCE CRITERIA
==================================================

BACKGROUND:

[ ] Supplied image is used throughout.
[ ] Image is never distorted.
[ ] Mobile portrait cropping is correct.
[ ] Important image details remain visible.
[ ] Text remains readable.
[ ] Background does not flicker while scrolling.

MOBILE:

[ ] 320px layout works.
[ ] 360px layout works.
[ ] 375px layout works.
[ ] 390px layout works.
[ ] 430px layout works.
[ ] No horizontal scrolling.
[ ] No overlapping elements.

ANIMATIONS:

[ ] Petal animations work.
[ ] Gold shimmer works.
[ ] Logo animation works.
[ ] Scroll reveals work.
[ ] Event animations work.
[ ] Mobile performance remains smooth.
[ ] Reduced-motion support works.

FUNCTIONALITY:

[ ] Both guest variants work.
[ ] English works.
[ ] Hindi works.
[ ] Marathi works.
[ ] Language switching works.
[ ] Maps navigation works.
[ ] WhatsApp metadata is correct.

DEPLOYMENT:

[ ] GitHub workflow exists.
[ ] Workflow deploys successfully.
[ ] GitHub Pages works.
[ ] Nested paths work.
[ ] HTTPS works.


==================================================
15. FINAL PRODUCT PRINCIPLE
==================================================

The supplied background image is the foundation
of the entire digital wedding invitation.

The S&S logo is the central brand identity.

The website must feel like an animated,
luxurious Indian wedding invitation.

The guest should experience:

- An auspicious beginning.
- Beautiful wedding branding.
- Elegant invitation typography.
- Rich wedding animations.
- Clear event information.
- A beautiful closing moment.

MOBILE FIRST.
BACKGROUND IMAGE FIRST.
ANIMATION RICH.
BOTANICAL LUXURY.

TWO FAMILIES.
TWO CULTURES.
ONE BEAUTIFUL CELEBRATION.

SHREYAS & SIMRAN
01–02 FEBRUARY 2027.