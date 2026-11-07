# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# SHREYAS & SIMRAN – DIGITAL WEDDING INVITATION

Version: 2.0
Status: Ready for Development
Wedding Dates: 01–02 February 2027

GROOM: Shreyas Kulkarni
BRIDE: Simran Bhambhani

VENUE: Pushp Vatika Resort & Lawns
LOCATION: Village Pale Budruk, Panvel Vavanja Road,
Panvel, Raigad District, Navi Mumbai, Maharashtra.

GOOGLE MAPS:
https://maps.app.goo.gl/ADJ2fM5mtyUa5VXr6

TECHNOLOGY:
HTML5 + CSS3 + Vanilla JavaScript

HOSTING:
GitHub Pages


====================================================
1. PRODUCT VISION
====================================================

1.1 OBJECTIVE

Create an exceptionally beautiful, premium, interactive
and multilingual digital wedding invitation for Shreyas
Kulkarni and Simran Bhambhani.

The website must feel like an immersive digital wedding
experience rather than a conventional wedding invitation.

The experience should unfold through scrolling, animations,
illustrations, typography and elegant transitions.

The design must reflect the coming together of two families:
one Marathi and the other North Indian, celebrating a
traditional Hindu wedding.

The experience should be sophisticated, romantic,
culturally meaningful and visually memorable.

1.2 PRODUCT GOALS

- Create a premium digital wedding invitation.
- Support English, Hindi and Marathi.
- Support two distinct guest categories.
- Provide two primary shareable invitation URLs.
- Create an immersive scrolling experience.
- Showcase all relevant wedding ceremonies.
- Provide venue information and Google Maps navigation.
- Deliver an exceptional mobile-first experience.
- Integrate the existing S&S wedding logo.
- Host the complete website using GitHub Pages.

1.3 SUCCESS CRITERIA

- Two functional guest variants.
- Three fully supported languages.
- Two primary invitation URLs.
- No RSVP functionality.
- Responsive mobile, tablet and desktop layouts.
- Correct WhatsApp previews.
- Lighthouse performance target: 90+.
- Lighthouse accessibility target: 90+.
- No backend or database dependencies.


====================================================
2. BRAND IDENTITY AND CREATIVE DIRECTION
====================================================

2.1 EXISTING WEDDING LOGO

The couple already has an approved S&S wedding logo.

The supplied logo is the primary brand identity asset.

Logo characteristics:

- Intertwined ornamental S lettering.
- Metallic champagne-gold finish.
- Sage-green botanical leaves.
- Delicate floral detailing.
- Transparent PNG background.
- Original dimensions: 500 x 500 pixels.

MANDATORY REQUIREMENTS:

- Preserve the original logo artwork.
- Do not redesign or recreate the logo.
- Do not distort its proportions.
- Maintain its transparent background.
- Build the website's visual identity around it.
- Use it in the wedding identity section.
- Use it in the invitation composition.
- Use it in the Save the Date section.
- Adapt it for the WhatsApp preview image.

The logo must remain the visual anchor of the website.


2.2 DESIGN THEME

THEME: BOTANICAL LUXURY

The website should combine:

- Premium Indian wedding stationery.
- Elegant garden wedding aesthetics.
- Botanical editorial design.
- Traditional Hindu wedding motifs.
- Romantic floral illustrations.
- Sophisticated typography.

The overall experience must feel timeless,
elegant, warm and luxurious.

Avoid:

- Generic wedding templates.
- Bright red and orange dominating the design.
- Excessive gradients.
- Cartoon illustrations.
- Cluttered compositions.
- Excessive gold usage.
- Unnecessary animations.


2.3 COLOUR PALETTE

Primary Background:
Warm Ivory - #FAF8F1

Secondary Background:
Soft Champagne - #F1EADB

Botanical Green:
Sage - #A5B29A

Deep Botanical Green:
#596B51

Muted Olive:
#85876C

Champagne Gold:
#C5A46D

Antique Gold:
#A98549

Primary Text:
Warm Charcoal - #393A34

Secondary Text:
Muted Olive Grey - #77786B

The final colour palette should be harmonised
with the supplied wedding logo.


2.4 TYPOGRAPHY

English Headings:
Cormorant Garamond.

English Body:
DM Sans or Lato.

Hindi:
Noto Serif Devanagari.

Marathi:
Noto Serif Devanagari.

The couple's names must be the primary
typographic focal point.

