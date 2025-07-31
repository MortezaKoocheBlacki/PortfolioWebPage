const shortenText = text => {
      return text.split(" ").slice(0, 3).join(" ");
}
// sometimes our products have long name. with this function we are going to make their name shorter

const searchProducts = (products, search) => {
      if (!search) return products;
      const searchedProducts = products.filter(product => product.title.toLowerCase().includes(search));
      return searchedProducts
}

const filterProducts = (products, category) => {
      if (!category) return products;
      const filteredProducts = products.filter((product) => product.category === category);
      return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
      if (newQuery.category === "all") {
            const { category, ...rest } = currentQuery;
            // in this way all queries are in "rest" except category
            // all queries except category is in "rest";
            return rest;
      };
      if (newQuery.search === "") {
            const { search, ...rest } = currentQuery;
            return rest;
            // this is something the code above but this one is for search;
      }

      return { ...currentQuery, ...newQuery };
};

const getInitialQuery = searchParams => {
      const query = {};
      const category = searchParams.get("category");
      const search = searchParams.get("search");
      
      if (category) query.category = category;
      if (search) query.search = search;

      return query;
      // be careful about one point that we only can use hooks in components;
}

// this function would help us to understand how many items do we have in our basket
// and it would help us to understand total price of products.


const sumPrice = (products) => {
      return products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
 }

const sumQuantity = (products) => {
      return products.reduce((counter, product) => counter + product.quantity, 0);
}

const productQuantity = (state, id) => {
      const index = state.selectedItems.findIndex(item => item.id === id);
      if (index === -1) {
            return 0;
      } else {
            return state.selectedItems[index].quantity;
            // it shows us that how many items do we have in our array from specific item.
      }
}

export { shortenText, searchProducts, filterProducts, createQueryObject, getInitialQuery, sumPrice, sumQuantity, productQuantity };