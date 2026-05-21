import { NextRequest, NextResponse } from "next/server";
import { paymentItems, type PaymentItemId } from "@/lib/data";
import { getStripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { itemId?: string };
    const itemId = body.itemId as PaymentItemId | undefined;
    const item = itemId ? paymentItems[itemId] : undefined;

    if (!item) {
      return NextResponse.json({ error: "Unknown checkout item." }, { status: 400 });
    }

    const stripe = getStripe();
    const requestOrigin = request.headers.get("origin") || new URL(request.url).origin;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || requestOrigin;

    const priceData = {
      currency: item.currency,
      unit_amount: item.amount,
      product_data: {
        name: item.name,
        description: item.description
      },
      ...(item.interval
        ? {
            recurring: {
              interval: item.interval
            }
          }
        : {})
    };

    const session = await stripe.checkout.sessions.create({
      mode: item.interval ? "subscription" : "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: priceData,
          quantity: 1
        }
      ],
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
      billing_address_collection: "auto",
      allow_promotion_codes: true,
      metadata: {
        itemId: item.id,
        serviceName: item.name,
        source: "triple-web-studio-website"
      },
      subscription_data: item.interval
        ? {
            metadata: {
              itemId: item.id,
              serviceName: item.name,
              source: "triple-web-studio-website"
            }
          }
        : undefined
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout session error:", error);
    return NextResponse.json(
      { error: "Stripe Checkout is not available right now. Please contact us for help." },
      { status: 500 }
    );
  }
}
