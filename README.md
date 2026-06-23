# DK Laundry & Dry Cleaners

Premium website for **DK Laundry & Dry Cleaners**, Andheri West, Mumbai — trusted since 1985.
Dry cleaning, steam iron, wash & fold, shoe laundry and more, with free pickup & delivery.



## Tech stack

- **React 18** + **Vite**
- **React Router** (multi-page: Home, Services, Service detail, Pricing, Reviews, About, Contact)
- **Axios** for booking submissions
- Plain CSS design system (navy/white premium theme)

## Features

- Multi-page navigation with a dedicated detail page per service (`/services/:id`)
- Service catalog with search and category filters
- Full price list and pricing cards
- Booking modal — submits to a backend API **and** offers a WhatsApp fallback
- Google Map, WhatsApp QR code, click-to-call contact
- Fully responsive with a sticky mobile "Book Pickup" bar

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Configuration

Copy `.env.example` to `.env` and set:

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Backend base URL for booking submissions |
| `VITE_ADMIN_WHATSAPP` | Admin WhatsApp number (digits only, e.g. `918591117417`) |

## Deployment (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing is handled by `public/_redirects`.

## Project structure

```
src/
├── pages/        Home, Services, ServiceDetail, Pricing, Reviews, About, Contact
├── components/   Header, Footer, Hero, ServiceCard, BookingForm/Modal, Contact, ...
├── context/      BookingContext (global booking modal)
├── data/         business.js (services, pricing, contact — single source of truth)
├── api/          axios client + booking submission
└── hooks/        useReveal (scroll animations)
```
