import React from "react";
import { useUser } from "@clerk/nextjs";
import bg from "../images/children-playing.jpg";
import {universe45Light, universe65Bold} from "../utils/fonts";

const Index = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="flex ">
      <div
        className="flex items-center justify-end bg-cover mx-6"
        style={{
          height: "84vh",
          borderRadius: "0.5rem",
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="flex flex-col items-center justify-center w-1/4 h-1/3 bg-transparent mr-20 rounded-md">
          <p
            className={`mt-4 text-4xl font-bold text-white ${universe65Bold.className}`}
          >
            ¡BIENVENIDO!
          </p>
          <p className={`m-6 text-xl text-white ${universe45Light.className}`}>
            Gracias por entrar a esta página, donde tenés la posibilidad de
            cambiar una vida. En esencia, eso es lo que hace un{" "}
            <i>
              <b>Padrino</b>
            </i>
            : darle a un chico o a un joven, una oportunidad; acompañarlo en su
            educación y sostenerlo dentro de un proyecto que le abre puertas:
            las de un futuro distinto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
