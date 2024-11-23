import { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
        <h1>Loading...</h1>
      ) : (
        <form onSubmit={handleSubscription}>
          <h1>Checkout</h1>
          <button type="submit">Buy Subscription</button>
        </form>
      )}
    </HomeLayout>
  );
}

export default Checkout;
