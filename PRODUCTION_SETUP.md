# Production Setup Checklist

Follow these steps in order when you are ready to launch Triple Web Design with real Stripe payments.

## 1. Create or finish your Stripe account

Go to:

```text
https://dashboard.stripe.com/
```

Make sure the Stripe account is fully activated for live payments.

## 2. Get your live API keys

In Stripe Dashboard:

```text
Developers -> API keys
```

Copy:

```text
Publishable key: starts with pk_live_
Secret key: starts with sk_live_
```

If you use a restricted key instead of the normal secret key, it must be allowed to create Checkout Sessions.

## 3. Add environment variables to your hosting provider

In your hosting provider, add these exact environment variable names:

```env
STRIPE_SECRET_KEY=sk_live_paste_your_live_secret_or_restricted_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_paste_your_live_publishable_key_here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Do not paste live secret keys into public files or GitHub.

## 4. Deploy the website

Deploy the Next.js app to your hosting provider.

After deployment, confirm these pages open:

```text
https://yourdomain.com/
https://yourdomain.com/pricing
https://yourdomain.com/contact
https://yourdomain.com/checkout/success
https://yourdomain.com/checkout/cancel
```

## 5. Create the Stripe webhook

In Stripe Dashboard:

```text
Developers -> Webhooks -> Add endpoint
```

Endpoint URL:

```text
https://yourdomain.com/api/webhooks/stripe
```

Event to select:

```text
checkout.session.completed
```

Save the endpoint.

## 6. Copy the webhook signing secret

After creating the webhook endpoint, open it in Stripe and reveal the signing secret.

It starts with:

```text
whsec_
```

Add it to your hosting provider:

```env
STRIPE_WEBHOOK_SECRET=whsec_paste_your_live_webhook_signing_secret_here
```

Redeploy or restart the website after adding this.

## 7. Test one real checkout carefully

Open:

```text
https://yourdomain.com/pricing
```

Click a deposit button and confirm Stripe Checkout opens.

If you do a real payment test, use the lowest deposit or create a temporary low-price test item in code first.

After payment, Stripe should redirect to:

```text
https://yourdomain.com/checkout/success
```

If checkout is cancelled, it should redirect to:

```text
https://yourdomain.com/checkout/cancel
```

## 8. Confirm webhook delivery

In Stripe Dashboard:

```text
Developers -> Webhooks -> Your endpoint -> Events
```

Confirm `checkout.session.completed` shows as successful.

## 9. Before announcing the site

Check:

- Your domain is correct in `NEXT_PUBLIC_SITE_URL`.
- Your Stripe keys are live keys, not test keys.
- Your webhook secret is from the live webhook endpoint.
- Pricing buttons open Stripe Checkout.
- Contact form submits correctly.
- Privacy and Terms pages are visible.
- Stripe Dashboard shows successful payments.

## Current Website Payment Items

The website currently creates Stripe Checkout Sessions from code in:

```text
lib/data.ts
```

Amounts are stored in cents:

```text
30000 = $300
50000 = $500
75000 = $750
```

The backend currently charges in Canadian dollars:

```text
currency: "cad"
```

If you want another currency, update the payment items before launch.

