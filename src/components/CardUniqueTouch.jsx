import Image from "next/image";

const CardUniqueTouch = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center gap-y-[10px] sm:gap-y-0 ">
      <Image src={icon} width={45} height={45} alt={title} />
      <h2 className="text-[#333] font-poppins text-[13px] font-medium tracking-[1px]">
        {title}
      </h2>
      <p className="text-[#999] font-poppins text-[13px] w-[215px] sm:w-full">
        {description}
      </p>
    </div>
  );
};

export default CardUniqueTouch;
