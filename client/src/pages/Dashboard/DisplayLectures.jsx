import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import PlaylistCard from "../../components/LectureComponents/PlaylistCard";
import HomeLayout from "../../layout/HomeLayout";
import {
  getCourseLectures,
  removeLecture,
} from "../../store/slices/lectureSlice";

function DisplayLectures() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { lectures } = useSelector((state) => state.lecture);
  const { role } = useSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState(true);
  const [currentLecture, setCurrentLecture] = useState(0);

  const getLectures = async () => {
    await dispatch(getCourseLectures(state._id));
    setIsLoading(false);
  };
  const removeLectureFunc = async (value) => {
    const res = await dispatch(
      removeLecture({ courseId: state?._id, lectureId: lectures[value]?._id })
    );
    if (res?.payload?.success) await getLectures();
  };

  useEffect(() => {
    if (!state) navigate("/courses");
    getLectures();
  }, []);
  return (
    <HomeLayout>
      {isLoading ? (
        "Loading"
      ) : lectures && lectures.length > 0 ? (
        <div className="grid grid-cols-3 min-h-screen justify-center text-white">
          <div className="col-span-2 px-5">
            <div className="">
              <video
                src={lectures[currentLecture]?.lecture?.secure_url}
                controls
                className="rounded-2xl"
                controlsList="nodownload"
              ></video>
            </div>
            <p className="bg-yellow-600 p-1 inline-block my-3">
              {state.title}: Lecture - {currentLecture + 1}/
              {state.numberOfLectures}
            </p>
            <h3 className="text-3xl text-yellow-600 font-bold">
              {lectures[currentLecture].title}
            </h3>
            <p className="text-xl">{lectures[currentLecture].description}</p>
          </div>
          <div className="max-h-screen bg-slate-900 pt-4 pl-4 rounded-2xl overflow-scroll">
            <h3 className="text-3xl font-bold">All Lectures</h3>
            {lectures.map((elem, idx) => (
              <PlaylistCard
                key={elem._id}
                count={idx + 1}
                data={elem}
                selectedIndex={currentLecture + 1}
                playLecture={() => setCurrentLecture(idx)}
                removeLectureFunc={() => removeLectureFunc(idx)}
                role={role}
              />
            ))}
          </div>
        </div>
      ) : (
        "No lectures available"
      )}
    </HomeLayout>
  );
}

export default DisplayLectures;
