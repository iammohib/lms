import aboutUsImg from "../assets/images/aboutUsImg.png";
import CarouselSlide from "../components/CarouselSlide";
import { CelebretyData } from "../constant/CelebretyData";
import HomeLayout from "../layout/HomeLayout";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="flex flex-col justify-center items-center space-y-20 text-white py-20">
        <div className="flex justify-center items-center gap-10 mx-10">
          <section className="w-1/2 space-y-6">
            <h1 className="text-5xl font-bold text-yellow-500">
              Affordable and quality education
            </h1>
            <p className="text-gray-200 text-xl">
              Our goal is to provide the afoordable and quality education to the
              world. We are providing the platform for the aspiring teachers and
              students to share their skills, creativity and knowledge to each
              other to empower and contribute in the growth and wellness of
              mankind.
            </p>
          </section>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={aboutUsImg}
              alt="About Us Image"
              className="w-[80%] rounded-3xl"
            />
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel w-2/3">
          {CelebretyData &&
            CelebretyData.map((celebrety) => (
              <CarouselSlide
                {...celebrety}
                key={celebrety.slideNumber}
                totalSlides={CelebretyData.length}
              />
            ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
