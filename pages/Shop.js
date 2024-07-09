import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { CartProvider } from '../context/CartContext' // Update the path to CartContext
import BuyButton from '../components/BuyButton'
import NewCart from '@/components/NewCart'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WaveOther from '@/components/WaveOther'

export async function getStaticProps() {
  const url = new URL(process.env.URL)
  url.pathname = '/api/products'

  const res = await fetch(url.toString())
  if (!res.ok) {
    console.error('Failed to fetch:', res)
    return { props: { products: [] } }
  }
  const data = await res.json()

  const defaultImageSrc = '/lakestatelogo.png'
  const products = data.products.edges.map(({ node }) => {
    const imageSrc =
      node.images.edges.length > 0 && node.images.edges[0].node.src
        ? node.images.edges[0].node.src
        : defaultImageSrc
    const variants = node.variants.edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      price: node.priceV2.amount,
      quantityAvailable: node.quantityAvailable,
    }))
    return {
      id: node.id,
      title: node.title,
      imageSrc: imageSrc,
      imageAlt: node.title || 'Product Image',
      price: node.variants.edges[0]?.node.priceV2.amount,
      slug: node.handle,
      variants: variants,
    }
  })

  return {
    props: { products },
  }
}

function Product({ product }) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className="flex flex-col items-center justify-between p-4 border border-gray-300 m-4 w-80 h-[30rem] shadow-lg rounded-lg">
      <Link href={`/product/${product.slug}`} className="w-full h-72 relative">
        <Image
          className="object-cover w-full h-full rounded-lg"
          src={product.imageSrc}
          alt={product.imageAlt}
          layout="fill"
        />
      </Link>
      <h2 className="text-xl font-bold mt-4">{product.title}</h2>
      <p className="text-sm mt-2 text-center">{product.description}</p>
      <p className="text-lg mt-2">{formattedPrice.format(product.price)}</p>
      <BuyButton product={product} />
    </div>
  )
}

export default function Shop({ products }) {
  return (
    <div>
      <Navbar />
      <WaveOther imageUrl="/Plant-Markers-0423.jpg" header="Shop" />
      <CartProvider>
        <div className="container mx-auto px-4">
          <NewCart />
          <main className="py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products &&
                products.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
            </div>
          </main>
        </div>
      </CartProvider>
      <Footer />
    </div>
  )
}
