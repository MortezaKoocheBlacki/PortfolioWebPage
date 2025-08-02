import React from 'react'
import products_list from '@/utils/constant/ProductsList';
import { useRouter } from "next/router";
import ProductDetails from '@/components/templates/ProductDetails';

function ProductDetail() {
      const router = useRouter(); // Use Next.js router to access query parameters
      // router.query contains the query parameters from the URL
      // The productId will be available once the component is mounted
      const { productId } = router.query; // Extract productId from the query parameters

      if (!productId) return <p>Loading...</p>; // Handle the case where productId is not yet available
      
      const details = products_list[Number(productId) - 1]; // Assuming productId is 1-based index
      // If productId is not valid, details will be undefined

      if (!details) return <p>Projects not found</p>; // Handle the case where the productId does not match any product

      return <ProductDetails product={details} />
}

export default ProductDetail