Ensure excellent readability and proper
Devanagari rendering on mobile devices.


2.5 ILLUSTRATION STYLE

Use delicate, elegant and consistent illustrations.

Required visual elements:

- Lord Ganesha.
- Botanical leaves and vines.
- Floral arrangements.
- Traditional lamps and diyas.
- Wedding mandap.
- Garden pathways.
- Resort landscape.
- Decorative wedding arches.
- Glass-house banquet architecture.

Illustrations should look hand-drawn or watercolor-inspired.

Do not mix unrelated illustration styles.


====================================================
3. GUEST CATEGORIES AND WEBSITE VARIANTS
====================================================

There will be TWO invitation variants.

VARIANT A: DAY 1 + DAY 2

Audience:
Extremely close relatives and selected family members.

Must display:

- 01 February 2027 celebrations.
- 02 February 2027 wedding ceremonies.
- All event timings.
- All venue information.
- Google Maps navigation.

VARIANT B: DAY 2 ONLY

Audience:
Guests invited exclusively to the wedding day.

Must display:

- 02 February 2027 ceremonies.
- Event timings.
- Venue information.
- Google Maps navigation.

CRITICAL BUSINESS RULE:

Day 1 events must NEVER appear in the Day 2-only variant.

This includes:

- Event cards.
- Event navigation.
- Event descriptions.
- Event summaries.
- Any other visible references to Day 1.

Both variants must share the same website implementation,
design system and animation engine.


====================================================
4. URL AND LANGUAGE ARCHITECTURE
====================================================

4.1 PRIMARY URLS

URL 1:
https://YOUR-GITHUB-PAGES-DOMAIN/day1-day2/

Audience:
Day 1 + Day 2 guests.

URL 2:
https://YOUR-GITHUB-PAGES-DOMAIN/day2/

Audience:
Day 2-only guests.

Only TWO primary shareable URLs should exist.


4.2 LANGUAGE SELECTION

When a guest opens either URL, display a language
selection screen.

Available languages:

1. English
2. हिन्दी
3. मराठी

After selecting a language, the entire website
must load in that language.

Language selection must apply to:

- Headings.
- Invitation text.
- Event names.
- Event descriptions.
- Timings.
- Venue information.
- Navigation.
- Buttons.
- Closing message.
- Save the Date.

Provide a language-switching option throughout
the website.


4.3 LANGUAGE PERSISTENCE

- Preserve the selected language during navigation.
- Use sessionStorage or an equivalent lightweight method.
- Do not repeatedly ask for language selection.
- Allow guests to switch languages.
- Language switching must never change the guest variant.

Example:

A Day 2-only guest switching from English to Marathi
must continue seeing only Day 2 events.


4.4 WHATSAPP PREVIEW

Both URLs must have appropriate Open Graph metadata.

Required metadata:

- og:title
- og:description
- og:image
- og:type
- og:url
- Twitter card metadata.

Day 1 + Day 2 preview:

Shreyas & Simran | Wedding Celebrations
01–02 February 2027

Day 2-only preview:

Shreyas & Simran | Wedding Invitation
02 February 2027

Use the S&S logo and botanical design
for the preview image.

IMPORTANT:

WhatsApp crawlers generally do not execute JavaScript.

Therefore, metadata must exist in the initial HTML
of each invitation URL.

Do not generate Open Graph metadata dynamically
using JavaScript.


====================================================
5. WEBSITE INFORMATION ARCHITECTURE
====================================================

The website must be a continuous,
vertically scrollable storytelling experience.

SECTION 0: LANGUAGE SELECTION

SECTION 1: AUSPICIOUS BEGINNING

SECTION 2: WEDDING IDENTITY

SECTION 3: FORMAL INVITATION

SECTION 4: WEDDING CELEBRATIONS

SECTION 5: VENUE EXPERIENCE

SECTION 6: MESSAGE FROM THE COUPLE

SECTION 7: SAVE THE DATE


====================================================
6. DETAILED WEBSITE SECTION REQUIREMENTS
====================================================

6.1 SECTION 0 – LANGUAGE SELECTION

OBJECTIVE:

Allow guests to select their preferred language.

DESIGN:

- Warm ivory background.
- S&S logo or subtle botanical artwork.
- Elegant serif typography.
- Three language options.
- Minimal champagne-gold ornamentation.

HEADING:

A Celebration of Togetherness

LANGUAGE OPTIONS:

English
हिन्दी
मराठी

INTERACTION:

