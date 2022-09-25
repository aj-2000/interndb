import supabase from "./supabase.js";
import { testimonials } from "../consts.js";
const seedDB = async () => {
  testimonials.map((testimonial) => {
    supabase
      .from("interviews")
      .insert({
        author: "866a94e2-b9cf-4b54-8c8c-1271c34eece9",
        profileImgUrl: testimonial.profileImg,
        name: testimonial.name,
        role: testimonial.position,
        companyName: "InternDB",
        companyLogoUrl: testimonial.companyLogo,
        roundOne: testimonial.roundOne,
        roundTwo: testimonial.roundTwo,
        roundThree: testimonial.roundThree,
        summary: testimonial.summary,
        numberOfRounds: 2,
        upVoters: [],
        downVoters: [],
        anonymous: false,
      })
      .then(({ error, data }) => {
        if (!error) {
          console.log(data);
        } else {
          console.error(error);
        }
      });
  });
};

seedDB();
