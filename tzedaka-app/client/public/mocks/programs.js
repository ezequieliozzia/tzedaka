import idea from "../../images/Logo-IDEA.png";
import uni from "../../images/UNI-Logo-transparencia.png";
import abc from "../../images/abc.png";

import primaria from "../../images/primaria.jpg";
import secundaria from "../../images/secundaria.jpg";
import universidad from "../../images/universidad.jpg";

const programs = [
  {
    programId: 0,
    programName: "Primaria",
    programDescription:
      "Chicos en riesgo de deserción escolar, con bajo rendimiento por deficiencias nutricionales y sin seguimiento de su desarrollo y crecimiento forman parte del panorama cotidiano en la Argentina.",
    image: abc,
    scale: "100",
    bannerImage: primaria,
  },
  {
    programId: 1,
    programName: "Secundaria",
    programDescription:
      "1 de cada 2 adolescentes argentinos no termina la escuela secundaria. Algunos para trabajar en empleos precarios y de mala calidad. Otros, por falta de motivación y contención, integran el 30% de los jóvenes que no estudian ni trabajan.",
    image: idea,
    scale: "50",
    bannerImage: secundaria,
  },
  {
    programId: 2,
    programName: "Universidad",
    programDescription:
      "Solo el 10% de los jóvenes de menores recursos que terminan el secundario acceden a la universidad. Y muy pocos llegan a concretar el \nsueño de un título universitario con el que cambiar el paradigma familiar y torcer su destino.",
    image: uni,
    scale: "100",
    bannerImage: universidad,
  },
];

export default programs;
