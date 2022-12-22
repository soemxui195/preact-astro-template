import { useStore } from '@nanostores/preact';
import { isCartOpen } from '@/services/cartStore';
import { h } from 'preact';

export default function CartFlyoutToggle() {
  const $isCartOpen = useStore(isCartOpen);
  return <button onClick={() => isCartOpen.set(!$isCartOpen)}>Cart</button>;
}
