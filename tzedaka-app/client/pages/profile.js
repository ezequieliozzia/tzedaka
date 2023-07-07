import Godchild from "@/components/Godchild";
import Godfather from "@/components/Godfather";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

const Profile = () => {
  const { user } = useUser();
  console.log("user de clerk", user);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("/api/getUser", {
        method: "GET",
        cache: "no-store",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data ", data);
          setUsers(data.records);
        });
    }
    fetchData();
  }, []);

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
