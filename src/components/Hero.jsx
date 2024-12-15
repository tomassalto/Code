import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center py-[60px] overflow-hidden sm:py-[100px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.png"
          alt="hero"
          layout="fill"
          className="z-0 object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="relative z-20 flex flex-col w-[311px] sm:w-[580px] lg:w-[851px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]">
        <div>
          <p className="text-teal font-medium text-base font-poppins sm:text-[17px]">
            EVOLUCIÓN EN DECORACIÓN
          </p>
        </div>
        <div className="flex flex-col gap-y-[30px] sm:gap-y-[21px]">
          <div>
            <h1 className="text-[#FFF] text-[48px] font-serif_display sm:text-[96px] hd:w-[900px]">
              Placas decorativas para tus espacios
            </h1>
          </div>
          <div>
            <p className="text-[#FFF] w-[215px] font-poppins leading-[26.5px] text-[16px] sm:text-[20px] sm:w-[450px] lg:w-full">
              Transformá tus ambientes con esta solución versátil y de fácil
              mantenimiento
            </p>
          </div>
          <div className="w-[164px] h-[47px] text-[13px] font-semibold">
            <Link href="/products">
              <Button text="IR AL CATÁLOGO" color="primary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
