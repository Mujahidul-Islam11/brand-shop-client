import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand";
import FeaturedMedia from "./FeaturedMedia";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
    const [movies, setMovies] = useState([])
    const brands = useLoaderData();
    useEffect(()=>{
        fetch('/movies.json')
        .then(res=> res.json())
        .then(data=> {
            setMovies(data)
        })
    },[])
    return (
        <div>
            <Banner></Banner>
            <h3 className="text-3xl font-bold my-16 text-center">Our Brands</h3>
            <div className="grid md:grid-cols-3 gap-4 container mx-auto">
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
            <h3 className="text-3xl font-bold text-center my-16">Featured Movies/TV Shows</h3>
            <FeaturedMedia movies={movies}></FeaturedMedia>
        </div>
    );
};

export default Home;