import React from "react";
import { FcGoogle } from "react-icons/fc";
import supabase from "utilis/supabase";

const SignInWithGoogleButton = () => {
    async function signInWithGoogle() {
        console.log('signInWithGoogle')
        const { user, session, error } = await supabase.auth.signIn({
          provider: "google",
        });
      }
  return (
    <div onClick={signInWithGoogle} className="flex justify-center items-center bg-white rounded-lg py-2 px-4 gap-x-2 shadow-sm hover:shadow hover:cursor-pointer">
      <FcGoogle className="hover:scale-125" size={26} />
      <span className="text-lg font-extralight capitalize">Sign In</span>
    </div>
  );
};

export default SignInWithGoogleButton;
