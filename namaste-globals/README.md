# Namaste Globals 🦚

Premium import-export e-commerce website built with Next.js 14, Redux Toolkit, and Stripe.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **State**: Redux Toolkit (cart state)
- **Payments**: Stripe (PaymentIntent API)
- **Styling**: Inline styles + Tailwind CSS
- **Deployment**: Vercel

## Pages
| Route | Description |
|---|---|
| `/` | Home — product listing |
| `/product/[id]` | Product detail page |
| `/cart` | Shopping cart |
| `/checkout` | Shipping + Stripe payment |
| `/order-confirmation` | Post-payment thank you |
| `/about` | About us + timeline |
| `/contact` | Contact form |
| `/faq` | FAQ accordion |
| `/privacy` | Privacy policy & terms |

## Setup

### 1. Clone & Install
```bash
git clone <your-repo>
cd namaste-globals
npm install
```

### 2. Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Get these from: https://dashboard.stripe.com/apikeys

### 3. Add Product Images
Place your images in `public/images/`:
- `jggery6.png`
- `Jaggery-Powder.png`
- `kakvi.avif`

### 4. Run Locally
```bash
npm run dev
```
Visit http://localhost:3000

### 5. Test Stripe (locally)
```bash
# Install Stripe CLI: https://stripe.com/docs/stripe-cli
stripe listen --forward-to localhost:3000/api/webhook
```

Use test card: `4242 4242 4242 4242` — any future date, any CVC.

## Deploy to Vercel

### Option A: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B: GitHub Integration
1. Push to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_APP_URL` = your Vercel URL
5. Click Deploy

### After Deploy: Set Stripe Webhook
1. Go to https://dashboard.stripe.com/webhooks
2. Add endpoint: `https://your-site.vercel.app/api/webhook`
3. Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
4. Copy the webhook secret → add as `STRIPE_WEBHOOK_SECRET` in Vercel

## Add More Products
Edit `src/lib/products.ts` and add to the array.
