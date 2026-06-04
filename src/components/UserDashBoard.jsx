import React from "react";
import Nav from "./Nav.jsx";


function UserDashBoard(){
    return(
        
        <div className="w-full h-20 flex items-center justify-between md:justify-center gap-7 px-5 fixed top-0 z-9999 bg-[#fff9f6] overflow-visible">
            <Nav/>
            <p>Hello</p>
            <div className="w-full max-w-6xl  flex flex-col gap-5 items-start p-2.5">
                <h1 className="text-gray-800 text-2xl sm:text-3xl ">Inspiration for your first order</h1>


            </div>
        
            
        </div>
        
    )
}


export default UserDashBoard;