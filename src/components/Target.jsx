import AboutMe from "./AboutMe";
import profile from "../img/profile.png";
import { targetData } from "../data/target";
import IconRedesTarget from "./IconRedesTarget";
import DatosTarget from "./DatosTarget";
import { descargarCV } from "../utils/config.js";

function Target() {
  const { nombre, apellido, cargo } = targetData[0];

  return (
    <div className="w-full lg:mt-16 md:mt-16 sm:mt-8">
      <div className="w-full flex justify-center items-center h-36 bg-blue-800 text-white dark:bg-blue-900/50 lg:flex md:flex sm:hidden -z-10 -mb-56">
        <div className="text-5xl pl-80 uppercase font-serif">
          <p className="font-extrabold">{nombre}</p>
          <p className="pl-32 font-extrabold mt-2">{apellido}</p>
        </div>
      </div>

      <div className="flex lg:flex-row md:flex-row sm:flex-col justify-center items-center h-auto lg:px-10 md:px-5 sm:px-3.5">
        <div className="t-main flex flex-col justify-start items-center bg-gray-950 text-gray-100 dark:text-black dark:bg-slate-900 rounded-2xl pt-12 w-80 h-auto sm:px-10">
          <div className="h-52 flex flex-row justify-center items-center select-none">
            <img
              className="rounded-full w-auto h-auto"
              rel="preload"
              type="image/webp"
              src={profile}
              alt={`Photo de ${nombre} ${apellido}`}
            />
          </div>

          <div className="t-descripcion flex text-center justify-center items-center text-3xl font-extrabold bg-blue-800 text-white dark:bg-blue-900/50 rounded-md w-auto px-3 mt-8 py-3 uppercase lg:hidden md:hidden sm:flex">
            {nombre} {apellido}
          </div>

          <div className="t-descripcion flex text-center justify-center items-center text-xl font-bold text-white bg-gray-800 dark:bg-gray-600 rounded-md w-auto px-3 mt-8 py-1">
            {cargo}
          </div>
          <div className="t-box flex items-center justify-center m-4">
            <IconRedesTarget />
          </div>
          <div className="t-box-2 items-start text-white bg-gray-800 dark:bg-gray-600 rounded-md w-60">
            <DatosTarget />
          </div>
          <div
            className="bg-blue-600 dark:bg-green-600 text-white dark:text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600/50 dark:hover:bg-green-600/50 mx-2 select-none my-4"
            onClick={descargarCV}
          >
            Descargar
          </div>
        </div>
        <AboutMe />
      </div>
    </div>
  );
}

export default Target;
