import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
  try {
    const { items, customerInfo } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const line_items = items.map((item: {
      content: string;
      price: number;
      quantity: number;
      src: string;
      summary: string;
    }) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.content,
          description: item.summary,
          // images: [`${process.env.NEXT_PUBLIC_SITE_URL}${item.src}`],
        },
        unit_amount: item.price * 100, // Stripe uses paise for INR
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/cancel`,
      customer_email: customerInfo?.email,
      metadata: {
        customerName: customerInfo?.name || "",
        customerPhone: customerInfo?.phone || "",
        shippingAddress: customerInfo?.address || "",
      },
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["IN", "US", "GB", "AU", "CA", "SG", "AE", "DE", "FR"],
      },
      phone_number_collection: { enabled: true },
      custom_text: {
        submit: { message: "Thank you for choosing Namaste Globals. We will process your order within 1–2 business days." },
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    console.error("Stripe session error:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
