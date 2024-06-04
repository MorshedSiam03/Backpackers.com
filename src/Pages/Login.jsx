import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Email or Password",
        });
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
    .then(result=>{
      console.log(result.user);
      navigate(location?.state ? location.state : "/");
    })
    .catch();
  };
  return (
    <>
      <div className="hero">
        <div className="hero-content w-[100%] md:w-[60%] lg:w-[40%]">
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <div>
              <h1 className="text-5xl font-bold text-center my-3">
                Login Now!
              </h1>
            </div>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <label
                  className="absolute py-3 ml-[-30px] text-xl"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </label>
                </div>
                {errorMessage && (
                  <p className="text-red-600 mt-2 font-lg">
                    {" "}
                    {errorMessage.split("Firebase:")}{" "}
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button className="btn text-lg btn-primary">Login</button>
              </div>
              <p className="">
                If you do not have account!{" "}
                <Link
                  to={`/Register`}
                  className="underline text-blue-600 font-semibold"
                >
                  Register Here
                </Link>
              </p>
            </form>
            <div className="grid grid-cols-4 mt-[-35px] p-8 text-center items-center">
              <hr />
              <label className="col-span-2">or use one of these options</label>
              <hr />
            </div>
            <div className="flex items-center justify-center mt-[-30px] gap-2">
              <img
                onClick={handleGoogleLogin}
                className="w-20"
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt=""
              />
              <img
                className="w-20"
                src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
                alt=""
              />
              <img
                className="w-12 ml-2 h-12"
                src="https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png"
                alt=""
              />
            </div>
            <div className="mb-10 mt-2 px-7">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
