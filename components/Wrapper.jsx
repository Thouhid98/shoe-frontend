import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <>
      <div
        className={`w-full max-h-[1280px] md:px-10 mx-auto ${className || ""}`}
      >
        {children}
      </div>
      ;
    </>
  );
};

export default Wrapper;
