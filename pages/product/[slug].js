'use client'

import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewCart from '@/components/NewCart'
import { CartProvider, useCart } from '../../context/CartContext'
import BuyButton from '@/components/BuyButton'
import { createCheckout } from '../../utils/createCheckout'

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

  const paths = data.products.map(({ node }) => ({
    params: { slug: node.handle },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  try {
    const url = new URL(process.env.URL || 'http://localhost:3000')
    url.pathname = '/api/products'

    const res = await fetch(url.toString())
    if (!res.ok) throw new Error('Failed to fetch')
    
    const data = await res.json()
    
    const productData = data.products?.find(({ node }) => node.handle === params.slug)
    if (!productData?.node) {
      return { props: { product: null }, revalidate: 10 }
    }

    const { node } = productData
    
    // Get the first product image from images.edges
    const productImage = node.images?.edges?.[0]?.node?.src
    // Get the first variant image as backup
    const variantImage = node.variants?.edges?.[0]?.node?.image?.src
    // Use product image, variant image, or default image
    const imageSrc = productImage || variantImage || '/lakestatelogo.png'

    const product = {
      id: node.id || '',
      title: node.title || '',
      description: node.description || '',
      imageSrc,
      imageAlt: node.title || 'Product Image',
      price: String(node.priceRange?.minVariantPrice?.amount || '0'),
      slug: node.handle || '',
      variants: (node.variants?.edges || []).map(({ node: variantNode }) => ({
        id: variantNode?.id || '',
        title: variantNode?.title || '',
        price: String(variantNode?.priceV2?.amount || '0'),
        quantityAvailable: variantNode?.quantityAvailable || 0,
        selectedOptions: (variantNode?.selectedOptions || []).map(option => ({
          name: option?.name || '',
          value: option?.value || '',
        })),
        image: variantNode?.image?.src || imageSrc,
      }))
    }

    return {
      props: { product },
      revalidate: 10
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return { props: { product: null }, revalidate: 10 }
  }
}

function Product({ product }) {
  if (!product) return null;
  const safeVariants = Array.isArray(product.variants) ? product.variants : [];

  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || { price: product.price })
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(selectedVariant?.price || product.price || 0))

  const { addToCart } = useCart();

  const handleCheckout = async () => {
    addToCart({
      ...product,
      price: selectedVariant?.price || product.price,
      variant: selectedVariant,
    });
    
    try {
      const checkoutUrl = await createCheckout([{
        ...product,
        price: selectedVariant?.price || product.price,
        variant: selectedVariant,
        quantity: 1
      }]);
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  // Ensure variants is always an array
  {safeVariants.map((variant) => (
    <button
      key={variant?.id || Math.random()}
      onClick={() => setSelectedVariant(variant)}
      className={`px-4 py-2 rounded ${
        selectedVariant?.id === variant?.id
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200'
      }`}
    >
      {variant?.title || ''}
      <div>
        {variant?.selectedOptions?.map((option) => (
          <p key={option?.name}>
            {option?.name}: {option?.value}
          </p>
        ))}
      </div>
      -{' '}
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(Number(variant?.price || 0))}
    </button>
  ))}
  return (
    <div className="grid lg:grid-cols-2">
      <div>
        <Image
          src={product.imageSrc || '/lakestatelogo.png'}
          alt={product.imageAlt || 'Product Image'}
          width={800}
          height={800}
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-xl font-bold">{product.title || ''}</h2>
        <p className="text-lg mt-2">{formattedPrice}</p>
        <p className="text-sm mt-2 text-center">{product.description || ''}</p>
        
        {safeVariants.length > 0 && (
          <div className="mt-4 flex gap-10">
            {safeVariants.map((variant) => (
              <button
                key={variant?.id || Math.random()}
                onClick={() => setSelectedVariant(variant)}
                className={`px-4 py-2 rounded ${
                  selectedVariant?.id === variant?.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {variant?.title || ''} - {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(Number(variant?.price || 0))}
              </button>
            ))}
          </div>
        )}
        
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => addToCart({
              ...product,
              price: selectedVariant?.price || product.price,
              variant: selectedVariant,
            })}
            className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add to Cart
          </button>
          
          <button
            onClick={handleCheckout}
            className="rounded-md bg-orange-400 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-lakestate-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lakestate-blue"
          >
            Checkout
          </button>
        </div>
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
            <div className="grid grid-cols-1">
              {product ? <Product product={product} /> : <p>Product not found</p>}
            </div>
          </div>
        </main>
      </CartProvider>
      <Footer />
    </div>
  )
}
