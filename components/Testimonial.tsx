import React from "react";
import Description from "./Description";
import { MdOutlineFavoriteBorder } from "react-icons/md/index";
import TypeYearInfo from "./TypeYearInfo";
interface TestimonialComponentInterface {
  name: string;
  profileImgUrl: string;
  position: string;
  companyLogoUrl: string;
  roundOne: string;
  roundTwo: string;
  roundThree: string;
  summary: string;
}
const styles = {
  container:
    "w-[300px] h-[380px] md:h-[345px] bg-white shadow-lg pt-12 relative flex items-center flex-col gap-y-2 border-t-4 border-indigo-500/100 rounded p-4",
  name: "text-center text-lg font-medium",
  position: "text-center text-base font-normal",
  description: "text-left text-gray-500 text-sm leading-6",
};

const Testimonial = ({
  name,
  profileImgUrl,
  position,
  companyLogoUrl,
  roundOne,
  roundTwo,
  roundThree,
  summary,
}: TestimonialComponentInterface) => {
  return (
    <div className="mt-16">
      <div className={styles.container}>
        <div className="text-center mb-4 absolute -top-8 right-1/2 transform translate-x-1/2">
          <a href="#" className="block relative">
            <img
              alt="profil"
              src={profileImgUrl}
              // src="https://us.123rf.com/450wm/ostill/ostill1303/ostill130300206/121727155-paris%C3%A2%E2%82%AC%E2%80%9C-october-30-one-man-dressed-and-masked-as-a-member-of-anonymous-underground-group-member-hus.jpg?ver=6"
              className="mx-auto object-cover h-16 w-16 rounded-full shadow-[0_5px_5px_rgba(0,0,0,0.4)]"
              loading="lazy"
            />
          </a>
        </div>
        <div className="absolute top-4 right-64 transform translate-x-1/2">
          <div className="relative">
            <TypeYearInfo/>
          </div>
        </div>
        <div className="absolute top-4 right-10 transform translate-x-1/2">
          <div className="relative">
            <MdOutlineFavoriteBorder size={30}/>
          </div>
        </div>
        <div>
          <span className={styles.name}>{name}</span>
        </div>

        <div>
          <span className={styles.position}>{position}</span>
        </div>
        <div className="">
          <img
            loading="lazy"
            width="120px"
            height="40px"
            src={companyLogoUrl}
            alt="Google Logo"
          />
        </div>
        <div className="pt-2 overflow-scroll">
          {/* <p className={styles.description}>{description}</p> */}
          <Description {...{ roundOne, roundTwo, roundThree, summary }} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
