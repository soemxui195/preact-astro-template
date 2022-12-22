import { ComponentChildren, h } from 'preact';
import type { CartItemDisplayInfo } from '@/services/cartStore';
import { isCartOpen, addCartItem } from '@/services/cartStore';

type Props = {
  item: CartItemDisplayInfo;
  children: ComponentChildren;
};

export default function AddToCartForm({ item, children }: Props) {
  function addToCart(e: any) {
    e.preventDefault();
    isCartOpen.set(true);
    addCartItem(item);
  }

  return <form onSubmit={addToCart}>{children}</form>;
}
