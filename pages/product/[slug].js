import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewCart from '@/components/NewCart'
import { CartProvider } from '../../context/CartContext' // Update the path to CartContext
import BuyButton from '@/components/BuyButton'

export async function getStaticPaths() {
  const url = new URL('https://lakestate.vercel.app')
  url.pathname = '/api/products'

  const res = await fetch(url.toString())

  // Check for a successful response
  if (!res.ok) {
    console.error('Failed to fetch products:', res)
    // Return an empty paths array in case of an error
    return { paths: [], fallback: false }
  }

  const data = await res.json()

  // Map data to paths
  const paths = data.products.edges.map(({ node }) => ({
    params: { slug: node.handle },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const url = new URL('https://lakestate.vercel.app')
  url.pathname = '/api/products'

  const res = await fetch(url.toString())

  if (!res.ok) {
    return { props: {} }
  }

  const data = await res.json()
  const defaultImageSrc = '/lakestatelogo.png'

  let product = null // Define product variable

  data.products.edges.forEach(({ node }) => {
    if (node.handle === params.slug) {
      // Find the product with matching slug
      const imageSrc =
        node.images.edges.length > 0
          ? node.images.edges[0].node.src
          : defaultImageSrc

      const variants = node.variants.edges.map(({ node }) => ({
        id: node.id,
        title: node.title,
        price: node.priceV2.amount,
        quantityAvailable: node.quantityAvailable,
      }))

      product = {
        id: node.id,
        title: node.title,
        description: node.description,
        imageSrc,
        imageAlt: node.title || 'Product Image',
        price: node.variants.edges[0]?.node.priceV2.amount,
        slug: node.handle,
        variants,
      }
    }
  })

  if (!product) {
    console.log('No product found for slug:', params.slug)
    return { props: { product: null }, revalidate: 10 }
  }

  return {
    props: { product },
    revalidate: 10,
  }
}

function Product({ slug, imageSrc, imageAlt, title, description, price }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className="flex flex-col items-center justify-between p-4 border border-gray-300 m-4 w-72 h-96 shadow-lg rounded-lg">
      <Link href={`/product/${slug}`}>
        <Image
          className="w-full h-64 object-cover rounded-lg"
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={600}
        />
      </Link>
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-lg mt-2">{formattedPrice.format(price)}</p>
        <p className="text-sm mt-2 text-center">{description}</p>
        <BuyButton product={Product} />
      </div>
    </div>
  )
}

export default function ProductPage({ product }) {
  return (
    <div>
      <CartProvider>
        <Head>
          <title>Lakestate Industries</title>
        </Head>

        <main>
          <Navbar />
          <Link href="/Shop">&larr; back to the store</Link>
          <div>
            <NewCart />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              <Product {...product} />
            </div>
          </div>
        </main>
      </CartProvider>
      <Footer />
    </div>
  )
}
