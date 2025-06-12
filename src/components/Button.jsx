import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white border hover:bg-[#42429B] transition duration-300 rounded-[10px] outline-none ${styles}`}
  >
    Quero ser BDG
  </button>
);


export default Button;
