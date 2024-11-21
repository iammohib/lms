import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import HomeLayout from "../../layout/HomeLayout";

function User() {
  const { data } = useSelector((state) => state.auth);
  const { avatar, fullName, email, role, subscription } = data;
  console.log(data);
  return (
    <HomeLayout>
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center gap-3 p-12 rounded-lg text-white w-1/3 shadow-[0_0_10px_black]">
          <img
            src={avatar.secure_url}
            alt="profile_image"
            className="w-40 h-40 rounded-full m-auto border-2"
          />
          <h3 className="text-center text-2xl font-semibold capitalize">
            {fullName}
          </h3>
          <div className="grid grid-cols-2 gap-1">
            <p>Email</p>
            <p>: {email}</p>
            <p>Role</p>
            <p>: {role}</p>
            <p>Subscription</p>
            <p>
              :{" "}
              {subscription?.status === "active"
                ? subscription.status
                : "Not Subscribed"}
            </p>
            <p>Subscription Id</p>
            <p>
              :{" "}
              {subscription?.status === "active"
                ? subscription.id
                : "Not Subscribed"}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Link
              to={"/changepassword"}
              className="w-1/2 text-center bg-yellow-600 hover:bg-yellow-400 transition-all ease-out duration-300 rounded-sm py-2 mt-2 font-semibold text-lg cursor-pointer"
            >
              Change Password
            </Link>
            <Link
              to={"/user/editprofile"}
              className="w-1/2 text-center bg-yellow-600 hover:bg-yellow-400 transition-all ease-out duration-300 rounded-sm py-2 mt-2 font-semibold text-lg cursor-pointer"
            >
              Edit Profile
            </Link>
          </div>
          {subscription?.status !== "active" && (
            <button className="bg-red-600 hover:bg-red-400 transition-all ease-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
              Cancle Subscription
            </button>
          )}
        </div>
      </div>
    </HomeLayout>
  );
}

export default User;
