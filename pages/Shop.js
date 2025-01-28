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
  try {
    const url = new URL(process.env.URL || 'http://localhost:3000')
    url.pathname = '/api/products'

    const res = await fetch(url.toString())
    if (!res.ok) throw new Error('Failed to fetch')
    
    const data = await res.json()
    
    if (!data?.products || !Array.isArray(data.products)) {
      throw new Error('Invalid data structure')
    }

    const products = data.products.map(({ node }) => {
      // Get the first product image from images.edges
      const productImage = node.images?.edges?.[0]?.node?.src

      // Get the first variant image as backup
      const variantImage = node.variants?.edges?.[0]?.node?.image?.src

      // Use product image, variant image, or default image
      const imageSrc = productImage || variantImage || '/lakestatelogo.png'

      // Ensure price is a string or number that can be safely converted to number
      const price = node.priceRange?.minVariantPrice?.amount || '0'

      return {
        id: node.id || '',
        title: node.title || '',
        description: node.description || '',
        imageSrc,
        imageAlt: node.title || 'Product Image',
        price: String(node.variants.edges[0]?.node.priceV2.amount), // Ensure price is a string
        slug: node.handle || '',
        variants: (node.variants?.edges || []).map(({ node: variantNode }) => ({
          id: variantNode?.id || '',
          title: variantNode?.title || '',
          price: String(variantNode?.priceV2?.amount || '0'),
          quantityAvailable: variantNode?.quantityAvailable || 0,
          image: variantNode?.image?.src || imageSrc
        }))
      }
    })

    return {
      props: { products },
      revalidate: 10
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return { props: { products: [] } }
  }
}

function Product({ product }) {
  if (!product) return null;

  // Format price outside of render to ensure consistency
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(product.price) || 0)

  return (
    <div className="flex flex-col items-center justify-between p-4 border border-gray-300 m-4 w-80 h-[30rem] shadow-lg rounded-lg">
      <Link href={`/product/${product.slug}`} className="w-full h-72 relative">
        <Image
          className="object-cover w-full h-full rounded-lg"
          src={product.imageSrc || '/lakestatelogo.png'}
          alt={product.imageAlt || 'Product Image'}
          width={320}
          height={288}
          priority
        />
      </Link>
      <h2 className="text-xl font-bold mt-4">{product.title || ''}</h2>
      <p className="text-sm mt-2 text-center line-clamp-3">{product.description || ''}</p>
      <p className="text-lg mt-2">{formattedPrice}</p>
      <BuyButton product={product} />
    </div>
  )
}

export default function Shop({ products }) {
  // Ensure products is always an array
  const safeProducts = Array.isArray(products) ? products : []

  return (
    <div>
      <Navbar />
      <WaveOther imageUrl="/Plant-Markers-0423.jpg" header="Shop" />
      <CartProvider>
        <div className="container mx-auto px-4">
          <NewCart />
          <main className="py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {safeProducts.map((product) => (
                <Product 
                  key={product?.id || Math.random()} 
                  product={product} 
                />
              ))}
            </div>
          </main>
        </div>
      </CartProvider>
      <Footer />
    </div>
  )
}
