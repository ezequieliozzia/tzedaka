import Godchild from "@/components/Godchild";
import Godfather from "@/components/Godfather";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import ProfileService from "../services/ProfileService";
import ErrorPage from "@/components/ErrorPage";
import DonationChart from "@/components/DonationChart";

const Profile = () => {
  const { user } = useUser();
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const childrenInfo = await ProfileService.fetchProfileInfo(
          "testemail@ffg.com"
        );
        if (Object.keys(childrenInfo).length === 0) {
          setError(true);
        }
        setUserInfo({ mainInfo: user, childrenInfo: childrenInfo });
      } catch (e) {
        setError(true);
      }
    };
    loadData();
  }, []);

  if (error)
    return (
      <ErrorPage
        title="Error"
        text="No pudimos los datos del usuario, intenta mas tarde."
      />
    );
  return (
    <>
      {user && userInfo !== null && (
        <>
          <div className="flex flex-col">
            <Godfather mainInfo={user} profileInfo={userInfo["childrenInfo"]} />
            <div className="p-10">
              {/* fsdfdsoijf */}
              <DonationChart />
            </div>
            <div className="p-10">
              {userInfo.childrenInfo.ahijados.map((x) => {
                return <Godchild key={x.ahijado} name={x.ahijado} />;
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
