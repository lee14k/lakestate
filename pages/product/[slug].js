import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Shop.module.css';

export async function getStaticPaths() {
  const url = new URL('https://lakestate.vercel.app');
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
  const url = new URL(process.env.URL);
  url.pathname = '/api/products';

  const res = await fetch(url.toString());

  if (!res.ok) {
    console.error(res);
    return { props: {} };
  }

  const data = await res.json();
  console.log("Fetched data:", JSON.stringify(data, null, 2));
  const defaultImageSrc = '/lakestatelogo.png';

 
  let product = null; // Define product variable

  data.products.edges.forEach(({ node }) => {
    if (node.handle === params.slug) { // Find the product with matching slug
      const imageSrc = node.images.edges.length > 0 ? node.images.edges[0].node.src : defaultImageSrc;

      const variants = node.variants.edges.map(({ node }) => ({
        id: node.id,
        title: node.title,
        price: node.priceV2.amount,
        quantityAvailable: node.quantityAvailable,
      }));

      product = {
        id: node.id,
        title: node.title,
        description: node.description,
        imageSrc,
        imageAlt: node.title || 'Product Image',
        price: node.variants.edges[0]?.node.priceV2.amount,
        slug: node.handle,
        variants,
      };
    }
  });

  console.log("Product for slug", params.slug, ":", product);

  if (!product) {
    console.log("No product found for slug:", params.slug);
    return { props: { product: null }, revalidate: 10 };
  }

  return {
    props: { product },
    revalidate: 10,
  };
}

function Product({ slug, imageSrc, imageAlt, title, description, price }) {
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