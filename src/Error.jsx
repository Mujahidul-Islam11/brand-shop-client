import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img src="https://i.ibb.co/zSznQHF/error-404.gif" alt="" />
      </div>
      <NavLink className="flex justify-center" to={'/'}>
        <button className="btn">Go Home</button>
      </NavLink>
    </div>
  );
};

export default Error;
