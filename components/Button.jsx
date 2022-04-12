import React from 'react';

const Button = ({ children }) => {
  return (
    <>
      <span className="py-2 px-6 bg-green-500 cursor-pointer rounded-lg text-white">
        {children}
      </span>
    </>
  );
};

export default Button;
