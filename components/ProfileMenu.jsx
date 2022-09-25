import React, { useEffect, useState } from "react";
import supabase from "../utilis/supabase";
import { MdFavorite } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/router";

const ProfileMenu = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user);
  }, [user]);
  const logout = async () => {
    await supabase.auth.signOut().then(({ error }) => {
      if (error) {
        console.log(error);
      } else {
        router.push("/");
      }
    });
  };
  return (
    <div className="flex rounded justify-between px-2 md:px-4 bg-white">
      <div className="flex py-2 rounded-lg gap-x-2">
        <img
          className="rounded-full min-w-[40px] max-w-[40px] h-[40px]"
          loading="lazy"
          src={user?.identities?.at(0).identity_data?.picture || ""}
        />

        <div>
          <p className="text-sm ">Welcome,</p>
          <p className="text-xs">{user?.email.replace("@gmail.com", "")}</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-4 hover:cursor-pointer">
        <div className="flex justify-center gap-x-2 items-center py-2 px-4 shadow rounded-2xl">
          <MdFavorite className="text-pink-600" size={28} />
          <span className="text-sm uppercase font-semibold">Favorites</span>
        </div>
        <div
          onClick={logout}
          className="flex justify-center gap-x-2 items-center py-2 px-4 shadow rounded-2xl cursor-pointer"
        >
          <FiLogOut className="text-red-600" size={28} />
          <span className="text-sm uppercase font-semibold">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
