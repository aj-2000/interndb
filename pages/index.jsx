import Testimonial from "@/components/Testimonial";
import { useEffect, useState } from "react";
import SignInWithGoogleButton from "../components/SignInWithGoogleButton";
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
import VerdictSelect from "@/components/VerdictSelect";
import supabase from "utilis/supabase";
import { useFilters } from "context/FiltersContext";
import TailwindLoader from "@/components/TailwindLoader";
import ProfileMenu from "@/components/ProfileMenu";

export default function IndexPage() {
  const { filtersState, handleFilters } = useFilters();
  const [testimonialParent] = useAutoAnimate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [interviews, setInterviews] = useState([]);
  const user = supabase.auth.user();
  const fetchInterviews = () => {
    setIsLoading(true);
    supabase
      .from("interviews")
      .select()
      .then(({ data, error }) => {
        if (!error) {
          if (filtersState.filterByDifficulty !== "") {
            data = data?.filter(
              (interview) =>
                interview.difficulty === filtersState.filterByDifficulty
            );
          }
          if (filtersState.filterByExperience !== "") {
            data = data?.filter(
              (interview) =>
                interview.experience === filtersState.filterByExperience
            );
          }
          if (filtersState.filterByCompany !== "") {
            data = data?.filter(
              (interview) => interview.company === filtersState.filterByCompany
            );
          }
          if (filtersState.filterByProgram !== "") {
            data = data?.filter(
              (interview) => interview.program === filtersState.filterByProgram
            );
          }
          if (filtersState.filterByInternType !== "") {
            data = data?.filter(
              (interview) =>
                interview.interType === filtersState.filterByInternType
            );
          }
          if (filtersState.filterByBranch !== "") {
            data = data?.filter(
              (interview) => interview.branch === filtersState.filterByBranch
            );
          }
          if (filtersState.filterByYear !== "") {
            data = data?.filter(
              (interview) => interview.year === filtersState.filterByYear
            );
          }
          if (filtersState.filterByMode !== "") {
            data = data?.filter(
              (interview) => interview.mode === filtersState.filterByMode
            );
          }
          setInterviews(data);
          setIsLoading(false);
        } else {
          setError(error.message);
          setIsLoading(false);
        }
      });
  };
  useEffect(() => {
    fetchInterviews();
  }, [filtersState]);

  const [index, setIndex] = useState(0);
  const handleLeft = () => {
    if (index === 0) {
      return;
    } else {
      setIndex(index - 1);
    }
  };
  const handleRight = () => {
    if (index === interviews?.length - 1) {
      return;
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="flex flex-col justify-between bg-gray-100 min-h-[100vh]">
      {user?.id && <ProfileMenu />}
      <div className="flex items-center justify-around py-4">
        <div className="flex flex-col py-4">
          <span className="font-mono font-thin text-lg bg-gradient-to-bl">
            InternDB
          </span>
          <span className="font-sans font-light text-xs text-center">
            MADE with ❤️
          </span>
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <SearchBar />
        </div>

        <div className="">{!user?.id && <SignInWithGoogleButton />}</div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-y-2 gap-x-4 justify-end px-4">
        <VerdictSelect />
        <DifficultySelect />
        <ExperienceSelect />
        <ModeSelect />
        <ProgramSelect />
        <InternTypeSelect />
        <BranchSelect />
        <YearSelect />
        <CompanySelect />
        <button
          onClick={() =>
            handleFilters({
              filterByMode: "",
              filterByDifficulty: "",
              filterByExperience: "",
              filterByProgram: "",
              filterByInternType: "",
              filterByBranch: "",
              filterByYear: "",
              filterByCompany: "",
              filterByVerdict: "",
            })
          }
          className="hidden  md:block rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
        >
          Reset Filters
        </button>
      </div>
      <div className="md:hidden pt-2 px-4">
        <button
          onClick={() =>
            handleFilters({
              filterByMode: "",
              filterByDifficulty: "",
              filterByExperience: "",
              filterByProgram: "",
              filterByInternType: "",
              filterByBranch: "",
              filterByYear: "",
              filterByCompany: "",
              filterByVerdict: "",
            })
          }
          className="w-full rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
        >
          Reset Filters
        </button>
      </div>
      <div>
        {isLoading && (
          <div className="flex justify-center align-center my-auto">
            <TailwindLoader />
          </div>
        )}

        <div
          className={`flex gap-x-8 pl-4 md:px-32 overflow-hidden ${
            isLoading && "hidden"
          }`}
          ref={testimonialParent}
        >
          {interviews.slice(index).map((interview) => {
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
              index == interviews?.length - 1
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
