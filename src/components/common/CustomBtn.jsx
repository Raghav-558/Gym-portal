const CustomBtn = ({
  text = "",
  onClick,
  spanClass = "",
  secondSpanClass = "",
  isSubmitting = false,
  disabled = false,
  myClass = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isSubmitting}
      type="submit"
      className={`group relative text-xl leading-[100%] !py-3.5 px-[33px] bg-[#FF4601] border border-[#ff4601] cursor-pointer font-medium overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${myClass}`}
    >
      <span
        className={`z-10 relative group-hover:text-[#ff4601] text-white ${spanClass}`}
      >
        {isSubmitting ? "Submitting..." : text}
      </span>
      <span
        className={`absolute left-0 top-0 h-full w-0 group-hover:w-full bg-white transition-all duration-300 ease-in-out z-0  ${secondSpanClass}`}
      ></span>
    </button>
  );
};

export default CustomBtn;
