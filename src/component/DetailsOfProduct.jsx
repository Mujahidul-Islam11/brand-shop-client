/* eslint-disable react/prop-types */

const DetailsOfProduct = ({ productDetail }) => {
  const { photo, description, type, name, price, rating } = productDetail;
  console.log(productDetail)
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="p-10">
        <img
          src={photo}
          alt="Shoes"
          className="border rounded-xl w-full h-[300px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="border rounded-lg p-2">Rating: <span className="text-yellow-600">{rating}</span></h3>
        <p>{description}</p>
        <h3 className="">Price: {price}</h3>
        <div className="card-actions justify-center gap-3">
          <button className="btn btn-primary">Details</button>
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsOfProduct;
