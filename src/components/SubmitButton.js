import React, { useState } from "react";

const SubmitButton = ({ isFormValid, theme, setTheme }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    if (isFormValid) {
      setIsActive(true); // Only activate when the form is valid
      // Reset button text after 4 seconds
      setTimeout(() => {
        setIsActive(false);
      }, 4000); // Reset text after 4 seconds
    } else {
      event.preventDefault(); // Prevent submission if form is invalid
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button
        type="submit"
        disabled={!isFormValid} // Disable button when form is invalid
        onClick={handleClick}
        className={`py-3 px-12 text-white text-lg rounded-lg relative overflow-hidden shadow-md focus:outline-none ${
          isActive
            ? theme === 'dark'
              ? 'bg-green'
              : 'bg-pink'
            : 'bg-[#011d2b]'
        } transition-all duration-1000`}
      >
        <p
          className={`transition-all duration-1000 ${
            isActive ? "mr-12" : ""
          }`}
        >
          {isActive ? "Thanks" : "Submit"}
        </p>
        <div
          className={`absolute top-[10%] ${
            isActive ? "right-8 opacity-100" : "-right-10 opacity-0"
          } rounded-full bg-white/20 shadow-md flex items-center justify-center transition-all duration-1000`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            className="w-10 h-10"
          >
            <path
              fill="transparent"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
              className="stroke-white stroke-[3px] stroke-linecap-round transition-all duration-1000"
              style={{
                strokeDasharray: 34,
                strokeDashoffset: isActive ? 0 : 34,
              }}
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default SubmitButton;
