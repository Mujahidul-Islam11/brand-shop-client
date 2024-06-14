import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import FeaturedMedia from "./FeaturedMedia";
import { useEffect } from "react";
import { useState } from "react";
import Services from "./Services";
import Brands from "./Brands";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const brands = useLoaderData();
  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <Brands brands={brands}></Brands>
      <h3 className="text-3xl font-bold text-center my-16 text-black">
        Featured Movies/TV Shows
      </h3>
      <FeaturedMedia movies={movies}></FeaturedMedia>
      <h3 className={`text-3xl font-bold text-center my-16 text-black`}>
        Our Services
      </h3>
      <div className=" container flex justify-center ">
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
