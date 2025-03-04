'use client'

import { useState, useEffect } from 'react'
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
  
  // Check if this is the crates product or medallions product
  const isCratesProduct = product.slug === 'crates';
  const isMedallionsProduct = product.slug === 'wood-medallion';
  
  // For crates, extract unique options from variants
  const [sizeOptions, setSizeOptions] = useState([]);
  const [personalizationOptions, setPersonalizationOptions] = useState([]);
  const [firestartOptions, setFirestartOptions] = useState([]);
  
  // State for selected options
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPersonalization, setSelectedPersonalization] = useState('');
  const [selectedFirestart, setSelectedFirestart] = useState('');
  
  // Initialize with first variant or default
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || { price: product.price });
  
  // Extract options from variants for crates product
  useEffect(() => {
    if (isCratesProduct && safeVariants.length > 0) {
      const sizes = new Set();
      const personalizations = new Set();
      const firestarts = new Set();
      
      safeVariants.forEach(variant => {
        const parts = variant.title.split(' / ');
        if (parts.length === 3) {
          sizes.add(parts[0]);
          personalizations.add(parts[1]);
          firestarts.add(parts[2]);
        }
      });
      
      const sizeArray = Array.from(sizes);
      const personalizationArray = Array.from(personalizations);
      const firestartArray = Array.from(firestarts);
      
      setSizeOptions(sizeArray);
      setPersonalizationOptions(personalizationArray);
      setFirestartOptions(firestartArray);
      
      // Set initial values
      setSelectedSize(sizeArray[0] || '');
      setSelectedPersonalization(personalizationArray[0] || '');
      setSelectedFirestart(firestartArray[0] || '');
    }
  }, [isCratesProduct, safeVariants]);
  
  // Update selected variant when options change for crates
  useEffect(() => {
    if (isCratesProduct && selectedSize && selectedPersonalization && selectedFirestart) {
      const variantTitle = `${selectedSize} / ${selectedPersonalization} / ${selectedFirestart}`;
      const variant = safeVariants.find(v => v.title === variantTitle);
      if (variant) {
        setSelectedVariant(variant);
      }
    }
  }, [selectedSize, selectedPersonalization, selectedFirestart, isCratesProduct, safeVariants]);
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(selectedVariant?.price || product.price || 0));

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
      <div className="flex flex-col items-center mt-4 px-6">
        <h2 className="text-xl font-bold">{product.title || ''}</h2>
        <p className="text-lg mt-2">{formattedPrice}</p>
        <p className="text-sm mt-2 text-center">{product.description || ''}</p>
        
        {/* Crates-specific variant selection with dropdowns */}
        {isCratesProduct && (
          <div className="w-full mt-6 space-y-4">
            {/* Size Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="size-select" className="text-sm font-medium text-gray-700 mb-1">
                Size
              </label>
              <select
                id="size-select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                {sizeOptions.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Personalization Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="personalization-select" className="text-sm font-medium text-gray-700 mb-1">
                Personalization
              </label>
              <select
                id="personalization-select"
                value={selectedPersonalization}
                onChange={(e) => setSelectedPersonalization(e.target.value)}
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                {personalizationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Firestarters Dropdown */}
            <div className="flex flex-col">
              <label htmlFor="firestart-select" className="text-sm font-medium text-gray-700 mb-1">
                Firestarters
              </label>
              <select
                id="firestart-select"
                value={selectedFirestart}
                onChange={(e) => setSelectedFirestart(e.target.value)}
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                {firestartOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Show personalization note if personalization is selected */}
            {selectedPersonalization === "Add Personalization" && (
              <div className="mt-2 p-3 bg-blue-50 rounded-md">
                <p className="text-sm text-blue-800">
                  For personalized orders with logos please email us at lakestate@lakestateindustries.org with your jpg. 
                  For individual names please type in the name in the Special Instructions field on the Shipping Page.
                </p>
              </div>
            )}
          </div>
        )}
        
        {/* Wood Medallions disclaimer */}
        {isMedallionsProduct && (
          <div className="w-full mt-6">
            <div className="p-3 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800">
                For personalized wood medallions with custom text or logos, please email us at lakestate@lakestateindustries.org with your requirements. 
                We can customize the design, text, and finish according to your specifications.
              </p>
            </div>
          </div>
        )}
        
        {/* Standard variant buttons for non-crates products */}
        {!isCratesProduct && safeVariants.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
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
  );
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
