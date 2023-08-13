import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaRegQuestionCircle, FaUserCircle, FaUserCog } from "react-icons/fa";
const Settings = () => {
    return (
        <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-info drawer-button lg:hidden md:my-0 my-10"
          >
            Open drawer
          </label>

          {/* Page content here */}
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gray-700 space-y-4">
            {/* Sidebar content here */}
            <div className="md:ml-10 pl-20 md:pl-0">
              <Link to="/">
                {" "}
                <div>
                  <p className="normal-case text-white tracking-tighter font-extrabold md:text-3xl ps-2">
                    PopX
                  </p>
                </div>
              </Link>
            </div>
            <div className="divider bg-white h-1"></div>

            <div>
           
                <li className="text-white">
                <FaUserCircle></FaUserCircle> User Profile
                </li>
                <li className="text-white">
                <FaUserCog></FaUserCog> Settings
             
                </li>
                <li className="text-white">
                <FaRegQuestionCircle></FaRegQuestionCircle> Help & Support
                </li>
            </div>

            <div className="divider bg-white h-1"></div>
            <li className="text-white">
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