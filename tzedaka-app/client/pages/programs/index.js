import React from "react";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
const index = () => {
  return (
    <>
      <SignedIn>
        <div>Programs</div>
      </SignedIn>
      <SignedOut>
        <div>Programs</div>
      </SignedOut>
    </>
  );
};

export default index;
