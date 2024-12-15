import React from "react";

const Detail = ({ detail }) => {
  return (
    <div className="flex flex-col gap-y-[30px] p-[30px] border-[1px] justify-center items-center border-light_gray w-full">
      <p className="text-[#999] font-poppins text-[14px] font-light">
        {detail}
      </p>
    </div>
  );
};

export default Detail;