On selection:

1. Store the selected language.
2. Load the selected language.
3. Transition into the main invitation.
4. Preserve the selected guest variant.

The experience should feel like opening
a premium wedding invitation.


6.2 SECTION 1 – AUSPICIOUS BEGINNING

OBJECTIVE:

Introduce the invitation through an auspicious
Hindu tradition.

VISUAL:

- Warm ivory background.
- Beautiful Lord Ganesha illustration.
- Delicate botanical elements.
- Champagne-gold detailing.

TEXT:

ॐ श्री गणेशाय नमः

Om Shree Ganeshaya Namaha

ANIMATION:

1. Background fades in.
2. Ganesha illustration gradually appears.
3. Invocation fades in beneath it.
4. A subtle scroll indicator appears.

Avoid aggressive zooming or spinning.


6.3 SECTION 2 – WEDDING IDENTITY

OBJECTIVE:

Introduce the S&S wedding identity.

VISUAL:

- Botanical background.
- Existing S&S logo as the central focal point.
- Delicate leaves and floral ornamentation.
- Champagne-gold details.

ANIMATION:

1. Transition from the Ganesha section.
2. Logo gradually reveals.
3. Botanical leaves appear around the logo.
4. Subtle background movement creates depth.

The logo must remain visually prominent.

Do not distort or recreate it.


6.4 SECTION 3 – FORMAL INVITATION

OBJECTIVE:

Formally invite guests to the wedding celebrations.

PROPOSED ENGLISH COPY:

"Together with their families,

Shreyas Kulkarni

&

Simran Bhambhani

cordially invite you to join them in celebrating
their joyous union.

With the blessings of their families, they look
forward to beginning this beautiful new chapter
of togetherness with you.

01–02 February 2027

Pushp Vatika Resort & Lawns, Panvel."

For Day 2-only guests, focus the invitation
on 02 February 2027.

DESIGN:

- Editorial-style typography.
- Couple names prominently displayed.
- Elegant botanical borders.
- Spacious composition.
- Champagne-gold details.

The couple's names must be the central highlight.

Provide natural Hindi and Marathi translations.


6.5 SECTION 4 – WEDDING CELEBRATIONS

OBJECTIVE:

Display the wedding schedule clearly.

This section must dynamically adapt
to the selected guest category.


VARIANT A: DAY 1 + DAY 2


DAY 1

DATE:
01 FEBRUARY 2027

TITLE:
The Celebrations Begin

LOCATION:
Temple Lawn,
Pushp Vatika Resort & Lawns.

EVENTS:

1. Pooja.
2. Family Get-Together.
3. Engagement Ceremony.
4. Celebration Party.

Suggested illustrations:

Pooja:
Traditional diya or temple illustration.

Family Get-Together:
Botanical gathering illustration.

Engagement:
Elegant ring illustration.

Celebration Party:
Floral lights and celebration illustration.


DAY 2

DATE:
02 FEBRUARY 2027

TITLE:
The Wedding Day

LOCATION:
Glass House Banquet Hall,
Pushp Vatika Resort & Lawns.

EVENTS:

07:00 AM onwards:
Wedding Vidhi.

11:30 AM:
Varmala.

11:30 AM:
Mantra Pushpanjali.

Following the ceremonies:
Reception.

Do not invent missing event timings.

The exact ceremony sequence and reception timing
will be confirmed later.


VARIANT B: DAY 2 ONLY

Display ONLY:

02 FEBRUARY 2027

The Wedding Day

07:00 AM onwards:
Wedding Vidhi.

11:30 AM:
Varmala.

11:30 AM:
Mantra Pushpanjali.

Following the ceremonies:
Reception.

Do not display Day 1 events or references.


EVENT DESIGN:

- Event cards reveal individually on scroll.
- Each event has a suitable illustration.
- Date headings use elegant typography.
- Botanical dividers separate events.
- Timings remain easy to read.
- Mobile cards stack vertically.
- Avoid excessive decorative containers.


6.6 SECTION 5 – VENUE EXPERIENCE

OBJECTIVE:

Showcase the venue and help guests navigate
to the wedding location.

VENUE:

Pushp Vatika Resort & Lawns

ADDRESS:

Village Pale Budruk,
Panvel Vavanja Road,
Panvel, Raigad District,
Navi Mumbai, Maharashtra.

LOCATION CONTEXT:

Approximately 7 km from Panvel city centre
and approximately 20 minutes from Panvel Railway Station.

