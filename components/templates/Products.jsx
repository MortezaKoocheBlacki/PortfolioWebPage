import React, { useEffect } from 'react'
import styles from "./Products.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import { fetchProducts } from '@/utils/features/product/productSlice';
import { filterProducts, getInitialQuery, searchProducts } from '@/utils/helper/helper';
import SearchBox from '../modules/ProductsModules/SearchBox';

function Products() {
      const dispatch = useDispatch();

      const { products, loading } = useSelector(store => store.product);

      const [searchParams, setSearchParams] = useSearchParams();
      const [displayed, setDisplayed] = useState([]);
      const [search, setSearch] = useState("");
      const [query, setQuery] = useState([]);

      useEffect(() => {
            dispatch(fetchProducts());
      }, []);

      useEffect(() => {
            setDisplayed(products);

            setQuery(getInitialQuery(searchParams));
      }, [products]);

      useEffect(() => {
            setSearchParams(query.search || "");

            let finalProducts = searchProducts(products, query.search);
            finalProducts = filterProducts(finalProducts, query.category);

            setDisplayed(finalProducts);
      }, [query])

      return (
            <>
                  <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
            </>
      );
}

export default Products