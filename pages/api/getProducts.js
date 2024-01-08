// Load the access token as per instructions above
const storefrontAccessToken = '<my token>';
// Shop from which we're fetching data
const shop = 'my-shop.myshopify.com';

// StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
const storefrontClient = new shopify.clients.Storefront({
  domain: shop,
  storefrontAccessToken,
});

// Use client.query and pass your query as `data`
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
