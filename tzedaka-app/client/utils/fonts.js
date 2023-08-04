import localFont from 'next/font/local'
import { Roboto, Lato} from "next/font/google";

export const universe45Light = localFont({ src: '../resources/fonts/Univers_45_Light_Regular.otf'})
export const universe55Roman = localFont({ src: '../resources/fonts/Univers_55_Roman.otf'})
export const universe65Bold = localFont({ src: '../resources/fonts/Univers_65_Bold_Regular.ttf'})

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const latoBold700 = Lato({
    weight: "700",
    display: "swap",
    subsets: ["latin"],
  });

