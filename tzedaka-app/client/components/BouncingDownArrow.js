import React from "react";

const BouncingDownArrow = () => {
  return (
    <div className="flex justify-center">
      <div className="animate-bounce bg-purple-600 p-2 h-6 w-6 sm:w-10 sm:h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default BouncingDownArrow;
