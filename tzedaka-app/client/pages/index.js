import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
// import bg from "../../images/kid-transformed.png";
import bg from "../../images/children-playing.jpg";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const index = () => {
  return (
    <>
      <div
        className="flex items-center justify-end bg-cover h-screen"
        style={{
          backgroundColor: "#000",
          filter: "brightness(50%)",
          // opacity: "0.5",
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="flex flex-col items-center justify-center w-1/4 h-1/3 bg-transparent mr-20 rounded-md">
          <p
            className={`mt-4 text-4xl font-bold text-white ${roboto.className}`}
          >
            ¡BIENVENIDO!
          </p>
          <p className={`m-6 text-xl text-white ${roboto.className}`}>
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

      <div
        className={`flex flex-col items-center justify-center h-96 bg-gray-100 ${roboto.className}`}
      >
        <h1 className="text-4xl font-bold mb-8">Acerca de Fundación Tzedaká</h1>
        <p className="text-lg leading-7 text-center px-8">
          La Fundación Tzedaká trabaja para brindar oportunidades de desarrollo
          a población que vive en situación de vulnerabilidad. Una de los
          pilares de nuestra tarea es la educación, en la búsqueda de asegurar a
          niños y jóvenes su permanencia en el ámbito educativo con el objetivo
          de convertirlos en ciudadanos con herramientas para desarrollarse en
          el mundo adulto, fortaleciendo sus capacidades y facilitando su acceso
          al mercado laboral. Buscamos crearles un presente y un futuro con
          nuevos horizontes sociales y culturales quebrando de esta forma el
          círculo vicioso que mantiene a los sectores de menores recursos
          sumergidos en la pobreza y la exclusión. Creemos que todos tienen
          derecho a la educación y que vos podes ayudarnos. Apadrinar un chico
          es abrirle la puerta a un futuro distinto. Porque a través de la
          educación no solo recibe conocimientos sino que se expande su mundo,
          se integra socialmente con otros y tiene la posibilidad de soñar… y de
          concretar sus sueños. Con tu contribución, un chico, un adolescente o
          un joven se integran a los programas educativos de la Fundación donde
          reciben becas, contención y orientación que cambian su vida para
          siempre.
        </p>
      </div>
    </>
  );
};

export default index;
