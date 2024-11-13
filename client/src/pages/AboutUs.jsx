import aboutUsImg from "../assets/images/aboutUsImg.png";
import elonMusk from "../assets/images/elonMusk.png";
import mahatmaGandhi from "../assets/images/mahatmaGandhi.png";
import samAltman from "../assets/images/samAltman.png";
import steveJobs from "../assets/images/steveJobs.png";
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
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col justify-center items-center w-[70%] m-auto text-center space-y-4">
              <div className="sm:w-36 sm:h-36 lg:w-60 lg:h-60 w-28 h-28 rounded-full relative overflow-hidden border-solid border-white border-2">
                <img
                  src={steveJobs}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <p>
                  "Your work is going to fill a large part of your life, and the
                  only way to be truly satisfied is to do what you believe is
                  great work. And the only way to do great work is to love what
                  you do."
                </p>
                <h3 className="text-2xl">Steve Jobs</h3>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col justify-center items-center w-[70%] m-auto text-center space-y-4">
              <div className="sm:w-36 sm:h-36 lg:w-60 lg:h-60 w-28 h-28 rounded-full relative overflow-hidden border-solid border-white border-2">
                <img
                  src={elonMusk}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <p>
                  "When something is important enough, you do it even if the
                  odds are not in your favor."
                </p>
                <h3 className="text-2xl">Elon Musk</h3>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col justify-center items-center w-[70%] m-auto text-center space-y-4">
              <div className="sm:w-36 sm:h-36 lg:w-60 lg:h-60 w-28 h-28 rounded-full relative overflow-hidden border-solid border-white border-2">
                <img
                  src={samAltman}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <p>
                  "The strength of a network is the strength of the individuals
                  within it. It's not about creating the illusion of value; it’s
                  about creating actual value."
                </p>
                <h3 className="text-2xl">Sam Altman</h3>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col justify-center items-center w-[70%] m-auto text-center space-y-4">
              <div className="sm:w-36 sm:h-36 lg:w-60 lg:h-60 w-28 h-28 rounded-full relative overflow-hidden border-solid border-white border-2">
                <img
                  src={mahatmaGandhi}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <p>"Be the change that you wish to see in the world."</p>
                <h3 className="text-2xl">Mahatama Gandhi</h3>
              </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
