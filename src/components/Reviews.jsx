import React from "react";
import Image from "next/image";

const Reviews = ({ reviews }) => {
  return (
    <div className="flex flex-col gap-y-[30px] p-[30px] border-[1px] border-light_gray w-full sm:w-[580px] lg:w-[851px] xl:w-[980px] xhd:w-[1040px] fullhd:w-[1120px]">
      <h3 className="text-dark_gray font-poppins text-[16px] font-medium leading-[17px] tracking-[-0.16px]">
        Reviews ({reviews.length})
      </h3>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex flex-col gap-y-[10px] lg:flex-row lg:gap-[30px]"
        >
          <p className="text-dark_gray text-[16px] leading-5 tracking-[-0.16px] lg:hidden">
            {review.name}
          </p>
          <div className="flex gap-2 lg:flex-col">
            <p className="text-dark_gray text-[16px] leading-5 tracking-[-0.16px] hidden lg:flex">
              {review.name}
            </p>
            <Image
              src="/icons/detail/stars.svg"
              width={77}
              height={14}
              alt="stars"
            />
            <p className="text-[#999] text-[14px] font-poppins leading-[13px] tracking-[-0.13px]">
              {review.date}
            </p>
          </div>
          <p className="text-dark_gray text-[14px] font-medium leading-[26px] font-poppins lg:w-[600px] xl:w-full">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
