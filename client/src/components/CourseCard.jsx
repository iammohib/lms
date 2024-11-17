import { useNavigate } from "react-router-dom";

function CourseCard({ data }) {
  const navigate = useNavigate();
  const {
    thumbnail,
    title,
    numberOfLectures,
    description,
    category,
    createdBy,
  } = data;
  return (
    <div
      onClick={() => navigate(`/courses/description`)}
      className="cursor-pointer text-white w-[22rem] h-[430px] overflow-hidden shadow-lg rounded-lg group bg-zinc-700"
    >
      <div className="overflow-hidden">
        <img
          src={thumbnail?.secure_url}
          alt="course thumbnail"
          className="h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale=[1,2] transition-all ease-in-out diration-300"
        />
        <div className="p-3 space-y-1 text-white">
          <h2 className="text-xl font-bold text-yellow-500 line-clamp-2">
            {title}
          </h2>
          <p className="line-clamp-2">{description}</p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold">Total Lectures : </span>
            {numberOfLectures}
          </p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold">Category : </span>
            {category}
          </p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold">Created By : </span>
            {createdBy}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
