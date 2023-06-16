import Layout from "@/components/Layout";
import React from "react";
import { useUser } from '@clerk/nextjs';
import bg from "../../images/kid-transformed.png";

const index = () => {
    const { user } = useUser();
    console.log(user);

  return (
    <>
      <div
        className="flex items-center justify-end bg-cover h-screen"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="flex flex-col items-center justify-around w-1/4 h-1/4 bg-white mr-20 ">
          <p className="mt-4 text-2xl font-sans font-bold">BIENVENIDO</p>
          <p className="m-6 text-l font-sans">
            Gracias por entrar a esta página, donde tenes la posibilidad de
            cambiar una vida. Porque eso es lo que hace un Padrino: darle a un
            chico, a un joven, una oportunidad; acompañarlo en su educación y
            sostenerlo dentro de un proyecto que le abre puertas: las de un
            futuro distinto.
          </p>
        </div>
      </div>
    </>
  );
};

export default index;

