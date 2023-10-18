import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brand from "./Brand";

const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h3 className="text-2xl font-bold my-7 text-center">Our Brands</h3>
            <div className="grid md:grid-cols-3 gap-4 container mx-auto">
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>

        </div>
    );
};

export default Home;