"use client";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [productCount, setProductCount] = useState(1); // Inicializa la cantidad del producto

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const handleIncrement = () => {
    setProductCount(productCount + 1);
  };

  const handleDecrement = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  const calculateTotal = () => {
    return (productCount * 89000).toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
    });
  };

  return (
    <>
      <header className="flex flex-col justify-center items-center">
        <div className="flex w-full items-center justify-between px-[30px] py-5 lg:relative lg:justify-center lg:w-[800px] xl:w-[900px] xhd:w-[1000px] fullhd:w-[1200px]">
          <div className="lg:hidden">
            <Image
              src="/icons/navbar/menu.svg"
              width={24}
              height={24}
              alt="menu"
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          </div>
          <div>
            <Link href="/">
              <Image
                src="/images/navbar/image.png"
                width={105}
                height={45}
                alt="logo"
              />
            </Link>
          </div>

          <div className="flex items-center lg:absolute right-0">
            <Image
              src="/icons/navbar/cart.svg"
              width={32}
              height={32}
              alt="cart"
              onClick={toggleCartModal}
              className="cursor-pointer"
            />
            <p className="font-poppins text-[#222] font-bold leading-[24.18px] text-[13px]">
              {calculateTotal()}
            </p>
          </div>
        </div>
        <div className="hidden lg:flex bg-[#222] w-full h-[53px] justify-center items-center">
          <nav className="px-[30px] flex">
            <ul className="flex gap-x-[32px] items-center font-poppins text-[14px] font-bold leading-[21px] tracking-[0.7] text-white">
              <Link href="/">
                <li className="text-teal">INICIO</li>
              </Link>
              <Link href="/ingresar">
                <li className="hover:text-light_yellow">INGRESAR</li>
              </Link>
              <Link href="/products">
                <li className="hover:text-light_yellow">CATÁLOGO</li>
              </Link>
              <Link href="/help">
                <li className="hover:text-light_yellow">AYUDA</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white z-50">
          <div className="flex justify-between px-6 py-5 border-[1px] border-[#EAEAEA] mb-[16px]">
            <Image
              src="/images/navbar/image.png"
              width={105}
              height={45}
              alt="logo"
            />
            <Image
              src="/icons/navbar/close.svg"
              width={24}
              height={24}
              alt="close menu"
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          </div>
          <nav className="px-[30px] font-poppins text-[14px] font-bold leading-[21px] tracking-[0.7] text-charcoal">
            <ul className="flex flex-col gap-y-[32px]">
              <Link href="/">
                <li>INICIO</li>
              </Link>
              <Link href="/ingresar">
                <li>INGRESAR</li>
              </Link>
              <Link href="/products">
                <li>CATÁLOGO</li>
              </Link>
              <Link href="/help">
                <li>AYUDA</li>
              </Link>
            </ul>
          </nav>
        </div>
      )}

      {isCartModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end items-center">
          <div className="bg-white w-[400px] h-full flex flex-col my-10 rounded-md shadow-lg overflow-auto">
            <div className="flex justify-between items-center border-b border-[#E3E3E3] p-[25px]">
              <h2 className="text-dark_gray font-poppins text-[20px] font-medium">
                Carrito de compras
              </h2>
              <Image
                src="/icons/navbar/close.svg"
                width={24}
                height={24}
                alt="close modal"
                onClick={toggleCartModal}
                className="cursor-pointer"
              />
            </div>
            <div className="p-[8px] xs:p-[25px] flex flex-col h-full justify-between">
              <div className="flex gap-x-[20px]">
                <div>
                  <Image
                    src="/images/cart/image_1.png"
                    width={102}
                    height={102}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start justify-between w-full sm:gap-2">
                    <h1>Placas Pvc Símil Mármol</h1>
                    <Image
                      src="/icons/cart/trash.svg"
                      width={24}
                      height={24}
                      alt="trash"
                    />
                  </div>
                  <div className="flex flex-col gap-y-[15px] mt-2">
                    <p className="text-[#999] text-[12px] font-poppins">
                      DISEÑO MODULAR • MODELO 003
                    </p>
                    <Counter
                      count={productCount}
                      onIncrement={handleIncrement}
                      onDecrement={handleDecrement}
                    />
                    <p className="text-olive_gray font-poppins text-base leading-[30px]">
                      $89.000
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-[10px] mt-6">
                <div className="flex justify-between text-[24px] font-poppins items-center">
                  <p className="font-medium leading-normal text-[#525252]">
                    TOTAL
                  </p>
                  <p className="font-semibold leading-[30px] text-olive_gray">
                    {calculateTotal()}
                  </p>
                </div>
                <div className="w-full text-base">
                  <Button text="COMPRAR" color="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
