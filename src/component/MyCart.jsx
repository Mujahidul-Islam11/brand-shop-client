import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {

const loadedData = useLoaderData()
    console.log(loadedData);
    const [cartData, setCartData] = useState(loadedData)

    const handleDelete = (_id) => {
        Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myCart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("deleted",data);
            if(data.deletedCount){
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
      
            }
            const remaining = cartData.filter(data => data._id !== _id)
            setCartData(remaining)
          });
       
      }
    });
        

    }
    return (
        <div>
            {
                cartData.map(cart => <div key={cart._id} className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                  <img
                    src={cart.photo}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      {cart.name}
                    </p>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      {cart.price}
                    </p>
                  </div>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                    {cart.descripsion}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button onClick={()=>handleDelete(cart._id)}
                    className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>)
            }
        </div>
    );
};

export default MyCart;