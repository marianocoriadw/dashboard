import React from 'react';
import {RiHome6Line, RiPercentLine , RiPieChart2Line,RiMailLine , RiNotification3Line , RiSettings5Line, RiLogoutBoxRLine} from "react-icons/ri";

const Sidebar = (props) => {
    const {showMenu} = props;
  return (
    <div className={`bg-[#1F1D2B] fixed top-0 lg:left-0 w-28 h-full flex flex-col justify-between py-2 rounded-tr-xl rounded-br-xl z-50 ${showMenu ? "left-0" : "left-full"}`}  >
        <div>
            <ul className="pl-4">
        <li>
            <h1 className="text-2xl text-gray-300 uppercase text-center font-bold my-5" >Logo</h1>
        </li>
        <li className="bg-[#252837] p-4  rounded-tl-xl rounded-bl-xl">
            <a href="*" className="bg-[#e87d6c] flex justify-center p-4 rounded-xl text-white">
                < RiHome6Line className="text-1xl"/>
            </a>
        </li>
        <li className="hover:bg-[#252837] p-4  rounded-tl-xl rounded-bl-xl group transition-color">
            <a href="*" className="group-hover:bg-[#e87d6c] flex justify-center p-4 rounded-xl text-[#e87d6c] group-hover:text-white transition-color">
                < RiPercentLine className="text-1xl"/>
            </a>
        </li>
        <li className="hover:bg-[#252837] p-4  rounded-tl-xl rounded-bl-xl group transition-color">
            <a href="*" className="group-hover:bg-[#e87d6c] flex justify-center p-4 rounded-xl text-[#e87d6c] group-hover:text-white transition-color">
                < RiPieChart2Line className="text-1xl"/>
            </a>
        </li>
        <li className="hover:bg-[#252837] p-4  rounded-tl-xl rounded-bl-xl group transition-color">
            <a href="*" className="group-hover:bg-[#e87d6c] flex justify-center p-4 rounded-xl text-[#e87d6c] group-hover:text-white transition-color">
                < RiMailLine className="text-1xl"/>
            </a>
        </li>
        <li className="hover:bg-[#252837] p-4  rounded-tl-xl rounded-bl-xl group transition-color">
            <a href="*" className="group-hover:bg-[#e87d6c] flex justify-center p-4 rounded-xl text-[#e87d6c] group-hover:text-white transition-color">
                < RiNotification3Line  className="text-1xl"/>
            </a>
        </li>
        <li className="hover:bg-[#252837] p-4  rounded-tl-xl rounded-bl-xl group transition-color">
            <a href="*" className="group-hover:bg-[#e87d6c] flex justify-center p-4 rounded-xl text-[#e87d6c] group-hover:text-white transition-color">
                < RiSettings5Line  className="text-1xl"/>
            </a>
        </li>
      
            </ul>
        </div>
        <div className='pl-4'>
            <ul>
                <li className="hover:bg-[#252837] p-4  rounded-tl-xl rounded-bl-xl group transition-color">
                    <a href="*" className="group-hover:bg-[#e87d6c] flex justify-center p-4 rounded-xl text-[#e87d6c] group-hover:text-white transition-color">
                    < RiLogoutBoxRLine className="text-1xl"/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
