import React from "react";
import { useSelector } from "react-redux";
import UserDashBoard from "../components/userDashBoard";
import OwnerDashBoard from "../components/OwnerDashBoard";
import DeliveryBoy from "../components/DeliveryBoy";

function Home() {
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="w-full min-h[100vh] pt-25 flex flex-col items-center bg-[#fff0fc]">
      {userData.role == "user" && <UserDashBoard />}
      {userData.role == "owner" && <OwnerDashBoard />}
      {userData.role == "deliveryBoy" && <DeliveryBoy />}
    </div>
  );
}

export default Home;
