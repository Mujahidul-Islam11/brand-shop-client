
const AddProduct = () => {
    const handleForm = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const products = {name, brandName, type, description, price, rating, photo}
        console.log(products)
    }
    return (
        <div className="container mx-auto ">
            <div className="bg-[#194656] p-4 md:p-24 min-h-screen">
            <h2 className="text-3xl text-yellow-300 mt-[-50px] font-extrabold">Add a Product</h2>
            <form onSubmit={handleForm}>
                <div className="md:flex mb-4">
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text text-yellow-300">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-yellow-300">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-4">
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text text-yellow-300">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Product Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-yellow-300">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-4">
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text text-yellow-300">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-yellow-300">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-yellow-300">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block" />
            </form>
        </div>
        </div>
    );
};

export default AddProduct;