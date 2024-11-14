/* eslint-disable react/prop-types */
function CarouselSlide({
  slideNumber,
  title,
  image,
  description,
  totalSlides,
}) {
  return (
    <div id={`slide${slideNumber}`} className="carousel-item relative w-full">
      <div className="flex flex-col justify-center items-center w-[70%] m-auto text-center space-y-4">
        <div className="sm:w-36 sm:h-36 lg:w-60 lg:h-60 w-28 h-28 rounded-full relative overflow-hidden border-solid border-white border-2">
          <img
            src={image}
            className="w-full h-full object-cover object-center"
            alt={title}
          />
        </div>
        <div>
          <p>{description}</p>
          <h3 className="text-2xl">{title}</h3>
        </div>
      </div>

      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a
          href={`#slide${slideNumber === 1 ? totalSlides : slideNumber - 1}`}
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href={`#slide${slideNumber === totalSlides ? 1 : slideNumber + 1}`}
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
}

export default CarouselSlide;
