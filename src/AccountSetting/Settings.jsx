import React, { useContext, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProviders";
import {
    FaHome,
  } from "react-icons/fa";

const Settings = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const { user } = useContext(AuthContext);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  return (
    <div className=" ">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-96 h-full bg-gray-700 space-y-4">
            {/* Sidebar content here */}
            <div>
              <p className="normal-case text-white tracking-tighter font-bold md:text-2xl ps-2">
                Account Settings
              </p>
            </div>
            <div className="divider bg-white h-1"></div>
            <div className="pt-8 flex justify-around pb-8">
              <div className="   ">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  className="hidden"
                />
                <div
                  className="w-28 h-28 rounded-full overflow-hidden cursor-pointer"
                  onClick={handleImageClick}
                >
                  {image ? (
                    <img
                      src={image}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-12 h-12 text-gray-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h1 className="text-white text-xl text-left py-2">{user.displayName}</h1>
                <p className="text-white text-left py-1 text-base">{user.email}</p>
              </div>
            </div>
            <p className="text-white text-base pb-12" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus provident modi a magni perferendis!</p>
            <div className="divider bg-white h-1"></div>
            <li className="text-white text-base">
              <Link to="/">
                <FaHome></FaHome>Home
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
