import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <figure>
          <Image
            src={"/kid.png"}
            width={1800}
            height={700}
            border={0}
            // height={500}
            alt="Picture of the author"
          />
          <figcaption>An elephant at sunset</figcaption>
        </figure>
      </div>
      <div className="absolute inset-0">
        {/* <Image src="/kid.png" alt="background image" fill /> */}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold text-gray-200">
          Next JS 13 Background Image with Tailwind CSS{" "}
        </h1>
        <p className="mt-4 text-sm text-white">
          lorem ipsom Next JS 13 Background Image with Tailwind CSS
        </p>
      </div>
    </>
  );
};

export default index;
