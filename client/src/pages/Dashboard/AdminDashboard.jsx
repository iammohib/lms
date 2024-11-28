import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as chartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../layout/HomeLayout";
import { deleteCourse, getAllCourses } from "../../store/slices/courseSlice";
import { getAllPayments } from "../../store/slices/razorpaySlice";
import { getStatsData } from "../../store/slices/statSlice";

chartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip
);

function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allUserCount, subscribedCount } = useSelector((state) => state.stat);
  const { allPayments, monthlySalesRecord } = useSelector(
    (state) => state.razorpay
  );
  const { courseData } = useSelector((state) => state.course);

  const deleteCourseFunc = async (id) => {
    if (window.confirm("Are you sure you want to delete the course ?")) {
      const res = await dispatch(deleteCourse(id));
      if (res?.payload?.success) {
        await dispatch(getAllCourses());
      }
    }
  };

  const userData = {
    labels: ["Registered User", "Enrolled User"],
    fontColor: "white",
    datasets: [
      {
        label: "User Details",
        data: [allUserCount, subscribedCount],
        backgroundColor: ["yellow", "green"],
        borderWidth: 1,
        borderColor: ["yellow", "green"],
      },
    ],
  };

  const salesData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    fontColor: "white",
    datasets: [
      {
        label: "Sales / Month",
        data: monthlySalesRecord,
        backgroundColor: ["red"],
        borderWidth: 2,
        borderColor: ["white"],
      },
    ],
  };

  useEffect(() => {
    (async () => {
      await dispatch(getAllPayments());
      await dispatch(getStatsData());
      await dispatch(getAllCourses());
    })();
  }, []);
  return (
    <HomeLayout>
      <div className="min-h-screen flex flex-col flex-wrap gap-10 text-white">
        <h1 className="text-4xl text-center font-bold text-yellow-500">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-2 gap-5 mx-10">
          <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
            <div className="h-80 w-80">
              <Pie data={userData} />
            </div>

            <div className="grid grid-cols-2 gap-5 mx-10">
              <div className="shadow-lg flex items-center justify-center p-5 gap-5">
                <div className="flex flex-col justify-center items-center font-bold">
                  <p>Registered Users</p>
                  <h3 className="text-3xl">{allUserCount}</h3>
                </div>
                <FaUsers className="text-5xl text-yellow-500" />
              </div>
              <div className="shadow-lg flex items-center justify-center p-5 gap-5">
                <div className="flex flex-col justify-center items-center font-bold">
                  <p>Subscribed Users</p>
                  <h3 className="text-3xl">{subscribedCount}</h3>
                </div>
                <FaUsers className="text-5xl text-green-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
            <div className="h-80 w-full">
              <Bar data={salesData} />
            </div>

            <div className="grid grid-cols-2 gap-5 mx-10">
              <div className="shadow-lg flex items-center justify-center p-5 gap-5">
                <div className="flex flex-col justify-center items-center font-bold">
                  <p>Subscription Count</p>
                  <h3 className="text-3xl">{allPayments?.count || 0}</h3>
                </div>
                <FcSalesPerformance className="text-5xl text-yellow-500" />
              </div>
              <div className="shadow-lg flex items-center justify-center p-5 gap-5">
                <div className="flex flex-col justify-center items-center font-bold">
                  <p>Total Revenue</p>
                  <h3 className="text-3xl">{allPayments?.count * 499 || 0}</h3>
                </div>
                <GiMoneyStack className="text-5xl text-green-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 p-10 rounded-lg text-white shadow-lg m-10">
          <div className="flex justify-between my-2 items-center">
            <h1 className="text-3xl font-semibold">Course Overview</h1>
            <button
              onClick={() => {
                navigate("/course/create");
              }}
              className="bg-yellow-600 hover:bg-yellow-400 transition-all ease-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer px-3"
            >
              Create new course
            </button>
          </div>

          <table className="table overflow-x-scroll">
            <thead className="">
              <tr>
                <th>S. No.</th>
                <th>Course Title</th>
                <th>Course Category</th>
                <th>Instructor</th>
                <th>Total Lectures</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courseData?.map((course, idx) => {
                return (
                  <tr
                    key={course._id}
                    className={`${(idx + 1) % 2 === 0 ? "bg-zinc-900" : ""}`}
                  >
                    <td>{idx + 1}</td>
                    <td>
                      <textarea
                        readOnly
                        value={course.title}
                        className="w-40 h-auto bg-transparent resize-none"
                      ></textarea>
                    </td>
                    <td>{course.category}</td>
                    <td>{course.createdBy}</td>
                    <td>{course.numberOfLectures}</td>
                    <td>
                      <textarea
                        readOnly
                        value={course.description}
                        className="w-80 h-auto bg-transparent resize-none"
                      ></textarea>
                    </td>
                    <td className="flex items-center gap-4">
                      <button
                        className="bg-yellow-500 hover:bg-ywllow-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                        onClick={() =>
                          navigate("/course/displaylectures", {
                            state: { ...course },
                          })
                        }
                      >
                        <BsCollectionPlayFill />
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                        onClick={() =>
                          navigate("/course/update", {
                            state: { ...course },
                          })
                        }
                      >
                        <FaPen />
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                        onClick={() => deleteCourseFunc(course?._id)}
                      >
                        <BsTrash />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AdminDashboard;
