import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'lakestateindustriestest.myshopify.com',
  storefrontAccessToken:'cae70742efae00db55b2c8056c70eea5'
});
export const createCheckout = async (cartItems) => {
    console.log('Cart Items:', cartItems);
    try {
        const checkout = await client.checkout.create();
    
        // Assuming each cart item has a variants array and we're using the first variant
        const lineItemsToAdd = cartItems.map(item => ({
          variantId: item.variants[0].id,
          quantity: 1 // or some specific quantity if you have that information
        }));
    
        const updatedCheckout = await client.checkout.addLineItems(checkout.id, lineItemsToAdd);
        return updatedCheckout.webUrl;
      } catch (error) {
        console.error('Error creating checkout:', error);
        console.log('Shopify Token:', process.env.ACCESS);

        throw error;
      }
    };