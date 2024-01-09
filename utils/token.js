const { Shopify } = require('@shopify/shopify-api');

async function fetchShopifyData() {
  try {
    const client = new Shopify.Rest('https://lakestateindustriestest.myshopify.com/', 
process.env.SHOPIFY_KEY);

    const storefrontTokenResponse = await client.post({
      path: 'storefront_access_tokens',
      type: shopify.DataType.JSON,
      data: {
        storefront_access_token: {
          title: 'This is my test access token',
        },
      },
    });

    const storefrontAccessToken = storefrontTokenResponse.body['storefront_access_token']['access_token'];
    const shop = 'https://lakestateindustriestest.myshopify.com/';

    const storefrontClient = new shopify.clients.Storefront({
      domain: shop,
      storefrontAccessToken,
    });

    const products = await storefrontClient.query({
      data: `{
        products (first: 3) {
          edges {
            node {
              id
              title
            }
          }
        }
      }`,
    });

    console.log(products);
  } catch (error) {
    console.error("Error during Shopify API call:", error);
  }
}

fetchShopifyData().catch(console.error);
