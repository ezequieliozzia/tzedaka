import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 rounded-full border-4 border-indigo-600 animate-grow motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"></div>
    </div>
  );
};

export default Spinner;