GOOGLE MAPS:

https://maps.app.goo.gl/ADJ2fM5mtyUa5VXr6


VISUAL DESIGN:

Create a beautiful illustrated landscape inspired
by the actual resort.

Include:

- Green lawns.
- Garden pathways.
- Resort surroundings.
- Floral wedding decorations.
- Wedding mandap.
- Decorative arches.
- Glass-house banquet architecture.
- Warm ambient lighting.

The illustration should create a feeling
of arriving at the wedding destination.

Do not invent unverified architectural details.


VENUE INFORMATION:

DAY 1:

Temple Lawn,
Pushp Vatika Resort & Lawns.

DAY 2:

Glass House Banquet Hall,
Pushp Vatika Resort & Lawns.


NAVIGATION:

Display a prominent CTA:

Find Your Way to the Celebrations

On click, open the supplied Google Maps link.

The Maps link must work on mobile and desktop.


6.7 SECTION 6 – MESSAGE FROM THE COUPLE

OBJECTIVE:

Create an emotional connection with guests.

PROPOSED COPY:

"Some moments become memories, and some
memories become a lifetime.

As we begin this beautiful journey together,
your presence and blessings would mean the
world to us.

We look forward to celebrating this special
occasion with you and creating cherished memories."

Provide Hindi and Marathi translations.

DESIGN:

- Soft ivory and botanical background.
- Elegant serif typography.
- Delicate floral animations.
- Warm and intimate composition.


6.8 SECTION 7 – SAVE THE DATE

OBJECTIVE:

Conclude the invitation with a memorable visual.

CONTENT:

SAVE THE DATE

01 & 02 FEBRUARY 2027

SHREYAS & SIMRAN

Pushp Vatika Resort & Lawns,
Panvel, Maharashtra.

DESIGN:

- Full-screen botanical composition.
- S&S logo.
- Champagne-gold detailing.
- Elegant date typography.
- Delicate floral animation.

For Day 2-only guests, display only:

02 FEBRUARY 2027.

Optional:
Provide an Add to Calendar action.

Day 1 + Day 2 guests receive both dates.

Day 2-only guests receive only 02 February.


====================================================
7. MULTILINGUAL CONTENT REQUIREMENTS
====================================================

SUPPORTED LANGUAGES:

1. English.
2. Hindi.
3. Marathi.

All visible website content must be translated.

Required translations:

- Language selector.
- Ganesha invocation.
- Invitation heading.
- Couple names.
- Invitation message.
- Event names.
- Ceremony descriptions.
- Event timings.
- Venue information.
- Maps CTA.
- Couple's message.
- Save the Date.
- Navigation labels.

IMPLEMENTATION:

Maintain translations in a central JavaScript dictionary.

Example:

const translations = {
  en: {
    invitation: "Together with their families",
    weddingDay: "The Wedding Day",
    saveDate: "Save the Date"
  },

  hi: {
    invitation: "...",
    weddingDay: "...",
    saveDate: "..."
  },

  mr: {
    invitation: "...",
    weddingDay: "...",
    saveDate: "..."
  }
};

This is illustrative.

Complete translations must be implemented.

TRANSLATION GUIDELINES:

- Hindi must sound natural to North Indian guests.
- Marathi must use natural Marathi wedding terminology.
- Preserve cultural meaning.
- Use correct Devanagari typography.
- Ensure correct punctuation and spacing.
- Never leave untranslated interface text.


====================================================
8. ANIMATION AND INTERACTION REQUIREMENTS
====================================================

Animation is a core part of the experience.

The website should change its visual behaviour
as guests move through the scrolling experience.

TECHNOLOGY:

- Intersection Observer API.
- CSS keyframes.
- CSS transitions.
- SVG animation.
- CSS transforms.
- Vanilla JavaScript.

REQUIRED ANIMATIONS:

1. Ganesha illustration reveal.
2. Invocation text reveal.
3. Wedding logo reveal.
4. Botanical leaf movement.
5. Invitation text reveal.
6. Staggered event card reveal.
7. Section background transitions.
8. Subtle parallax.
9. Venue illustration reveal.
10. Save the Date animation.

SCROLL BEHAVIOUR:

- Reveal elements when they enter the viewport.
- Use subtle staggered animations.
- Avoid continuous expensive animations.
- Avoid heavy mobile parallax.
- Maintain smooth scrolling.
- Ensure all content remains accessible.

MOBILE ANIMATION:

