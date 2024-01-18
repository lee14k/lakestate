import { useCart } from '../context/CartContext';
import { createCheckout } from '../utils/createCheckout';
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
export default function NewCart() {
    const { cartItems } = useCart();

    const handleCheckout = async () => {
        try {
          const checkoutUrl = await createCheckout(cartItems);
          window.location.href = checkoutUrl;
          console.log(checkoutUrl)
        } catch (error) {
          console.error('Error during checkout:', error);
          // Handle the error appropriately
        }
      };
      return(
    <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
        <Popover.Button className="group -m-2 flex items-center p-2">
            <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {cartItems.length}
            </span>
            <span className="sr-only">items in cart, view bag</span>
        </Popover.Button>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Popover.Panel className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                <h2 className="sr-only">Shopping Cart</h2>

                <form className="mx-auto max-w-2xl px-4">
                <ul role="list" className="divide-y divide-gray-200">
  {cartItems.map((item, index) => (
    <li key={index}>
      {/* Display item details */}
      {item.title} - {item.price}
    </li>
  ))}
</ul>

<button onClick={handleCheckout}>Checkout</button>


              
                </form>
            </Popover.Panel>
        </Transition>
    </Popover>
      )
}
