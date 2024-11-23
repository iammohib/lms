import { useNavigate } from "react-router-dom";

import homepageHeroImg from "../assets/images/homepageHeroImg.png";
import HomeLayout from "../layout/HomeLayout";

function HomePage() {
  const navigate = useNavigate();
  return (
    <HomeLayout>
      <div className="flex items-center justify-center text-white gap-10 mx-10">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find out best
            <span className="text-yellow-500 font-bold"> Online Courses</span>
          </h1>

          <p className="text-gray-200 text-xl">
            We have a large library of courses taught by highly skilled and
            qualified faculties at a very affordable cost.
          </p>

          <div className="space-x-6">
            <button
              onClick={() => navigate("/courses")}
              className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300"
            >
              Explore courses
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img src={homepageHeroImg} alt="homepage image" />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
