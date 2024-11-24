function PlaylistCard({ data, count, onClick, selectedIndex = 1 }) {
  const { title, description } = data;
  return (
    <div
      className={`${
        selectedIndex === count ? "bg-blue-600" : "bg-blue-900"
      } my-2 cursor-pointer rounded-xl`}
      onClick={onClick}
    >
      <div className="p-2">
        <p>Lecture: {count}</p>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

export default PlaylistCard;
