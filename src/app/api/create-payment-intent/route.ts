import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { amount, items, shippingDetails } = await req.json();

    if (!amount || amount < 1) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      // Stripe expects amount in smallest currency unit (paise for INR)
      amount: Math.round(amount * 100),
      currency: 'inr',
      automatic_payment_methods: { enabled: true },
      metadata: {
        items: JSON.stringify(items.map((i: { id: string; name: string; quantity: number }) => ({
          id: i.id, name: i.name, qty: i.quantity,
        }))),
        customer_name: shippingDetails?.fullName ?? '',
        customer_email: shippingDetails?.email ?? '',
        shipping_address: `${shippingDetails?.address}, ${shippingDetails?.city} ${shippingDetails?.pincode}`,
      },
      receipt_email: shippingDetails?.email,
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    console.error('Stripe error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
