/* eslint-disable react/prop-types */
const Brand = ({ brand }) => {
  const { image, brandName} = brand
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="h-[250px] w-full"
        />
      </figure>
      <div className="card-body">
        <h3 className="text-xl font-bold">{brandName}</h3>
      </div>
    </div>
  );
};

export default Brand;
