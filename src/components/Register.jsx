import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext)
  const registerFormHandlar = e => {
    e.preventDefault()
    const nameValue = e.target.name.value;
    const emailValue = e.target.email.value;
    const passwordValue = e.target.password.value;

     createUser(emailValue, passwordValue)
     .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
     })
     .catch(error => {
      const message = error.message;
      console.log(message)
     })
  }


    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={registerFormHandlar} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">UserName</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="flex gap-3">
                <span>If You have an Account</span>
                <Link className="underline" to={"/login"}>
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;