import { useLoaderData, useParams } from "react-router-dom";
import { CarouselWithContent } from "./Slider";
import { useEffect, useState } from "react";
import DetailsOfProduct from "./DetailsOfProduct";

const Details = () => {
  const sliderDetails = useLoaderData();
  const { name } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`https://assignment-ten-project-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  const filterProduct = product?.filter((item) => item?.brandName == name);
  console.log(filterProduct);

  return (
    <div>
      <CarouselWithContent
        sliderDetails={sliderDetails}
        key={sliderDetails.brandName}
      ></CarouselWithContent>

      <div className="grid md:grid-cols-4 gap-6 container  my-10">
        {filterProduct?.length > 0 ? (
          filterProduct?.map((productDetail) => (
            <DetailsOfProduct
              productDetail={productDetail}
              key={productDetail._id}
            ></DetailsOfProduct>
          ))
        ) : (
          <div className="w-max mx-auto col-span-4">
            <h3 className="text-2xl">No data available</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
