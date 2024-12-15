const Button = ({ text, color, disabled, type = "button", icon = null }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${
        disabled
          ? "!bg-[#C1C1C1] cursor-not-allowed text-white"
          : color === "primary"
          ? "bg-light_yellow hover:bg-[#cbc0a0] text-teal hover:text-white"
          : color === "third"
          ? "border-[1px] border-teal hover:bg-teal text-teal group"
          : "bg-teal hover:bg-[#689882] text-light_yellow"
      } p-[10px] w-full h-full font-poppins flex items-center justify-center`}
    >
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 19 19"
          fill="none"
          className="fill-teal group-hover:fill-white mr-2"
        >
          {icon}
        </svg>
      )}
      <p
        className={`${
          color === "third" &&
          "text-teal group-hover:text-white text-[14px] leading-[14px]"
        }`}
      >
        {text}
      </p>
    </button>
  );
};

export default Button;
