import React, { useEffect } from 'react';
import ShopifyBuy from '@shopify/buy-button-js';

const BuyNow = ({ productId }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
          const client = ShopifyBuy.buildClient({
            domain: 'lakestateindustriestest.myshopify.com',
            storefrontAccessToken:'8407ea776ab144a045b7d3540265b9be'
          });
      
          const ui = ShopifyBuy.UI.init(client);
          ui.createComponent('product', {
            id: productId,
            node: document.getElementById(`buy-now-${productId}`),
          });
        }
      }, [productId]);
  return <div id={`buy-now-${productId}`} />;
};

export default BuyNow;
