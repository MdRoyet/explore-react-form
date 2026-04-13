import React, { useState } from "react";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm/ProductForm";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const handleAddProduct = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    console.log(newProducts);
  };
  return (
    <div>
      <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;
