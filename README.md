# Tuyomio Coffee — website concept

Responsive React, TypeScript, and Vite landing page for a Tuyomio Coffee visual concept.

## Brand references and assumptions

The live Instagram profile was unavailable, but the project includes a locally saved Instagram page and brand assets. The logo and photos used on the page come from those local Tuyomio materials and the images supplied in `public/images/`. The gallery presents the supplied equipment photos as event setups, not as photos of the cafe itself. Some supplied social imagery has English campaign copy baked in; it remains in the original image while navigation, main copy, forms, and instructions are Spanish-first (`es-SV`).

The espresso brown, near-black, and warm crema palette is an approximation informed by the supplied logo and Instagram imagery, not a formal brand specification. The menu, prices, location, opening hours, and contact details remain unverified and are not invented. Reservation feedback is explicitly labeled as a prototype.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Updating content and photos

- Edit menu entries, gallery paths and alt text, and business contact values in `src/content.ts`. Set `brand.heroImage` and each gallery item's `src` to a file under `public/images/`; leave them empty until the approved image exists to avoid broken paths.
- The menu list is empty until verified items are available; add only confirmed names, descriptions, and prices.
- The hero and gallery photos are configured in `src/content.ts` and stored in `public/images/`. See `public/images/README.md` for the current sources and how to replace them with higher-resolution approved originals. The downloaded Instagram HTML and scripts are ignored by Git; only the referenced photo is included for deployment.
- Update the design tokens at the top of `src/styles.css` after Tuyomio's real palette and typography are confirmed.

## Reservations

The form is a visual prototype only. It performs browser-side required-field validation and displays a clear not-sent notice; it does not store or submit visitor data, indicate availability, or confirm a booking. To connect a real booking system later, replace the form submit handler with an explicit API integration and server-side validation.
