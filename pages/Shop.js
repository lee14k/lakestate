import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Shop.module.css';
import dynamic from 'next/dynamic';
import { CartProvider } from '../context/CartContext'; // Update the path to CartContext
import BuyButton from '../components/BuyButton'
import NewCart from '@/components/NewCart';

export async function getStaticProps() {
  const url = new URL(process.env.URL);
  url.pathname = '/api/products';

  const res = await fetch(url.toString());
  if (!res.ok) {
    console.error('Failed to fetch:', res);
    return { props: { products: [] } };
  }
  const data = await res.json();

  const defaultImageSrc = '/lakestatelogo.png';
  const products = data.products.edges.map(({ node }) => {
    const imageSrc = node.images.edges.length > 0 && node.images.edges[0].node.src
      ? node.images.edges[0].node.src
      : defaultImageSrc;
    const variants = node.variants.edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      price: node.priceV2.amount,
      quantityAvailable: node.quantityAvailable
      // Add more variant details here if needed
    }));
    return {
      id: node.id,
      title: node.title,
      description: node.description,
      imageSrc: imageSrc,
      imageAlt: node.title || 'Product Image',
      price: node.variants.edges[0]?.node.priceV2.amount,
      slug: node.handle,
      variants: variants // Include variants array

    };
  });

  return {
    props: { products },
  };
}


function Product({ product }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className={styles.product}>

      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={400}
          height={400}
        />
      </Link>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p className={styles.price}>{formattedPrice.format(product.price)}</p>
      <BuyButton product={product} /> {/* Add the BuyButton here */}

    </div>
  );
}
export default function Shop({ products }) {
  return (
    <CartProvider>
      <div className={styles.container}>
        <NewCart />

        <main className={styles.main}>
          <h1 className={styles.title}>Store</h1>

          <div className={styles.products}>
            {products && products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </CartProvider>
  );
}