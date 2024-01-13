import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Shop.module.css';

export async function getStaticPaths() {
  const url = new URL(process.env.URL || 'http://localhost:3000');
  url.pathname = '/api/products';

  const res = await fetch(url.toString());

  // Check for a successful response
  if (!res.ok) {
    console.error('Failed to fetch products:', res);
    // Return an empty paths array in case of an error
    return { paths: [], fallback: false };
  }

  const data = await res.json();

  // Map data to paths
  const paths = data.products.edges.map(({ node }) => ({
    params: { slug: node.handle },
  }));

  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const url = new URL(process.env.URL || 'http://localhost:3000');
  url.pathname = '/api/products';

  const res = await fetch(url.toString());

  if (!res.ok) {
    console.error(res);
    return { props: {} };
  }

  const data = await res.json();

  const product = data.products.edges
    .map(({ node }) => {
      if (node.totalInventory <= 0) {
        return false;
      }

      return {
        id: node.id,
        title: node.title,
        description: node.description,
        imageSrc: node.images.edges[0].node.src,
        imageAlt: node.title,
        price: node.variants.edges[0].node.priceV2.amount,
        slug: node.handle,
      };
    })
    .find(({ slug }) => slug === params.slug);
    if (!product) {
      // Return null or a not found state if no product is found
      return { props: { product: null }, revalidate: 10 };
    }
  
    return {
      props: { product },
      revalidate: 10, // In seconds
    };
}

function ProductPage({ slug, imageSrc, imageAlt, title, description, price }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className={styles.product}>
      <a href={`/product/${slug}`}>
        <Image src={imageSrc} alt={imageAlt} width={400} height={400} />
      </a>
      <h2>{title}</h2>
      <p>{description}</p>
      <p className={styles.price}>{formattedPrice.format(price)}</p>
    </div>
  );
}

export default function ProductPage({ product }) {
  if (!product) {
    // Render a not found message or redirect, etc.
    return <div>Product not found.</div>;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn With Jason Store (Please buy a duck)</title>
        <meta
          name="description"
          content="Jason has so many ducks. Please help."
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Store</h1>

        <Link href="/">&larr; back home</Link>

        <div className={styles.products}>
          <Product {...product} />
        </div>
      </main>
    </div>
  );
}