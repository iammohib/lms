import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../layout/HomeLayout";
import { getUserData } from "../../store/slices/authSlice";
import {
  buySubscription,
  getRazorpayId,
  verifySubscription,
} from "../../store/slices/razorpaySlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const { key, subscription_id } = useSelector((state) => state.razorpay);

  const transactionDetails = {
    razorpay_payment_id: "",
    razorpay_subscription_id: "",
    razorpay_signature: "",
  };
  const handleSubscription = async (e) => {
    e.preventDefault();
    if (!key || !subscription_id) {
      toast.error("Something went wrong!");
      return;
    }

    const option = {
      key,
      subscription_id,
      name: "mohib schools Pvt. Ltd.",
      description: "The best school for quality learning.",
      theme: {
        color: "#F37254",
      },
      handler: async function (response) {
        transactionDetails.razorpay_payment_id = response.razorpay_payment_id;
        transactionDetails.razorpay_signature = response.razorpay_signature;
        transactionDetails.razorpay_subscription_id =
          response.razorpay_subscription_id;

        const res = await dispatch(verifySubscription(transactionDetails));
        await dispatch(getUserData()); //todo at very end
        res?.payload?.success
          ? navigate("/payment/checkout/success")
          : navigate("/payment/checkout/fail");
      },
    };

    const paymentObject = new window.Razorpay(option);
    paymentObject.open();
  };

  const load = async () => {
    await dispatch(getRazorpayId());
    await dispatch(buySubscription());
    setIsLoading(false);
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <HomeLayout>
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center text-white">
          Loading...
        </div>
      ) : (
        <form
          onSubmit={handleSubscription}
          className="min-h-screen flex items-center justify-center text-white"
        >
          <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
            <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
              Subscription Bundle
            </h1>
            <div className="px-4 space-y-5 text-center">
              <p className="text-[17px]">
                This purchase will allow you to access all available course of
                our platform for{" "}
                <span className="text-yellow-500 font-bold">
                  <br />1 Year duration
                </span>{" "}
                All the existing and new launched courses will be also available
              </p>

              <p className="flex items-center justify-center gap-1 text-2xl font-bold text-yellow-500">
                <BiRupee />
                <span>499</span> only
              </p>
              <div className="text-gray-200">
                <p>100% refund on cancellation</p>
                <p>* Terms and conditions applied *</p>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full left-0 text-xl font-bold rounded-bl-lg rounded-br-lg py-2"
              >
                Buy now
              </button>
            </div>
          </div>
        </form>
      )}
    </HomeLayout>
  );
}

export default Checkout;
