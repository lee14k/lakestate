// Import the necessary modules
const { shopifyFetch } = require('./utils/shopifyshopify');

// Define the function you want to test
async function getAllProducts() {
  return shopifyFetch({
    query: `{
      products(sortKey: TITLE, first: 100) {
        edges {
          node {
            id
            title
            description
          }
        }
      }
    }`
  });
}

// Call the function and log the result
getAllProducts()
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(error => console.error("Error:", error));
