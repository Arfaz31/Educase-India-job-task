import React, { useContext } from "react";
import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa6";
import register from "../assets/register/118046-lf20-oahmox5rjson.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProviders";
const Register = () => {
  const { createUser, userUpdateData } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/setting";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const phoneNumber = form.phoneNumber.value
    console.log(name, email, password, phoneNumber);

    createUser( email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
       
        userUpdateData(result.user, name)
          .then(() => {
            console.log("update");
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error.message);
          });
         
      })
      .catch((error) => {
        console.log(error);
      });

      form.reset()
  };

  return (
    <div className="bg-slate-100 pb-20 md:pt-20 pt-24">
      <h1 className="font-bold md:text-4xl text-2xl text-center pt-10 md:pb-0 pb-8">
        create your PopX account
      </h1>

      <div className=" mb-24 md:px-10 px-0">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="md:inline hidden relative bottom-12">
            <Lottie animationData={register} loop={true} />
          </div>

          <div className=" md:w-3/4 w-96  mx-auto  md:pt-12 pt-4">
            <div className=" h-max">
              <div className=" flex-col lg:flex-row ">
                <div className="card shadow-2xl bg-base-100 ">
                  <div className="card-body  px-12 ">
                    <form onSubmit={handleRegister} className="space-y-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="name"
                          name="name"
                          className="input input-bordered "
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          name="email"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Phone number</span>
                        </label>
                        <input
                          type="text"
                          placeholder="phone number"
                          name="phoneNumber"
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
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Company name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="company name"
                          name="company"
                          className="input input-bordered"
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Are you an Agency?</span>
                        </label>
                        <div class="flex items-center">
                          <label for="yes" className="mr-6">
                            <input
                              type="radio"
                              id="yes"
                              name="agency"
                              value="yes"
                              className="form-radio h-4 w-4 text-indigo-700"
                            />
                            <span className="ml-2">Yes</span>
                          </label>
                          <label for="no">
                            <input
                              type="radio"
                              id="no"
                              name="agency"
                              value="no"
                              className="form-radio h-4 w-4 text-indigo-700"
                            />
                            <span className="ml-2">No</span>
                          </label>
                        </div>
                      </div>

                      <div className="form-control pt-10">
                        <input
                          className="btn btn-primary"
                          type="submit"
                          value="Sign UP"
                        />
                      </div>

                      <div>
                        <div className="divider">Or Sign In With</div>
                        <div className="w-full text-center my-4">
                          <button className="btn btn-circle btn-outline">
                            <FaGoogle />
                          </button>
                        </div>
                      </div>

                      <p className="my-4 text-center">
                        Already Logged in?{" "}
                        <Link className="text-indigo-700 font-bold" to="/login">
                          visit SignIn
                        </Link>
                      </p>
                    </form>
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

export default Register;
