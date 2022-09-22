import Testimonial from "@/components/Testimonial";
import { useEffect, useState } from "react";
import { testimonials } from "../consts";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai/";
import { useAutoAnimate } from '@formkit/auto-animate/react'
export default function IndexPage() {
  const [parent] = useAutoAnimate<HTMLDivElement>(/* optional config */)
  const [index, setIndex] = useState(0);
  const handleLeft = () => {
    if (index === 0) {
      return;
    } else {
      setIndex(index - 1);
    }
  };
  const handleRight = () => {
    if (index === testimonials.length-3) {
      return;
    } else {
      setIndex(index + 1);
    }
  };
  useEffect(()=>{
console.log(index)
  },[index])

  return (
    <div className="flex flex-col justify-around bg-gray-100 w-[100wh] h-[100vh]">
      <div className="flex justify-center items-center gap-x-24 px-32" ref={parent}>
        {testimonials.slice(index,3+index).map((testimonial) => {
          return <Testimonial key={testimonial.id} {...testimonial}/>;
        })}
      </div>
      <div className="text-xl flex p-16 gap-x-16 justify-center">
        <div
          className={`bg-white text-xl rounded-full shadow-lg p-2 ${
            index == 0 && "cursor-not-allowed"
              ? "cursor-not-allowed  text-gray-400"
              : "hover:scale-125 text-indigo-500"
          }`}
        >
          <AiOutlineArrowLeft onClick={handleLeft} />
        </div>
        <div
          className={`bg-white text-xl rounded-full shadow-lg p-2 ${
            index == testimonials.length - 3
              ? "cursor-not-allowed text-gray-400"
              : "hover:shadow-xl hover:scale-125 text-indigo-500"
          }`}
        >
          <AiOutlineArrowRight onClick={handleRight} />
        </div>
      </div>
    </div>
  );
}
