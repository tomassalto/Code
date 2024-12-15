import Image from "next/image";
import CardUniqueTouch from "./CardUniqueTouch";
import uniqueTouchData from "../data/unique_touch";
import Button from "./Button";
import Link from "next/link";

const UniqueTouch = () => {
  return (
    <section className="flex flex-col justify-center items-center py-[50px]">
      <div className="flex flex-col gap-y-[70px] w-[311px] sm:w-[580px] lg:w-[851px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]">
        <div className="flex flex-col gap-y-[50px] lg:flex-row lg:gap-x-[50px]">
          <div className="flex flex-col gap-y-[50px] sm:w-[535px] lg:w-[500px] xl:w-[520px] fullhd:w-[535px]">
            <div>
              <h1 className="text-teal font-serif_display text-[32px] leading-[46px] tracking-[8px] ">
                ¿QUERÉS DARLE UN TOQUE ÚNICO A TUS ESPACIOS?
              </h1>
            </div>
            <div>
              <p className="text-[18px] text-dark_gray font-poppins leading-[26px] lg:text-[17px] xl:text-[18px]">
                Los paneles de acrílico tipo mármol son la elección ideal para
                un revestimiento elegante y duradero. Su fácil instalación y
                versatilidad permiten crear una variedad de estilos decorativos
                minimalistas o clásicos. Además, son fáciles de cortar y
                mantener, lo que los convierte en una opción práctica y
                estilizada para tu hogar u oficina.
              </p>
            </div>
            <div className="w-[164px] h-[47px] text-[13px] tracking-[2px] leading-[26px] font-semibold">
              <Link href="/products">
                <Button text="VER CATÁLOGO" color="secondary" />
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/images/unique_touch/image_1.png"
              width={311}
              height={523}
              alt="unique touch"
              className="xs:w-[315px] h-[523px] object-cover sm:w-full lg:w-[305px] xl:w-[410px] hd:w-[470px] fullhd:w-[535px]"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col gap-y-[30px] lg:flex-row lg:justify-evenly">
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

export default UniqueTouch;
