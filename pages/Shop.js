import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';
export async function getAllProducts() {
  return shopifyFetch({
    query: `{
        products(sortKey: TITLE, first: 100) {
          edges{
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
                if (response.status === 200) {
                    setProducts(response.body.data.products.edges.map(edge => edge.node));
                } else {
                    console.error('Failed to fetch products:', response.error);
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
