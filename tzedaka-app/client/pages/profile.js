import Godchild from "@/components/Godchild";
import Godfather from "@/components/Godfather";
import React from "react";

const Profile = () => {
  return (
    <>
      <Godfather></Godfather>
      <div className="flex items-center justify-center">
        <Godchild></Godchild>
      </div>
    </>
  );
};

export default Profile;
