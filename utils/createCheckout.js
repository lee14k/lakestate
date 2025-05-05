import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'lakestate-industries.myshopify.com',
  storefrontAccessToken:'1c50d36bcb3a7b21d6cae925dc193b1c'
});

export const createCheckout = async (cartItems) => {
    console.log('Cart Items:', cartItems);
    try {
        const checkout = await client.checkout.create();
    
        // Map cart items to line items with quantities
        const lineItemsToAdd = cartItems.map(item => ({
          variantId: item.variants[0].id,
          quantity: item.quantity || 1 // Use the quantity from the cart item or default to 1
        }));
    
        const updatedCheckout = await client.checkout.addLineItems(checkout.id, lineItemsToAdd);
        return updatedCheckout.webUrl;
      } catch (error) {
        console.error('Error creating checkout:', error);
        console.log('Shopify Token:', process.env.ACCESS);

        throw error;
      }
    };