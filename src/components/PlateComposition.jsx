import Image from "next/image";
import compositionData from "../data/plate_composition.json";

const PlateComposition = () => {
  return (
    <section className="bg-light_teal flex flex-col justify-center items-center py-[50px]">
      <div className="flex flex-col gap-y-[50px] w-[311px] xs:w-[315px] sm:w-[580px] lg:w-[851px] xl:w-[980px] mac:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]">
        <h1 className="text-teal text-center font-serif_display text-[24px] leading-[32px] tracking-[8px] xs:text-[26px] sm:text-[32px]">
          COMPOSICIÓN DE LAS PLACAS
        </h1>
        <div className="flex flex-col gap-[50px] lg:flex-row-reverse hd:justify-center">
          <div className="flex flex-col gap-y-[15px] text-dark_gray font-poppins text-base font-medium leading-[19.5px] tracking-[1.35px] lg:justify-center">
            {compositionData.composition_items.map((item, index) => (
              <div key={index} className="flex gap-x-[10px] items-center">
                <Image
                  src={item.icon}
                  width={24}
                  height={24}
                  alt="plate composition"
                />
                <p className="flex items-center">{item.text}</p>
              </div>
            ))}
          </div>
          <Image
            src="/images/plate_composition/image_1.png"
            width={300}
            height={300}
            alt="plate composition"
            className="object-cover sm:w-[535px] sm:h-[500px] lg:w-[350px] lg:h-[400px] xl:w-[490px] xl:h-[453px] hd:h-[500px] hd:w-[535px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PlateComposition;
