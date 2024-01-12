const createCheckout = async (cartItems) => {
    // Format the cart items into line items required by Shopify's API
    const lineItems = cartItems.map(item => ({
      variantId: item.variantId,
      quantity: 1, // or the quantity of the item
    }));
  
    // GraphQL mutation to create a checkout
    const query = `
      mutation {
        checkoutCreate(input: { lineItems: ${JSON.stringify(lineItems)} }) {
          checkout {
            webUrl
          }
        }
      }
    `;
  
    // Call the Storefront API
    const response = await fetch(process.env.SHOPIFY_STORE_DOMAIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token':process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query }),
    });
  
    const jsonResponse = await response.json();
    return jsonResponse.data.checkoutCreate.checkout.webUrl;
  };
  