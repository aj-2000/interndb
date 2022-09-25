import React from "react";
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <input
            type="text"
            className="border-0 h-14 w-64 md:w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
            placeholder="Search Interviews ..."
          />
          <div className="absolute top-3 right-3">
            <BsSearch
              className="text-gray-400 z-20 hover:text-gray-500"
              size={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
