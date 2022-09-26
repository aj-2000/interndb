import React, { useEffect, useState } from "react";
import Description from "./Description";
import {
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
} from "react-icons/md/index";
import TypeYearInfo from "./TypeYearInfo";
import supabase from "utilis/supabase";
interface TestimonialComponentInterface {
  id: string;
  name: string;
  profileImgUrl: string;
  position: string;
  companyLogoUrl: string;
  roundone: string;
  roundtwo: string;
  roundthree: string;
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
  id,
  name,
  profileImgUrl,
  position,
  companyLogoUrl,
  roundone,
  roundtwo,
  roundthree,
  summary,
}: TestimonialComponentInterface) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<any>([]);
  const user = supabase.auth.user();
  useEffect(() => {
    if (user) {
      supabase
        .from("users")
        .select("favorites")
        .eq("id", user?.id)
        .then(({ data, error }) => {
          setFavorites(data?.at(0).favorites);
          if (!error) {
            setIsFavorite(data?.at(0).favorites?.indexOf(id) > -1);
          } else {
            console.log(error);
          }
        });
    }
  }, [user]);
  const toggleFavorite = () => {
    if (isFavorite) {
      favorites.delete[favorites?.indexOf(id)];
    } else {
      favorites.push(id);
    }
    supabase
      .from("users")
      .update({ favorites: favorites })
      .eq("id", user?.id)
      .then((error) => {
        if (error) {
          console.log(error);
        } else {
          setIsFavorite(!isFavorite);
        }
      });
  };
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
            <TypeYearInfo />
          </div>
        </div>
        <div className="cursor-pointer absolute top-4 right-10 transform translate-x-1/2">
          <div onClick={toggleFavorite} className="text-pink-600 relative">
            {!isFavorite ? (
              <MdOutlineFavoriteBorder size={30} />
            ) : (
              <MdOutlineFavorite size={30} />
            )}
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
          <Description {...{ roundone, roundtwo, roundthree, summary }} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
