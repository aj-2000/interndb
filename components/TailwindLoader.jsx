import React from "react";

const TailwindLoader = () => {
  return (
    <div className="loader bg-white p-5 rounded-full flex space-x-3">
      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
      <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
    </div>
  );
};

export default TailwindLoader;
