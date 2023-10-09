import Godchild from "@/components/Godchild";
import Godfather from "@/components/Godfather";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import ProfileService from "../services/ProfileService";
import ErrorPage from "@/components/ErrorPage";
import Spinner from "@/components/Spinner";

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

  const grid_cols = 2;
  // const grid_cols =
  //   userInfo["childrenInfo"]["ahijados"].length <= 3
  //     ? userInfo["childrenInfo"]["ahijados"].length
  //     : 3;
  console.log("userInfo", userInfo);
  console.log("NODE_ENV= ", process.env.NODE_ENV);

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
