import React, { useState } from "react";

const CommentField = ({ id, label, height, maxChars }) => {
  const [comment, setComment] = useState("");
  const remainingChars = maxChars - comment.length;
  const charCountClassName = remainingChars <= 0 ? "text-red-500" : "";

  const handleCommentChange = (e) => {
    if (e.target.value.length <= maxChars) {
      setComment(e.target.value);
    }
  };

  return (
    <div className={`w-full ${height}`}>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <textarea
          name={id}
          id={id}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${charCountClassName}`}
          value={comment}
          onChange={handleCommentChange}
        />
        <div className="mt-2 flex justify-end">
          <p className={charCountClassName}>{remainingChars} caracteres restantes</p>
        </div>
      </div>
    </div>
  );
};

export default CommentField;