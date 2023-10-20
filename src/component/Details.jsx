import { useLoaderData } from "react-router-dom";
import { CarouselWithContent } from "./Slider";

const Details = () => {
    const sliderDetails = useLoaderData()

    return (
        <div>
        
           <CarouselWithContent sliderDetails={sliderDetails} key={sliderDetails.brandName}></CarouselWithContent>
        
        </div>
    );
};

export default Details;