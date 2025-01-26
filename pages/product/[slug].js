'use client'

import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewCart from '@/components/NewCart'
import { CartProvider } from '../../context/CartContext'
import BuyButton from '@/components/BuyButton'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export async function getStaticPaths() {
  const url = new URL('https://lakestate.vercel.app')
  url.pathname = '/api/products'

  const res = await fetch(url.toString())

  if (!res.ok) {
    console.error('Failed to fetch products:', res)
    return { paths: [], fallback: false }
  }

  const data = await res.json()

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

  let product = null

  data.products.edges.forEach(({ node }) => {
    if (node.handle === params.slug) {
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

function Product({ slug, imageSrc, imageAlt, title, description, price, variants }) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0] || { price })
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(selectedVariant.price)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-2 gap-x-8 gap-y-10">
        {/* Image Section */}
        <div className="relative">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={800}
              className="w-full h-full object-center object-cover hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="mt-4 text-2xl text-gray-900">{formattedPrice}</p>
          </div>

          {/* Variants Selection */}
          {variants.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-900">Options</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={classNames(
                      selectedVariant.id === variant.id
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                      'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase focus:outline-none sm:flex-1'
                    )}
                  >
                    <span>{variant.title}</span>
                    {variant.quantityAvailable <= 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        Sold Out
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mt-6 space-y-6">
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <div className="text-base text-gray-700 space-y-4">
              {description}
            </div>
          </div>

          {/* Buy Button */}
          <div className="mt-8">
            <BuyButton
              product={{
                slug,
                imageSrc,
                imageAlt,
                title,
                description,
                price: selectedVariant.price,
              }}
              className="w-full bg-black text-white py-4 px-8 rounded-md hover:bg-gray-800 transition-colors duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductPage({ product }) {
  return (
    <div className="min-h-screen flex flex-col">
      <CartProvider>
        <Head>
          <title>{product?.title || 'Product'} | Lakestate Industries</title>
          <meta name="description" content={product?.description || ''} />
        </Head>

        <Navbar />
        
        <main className="flex-grow bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/Shop"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8"
            >
              <span className="mr-2">&larr;</span>
              Back to Store
            </Link>

            <div className="relative">
              <NewCart />
              {product ? <Product {...product} /> : (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-semibold text-gray-900">Product not found</h2>
                  <p className="mt-2 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </CartProvider>
    </div>
  )
}