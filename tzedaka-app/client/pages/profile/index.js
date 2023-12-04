import ErrorPage from "@/components/ErrorPage";
import Spinner from "@/components/Spinner";
import DonationChart from "@/components/profile/DonationChart";
import Godfather from "@/components/profile/Godfather";
import KidsTable from "@/components/profile/KidsTable";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import ProfileService from "../../services/ProfileService";

const Profile = () => {
  const { user } = useUser();
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [donations, setDonations] = useState({});

  useEffect(() => {
    console.log("clerk user: ", user);
    if (user) {
      const email = user.primaryEmailAddress.emailAddress;
      // const email = "testemail@ffg.com";
      // const email = "padrino1@gmail.com";

      const loadData = async () => {
        try {
          const childrenInfo = await ProfileService.fetchProfileInfo(email);
          console.log("childrenInfo: ", childrenInfo);
          if (Object.keys(childrenInfo).length === 0) {
            setError(true);
          }
          setUserInfo({ mainInfo: user, childrenInfo: childrenInfo });
          setLoading(false);

          const donationsInfo = await ProfileService.getDonations(email);

          setDonations({
            xaxis: donationsInfo.data_x,
            series: { name: "Donaciones", data: donationsInfo.data_y },
          });
        } catch (e) {
          setError(true);
        }
      };
      loadData();
    }
  }, [user]);

  console.log("donations : ", donations);

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
            <KidsTable info={userInfo.childrenInfo.ahijados} />
            {Object.keys(donations).length !== 0 && (
              <DonationChart imgProperties={donations} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
