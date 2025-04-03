import { MdDelete } from "react-icons/md";

function PlaylistCard({
  data,
  count,
  selectedIndex = 1,
  role,
  playLecture,
  removeLectureFunc,
}) {
  const { title, description } = data;
  return (
    <div className="flex my-2 rounded-xl overflow-hidden">
      <div
        className={`${
          selectedIndex === count ? "bg-blue-600" : "bg-blue-900"
        } cursor-pointer p-2`}
        onClick={playLecture}
      >
        <p>Lecture: {count}</p>
        <h3
          className={`${
            selectedIndex === count ? "text-yellow-300" : ""
          } text-lg font-semibold`}
        >
          {title}
        </h3>
        <p className="line-clamp-2 text-sm">{description}</p>
      </div>
      {role && role === "ADMIN" && (
        <button
          onClick={removeLectureFunc}
          className="text-3xl px-3 bg-red-500 hover:bg-red-600 active:text-black transition-all ease-in-out duration-300"
        >
          <MdDelete />
        </button>
      )}
    </div>
  );
}

export default PlaylistCard;
