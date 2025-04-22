import React from "react";
import

const Navbar = () => {
    return(
        <>
          <nav>
            <ul className="flex justify-around bg-gray-800 text-white p-4 cursor-pointer">
              <li> <link to={"/"} >Home</link></li>
              <li><link to={""} >About</link></li>
              <li><link to={""} >Contacts</link></li>
              <li><link to={""} >Others</link></li>
            </ul>
          </nav>

      </>
    )
}
export default Navbar;