import products_list from '@/utils/constant/ProductsList';
import ProductCard from '../modules/ProductsModules/ProductCard';
import styles from "./Products.module.css"

function Products() {
      

      return (
            <div className={styles.container}>
                  {
                        products_list.map((product) => (
                              <ProductCard key={product.id} product={product} />
                        ))
                  }
            </div>
      );
}

export default Products