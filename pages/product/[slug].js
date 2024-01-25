import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Shop.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewCart from '@/components/NewCart';
import { CartProvider } from '../../context/CartContext'; // Update the path to CartContext
import BuyButton from '@/components/BuyButton';
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
  const url = new URL('https://lakestate.vercel.app');
  url.pathname = '/api/products';

  const res = await fetch(url.toString());

  if (!res.ok) {
    return { props: {} };
  }

  const data = await res.json();
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
    <div>
    <div className="flex mx-12 my-24">
      <a href={`/product/${slug}`}>
        <Image src={imageSrc} alt={imageAlt} width={600} height={600} />
      </a>
      <div className="flex flex-col items-center mr-12">
        <div className="flex flex-col">
      <h2 className="text-2xl">{title}</h2>
      <p className>{formattedPrice.format(price)}</p>
      <p >{description}</p>
      <BuyButton product={Product} />

      </div>


      </div>
    </div>
    </div>
  );
}

export default function ProductPage({ product }) {

  return (
    <div className>
          <CartProvider>

      <Head>
        <title>Lakestate Industries</title>

      </Head>

      <main >
        <Navbar/>

        <Link href="/Shop">&larr; back to the store</Link>

        <div >
          <NewCart/>
          <Product {...product} />
          
        </div>
      </main>
      <Footer/>
      </CartProvider>
    </div>
  );
}