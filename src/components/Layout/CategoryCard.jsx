import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ id, title, imageUrl }) => {
  return (
    <div className="p-3">
      <div className="w-64 flex flex-col items-center  max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <img
            className="size-52  sm:size-64   hover:size-full rounded-t-lg   transition duration-500 cursor-pointer "
            src={imageUrl}
          />
        </Link>
        <div className="p-5  flex flex-col items-center">
          <Link href="#">
            <h5 className=" font-serif mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>

          <Link
            to={`/foods/${id}`}
            className="  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Show Foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
