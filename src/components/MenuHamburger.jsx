import { enlacesNavbar } from "../data/enlaces.navbar";

const MenuHamburger = ({ menu }) => {
  return (
    <div
      className={`flex flex-col justify-between items-start text-xl font-semibold  ${
        menu ? "hidden" : "flex"
      } my-5 py-5 bg-blue-500/10`}
    >
      {enlacesNavbar.map((enlace) => (
        <div key={enlace.id} className="mx-8 my-2 hover:text-blue-700">
          <a href={enlace.enlace}>{enlace.nombre}</a>
        </div>
      ))}
    </div>
  );
};

export default MenuHamburger;
