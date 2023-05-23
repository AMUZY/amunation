import "../button.scss"
import "../font.scss"
import "../theme.scss"
import "../navbar.scss"
import Subcatbtn from "../buttons/Subcatbtn"
import { useState } from "react"

//IMPORTED SVGs

import { NavLink, Link } from "react-router-dom"
import {v4 as uuidv4} from "uuid"

export default function SubCat(props){
    const sub_cat = props.sub_cat

    const [btnshow , setBtnshow] = useState("hidden opacity-0");
    const [subcatshow, setSubcatshow] = useState("right-[-50%]");

    function OpenCat(){
        setBtnshow("block opacity-90");
        setSubcatshow("block right-0");
    }

    function CloseCat(){
        setBtnshow("hidden opacity-0");
        setSubcatshow("block right-[-50%]");
    }
    // w-[30%] sm:w-[30%] md:w-[20%] lg:w-[15%]

    return (
        <>
            {/* MOBILE SUB CATEGORIES BUTTON PANE*/}
            <div className="navbar px-4 w-auto flex flex-row items-center justify-start white_col z-[1] xl:hidden">
                {/* SUB CATEGORIES BUTTON DIV */}
                <button type = "button" className = "flex flex-col items-center w-max h-max my-auto"
                    onClick = {()=>{OpenCat()}}>
                        <svg className = "w-[20px] md:w-[25px] xl:w-[30px] black" width="21" height="21" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8.25H18M3 13.25H18M3 18.25H18" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg>
                        <h2 className="category">
                            Sub Categories
                        </h2>
                </button>
            </div>

            {/* BLUR BOX */}
            <button type = "button" onClick={()=>{CloseCat()}} className={"z-[2] absolute top-0 right-0 left-0 bottom-0 black_col " + btnshow}></button>

            {/* SLIDING MOBILE SUB CAT DIV */}
            <div className={"absolute slidediv flex flex-col w-1/2 md:w-1/3 px-1 pb-3 top-0 bottom-0 section_col z-[3] h-auto items-start justify-start border-r-[1px] border-[grey] xl:hidden " + subcatshow}>
                {/* SUB CATEGORY TITLE */}
                <div className="mx-4 my-2">
                    <h2 className="subtitle_semibold"> 
                        Sub Categories
                    </h2>
                </div>
                <div className="flex flex-col w-full">
                {
                        sub_cat.map((item)=>{
                            return (
                                <NavLink 
                                key = {uuidv4()}
                                className= {({isActive}) => {
                                    if(isActive){
                                        return "h-max mx-2 my-1 text_semibold no-underline subcat_btn theme_col white"
                                    }
                                    else {
                                        return "h-max mx-2 my-1 hover:bg-gray-200 text no-underline subcat_btn black"
                                    }
                                }}
                                to = {item.href}>
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



            {/* DESKTOP SUB CATEGORIES */}
            <div className="hidden px-2 py-3 mb-[1%] rounded-br-xl h-[99%] flex-col section_col xl:flex xl:min-w-[15%]">
                {/* sub categories */}
                <div className="mx-2 my-2">
                        <h2 className="text_semibold"> Sub Categories </h2>
                </div>
                <div className="flex flex-col mx-1">
                {
                        sub_cat.map((item)=>{
                            return (
                                <NavLink 
                                key = {uuidv4()}
                                className= {({isActive}) => {
                                    if(isActive){
                                        return "h-max mx-2 my-1 text_semibold no-underline cat_btn theme_col white"
                                    }
                                    else {
                                        return "h-max mx-2 my-1 hover:bg-gray-200 text no-underline cat_btn black"
                                    }
                                }}
                                to = {item.href}>
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