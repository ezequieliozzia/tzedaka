import React from "react";

const FreeTextField = ({ id, label, type, pattern, required }) => {
  return (
    <div>
      <label
        for={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={id}
          id={id}
          autocomplete="given-name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          required
          pattern={pattern}
        />
      </div>
    </div>
  );
};

export default FreeTextField;
