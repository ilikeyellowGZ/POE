# Honeydew Vet Website

## Project Overview

This project is a static HTML, CSS, and JavaScript website for Honeydew Vet. It presents a local veterinary clinic experience for pet owners in the Honeydew / Randburg area, with service information, appointment requests, contact details, map context, responsive layouts, and motion-enhanced interactions.

## Research Notes

- Public web search did not expose a reliable official Honeydew Vet website with verified hours or email.
- OpenStreetMap/Nominatim returned a Honeydew-area veterinary listing: Randpark Ridge Specialist Veterinary Clinic, Kayburne Avenue, Honeydew.
- Wikipedia context confirms Beyers Naude Drive passes through Honeydew/Zandspruit and the Randburg/Roodepoort corridor.
- Because official trading details were not verified, the site avoids invented hours and uses cautious Honeydew / Randburg location wording.

## Features

### Header and Footer
- Responsive Honeydew Vet wordmark, navigation, urgent phone link, and mobile menu.
- Footer links are clinic-focused instead of charity-focused.

### Home Page
- Clinic-focused hero and care categories.
- GSAP entrance animation, gentle hero image drift, and scroll reveal motion.
- Cards route visitors to appointments, services, or contact pages.

### About Page
- Reframed around calm, practical veterinary communication.
- Responsive image/text layout with stable card sizing.

### Services Page
- Service cards for dogs, cats, small mammals, rabbits, reptiles, birds, preventative care, dental, nutrition, senior wellness, and referral guidance.
- Service cards link to the appointment request page.

### Appointment Page
- Replaces the old embedded Google Form with a native static-site appointment request form.
- Validates fields, stores a local browser copy, and opens a prepared email draft.

### Contact Page
- Contact form with inline validation, accessible feedback, pet/service fields, and prepared email draft flow.
- Map embed points to Honeydew veterinary location context.

### Motion and Interaction
- GSAP is loaded from CDN for page entrance, image drift, reveal-on-scroll, and form success feedback.
- Motion respects `prefers-reduced-motion`.
- Hover effects use transform and opacity-friendly patterns.

## Technologies Used

- HTML
- CSS
- JavaScript
- GSAP
- Google Maps embed
- LocalStorage for static form history

## Project Structure

- `DESIGN.md`: Design system contract used for colors, typography, layout, components, motion, and surface treatment.
- `elements/`: Shared styles for header, footer, global tokens, mobile navigation, and lightbox.
- `styles/`: Page-specific CSS.
- `media/`: Images and the Honeydew Vet SVG wordmark.
- `js/`: Menu, form, card routing, lightbox, and GSAP motion scripts.
- `pages/`: About, services, appointments, and contact pages.

## How to Run

Open `index.html` in a browser. The site is static and does not require a local server.

## Future Improvements

- Replace the demo/static email flow with a real backend or form service.
- Verify and add official Honeydew Vet phone, email, hours, and address if supplied by the client.
- Generate responsive AVIF/WebP image sizes for production performance.
- Add structured data for local business SEO once official details are verified.

## Credits

- Author: Onthatile
- Images: Existing project media
- Research: OpenStreetMap/Nominatim and public web context
