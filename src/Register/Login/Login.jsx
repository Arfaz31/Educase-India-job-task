import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import login from "../../assets/login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsButtonEnabled(newEmail !== "" && password !== "");
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsButtonEnabled(email !== "" && newPassword !== "");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

    //google login
    const handleSignInWithGoogle = () => {
      googleSignIn()
        .then((result) => {
          const user = result.user;
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log("error massage", error.massage);
        });
    };

  return (
    <div className="bg-slate-100 pb-32 md:pt-16 pt-24">
      <div className=" mb-24 md:px-10 px-0">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="md:inline hidden relative bottom-12 w-3/4 mx-auto mt-28">
            <Lottie animationData={login} loop={true} />
          </div>

          <div className=" md:w-3/4 w-96  mx-auto  md:pt-12 pt-4">
            <h1 className="font-bold md:text-4xl text-2xl text-center py-5">
              SignIn to your PopX account
            </h1>
            <p className="text-lg text-center pb-5">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipisicing elit.
            </p>
            <div className=" h-max">
              <div className=" flex-col lg:flex-row ">
                <div className="card shadow-2xl bg-base-100 ">
                  <div className="card-body  px-12 ">
                    <form onSubmit={handleLogin} className="space-y-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          name="email"
                          value={email}
                          onChange={handleEmailChange}
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
                          placeholder="password"
                          name="password"
                          value={password}
                          onChange={handlePasswordChange}
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control pt-10">
                        <input
                          className={`bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 ${
                            isButtonEnabled
                              ? ""
                              : "opacity-50 cursor-not-allowed"
                          }`}
                          disabled={!isButtonEnabled}
                          type="submit"
                          value="Sign In"
                        />
                      </div>

                      <p className="text-center py-4">Or SignIn with</p>
                      <div className=" w-max mx-auto mt-3">
                        <button
                        onClick={handleSignInWithGoogle}
                          className="btn btn-outline btn-primary"
                          type="submit"
                        >
                          {" "}
                          Google
                        </button>
                      </div>
                    </form>
                    <p className="my-4 text-center">
                      New to PopX?{" "}
                      <Link
                        className="text-indigo-700 font-bold"
                        to="/register"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
