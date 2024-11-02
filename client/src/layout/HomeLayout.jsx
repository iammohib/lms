import { useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
function HomeLayout({ children }) {
  const inputToggle = useRef(null);

  const closeSidebar = () => {
    inputToggle.current.checked = false;
  };
  return (
    <div className="min-h-[90vh]">
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          ref={inputToggle}
        />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="text-3xl">
            <FiMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li className="flex flex-row">
              <Link to={"/"} className="flex flex-auto">
                LOGO
              </Link>
              <button onClick={closeSidebar} className="flex text-xl">
                <AiFillCloseCircle />
              </button>
            </li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>All Courses</Link>
            </li>
            <li>
              <Link to={"/"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/"}>About Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
