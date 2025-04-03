import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../../components/CourseCard";
import HomeLayout from "../../layout/HomeLayout";
import { getAllCourses } from "../../store/slices/courseSlice";

function CourseList() {
  const dispatch = useDispatch();
  const { courseData } = useSelector((state) => state.course);

  const getAllCourse = async () => {
    await dispatch(getAllCourses());
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  return (
    <HomeLayout>
      <div className="flex flex-col gap-10 text-white">
        <h1 className="text-center text-3xl font-semibold mb-5">
          Explore the courses made by
          <span className="font-bold text-yellow-500">Industry experts</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-14 mb-10">
          {courseData &&
            courseData.map((elem) => <CourseCard key={elem._id} data={elem} />)}
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseList;
