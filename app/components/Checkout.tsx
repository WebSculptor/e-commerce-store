"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { CartTypes } from "../interface";
import { urlFor } from "../lib/sanity";

export default function Checkout({
  price_id,
  currency,
  description,
  name,
  image,
  price,
}: CartTypes) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
  };

  return (
    <Button onClick={() => buyNow(product.price_id)} variant="secondary">
      Checkout Now
    </Button>
  );
}
