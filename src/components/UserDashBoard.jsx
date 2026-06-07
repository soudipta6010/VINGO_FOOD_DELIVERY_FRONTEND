import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav.jsx";
import categories from "../category.js";
import CategoryCard from "./CategoryCard.jsx";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { useSelector } from "react-redux";

function UserDashBoard() {
  const {currentCity}=useSelector(state=>state.user);
  const cateScrollRef = useRef();
  const [showLeftCateButton, setShowLeftCateButton] = useState(false);
  const [showRightCateButton, setShowRightCateButton] = useState(true);
  const updateButton = (ref, setLeftButton, setRightButton) => {
    const element = ref.current;
    if (element) {
      setLeftButton(element.scrollLeft > 0);
      setRightButton(
        element.scrollLeft + element.clientWidth < element.scrollWidth 
      );
    }
  };
  const scrollHandeler = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction == "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (cateScrollRef.current) {
      cateScrollRef.current.addEventListener("scroll", () => {
        updateButton(
          cateScrollRef,
          setShowLeftCateButton,
          setShowRightCateButton
        );
      });
    }
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col gap-5 items-center bg-[#fff9fc] overflow-y-auto ">
      <Nav />
      {/* Div for category */}
      <div className="w-full max-w-6xl  flex flex-col gap-5 items-start p-2.5">
        <h1 className="text-gray-800 text-2xl sm:text-3xl ">
          Inspiration for your first order
        </h1>
        <div className="w-full relative">
          {showLeftCateButton && (
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#ff4d2d] text-white p-2 rounded-full shadow-lg hover:bg-[#e64528] z-10 "
              onClick={() => scrollHandeler(cateScrollRef, "left")}
            >
              <FaCircleChevronLeft />
            </button>
          )}

          <div
            className="w-full flex overflow-x-auto gap-4 pb-2  "
            ref={cateScrollRef}
          >
            {categories.map((cate, index) => (
              <CategoryCard data={cate} key={index} />
            ))}
          </div>
          {showRightCateButton  && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#ff4d2d] text-white p-2 rounded-full shadow-lg hover:bg-[#e64528] z-10 "
              onClick={() => scrollHandeler(cateScrollRef, "right")}
            >
              <FaCircleChevronRight />
            </button>
          )}
        </div>
        
      </div>

          {/* div for Shop  */}
      <div className="w-full max-w-6xl flex flex-col gap-5 items-start p-2.5 ">
      <h1 className="text-gray-800 text-2xl sm:text-3xl ">
          Best shop in {currentCity}
        </h1>
      </div>
    </div>
  );
}

export default UserDashBoard;
