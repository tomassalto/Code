"use client";
import React from "react";
import Image from "next/image";
import TabComponent from "./Tab";
import Counter from "./Counter";
import CardUniqueTouch from "./CardUniqueTouch";
import uniqueTouchData from "../data/unique_touch";
import Detail from "./Detail";
import Reviews from "./Reviews";
import Breadcrumb from "./Breadcrumb";
import breadcrumbsData from "../data/breadcrumbs.json";
import Button from "./Button";

const ProductDetail = ({ product }) => {
  const tabsData = [
    {
      title: "Detalles del producto",
      content: <Detail detail={product.detail} />,
    },
    {
      title: "Reviews",
      content: <Reviews reviews={product.reviews} />,
    },
  ];
  return (
    <section className="flex justify-center items-center py-[50px]">
      <div className="flex flex-col justify-center items-center gap-y-[40px] w-[299px] sm:w-[580px] lg:w-[851px] xl:w-[980px] xhd:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]">
        <div className="flex flex-col gap-y-[20px]">
          <Breadcrumb breadcrumbs={breadcrumbsData.breadcrumbs} />
          <div className="flex flex-col gap-y-[50px] items-center lg:flex-row lg:items-start lg:gap-[50px] lg:w-full">
            <Image
              src="/images/unique_touch/image_1.png"
              width={299}
              height={283}
              alt="product"
              className="sm:w-[283px] lg:h-[400px] xl:w-[459px] xl:h-[486px]"
            />
            <div className="flex flex-col gap-y-[20px] lg:w-[500px] xhd:w-[531px] fullhd:w-[610px]">
              <div className="flex flex-col gap-y-[6px]">
                <h1 className="text-[#222] font-poppins text-[24px] tracking-[-0.025px]">
                  {product.title}
                </h1>
                <p className="text-medium_gray text-[15px] font-poppins leading-[24px] tracking-[1px]">
                  {product.measures}
                </p>
                <div className="flex gap-2">
                  <Image
                    src={product.stars}
                    width={77}
                    height={14}
                    alt="stars"
                  />
                  <p className="text-[#999] font-poppins text-[13px] leading-[13px] tracking-[-0.13px]">
                    ({product.reviewCount} Reviews)
                  </p>
                </div>
              </div>
              <p className="text-olive_gray text-[24px] leading-[30px] font-poppins">
                ${product.price}
              </p>
              <div className="flex flex-col gap-y-[50px]">
                <p className="text-dark_gray font-poppins text-[14px] leading-[26px]">
                  {product.description}
                </p>
                <div className="flex flex-col gap-y-[30px] w-full lg:w-[227px]">
                  <div className="flex items-center justify-between">
                    <p className="text-dark_gray font-poppins text-[14px] leading-[26px]">
                      Cantidad
                    </p>
                    <Counter />
                  </div>
                  <Button
                    text="AGREGAR AL CARRITO"
                    color="third"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 19 19"
                        fill="none"
                        className="fill-teal group-hover:fill-white"
                      >
                        <path d="M3.10156 3.75476H4.34961C4.60742 3.75476 4.83887 3.83386 5.04395 3.99207C5.24902 4.15027 5.38086 4.35242 5.43945 4.59851L6.91602 10.5223H13.9473L15.3008 5.44226H16.4785L15.0195 10.8036C14.9492 11.0497 14.8174 11.2489 14.624 11.4012C14.4307 11.5536 14.2051 11.6298 13.9473 11.6298H6.91602C6.6582 11.6298 6.42676 11.5507 6.22168 11.3925C6.0166 11.2343 5.88477 11.0321 5.82617 10.786L4.34961 4.87976H3.10156C2.94922 4.87976 2.81738 4.8241 2.70605 4.71277C2.59473 4.60144 2.53906 4.4696 2.53906 4.31726C2.53906 4.16492 2.59473 4.03308 2.70605 3.92175C2.81738 3.81042 2.94922 3.75476 3.10156 3.75476ZM13.2441 11.6298C13.7012 11.6298 14.0967 11.7968 14.4307 12.1307C14.7646 12.4647 14.9316 12.8602 14.9316 13.3173C14.9316 13.786 14.7646 14.1874 14.4307 14.5214C14.0967 14.8553 13.7012 15.0223 13.2441 15.0223C12.7871 15.0223 12.3916 14.8553 12.0576 14.5214C11.7236 14.1874 11.5566 13.786 11.5566 13.3173C11.5566 12.8602 11.7207 12.4647 12.0488 12.1307C12.377 11.7968 12.7754 11.6298 13.2441 11.6298ZM8.16406 11.6298C8.63281 11.6298 9.03125 11.7968 9.35938 12.1307C9.6875 12.4647 9.85156 12.8602 9.85156 13.3173C9.85156 13.786 9.6875 14.1874 9.35938 14.5214C9.03125 14.8553 8.63281 15.0223 8.16406 15.0223C7.69531 15.0223 7.2998 14.8553 6.97754 14.5214C6.65527 14.1874 6.49414 13.786 6.49414 13.3173C6.49414 12.8602 6.6582 12.4647 6.98633 12.1307C7.31445 11.7968 7.70703 11.6298 8.16406 11.6298ZM9.85156 3.75476H10.9941V5.44226H12.6641V6.56726H10.9941V8.25476H9.85156V6.56726H8.16406V5.44226H9.85156V3.75476ZM8.16406 12.7723C8.01172 12.7723 7.87988 12.8251 7.76855 12.9305C7.65723 13.036 7.60156 13.1649 7.60156 13.3173C7.60156 13.4813 7.65723 13.6161 7.76855 13.7216C7.87988 13.827 8.01172 13.8798 8.16406 13.8798C8.31641 13.8798 8.45117 13.827 8.56836 13.7216C8.68555 13.6161 8.74414 13.4813 8.74414 13.3173C8.74414 13.1649 8.68848 13.036 8.57715 12.9305C8.46582 12.8251 8.32812 12.7723 8.16406 12.7723ZM13.2441 12.7723C13.0801 12.7723 12.9424 12.8251 12.8311 12.9305C12.7197 13.036 12.6641 13.1649 12.6641 13.3173C12.6641 13.4813 12.7197 13.6161 12.8311 13.7216C12.9424 13.827 13.0801 13.8798 13.2441 13.8798C13.4082 13.8798 13.543 13.827 13.6484 13.7216C13.7539 13.6161 13.8066 13.4813 13.8066 13.3173C13.8066 13.1649 13.751 13.036 13.6396 12.9305C13.5283 12.8251 13.3965 12.7723 13.2441 12.7723Z" />
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-light_gray h-[1px] w-full"></div>
        <TabComponent tabsData={tabsData} />
        <div className="flex flex-col gap-[30px] lg:flex-row lg:justify-evenly w-full">
          {uniqueTouchData.unique_touch.map((item, index) => (
            <CardUniqueTouch
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
