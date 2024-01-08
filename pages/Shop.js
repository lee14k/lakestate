import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';

// Define the shopifyFetch function
export async function shopifyFetch({ query, variables }) {
  const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key
      },
      body: { query, variables } && JSON.stringify({ query, variables })
    });

    return {
      status: result.status,
      body: await result.json()
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      status: 500,
      error: 'Error receiving data'
    };
  }
}

// Define the getAllProducts function
export async function getAllProducts() {
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

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getAllProducts();
                if (response.data && response.data.products) {
                    setProducts(response.data.products.edges.map(edge => edge.node));
                } else {
                    console.error('Failed to fetch products:', response);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <Navbar/>
            <h1>Shop Page</h1>
            <p>Welcome to our Shop page!</p>
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
