import { postToShopify } from '../../utils/shopify';

export default async function handler(_req, res) {
  try {
    // Fetch all products with pagination
    let allProducts = [];
    let hasNextPage = true;
    let cursor = null;

    while (hasNextPage) {
      const data = await postToShopify({
        query: `
          query getProductList($cursor: String) {
            products(sortKey: PRICE, first: 250, reverse: true, after: $cursor) {
              pageInfo {
                hasNextPage
                endCursor
              }
              edges {
                node {
                  id
                  handle
                  description
                  title
                  totalInventory
                  variants(first: 250) {  # Increased to fetch more variants
                    pageInfo {
                      hasNextPage
                    }
                    edges {
                      node {
                        id
                        title
                        quantityAvailable
                        priceV2 {
                          amount
                          currencyCode
                        }
                        compareAtPriceV2 {
                          amount
                          currencyCode
                        }
                        selectedOptions {
                          name
                          value
                        }
                        image {
                          src
                          altText
                        }
                      }
                    }
                  }
                  priceRange {
                    maxVariantPrice {
                      amount
                      currencyCode
                    }
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                  images(first: 10) {  # Increased to fetch more images
                    edges {
                      node {
                        src
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          cursor: cursor,
        },
      });

      const products = data.products.edges;
      allProducts = [...allProducts, ...products];
      
      hasNextPage = data.products.pageInfo.hasNextPage;
      cursor = data.products.pageInfo.endCursor;
    }

    // Set cache control headers for better real-time updates
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    
    return res.status(200).json({
      products: allProducts,
      lastFetched: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({
      error: 'Error fetching products',
      message: error.message
    });
  }
}