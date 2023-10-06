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

  const grid_cols = 2;
  // const grid_cols =
  //   userInfo["childrenInfo"]["ahijados"].length <= 3
  //     ? userInfo["childrenInfo"]["ahijados"].length
  //     : 3;
  console.log("userInfo", userInfo);

  return (
    <>
      {user && userInfo !== null && (
        <>
          <Godfather mainInfo={user} profileInfo={userInfo["childrenInfo"]} />
          <div className={`grid grid-cols-${grid_cols}`}>
            {userInfo.childrenInfo.ahijados.map((x) => {
              return <Godchild key={x.ahijado} name={x.ahijado} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
