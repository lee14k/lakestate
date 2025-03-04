import { useRouter } from 'next/router';

const BuyButton = ({ product }) => {
  const router = useRouter();

  const handleViewProduct = () => {
    router.push(`/product/${product.slug}`);
  };

  return (
    <button 
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-1/2" 
      onClick={handleViewProduct}
    >
      View Product
    </button>
  );
};

export default BuyButton;
