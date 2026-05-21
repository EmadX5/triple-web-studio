import { NextRequest, NextResponse } from "next/server";

const requiredFields = [
  "name",
  "businessName",
  "email",
  "phone",
  "location",
  "businessType",
  "packageInterest",
  "budget",
  "message"
];

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;

    for (const field of requiredFields) {
      const value = payload[field];
      if (typeof value !== "string" || value.trim().length === 0) {
        return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
      }
    }

    console.info("New Triple Web Studio quote request:", {
      name: payload.name,
      businessName: payload.businessName,
      email: payload.email,
      phone: payload.phone,
      location: payload.location,
      businessType: payload.businessType,
      packageInterest: payload.packageInterest,
      budget: payload.budget,
      website: payload.website || null
    });

    return NextResponse.json({
      ok: true,
      message: "Thanks. Your quote request has been received."
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Unable to submit your request right now." }, { status: 500 });
  }
}
