/* eslint-disable react/prop-types */

const FeaturedCards = ({ movie }) => {
  const { title, image, description, rating } = movie;
  console.log(movie)
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="h-[350px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="">{description}</p>
        <p className="font-bold">Rating : {rating}</p>
      </div>
    </div>
  );
};

export default FeaturedCards;
