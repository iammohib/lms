import { useEffect } from "react";
import { useDispatch } from "react-redux";

import HomeLayout from "../../layout/HomeLayout";
import { getUserData } from "../../store/slices/authSlice";
import {
  buySubscription,
  getRazorpayId,
} from "../../store/slices/razorpaySlice";

function Checkout() {
  const dispatch = useDispatch();
  const load = async () => {
    await dispatch(getRazorpayId());
    await dispatch(buySubscription());
    await dispatch(getUserData()); //todo at very end
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <HomeLayout>
      <div>
        <h1>Checkout</h1>
      </div>
    </HomeLayout>
  );
}

export default Checkout;
