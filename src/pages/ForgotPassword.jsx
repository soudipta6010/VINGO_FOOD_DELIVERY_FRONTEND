import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";
import { ClipLoader } from "react-spinners";

function ForgotPassword() {
  const primaryColor = "#ff4d2d";
  const hoverColor = "#e64323";
  const bgColor = "#fff9fc";
  const borderColor = "#ddd";
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  //   Send otp
  const handelSendOtp = async () => {
    setLoading(true);
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/send-otp`,
        { email },
        { withCredentials: true }
      );
      console.log(result);
      setErr("");
      setStep(2);
      setLoading(false);
    } catch (error) {
      setErr(error.response.data.message);
      setLoading(false);
    }
  };

  //Verify Otp
  const handelVerifyOtp = async () => {
    setLoading(true);
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/verify-otp`,
        { email, otp },
        { withCredentials: true }
      );
      console.log(result);
      setErr("");
      setStep(3);
      setLoading(false);
    } catch (error) {
      setErr(error?.response?.data?.message);
      setLoading(false);
    }
  };
  //Reset-Password
  const handelResetPassword = async () => {
    setLoading(true);
    try {
      if (newPassword != confirmPassword) {
        return alert("Passwords do not match.");
      }
      const result = await axios.post(
        `${serverUrl}/api/auth/reset-password`,
        { email, newPassword },
        { withCredentials: true }
      );

      setErr("");
      console.log(result);
      navigate("/signin");
      setLoading(false);
    } catch (error) {
      setErr(error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen p-4 bg-[#fff9fc]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <div className="flex items-center gap-4 mb-4">
          <IoIosArrowRoundBack
            size={30}
            className="text-[#ff4d2d] cursor-pointer"
            onClick={() => navigate("/signin")}
          />
          <h1 className="text-2xl font-bold text-center text-[#ff4d2d]">
            Forgot Password
          </h1>
        </div>
        {step == 1 && (
          <div>
            {/* email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-3 py-2   focus:outline-none focus:border-orange-500 "
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <button
              className={`w-full mt-4 flex items-center justify-center gap-2  rounded-lg px-4 py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
              onClick={handelSendOtp} disabled={loading}
            >
              {loading ? <ClipLoader size={20} color="white"/> : "Send OTP"}
            </button>
            {err && <p className="text-red-500 text-center my-2.5">*{err}</p>}
          </div>
        )}

        {step == 2 && (
          <div>
            {/* OTP */}
            <div className="mb-6">
              <label
                htmlFor="otp"
                className="block text-gray-700 font-medium mb-1"
              >
                Enter OTP
              </label>
              <input
                id="otp"
                name="otp"
                inputMode="numeric"
                autoComplete="one-time-code"
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2   focus:outline-none focus:border-orange-500 "
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
                required
              />
            </div>
            <button
              className={`w-full mt-4 flex items-center justify-center gap-2  rounded-lg px-4 py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
              onClick={handelVerifyOtp} disabled={loading }
            >
              {loading ? <ClipLoader size={20} color="white"/> : "Verify OTP"}
            </button>
            {err && <p className="text-red-500 text-center my-2.5">*{err}</p>}
          </div>
        )}

        {step == 3 && (
          <div>
            {/* Change password */}
            <div className="mb-6">
              <label
                htmlFor="newPassword"
                className="block text-gray-700 font-medium mb-1"
              >
                Enter New Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-200 rounded-lg px-3 py-2   focus:outline-none focus:border-orange-500 "
                placeholder="Enter New Password"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-medium mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-200 rounded-lg px-3 py-2   focus:outline-none focus:border-orange-500 "
                placeholder="Confirm  Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
            </div>
            <button
              className={`w-full mt-4 flex items-center justify-center gap-2  rounded-lg px-4 py-2 transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`}
              onClick={handelResetPassword} disabled={loading}
            >
              {loading ? <ClipLoader size={20} color="white"/> : "Reset Password"}
            </button>
            {err && <p className="text-red-500 text-center my-2.5">*{err}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
