import React from "react";
import parse from "html-react-parser";
import AdditionalInformation from "./AdditionalInformation";

const Description = ({ roundone, roundtwo, roundthree, summary }: any) => {
  return (
    <div className="flex flex-col min-w-[300px] px-4 gap-y-4">
      <div>
        <AdditionalInformation/>
      </div>
      {summary !== "" && (
        <div>
          <span className="italic font-mono font-thin text-base">
            SUMMARY :
          </span>
          <div className="text-left text-gray-500 text-sm leading-6">{summary && parse(summary)}</div>
        </div>
      )}
      {roundone !== "" && (
        <div>
          <span className="italic font-mono font-thin text-base">ROUND 1:</span>
          <div className="text-left text-gray-500 text-sm leading-6">
          {roundone && parse(roundone)}
          </div>
        </div>
      )}
      {roundtwo !== "" && (
        <div>
          <span className="italic font-mono font-thin text-base">ROUND 2:</span>
          <div className="text-left text-gray-500 text-sm leading-6">
          {roundtwo && parse(roundtwo)}
          </div>
        </div>
      )}
      {roundthree !== "" && (
        <div>
          <span className="italic font-mono font-thin text-base">ROUND 3:</span>
          <div className="text-left text-gray-500 text-sm leading-6">
          {roundthree && parse(roundthree)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
