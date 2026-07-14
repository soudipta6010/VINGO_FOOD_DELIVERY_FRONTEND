import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemCard from "../components/CartItemCard";


function CartPage() {
    const navigate = useNavigate();
    const {cartItems}= useSelector(state => state.user);
  return (
    <div className="min-h-screen bg-[#fff9f6] flex justify-center p-6">
      <div className="w-full max-w-200">
        <div className="flex items center gap-5 mb-6">
          <div className="z-10 cursor-pointer">
            <IoIosArrowRoundBack
              size={35}
              className="text-[#ff4d2d]"
              onClick={() => navigate("/")}
            />
          </div>
          <h1 className="text-2xl font-bold text-start">Your Cart</h1>
        </div>
        {cartItems?.length == 0 ? (
            <p className="text-gray-500 text-lg text-center">Your Cart Is Empty</p>
        ):(
            <div className="space-y-4">
                {cartItems?.map((item)=>(
                    <CartItemCard data= {item} key={item.id}/>
                ))}
            </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
