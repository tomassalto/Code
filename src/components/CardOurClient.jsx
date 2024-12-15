import Image from "next/image";
import React from "react";

const CardOurClients = ({ star, description, name }) => {
  const rateStars = (numStars) =>
    Array.from({ length: 5 }, (_, index) => (
      <Image
        key={index}
        src={
          index < numStars
            ? "/icons/our_clients/star.png"
            : "/icons/our_clients/star_empty.png"
        }
        alt={index < numStars ? "filled star" : "empty star"}
        width={25}
        height={25}
      />
    ));

  return (
    <div className="card flex flex-col gap-y-[15px] items-center text-dark_gray p-4">
      <div className="flex">{rateStars(star)}</div>
      <p className="text-sm italic font-light leading-[24px] text-[#666] text-wrap text-center font-poppins w-[311px] sm:w-[160px]">
        {description}
      </p>
      <p className="text-sm font-medium text-[#333] leading-[23px] tracking-[-0.35px] font-poppins">
        {name}
      </p>
    </div>
  );
};

export default CardOurClients;
