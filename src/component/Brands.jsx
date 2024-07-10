/* eslint-disable react/prop-types */
import useDarkMode from "../hooks/useDarkMode";
import Brand from "./Brand";

const Brands = ({ brands }) => {
  const { darkMode } = useDarkMode();
  console.log(darkMode)
  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-base-100"}`}>
      <h3
        className={`text-3xl font-bold my-16 text-center ${
          darkMode ? " text-white" : "text-gray-800"
        }`}
      >
        Our Brands
      </h3>
      <div className="grid md:grid-cols-3 gap-4 container mx-auto">
        {brands?.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
