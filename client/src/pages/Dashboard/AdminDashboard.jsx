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
import { Pie } from "react-chartjs-2";
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
        lable: "User Details",
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
        lable: "Sales/Month",
        data: monthlySalesRecord,
        backgroundColor: ["red"],
        borderWidth: 2,
        borderColor: ["white"],
      },
    ],
  };

  // console.log("allUserCount", allUserCount);
  // console.log("subscribedCount", subscribedCount);
  // console.log("allPayments", allPayments);
  // console.log("monthlySalesRecord", monthlySalesRecord);
  // console.log(courseData);
  useEffect(() => {
    (async () => {
      await dispatch(getAllPayments());
      await dispatch(getStatsData());
      await dispatch(getAllCourses());
    })();
  }, []);
  return (
    <HomeLayout>
      <div>
        <div>i am admin dashboard</div>
        <div>
          <Pie data={userData} />
        </div>
      </div>
    </HomeLayout>
  );
}

export default AdminDashboard;
