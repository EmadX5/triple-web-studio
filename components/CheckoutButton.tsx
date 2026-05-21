"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";
import type { PaymentItemId } from "@/lib/data";

type CheckoutButtonProps = {
  itemId: PaymentItemId;
  children: React.ReactNode;
  className?: string;
  size?: "small" | "regular";
};

export function CheckoutButton({ itemId, children, className = "", size = "regular" }: CheckoutButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function startCheckout() {
    setStatus("loading");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ itemId })
      });

      const data = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Unable to start checkout.");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <button
      type="button"
      className={`button ${size === "small" ? "button-small" : ""} ${className}`}
      onClick={startCheckout}
      disabled={status === "loading"}
      aria-live="polite"
    >
      {status === "loading" ? (
        <Loader2 className="spin" size={18} aria-hidden="true" />
      ) : (
        <CreditCard size={18} aria-hidden="true" />
      )}
      {status === "error" ? "Try Again" : children}
    </button>
  );
}
