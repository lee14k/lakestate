import { useCart } from '../context/CartContext'; // Path to your CartContext

const BuyButton = ({ product }) => {
  const { addToCart } = useCart();

  const handleBuy = () => {
    addToCart(product);
  };

  return (
    <button onClick={handleBuy}>Add to Cart</button>
  );
};

export default BuyButton;
