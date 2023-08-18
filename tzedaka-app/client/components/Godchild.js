import React from "react";

const Godchild = (props) => {
  return (
    <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100 mr-20 ml-20 mt-20">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <img
          src="https://source.unsplash.com/75x75/?portrait"
          alt=""
          className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
        />
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold text-center md:text-left">
            {props.name}
          </h4>
          <p className="dark:text-gray-400">
            Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer
            velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque
            sit amet mi luctus ligula euismod lobortis ultricies et nibh.
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-4 space-x-4 align-center">
        <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Godchild;
