import Testimonial from "@/components/Testimonial";
import { useEffect, useState } from "react";
import { testimonials } from "../consts";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai/";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import SearchBar from "@/components/SearchBar";
import CompanySelect from "@/components/CompanySelect";
import YearSelect from "@/components/YearSelect";
import InternTypeSelect from "@/components/InternTypeSelect";
import BranchSelect from "@/components/BranchSelect";
import DifficultySelect from "@/components/DifficultySelect";
import ExperienceSelect from "@/components/ExperienceSelect";
import ModeSelect from "@/components/ModeSelect";
import ProgramSelect from "@/components/ProgramSelect";
import supabase from "utilis/supabase";
export default function IndexPage() {
  const [testimonialParent] = useAutoAnimate<HTMLDivElement>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [interviews, setInterviews] = useState<any>([]);
  const fetchInterviews = () => {
    supabase
      .from("interviews")
      .select()
      .then(({ data, error }) => {
        if (!error) {
          setInterviews(data);
        } else {
          setError(error.message);
        }
      });
  };
  useEffect(()=>{
    fetchInterviews();
  },[])
  const [index, setIndex] = useState(0);
  const handleLeft = () => {
    if (index === 0) {
      return;
    } else {
      setIndex(index - 1);
    }
  };
  const handleRight = () => {
    if (index === testimonials.length - 1) {
      return;
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="flex flex-col justify-between bg-gray-100 min-h-[100vh]">
      <div className="flex items-center justify-around py-4">
        <div className="flex flex-col py-4">
          <span className="font-mono font-thin text-lg bg-gradient-to-bl">
            InternDB
          </span>
          <span className="font-sans font-light text-xs text-center">
            MADE with ❤️
          </span>
        </div>
        <SearchBar />
      </div>
      <div className="flex flex-col md:flex-row gap-y-2 gap-x-4 justify-end px-4">
        <DifficultySelect />
        <ExperienceSelect />
        <ModeSelect />
        <ProgramSelect />
        <InternTypeSelect />
        <BranchSelect />
        <YearSelect />
        <CompanySelect />
      </div>
      <div>
        <div
          className="flex gap-x-8 pl-4 md:px-32 overflow-hidden"
          ref={testimonialParent}
        >
          {interviews.slice(index).map((interview:any) => {
            return <Testimonial key={interview.id} {...interview} />;
          })}
        </div>
        <div className="text-xl flex py-8 gap-x-16 justify-center">
          <div
            className={`bg-white text-3xl rounded-full shadow-lg p-2 ${
              index == 0 && "cursor-not-allowed"
                ? "cursor-not-allowed  text-gray-400"
                : "hover:scale-150 hover:cursor-pointer text-indigo-500"
            }`}
          >
            <AiOutlineArrowLeft onClick={handleLeft} />
          </div>
          <div
            className={`bg-white text-3xl rounded-full shadow-lg p-2 ${
              index == testimonials.length - 1
                ? "cursor-not-allowed text-gray-400"
                : "hover:shadow-xl hover:scale-150 hover:cursor-pointer text-indigo-500"
            }`}
          >
            <AiOutlineArrowRight onClick={handleRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
