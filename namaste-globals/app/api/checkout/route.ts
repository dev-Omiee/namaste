// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { items, customerEmail } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items in cart" }, { status: 400 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.content,
          description: item.summary,
          images: [], // Add absolute image URLs here in production
          metadata: { productId: item.id },
        },
        unit_amount: item.price * 100, // Stripe expects paise
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      customer_email: customerEmail || undefined,
      success_url: `${appUrl}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/cart`,
      shipping_address_collection: {
        allowed_countries: ["IN", "US", "GB", "AU", "CA", "SG", "AE", "MY"],
      },
      phone_number_collection: { enabled: true },
      metadata: {
        source: "namaste-globals-web",
      },
      custom_text: {
        submit: {
          message: "We'll process your order and dispatch within 2–3 business days.",
        },
      },
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error: any) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
