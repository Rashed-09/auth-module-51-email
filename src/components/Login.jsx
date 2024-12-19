import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

  const { signinUser, loginWithGoogle } = useContext(AuthContext);
  const navigateRout = useNavigate()
  
  const loginSubmitHandlar = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;


    signinUser(email, password)
    .then (result  => {
      const user = result.user;
      e.target.reset()
      navigateRout("/")
      console.log(user)
    })
    .catch(error => {
      const errMessage = error.message;
      console.log(errMessage)
    })

  }
  const googleLoginHandlar = () =>{
    loginWithGoogle()
    .then(result => {
      console.log(result.user)
      navigateRout("/");
    })
    .catch(error => {
      console.log(error.message)
    })
  }
   


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={loginSubmitHandlar} className="card-body">
            <div className="form-control">
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="flex gap-3">
              <span>If You have not an Account</span>
              <Link className="underline" to={"/register"}>
                Register
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <div></div>
              <div>
                Login With<button onClick={googleLoginHandlar} className="btn-ghost btn text-xl">Google</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
