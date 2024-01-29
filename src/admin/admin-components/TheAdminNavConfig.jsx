import {AiOutlineHome} from 'react-icons/ai';
import { MdOutlineAnalytics } from "react-icons/md";
import { HiOutlineCube } from "react-icons/hi2";
import { TfiWallet } from "react-icons/tfi";
import { LuBus,LuContact,LuUserSquare2 } from "react-icons/lu";
import { PiChartLineUpBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

export const AdminSidebarList = [
    {
        title: "Dashboard", icon: <AiOutlineHome className='text-xl -mt-1'></AiOutlineHome>
      },
    // {
    //     title: "Analytics", icon: <MdOutlineAnalytics className='text-xl -mt-1'></MdOutlineAnalytics>
    // },
    {
        title: "Products", icon: <HiOutlineCube className='text-xl -mt-1'></HiOutlineCube>
    },
    {
        title: "Payment", icon: <TfiWallet className='text-xl -mt-1'></TfiWallet>
    },
    {
        title: "Orders", icon: <LuBus className='text-xl -mt-1'></LuBus>
    },
    // {
    //     title: "Enquiry", icon: <LuContact className='text-xl -mt-1'></LuContact>
    // },
    // {
    //     title: "Marketing", icon: <PiChartLineUpBold className='text-xl -mt-1'></PiChartLineUpBold>
    // },
    {
        title: "Setting", icon: <IoSettingsOutline className='text-xl -mt-1'></IoSettingsOutline>
    }
]

export const AdminSidebarListSecond = [
    {
        title: "User", icon: <LuUserSquare2 className='text-xl -mt-1'></LuUserSquare2>
    },
    {
        title: "Logout", icon: <TbLogout2 className='text-xl -mt-1'></TbLogout2>
    }
]