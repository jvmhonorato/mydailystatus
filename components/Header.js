import React from "react";
import NavBar from "./Navbar";

const Header = () => {
    return(
        <div className='bg-gray-200 '>
        <h1>
           <img 
           className='h-24 mx-auto py-4' 
           src='/calendar-icon.png' 
           alt='calendar' 
           height='60px' 
           />
       </h1>
       <NavBar/>
       
     </div>
    )
}

export default Header 