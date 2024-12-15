"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import productData from "../data/product_shipment";
import Counter from "./Counter";

const ProductShipment = () => {
  const [products, setProducts] = useState(
    productData.products.map((product) => ({
      ...product,
      count: 1,
    }))
  );

  const handleIncrement = (index) => {
    setProducts(
      products.map((product, i) =>
        i === index ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const handleDecrement = (index) => {
    setProducts(
      products.map((product, i) =>
        i === index && product.count > 1
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const calculateTotal = () => {
    return products
      .reduce(
        (acc, product) =>
          acc +
          product.count * parseFloat(product.price.replace(/[^0-9.-]+/g, "")),
        0
      )
      .toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
      });
  };

  return (
    <div className="bg-white w-[300px] h-full flex flex-col border-[1px] border-light_gray">
      <div className="p-[8px] xs:p-[25px] flex flex-col h-full justify-between">
        {products.map((product, index) => (
          <div key={index} className="flex gap-x-[20px] mb-6">
            <div>
              <Image
                src={product.image}
                width={102}
                height={102}
                alt={product.title}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-start justify-between w-full sm:gap-2">
                <h1>{product.title}</h1>
                <Image
                  src="/icons/cart/trash.svg"
                  width={24}
                  height={24}
                  alt="trash"
                />
              </div>
              <div className="flex flex-col gap-y-[15px] mt-2">
                <p className="text-[#999] text-[12px] font-poppins">
                  {product.description}
                </p>
                <Counter
                  count={product.count}
                  onIncrement={() => handleIncrement(index)}
                  onDecrement={() => handleDecrement(index)}
                />
                <p className="text-olive_gray font-poppins text-base leading-[30px]">
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-y-[30px] mt-6">
          <div className="flex justify-between text-[16px] font-poppins items-center">
            <p className="font-medium leading-normal  text-[#525252]">TOTAL</p>
            <p className="font-semibold leading-[30px] text-olive_gray">
              {calculateTotal()}
            </p>
          </div>
          <div className="flex justify-between text-[20px]">
            <p className="font-medium leading-normal text-[#525252]">
              TOTAL CON ENVÍO
            </p>
            <p className="leading-[30px] text-olive_gray font-semibold">
              $267.000
            </p>
          </div>
          <div className="w-full text-base">
            <Button text="CONTINUAR" color="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShipment;
