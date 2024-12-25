import { useRef } from "react";

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => inputRef.current?.focus();

  return (
    <div className="flex bg-[#1B1D1F] rounded-xl items-center px-5 cursor-pointer" onClick={handleClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11" cy="11" r="7" stroke="#6C727F" stroke-width="2" />
        <path
          d="M20 20L17 17"
          stroke="#6C727F"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <input
        type="text"
        placeholder="Search by Name, Region, Subregion"
        className="bg-[#1B1D1F] h-14 w-[300px] px-4 outline-none text-primary"
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
