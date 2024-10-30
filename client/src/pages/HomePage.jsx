import { Link } from "react-router-dom";

import homepageHeroImg from "../assets/images/homepageHeroImg.png";
import HomeLayout from "../layout/HomeLayout";

function HomePage() {
  return (
    <HomeLayout>
      <div>
        <div>
          <h1>
            Find out best<span>Online Courses</span>
          </h1>

          <p>
            We have a large library of courses taught by highly skilled and
            qualified faculties at a very affordable cost.
          </p>

          <div>
            <Link>
              <button>Explore courses</button>
            </Link>
            <Link>
              <button>Contact Us</button>
            </Link>
          </div>
        </div>

        <div>
          <img src={homepageHeroImg} alt="homepage image" />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
