const ToggleBtn = ({ handleToggleBtn, toggleBtn }) => {
  return (
    <div className="absolute -mb-[650px] lg:ml-[1050px]">
      <div className="flex justify-center gap-4 items-center sticky z-40">
        {/* Available button */}
        <button
          onClick={() => handleToggleBtn("available")}
          className={`btn border-2 px-4 py-2 ${
            toggleBtn.available
              ? "bg-[#52836f] text-white"
              : "border-[#0BE58A] text-[#0BE58A]"
          }`}
        >
          Available
        </button>

        {/* Selected button */}
        <button
          onClick={() => handleToggleBtn("selected")}
          className={`btn border-2 px-4 py-2 ${
            !toggleBtn.available
              ? "bg-[#52836f] text-white"
              : "border-[#0BE58A] text-[#0BE58A]"
          }`}
        >
          Selected
        </button>
      </div>  
    </div>
  );
};

export default ToggleBtn;
