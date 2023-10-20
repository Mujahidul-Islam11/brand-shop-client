import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  const { brandName, photo, description, type, name, price, rating } = productDetails;
  console.log(productDetails)


  const handleCart = () => {
    fetch('http://localhost:5000/myCart',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productDetails)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            swal('Good Job', 'Successfully added to cart', 'success')
        }
    })
}


  return (
    <div className="relative flex w-full max-w-[48rem] mx-auto my-10 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={photo}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
      {brandName}
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {name}
    </h4>
    <p className="block border p-2 mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {type}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {description}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {price}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Rating:{rating}
    </p>
    <a className="inline-block" href="#">
      <button onClick={handleCart}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add To Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
  );
};

export default ProductDetails;
