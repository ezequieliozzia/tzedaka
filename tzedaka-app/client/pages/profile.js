import Godchild from "@/components/profile/Godchild";
import Godfather from "@/components/profile/Godfather";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import ProfileService from "../services/ProfileService";
import ErrorPage from "@/components/ErrorPage";
import DonationChart from "@/components/profile/DonationChart";
import Spinner from "@/components/Spinner";
import KidsTable from "@/components/profile/KidsTable";

const Profile = () => {
  const { user } = useUser();
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="content-center d-flex">
        <Spinner />
      </div>
    );
  }

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
          <div className="flex flex-col p-10">
            <Godfather mainInfo={user} profileInfo={userInfo["childrenInfo"]} />
            <DonationChart />
            <KidsTable info={userInfo.childrenInfo.ahijados} />
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
