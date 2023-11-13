import { universe45Light, universe65Bold } from "../utils/fonts";

const HomeMainText = () => {
    return (
      <div className="text-white text-center md:w-2/6 md:h-1/3 md:mr-20">
        <p className={`mt-4 text-4xl font-bold ${universe65Bold.className}`}>
          ¡BIENVENIDO!
        </p>
        <p className={`m-6 text-xl ${universe45Light.className}`}>
          Gracias por entrar a esta página, donde tenés la posibilidad de
          cambiar una vida. En esencia, eso es lo que hace un Padrino:
          darle a un chico o a un joven, una oportunidad; acompañarlo en su
          educación y sostenerlo dentro de un proyecto que le abre puertas:
          las de un futuro distinto.
        </p>
      </div>
    );
  };

  export default HomeMainText;