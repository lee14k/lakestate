import { useCart } from '../context/CartContext';
import { createCheckout } from '../utils/createCheckout';

const Cart = () => {
  const { cartItems } = useCart();

  const handleCheckout = async () => {
    try {
      const checkoutUrl = await createCheckout(cartItems);
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Error during checkout:', error);
      // Handle the error appropriately
    }
  };

  return (
    <div>
      {/* List cart items */}
      {cartItems.map(item => <div key={item.id}>{item.title}</div>)}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
