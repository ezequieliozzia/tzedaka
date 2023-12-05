import ErrorPage from "@/components/ErrorPage";
import Spinner from "@/components/Spinner";
import DonationChart from "@/components/profile/DonationChart";
import Godfather from "@/components/profile/Godfather";
import KidsTable from "@/components/profile/KidsTable";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import ProfileService from "../../services/ProfileService";
import StyledLinkButton from "@/components/StyledLinkButton";
import BouncingDownArrow from "@/components/BouncingDownArrow";
import ShareButtons from "@/components/ShareButtons";

const Profile = () => {
  const { user } = useUser();
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [donations, setDonations] = useState({});
  const [showShareButtons, setShowShareButtons] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleInviteClick = (e) => {
    e.preventDefault(); // Prevent redirection
    setShowShareButtons((prev) => !prev); // Alternates visibility of ShareButtons
  };

  useEffect(() => {
    let timeout;
    if (showShareButtons) {
      timeout = setTimeout(() => setIsLoaded(true), 50); // Establish isLoaded to true after 50ms
    } else {
      setIsLoaded(false); // Restablish isLoaded to false
    }
    return () => clearTimeout(timeout); // Clears timeout if component unmounts or if showShareButtons changes before timeout triggers
  }, [showShareButtons]);

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
          <div className="flex flex-col justify-center sm:flex-row sm:space-x-4 p-10">
            <div className="p-2">
              <StyledLinkButton
                href="/form"
                label="Quiero Apadrinar"
                bgColor="bg-purple-600"
                textColor="text-white"
                hoverBgColor="bg-purple-200"
                hoverTextColor="text-white-800"
              />
            </div>
            <div className="p-2">
              <StyledLinkButton
                href="/"
                label="Invitar a otros a sumarse"
                bgColor="bg-purple-600"
                textColor="text-white"
                hoverBgColor="bg-purple-200"
                hoverTextColor="text-white-800"
                onClick={handleInviteClick}
              />
              {showShareButtons && (
                <div
                  className={`transition-opacity duration-1000 ease-out ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="mt-2 sm:mt-4 sm:mb-2">
                    <BouncingDownArrow />
                  </div>
                  <ShareButtons />
                </div>
              )}
            </div>
          </div>
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
