import "../button.scss"
import "../theme.scss"
import "../font.scss"
import "../navbar.scss"
import {v4 as uuidv4} from "uuid";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { mainNav } from "../pages/Konga/Konga";

//IMPORTED SVGs
import menu from "../SVGs/menu.svg"

// IMPORTED PICTURES
import venmobile from "../PICTURES/konga_link_desktop.jpg"
import ventablet from "../PICTURES/konga_tablet.jpg"
import vendesktop from "../PICTURES/konga_desktop.jpg"

export default function Navbar(props){
    const [btnshow , setBtnshow] = useState("hidden opacity-0");
    const [catshow, setCatshow] = useState("top-[-50%]");

    function OpenCat(){
        setBtnshow("block opacity-90");
        setCatshow("block top-0");
    }

    function CloseCat(){
        setBtnshow("hidden opacity-0");
        setCatshow("block top-[-50%]");
    }

    // w-[70%] sm:w-[70%] md:w-[80%] lg:w-[85%]

    // const main_nav = props.mainNav;

    return (
        <>
            {/* MOBILE AND TABLET NAVBAR BUTTON PANE */}
            <div className="navbar w-auto flex flex-row items-center justify-start white_col z-[1] xl:border-b-[1px] xl:border-gray-300 xl:hidden">
             
                <div className="flex flex-row ">
                    {/* HOME ICON AND VENDOR LOGO IMAGE DIV */}
                        {/* HOME ICON */}
                        <Link
                        className = "flex flex-col items-center w-max h-max mx-4 my-auto"
                        to = "/">
                            {/* HOME ICON SVG */}
                            <svg className = "w-[20px] md:w-[25px] xl:w-[30px] black" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2324 5.08155C10.1704 5.02921 10.0879 5 10.0021 5C9.91627 5 9.83377 5.02921 9.77176 5.08155L2.10412 11.545C2.07156 11.5725 2.04565 11.6055 2.02797 11.6421C2.01029 11.6787 2.0012 11.718 2.00125 11.7578L2 17.824C2 18.1359 2.14042 18.435 2.39036 18.6555C2.64031 18.8761 2.9793 19 3.33278 19H7.33528C7.51201 19 7.68151 18.938 7.80648 18.8278C7.93146 18.7175 8.00167 18.5679 8.00167 18.412V13.4138C8.00167 13.3358 8.03677 13.261 8.09926 13.2059C8.16174 13.1508 8.24649 13.1198 8.33486 13.1198H11.6668C11.7552 13.1198 11.8399 13.1508 11.9024 13.2059C11.9649 13.261 12 13.3358 12 13.4138V18.412C12 18.5679 12.0702 18.7175 12.1952 18.8278C12.3202 18.938 12.4897 19 12.6664 19H16.6672C17.0207 19 17.3597 18.8761 17.6096 18.6555C17.8596 18.435 18 18.1359 18 17.824V11.7578C18.0001 11.718 17.991 11.6787 17.9733 11.6421C17.9556 11.6055 17.9297 11.5725 17.8971 11.545L10.2324 5.08155Z" fill="currentColor"/>
                            <path d="M18.8091 10.071L16.0041 7.68587V4.06656C16.0041 3.92513 15.9409 3.78948 15.8284 3.68947C15.7158 3.58947 15.5632 3.53328 15.4041 3.53328H13.6041C13.445 3.53328 13.2924 3.58947 13.1798 3.68947C13.0673 3.78948 13.0041 3.92513 13.0041 4.06656V5.13312L10.8321 3.2873C10.6289 3.10466 10.3266 3 9.99999 3C9.67449 3 9.37299 3.10466 9.16974 3.28764L1.19351 10.0703C0.960264 10.2703 0.931014 10.5992 1.14326 10.8159C1.19656 10.8706 1.26182 10.9151 1.33508 10.9466C1.40833 10.9782 1.48804 10.9961 1.56935 10.9994C1.65067 11.0027 1.73189 10.9913 1.80808 10.9658C1.88426 10.9403 1.95382 10.9014 2.01251 10.8512L9.79374 4.24254C9.84957 4.19508 9.92386 4.16858 10.0011 4.16858C10.0784 4.16858 10.1527 4.19508 10.2085 4.24254L17.9905 10.8512C18.1051 10.9489 18.2586 11.0023 18.4174 10.9995C18.5762 10.9968 18.7273 10.9382 18.8376 10.8366C19.0678 10.6246 19.0487 10.2746 18.8091 10.071Z" fill="currentColor"/>
                            </svg>
                            <h2 className="category">
                                Home
                            </h2>
                        </Link>
                        
                    {/* CATEGORIES BUTTON DIV */}
                    <button type = "button" className = "flex flex-col items-center w-max h-max mx-2 my-auto"
                        onClick={()=>{OpenCat()}}>
                            <svg className = "w-[20px] md:w-[25px] xl:w-[30px] black" width="21" height="21" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8.25H18M3 13.25H18M3 18.25H18" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                            </svg>
                            <h2 className="category">
                                Categories
                            </h2>
                    </button>
                </div>
                   {/* VENDOR'S IMAGE */}
                   {/* <img className = "h-full w-[100px]" src = {venmobile} alt = "vendor"/> */}
            </div>


            {/* BLUR BOX */}
            <button type = "button" onClick={()=>{CloseCat()}} className={"z-[2] absolute top-0 right-0 left-0 bottom-0 black_col " + btnshow}></button>

            {/* SLIDING MOBILE NABAR DIV */}
            <div className={"absolute slidediv flex flex-row flex-wrap pb-3 left-0 right-0 white_col z-[3] h-auto items-center justify-center border-b-[1px] border-[grey] xl:hidden " + catshow}>
                {/* CATEGORY TITLE */}
                <div className="pt-2">
                    <h2 className="subtitle_semibold"> 
                        Categories
                    </h2>
                </div>
                {/* TABS DIV */}
                <div className="flex w-full py-2 flex-row flex-wrap justify-center mx-2">
                    {
                        mainNav.map((item)=>{
                            return (
                                <NavLink 
                                key = {uuidv4()}
                                className= {({isActive}) => {
                                    if(isActive){
                                        return "text-center h-max mx-2 my-1 text_semibold no-underline cat_btn theme_col white"
                                    }
                                    else {
                                        return "text-center h-max mx-2 my-1 section_col text no-underline hover:bg-gray-200 cat_btn black"
                                    }
                                }}
                                to = {item.href}
                                >
                                        {item.name}
                                </NavLink>
                            )
                        })
                    }
                </div>

                {/* CLOSE BUTTON */}
                {/* <div className="w-max h-max">
                    <button className="w-[30px] md:w-[35px]" onClick={()=>{CloseCat()}}>
                        <img src = {closebtn} className="" alt = "specifications close button"/>
                    </button>
                </div> */}
            </div>
            

            {/* DESKTOP NABAR DIV */}
            <div className="hidden white_col z-[1] h-[6%] items-center border-b-[1px] border-[grey] xl:flex">
                {/* HOME ICON AND VENDOR LOGO IMAGE DIV */}
                <div className="h-full w-max px-2 flex items-center justify-center">
                    {/* HOME ICON */}
                    <Link
                    className="mx-2"
                    to = "/">
                        {/* HOME ICON SVG */}
                        <svg className = "w-[20px] md:w-[25px] xl:w-[30px] black" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2324 5.08155C10.1704 5.02921 10.0879 5 10.0021 5C9.91627 5 9.83377 5.02921 9.77176 5.08155L2.10412 11.545C2.07156 11.5725 2.04565 11.6055 2.02797 11.6421C2.01029 11.6787 2.0012 11.718 2.00125 11.7578L2 17.824C2 18.1359 2.14042 18.435 2.39036 18.6555C2.64031 18.8761 2.9793 19 3.33278 19H7.33528C7.51201 19 7.68151 18.938 7.80648 18.8278C7.93146 18.7175 8.00167 18.5679 8.00167 18.412V13.4138C8.00167 13.3358 8.03677 13.261 8.09926 13.2059C8.16174 13.1508 8.24649 13.1198 8.33486 13.1198H11.6668C11.7552 13.1198 11.8399 13.1508 11.9024 13.2059C11.9649 13.261 12 13.3358 12 13.4138V18.412C12 18.5679 12.0702 18.7175 12.1952 18.8278C12.3202 18.938 12.4897 19 12.6664 19H16.6672C17.0207 19 17.3597 18.8761 17.6096 18.6555C17.8596 18.435 18 18.1359 18 17.824V11.7578C18.0001 11.718 17.991 11.6787 17.9733 11.6421C17.9556 11.6055 17.9297 11.5725 17.8971 11.545L10.2324 5.08155Z" fill="currentColor"/>
                        <path d="M18.8091 10.071L16.0041 7.68587V4.06656C16.0041 3.92513 15.9409 3.78948 15.8284 3.68947C15.7158 3.58947 15.5632 3.53328 15.4041 3.53328H13.6041C13.445 3.53328 13.2924 3.58947 13.1798 3.68947C13.0673 3.78948 13.0041 3.92513 13.0041 4.06656V5.13312L10.8321 3.2873C10.6289 3.10466 10.3266 3 9.99999 3C9.67449 3 9.37299 3.10466 9.16974 3.28764L1.19351 10.0703C0.960264 10.2703 0.931014 10.5992 1.14326 10.8159C1.19656 10.8706 1.26182 10.9151 1.33508 10.9466C1.40833 10.9782 1.48804 10.9961 1.56935 10.9994C1.65067 11.0027 1.73189 10.9913 1.80808 10.9658C1.88426 10.9403 1.95382 10.9014 2.01251 10.8512L9.79374 4.24254C9.84957 4.19508 9.92386 4.16858 10.0011 4.16858C10.0784 4.16858 10.1527 4.19508 10.2085 4.24254L17.9905 10.8512C18.1051 10.9489 18.2586 11.0023 18.4174 10.9995C18.5762 10.9968 18.7273 10.9382 18.8376 10.8366C19.0678 10.6246 19.0487 10.2746 18.8091 10.071Z" fill="currentColor"/>
                        </svg>
                        <h2 className="category">
                                Home
                            </h2>
                    </Link>
                        {/* <img className = "h-full" src = {venmobile} alt = "vendor"/> */}
                </div>
                {/* TABS DIV */}
                <div className="flex py-3 flex-row justify-between mx-2">
                    {
                        mainNav.map((item)=>{
                            return (
                                <NavLink 
                                key = {uuidv4()}
                                className= {({isActive}) => {
                                    if(isActive){
                                        return "text-center h-max mx-2 my-1 text_semibold no-underline cat_btn theme_col white"
                                    }
                                    else {
                                        return "text-center h-max mx-2 my-1 section_col text no-underline hover:bg-gray-200 cat_btn black"
                                    }
                                }}
                                to = {item.href}
                                >
                                        {item.name}
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
            
           
        </>
    )
}