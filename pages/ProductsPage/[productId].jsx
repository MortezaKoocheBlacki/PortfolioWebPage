import React from 'react'
import products_list from '@/utils/constant/ProductsList';
import { useRouter } from "next/router";
import ProductDetails from '@/components/templates/ProductDetails';

function ProductDetail() {
      const router = useRouter();
      const { productId } = router.query;

      if (!productId) return <p>Loading...</p>;
      
      const details = products_list[Number(productId) - 1];

      if (!details) return <p>Projects not found</p>;

      return <ProductDetails product={details} />
}

export default ProductDetail