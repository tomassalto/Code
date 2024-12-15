import Image from "next/image";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center border-[1px] justify-between border-[#EBEBEB] w-[120px] h-[33px] p-[10px]">
      <button
        onClick={onDecrement}
        className="text-[24px] flex items-center justify-center text-[#EBEBEB]"
      >
        <Image src="/icons/cart/less.svg" width={24} height={24} alt="less" />
      </button>

      <span className="text-[14px] font-light leading-[26px] font-poppins text-dark_gray">
        {count}
      </span>

      <button
        onClick={onIncrement}
        className="text-[24px] flex items-center  text-[#EBEBEB] rounded-full"
      >
        <Image src="/icons/cart/more.svg" width={24} height={24} alt="more" />
      </button>
    </div>
  );
};

export default Counter;
