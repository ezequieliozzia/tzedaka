import { universe45Light, universe65Bold } from "../utils/fonts";

const HomeMainText = () => {
  return (
    <div className="text-white lg:w-2/6">
      <p
        className={`mt-4 text-sm sm:text-xl text-center font-bold ${universe65Bold.className}`}
      >
        TE DAMOS LA BIENVENIDA
      </p>
      <p
        className={`m-2 sm:m-6 text-sm sm:text-xl ${universe45Light.className}`}
      >
        Gracias por entrar a esta página, donde tenés la posibilidad de cambiar
        una vida. En esencia, eso es lo que hace un Padrino o una Madrina: darle
        a un chico o a un joven una oportunidad, acompañarlo en su educación y
        sostenerlo dentro de un proyecto que le abre puertas de un futuro
        distinto. Los programas educativos de la Fundación Tzedaká brindan apoyo
        a estudiantes en situación de vulnerabilidad para que puedan completar
        sus estudios y formar un proyecto de vida. ¡Sumate! Tu ayuda hace la
        diferencia.
      </p>
    </div>
  );
};

export default HomeMainText;
