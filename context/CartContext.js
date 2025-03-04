import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Check if we're in the browser before accessing localStorage
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      // Check if the product is already in the cart
      const existingItemIndex = currentItems.findIndex(item => 
        item.id === product.id && 
        (item.variant?.id === product.variant?.id || (!item.variant && !product.variant))
      );
      
      if (existingItemIndex > -1) {
        // If product exists, increase quantity
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: (updatedItems[existingItemIndex].quantity || 1) + 1
        };
        return updatedItems;
      } else {
        // If product doesn't exist, add it with quantity 1
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
    setIsCartOpen(true);  // Open the cart when an item is added
  };

  const removeFromCart = (productId, variantId = null) => {
    setCartItems((currentItems) => 
      currentItems.filter((item) => {
        if (variantId) {
          return !(item.id === productId && item.variant?.id === variantId);
        }
        return item.id !== productId;
      })
    );
  };

  const updateQuantity = (productId, variantId = null, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems((currentItems) => 
      currentItems.map((item) => {
        if (
          item.id === productId && 
          ((!variantId && !item.variant?.id) || (item.variant?.id === variantId))
        ) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = item.quantity || 1;
      return total + (price * quantity);
    }, 0);
  };

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        getCartTotal, 
        isCartOpen, 
        toggleCart 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