Use simplified animations on mobile.

Avoid:

- Heavy blur effects.
- Large continuous animations.
- Excessive particle effects.
- Complex multi-layer parallax.

ACCESSIBILITY:

Respect prefers-reduced-motion.

When enabled:

- Disable parallax.
- Remove unnecessary movement.
- Display content immediately.
- Retain all website functionality.


====================================================
9. TECHNICAL ARCHITECTURE
====================================================

9.1 TECHNOLOGY STACK

Frontend:
HTML5
CSS3
Vanilla JavaScript

Graphics:
SVG
PNG
WebP / AVIF

Hosting:
GitHub Pages

Do not introduce React, Angular or Vue.

No backend.
No database.
No authentication.
No RSVP functionality.


9.2 PROJECT STRUCTURE

wedding-invitation/
│
├── index.html
│
├── day1-day2/
│   └── index.html
│
├── day2/
│   └── index.html
│
├── assets/
│   ├── logo/
│   │   └── ss-logo.png
│   │
│   ├── illustrations/
│   │   ├── ganesha.svg
│   │   ├── botanical.svg
│   │   ├── mandap.svg
│   │   └── resort.svg
│   │
│   ├── images/
│   │   └── og-wedding.jpg
│   │
│   └── fonts/
│
├── css/
│   ├── base.css
│   ├── typography.css
│   ├── layout.css
│   ├── animations.css
│   └── responsive.css
│
├── js/
│   ├── app.js
│   ├── language.js
│   ├── translations.js
│   ├── events.js
│   └── animations.js
│
├── data/
│   └── wedding-config.js
│
└── README.md


9.3 CENTRAL CONFIGURATION

Maintain wedding content in a central configuration.

Example:

const weddingConfig = {
  groom: "Shreyas Kulkarni",
  bride: "Simran Bhambhani",

  weddingDates: {
    day1: "2027-02-01",
    day2: "2027-02-02"
  },

  venue: {
    name: "Pushp Vatika Resort & Lawns",
    mapsUrl:
      "https://maps.app.goo.gl/ADJ2fM5mtyUa5VXr6"
  },

  variants: {
    day1Day2: {
      showDay1: true,
      showDay2: true
    },

    day2: {
      showDay1: false,
      showDay2: true
    }
  }
};

This is illustrative.
Include all required event and translation data.


9.4 GITHUB PAGES

Requirements:

- Static website deployment.
- HTTPS.
- No server-side processing.
- No database.
- No API keys for the core experience.
- Correct relative asset paths.
- Direct access to both invitation URLs.
- Working refresh behaviour.
- Optimised assets.

The website must work entirely on GitHub Pages.


====================================================
10. RESPONSIVE DESIGN REQUIREMENTS
====================================================

MOBILE-FIRST DESIGN IS MANDATORY.

MOBILE:

Support screen widths from 320px upwards.

Requirements:

- Single-column layout.
- Large readable typography.
- Touch-friendly controls.
- No horizontal overflow.
- Correct illustration scaling.
- Lightweight animations.
- Proper event card spacing.
- Accessible language selection.
- Visible Maps CTA.

TABLET:

- Adaptive illustrations.
- Balanced whitespace.
- Flexible layouts.
- Responsive typography.

DESKTOP:

- Larger hero compositions.
- Rich botanical backgrounds.
- Two-column layouts where suitable.
- More pronounced parallax.
- Proper content width.

The mobile experience must be intentionally designed,
not simply scaled down from desktop.


====================================================
11. PERFORMANCE AND ACCESSIBILITY
====================================================

TARGET LIGHTHOUSE SCORES:

Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 90+

PERFORMANCE REQUIREMENTS:

- Optimise images.
- Prefer SVG illustrations.
- Lazy-load below-the-fold assets.
- Preload only critical assets.
- Avoid heavy animation libraries.
- Avoid unnecessary JavaScript.
- Prevent layout shifts.
- Minimise external dependencies.
- Support slower mobile networks.

ACCESSIBILITY REQUIREMENTS:

- Semantic HTML.
- Correct heading hierarchy.
- Descriptive alt text.
- Keyboard navigation.
- Visible focus states.
- Adequate colour contrast.
- Scalable typography.
- Reduced-motion support.
- Correct language attributes.
- Accessible controls.


====================================================
12. TESTING AND ACCEPTANCE CRITERIA
====================================================

GUEST VARIANTS:

