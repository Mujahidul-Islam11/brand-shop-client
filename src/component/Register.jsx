import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const { createUser, GoogleSignIn } = useContext(AuthContext);
  

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo)
    createUser(email, password)
    .then(result =>{
      console.log(result.user)
      swal("Good job!", "Successfully created user", "success");
    })
    .catch(error=>{
      console.error(error)
    })
  };

  const handleGoogleSignIn = () =>{
    GoogleSignIn()
            .then(result => {
                console.log(result.user);
                swal("Good job!", "Successfully created user", "success");
            })
            .catch(error => {
                console.error(error)
            })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="PhotoURL"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <h3>
                  Have an account?{" "}
                  <NavLink className="font-bold" to={"/login"}>
                    LogIn
                  </NavLink>
                </h3>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <h3 className="text-center">Or</h3>
          <button onClick={handleGoogleSignIn} className="btn btn-primary mb-2 mx-2">
            Register With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
