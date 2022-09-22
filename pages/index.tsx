import Testimonial from "@/components/Testimonial";
import { useState } from "react";
import { testimonials } from "../consts";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai/";
import { useAutoAnimate } from "@formkit/auto-animate/react";
export default function IndexPage() {
  const [testimonialParent] =
    useAutoAnimate<HTMLDivElement>(/* optional config */);
  const [sliderControlParent] =
    useAutoAnimate<HTMLDivElement>(/* optional config */);

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
    <div className="flex flex-col justify-around bg-gray-100 w-[100wh] h-[100vh]">
      <div
        className="flex gap-x-8 pl-4 md:px-32 overflow-hidden"
        ref={testimonialParent}
      >
        {testimonials.slice(index).map((testimonial) => {
          return <Testimonial key={testimonial.id} {...testimonial} />;
        })}
      </div>
      <div className="text-xl flex p-16 gap-x-16 justify-center">
        <div
          ref={sliderControlParent}
          className={`bg-white text-3xl rounded-full shadow-lg p-2 ${
            index == 0 && "cursor-not-allowed"
              ? "cursor-not-allowed  text-gray-400"
              : "hover:scale-150 text-indigo-500"
          }`}
        >
          <AiOutlineArrowLeft onClick={handleLeft} />
        </div>
        <div
          ref={sliderControlParent}
          className={`bg-white text-3xl rounded-full shadow-lg p-2 ${
            index == testimonials.length - 1
              ? "cursor-not-allowed text-gray-400"
              : "hover:shadow-xl hover:scale-150 text-indigo-500"
          }`}
        >
          <AiOutlineArrowRight onClick={handleRight} />
        </div>
      </div>
    </div>
  );
}