[ ] Day 1 + Day 2 displays both days.
[ ] Day 2-only displays only Day 2.
[ ] No Day 1 information appears in Day 2-only.
[ ] Both URLs work independently.

LANGUAGES:

[ ] English works throughout.
[ ] Hindi works throughout.
[ ] Marathi works throughout.
[ ] Language switching works correctly.
[ ] No untranslated text remains.
[ ] Devanagari fonts render correctly.

BRANDING:

[ ] Original S&S logo is used.
[ ] Logo proportions are preserved.
[ ] Transparent background is maintained.
[ ] Colours complement the logo.
[ ] Botanical aesthetic is consistent.

EVENTS:

[ ] All event names are correct.
[ ] Dates are correct.
[ ] Timings are correct.
[ ] Day 1 location is correct.
[ ] Day 2 location is correct.
[ ] Reception timing is verified.

NAVIGATION:

[ ] Google Maps opens correctly.
[ ] Venue address is correct.
[ ] Mobile navigation works.
[ ] Calendar links are correct if implemented.

ANIMATIONS:

[ ] Scroll animations work.
[ ] Mobile animations are optimised.
[ ] Reduced-motion setting works.
[ ] Website works without animations.

WHATSAPP:

[ ] Both previews work.
[ ] Titles are correct.
[ ] Descriptions are correct.
[ ] Preview images load.
[ ] Correct guest variant opens.

DEVICE TESTING:

[ ] iPhone Safari.
[ ] Android Chrome.
[ ] Windows Chrome.
[ ] Windows Edge.
[ ] Desktop Firefox.
[ ] Tablet browsers.


====================================================
13. OUT OF SCOPE
====================================================

The following features are not required:

- RSVP functionality.
- Guest login.
- Password protection.
- Guest database.
- Admin dashboard.
- Backend infrastructure.
- Online payments.
- Guest-specific personalisation.
- Couple photographs.
- Autoplay music.
- Separate websites for each language.


====================================================
14. DEVELOPMENT PHASES
====================================================

PHASE 1: BRAND FOUNDATION

- Inspect existing S&S logo.
- Establish colour palette.
- Finalise typography.
- Define illustration style.
- Establish design tokens.

PHASE 2: EXPERIENCE DESIGN

- Language selection.
- Ganesha opening.
- Wedding identity.
- Invitation.
- Event sections.
- Venue experience.
- Couple's message.
- Save the Date.

PHASE 3: FRONTEND DEVELOPMENT

- HTML structure.
- CSS design system.
- JavaScript functionality.
- Guest variants.
- Translation system.

PHASE 4: ANIMATION

- Scroll detection.
- Section transitions.
- Logo reveal.
- Botanical animation.
- Mobile optimisation.

PHASE 5: QUALITY ASSURANCE

- Language testing.
- Guest variant testing.
- Mobile testing.
- Desktop testing.
- WhatsApp preview testing.
- Lighthouse audit.

PHASE 6: DEPLOYMENT

- GitHub Pages configuration.
- Final URL verification.
- HTTPS verification.
- WhatsApp testing.
- Final acceptance testing.


====================================================
15. FINAL PRODUCT EXPERIENCE
====================================================

EXPECTED GUEST JOURNEY:

1. Guest receives a WhatsApp invitation.
2. Guest sees a beautiful preview.
3. Guest opens the invitation.
4. Guest selects English, Hindi or Marathi.
5. Lord Ganesha appears with the auspicious invocation.
6. The S&S wedding identity is revealed.
7. The couple's invitation appears.
8. Guest explores the relevant ceremonies.
9. Guest discovers the wedding venue.
10. Guest reads the couple's message.
11. The experience concludes with Save the Date.

The website should feel like a premium digital
wedding keepsake.

It must be elegant, culturally meaningful,
visually immersive and effortless to navigate.


====================================================
16. FINAL DESIGN PRINCIPLE
====================================================

The S&S wedding logo is the foundation of the
entire visual identity.

Extend its visual language throughout the website:

- Champagne-gold accents.
- Sage-green botanical elements.
- Warm ivory backgrounds.
- Delicate floral illustrations.
- Elegant Indian wedding motifs.

The resort landscape should become a recurring
visual element, creating the feeling of travelling
into the wedding celebration.

The final experience should communicate:

TWO FAMILIES.
TWO CULTURES.
ONE BEAUTIFUL CELEBRATION.

SHREYAS & SIMRAN

01–02 FEBRUARY 2027.