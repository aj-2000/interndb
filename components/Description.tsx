import React from "react";

const Description = ({
  roundOne = "",
  roundTwo = "",
  roundThree = "",
}: any) => {
  return (
    <div className="flex flex-col min-w-[300px] px-4 gap-y-4">
      {roundOne !== "" && (
        <div>
          <span className="italic font-mono font-thin text-base">Round 1:</span>
          <p className="text-left text-gray-500 text-sm leading-6">
            {roundOne}
          </p>
        </div>
      )}
      {roundTwo !== "" && (
        <div>
          <span className="italic font-mono font-thin text-base">Round 2:</span>
          <p className="text-left text-gray-500 text-sm leading-6">
            {roundTwo}
          </p>
        </div>
      )}
      {roundThree !== "" && (
        <div>
          <span className="italic font-mono font-thin text-base">Round 3:</span>
          <p className="text-left text-gray-500 text-sm leading-6">
            {roundThree}
          </p>
        </div>
      )}
    </div>
  );
};

export default Description;
