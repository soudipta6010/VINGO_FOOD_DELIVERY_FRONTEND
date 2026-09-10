import React, { useEffect } from "react";
import Nav from "./Nav.jsx";
import { useSelector } from "react-redux";
import axios from "axios";
import { serverUrl } from "../App.jsx";

function DeliveryBoy() {
  const { userData } = useSelector((state) => state.user);
  const getAssignments = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/order/get-assignments`, {
        withCredentials: true,
      });

      console.log("Assignments:", result.data);
    } catch (error) {
      console.log(error);
    }

    useEffect(() => {
      getAssignments();
    }, [userData]);
  };
  return (
    <div className="w-screen min-h-screen flex flex-col gap-5 items-center bg-[#fff9fc] overflow-y-auto">
      <Nav />
      <div className="w-full max-w-200 flex flex-col gap-5 items-center">
        <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-start items-center w-[90%] border border-orange-100 text-center gap-2">
          <h1 className="text-xl font-bold text-[#ff4d2d]">
            Welcome, {userData.fullName}{" "}
          </h1>
          <p className="text-[#ff4d2d]">
            {" "}
            <span className="font-semibold">Latitude:</span>{" "}
            {userData.location.coordinates[1]},{" "}
            <span className="font-semibold">Longitude:</span>{" "}
            {userData.location.coordinates[0]}{" "}
          </p>
        </div>
        {/* 8.44 hrs */}
      </div>
    </div>
  );
}

export default DeliveryBoy;
