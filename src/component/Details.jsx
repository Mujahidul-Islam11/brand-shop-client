import { useLoaderData, useParams } from "react-router-dom";
import { CarouselWithContent } from "./Slider";
import { useEffect, useState } from "react";
import DetailsOfProduct from "./DetailsOfProduct";

const Details = () => {
    const sliderDetails = useLoaderData()
    const {name} = useParams();
    const [product, setProduct] = useState()

    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then(res => res.json())
        .then(data=>{
            setProduct(data)
        })
    },[])
    const filterProduct = product?.filter(item=> item?.brandName == name)

    return (
        <div>
        
           <CarouselWithContent sliderDetails={sliderDetails} key={sliderDetails.brandName}></CarouselWithContent>

        <div className="grid md:grid-cols-4 gap-6 container mx-auto my-10">
            {
                filterProduct?.map(productDetail => <DetailsOfProduct productDetail={productDetail} key={productDetail._id}></DetailsOfProduct>)
            }
        </div>
        </div>
    );
};

export default Details;