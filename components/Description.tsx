import React from "react";
import parse from "html-react-parser";
const Description = ({ roundOne, roundTwo, roundThree, summary }: any) => {
  return (
    <div className="flex flex-col min-w-[300px] px-4 gap-y-4">
      {summary !== "" && (
        <div>
          <span className="italic font-mono font-thin text-base">
            SUMMARY :
          </span>
          <p className="text-left text-gray-500 text-sm leading-6">
            {parse(summary)}
          </p>
        </div>
      )}
      {roundOne !== "" && (
        <div>
          <span className="italic font-mono font-thin text-base">ROUND 1:</span>
          <div className="text-left text-gray-500 text-sm leading-6">
            {parse(roundOne)}
          </div>
        </div>
      )}
      {roundTwo !== "" && (
        <div>
          <span className="italic font-mono font-thin text-base">ROUND 2:</span>
          <div className="text-left text-gray-500 text-sm leading-6">
            {parse(roundTwo)}
          </div>
        </div>
      )}
      {roundThree !== "" && (
        <div>
          <span className="italic font-mono font-thin text-base">ROUND 3:</span>
          <div className="text-left text-gray-500 text-sm leading-6">
            {parse(roundThree)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
