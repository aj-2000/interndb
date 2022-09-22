import React from "react";

const styles = {
  container:
    "w-[22vw] h-[50vh] bg-white shadow-lg pt-12 relative flex items-center flex-col gap-y-4 border-t-4 border-indigo-500/100 rounded p-4",
  name: "text-center text-lg font-medium",
  position: "text-center text-base font-normal",
  description: "text-left text-gray-500 text-sm leading-loose",
};

const Testimonial = ({
  name,
  profileImg,
  position,
  companyLogo,
  description,
}: any) => {
  return (
    <div className="mt-24">
      <div className={styles.container}>
        <div className="text-center mb-4 absolute -top-8 right-1/2 transform translate-x-1/2">
          <a href="#" className="block relative">
            <img
              alt="profil"
              src={profileImg}
              className="mx-auto object-cover h-16 w-16 rounded-full shadow-2xl"
            />
          </a>
        </div>
        <div>
          <span className={styles.name}>{name}</span>
        </div>

        <div>
          <span className={styles.position}>{position}</span>
        </div>
        <div>
          <img
            loading="lazy"
            width="75px"
            height="25px"
            src={companyLogo}
            alt="Google Logo"
          />
        </div>
        <div className="overflow-scroll">
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
