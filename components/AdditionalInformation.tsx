import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
const AdditionalInformation = () => {
  return (
    <div>
      <div>
        <p className="text-xs font-extralight">
          MODE: <span className="font-normal text-sm">Online</span>
        </p>
        <p className="text-xs font-extralight">
          NUMBER OF ROUNDS: <span className="font-normal text-sm">2</span>
        </p>
        <p className="text-xs font-extralight">
          VERDICT: <span className="font-normal text-sm">Accepted</span>
        </p>
        <p className="text-xs font-extralight">
          DIFFICULTY: <span className="font-normal text-sm">Medium</span>
        </p>
        <p className="text-xs font-extralight">
          EXPERIENCE: <span className="font-normal text-sm">Positive</span>
        </p>
        <p className="text-xs font-extralight">
          PROGRAM: <span className="font-normal text-sm">Oncampus Hiring</span>
        </p>
      </div>
      <div className="py-4">
        <span>SOCIAL LINKS: </span>
        <div className="flex pt-2 justify-around text-2xl">
          <BsLinkedin /> <BsGithub /> <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
