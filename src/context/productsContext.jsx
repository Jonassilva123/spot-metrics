import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext({});

export default function ProductsProvider({ children }) {
  const [listProducts, setListProducts] = useState([]);

  function handleProducts() {
    const products = localStorage.getItem("products");
    if (!products) {
      return;
    }
    setListProducts(JSON.parse(products));
  }

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ listProducts, setListProducts, handleProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  const { listProducts, setListProducts, handleProducts } = context;
  return { listProducts, setListProducts, handleProducts };
}
