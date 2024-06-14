import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

/* eslint-disable react/prop-types */
const Brand = ({ brand }) => {
  const { image, brandName } = brand;
  const { darkMode } = useDarkMode();
  return (
    <NavLink to={`/details/${brandName}`}>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="h-[250px] w-full" />
        </figure>
        <div className="card-body">
          <h3 className="text-xl font-bold">{brandName}</h3>
        </div>
      </div>
    </NavLink>
  );
};

export default Brand;
