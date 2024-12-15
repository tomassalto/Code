import React from "react";
import ProductDetail from "../../../components/ProductDetail";
import Form from "../../../components/Form";
import PlateComposition from "../../../components/PlateComposition";
import FollowUs from "../../../components/FollowUs";
import productData from "../../../data/product";

const getProductById = (id) => {
  return (
    productData.products.find((product) => product.id === parseInt(id)) || null
  );
};

const ProductPage = async ({ params }) => {
  const { id } = params;
  const product = getProductById(id);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <>
      <ProductDetail product={product} />
      <Form />
      <PlateComposition />
      <FollowUs color="secondary" />
    </>
  );
};

export default ProductPage;
