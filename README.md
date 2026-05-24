# Triple Web Design

A premium Next.js website for a Vancouver-based, Canada-wide web design agency.

## Features

- Responsive multi-page marketing website
- Pricing cards with server-side Stripe Checkout Sessions
- Deposits, full package payments, and monthly maintenance subscriptions
- Stripe webhook endpoint for `checkout.session.completed`
- Free quote contact form with friendly confirmation
- SEO metadata, sitemap, robots file, and LocalBusiness schema
- Legal, success, and cancel pages

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and add Stripe keys:

```bash
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. Run the site:

```bash
npm run dev
```

## Stripe Notes

Payments are for Triple Web Design services only: deposits, full package payments, and monthly maintenance plans. The optional "Stripe payment setup for client websites" add-on is a separate implementation service for client sites.

The checkout route creates secure server-side Stripe Checkout Sessions and never stores card details on this website.

Webhook route:

```text
/api/webhooks/stripe
```

Listen for:

```text
checkout.session.completed
```

For local webhook testing:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## Version Safety

Use GitHub commits and Netlify deploy history to roll back safely. See [VERSION_SAFETY.md](VERSION_SAFETY.md) before making major changes.
