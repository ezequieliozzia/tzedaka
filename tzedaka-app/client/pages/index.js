import Layout from "@/components/Layout";
import React from "react";
import { useUser } from '@clerk/nextjs';

const index = () => {
  const { user } = useUser();
  return <div className="h-85v">index {user?.lastName}</div>;
};

export default index;

