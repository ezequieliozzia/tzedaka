import Godchild from "@/components/Godchild";
import Godfather from "@/components/Godfather";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import ProfileService from "../services/ProfileService";

const Profile = () => {
  const { user } = useUser();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const childrenInfo = await ProfileService.fetchProfileInfo(
        "testemail@ffg.com"
      );
      setUserInfo({ mainInfo: user, childrenInfo: childrenInfo });
    };
    loadData();
  }, []);

  return (
    <>
      {user && userInfo && (
        <>
          <Godfather mainInfo={user} profileInfo={userInfo["childrenInfo"]} />
          {userInfo["childrenInfo"]["ahijados"].map((x) => {
            return <Godchild key={x} name={x} />;
          })}
        </>
      )}
    </>
  );
};

export default Profile;
