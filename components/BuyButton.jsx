import { useCart } from '../context/CartContext'; // Path to your CartContext

const BuyButton = ({ product }) => {
  const { addToCart } = useCart();

  const handleBuy = () => {
    addToCart(product);
  };

  return (
    <button  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-1/2" onClick={handleBuy}>Add to Cart</button>
  );
};

export default BuyButton;
