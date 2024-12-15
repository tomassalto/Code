import Image from "next/image";
import followUsData from "../data/follow_us.json";

const FollowUs = ({ color }) => {
  return (
    <section
      className={`flex justify-center items-center py-[50px] ${
        color === "primary" ? "bg-light_teal" : "bg-white"
      }`}
    >
      <div className="flex flex-col justify-center items-center gap-y-[30px] w-[311px] sm:w-[580px] lg:w-[851px] xl:w-[980px] xhd:w-[1040px] hd:w-[1036px] fullhd:w-[1120px]">
        <h1 className="text-teal font-serif_display text-[32px] tracking-[2.56px] text-center">
          SEGUINOS EN INSTAGRAM
        </h1>
        <a href="https://www.instagram.com/code.decodesign/">
          <p
            className={`font-poppins font-medium tracking-[1px] text-teal underline leading-[19px] text-center text-base`}
          >
            @CODE.DECODESING
          </p>
        </a>
        <div className="grid grid-cols-2 gap-[10px] sm:gap-[50px] lg:grid-cols-4 lg:gap-[30px] fullhd:gap-[50px]">
          {followUsData.follow_us.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              alt={`Follow us image ${index + 1}`}
              width={135}
              height={135}
              className="sm:w-[242px] sm:h-[242px] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
