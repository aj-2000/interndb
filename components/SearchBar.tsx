import useSearchString from "context/SearchContext";
import React from "react";
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  const { searchState, handleSearch } = useSearchString();
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <input
            onChange={(e) => {
              handleSearch({ searchString: e.target.value });
            }}
            type="text"
            className="border-0 h-14 w-56 md:w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
            placeholder="Search Interviews..."
          />
          <div className="absolute top-3.5 right-3">
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
