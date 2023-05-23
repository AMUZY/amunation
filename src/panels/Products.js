import "../button.scss"
import "../font.scss"
import "../theme.scss"
import "../products.scss"
import { useState } from "react"
import LoaderComp from "../LoadingIcons/LoaderComp"


// CARD IMPORT
import Card from "../components/Card"
import {v4 as uuidv4} from "uuid"

export default function Products(props){
    let products = props.products;
    // console.log(products)
    const [btnshow , setBtnshow] = useState("hidden");
    const [specshow , setSpecshow] = useState("hidden");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [keyfeat, setKeyfeat] = useState("");
    const [spec, setSpec] = useState("");

    function OpenSpec(title, subtitle, keyfeat, spec){
        setSpecshow("block");
        setBtnshow("block");
        setTitle(title);
        setSubtitle(subtitle);
        setKeyfeat(keyfeat);
        setSpec(spec);
    }
    // className="rounded-xl overflow-y-scroll my-2 py-5 section_col w-full h-[88%] sm:h-[91%] xl:h-[85%]">
    let count = [1];
    return (
        <div className="rounded-xl flex-grow productcont overflow-y-scroll mb-2 mx-4 pt-1 section_col w-auto xl:mb-2">
            {/* LOADING ANIMATION */}
            {count.map(()=>{
                while(products.length === 0){
                    return (
                        <div key = {uuidv4()} className="relative w-[95%] h-[95%] m-auto p-0">
                            <LoaderComp />
                        </div>
                    )
                }
            })}
            <div className = "w-[100%] products pb-2 h-auto">
                {
                    products.map((item)=>{
                        return (
                            <Card key = {uuidv4()} 
                                    image = {item.image} 
                                        title ={item.title} 
                                            subtitle = {item.subtitle} 
                                                price = {item.price} 
                                                    star = {item.star} 
                                                            spec = {item.spec}
                                                                link = {item.link}
                                                                    OpenSpec={OpenSpec}/>
                        )
                    })
                }
            </div>
            
            {/* BLUR BOX */}
            <button type = "button" onClick={()=>{setBtnshow("hidden")}} className={"z-[1] absolute top-0 right-0 left-0 bottom-0 black_col opacity-90 " + btnshow}></button>

            {/* SPECIFICATIONS BUTTON */}
            <button type = "button" onClick={()=>{setSpecshow("hidden") ; setBtnshow("hidden")}} className={"z-[1] flex items-center justify-center absolute top-0 right-0 left-0 bottom-0 " + specshow}>

                {/* MAIN SPECIFICATIONS DIV */}
                <div className="specifications rounded-lg z-[2] flex flex-col justify-start white_col p-4 w-[90%] h-auto md:w-[50%] xl:w-[40%] xl:rounded-xl">
                    {/* TITLE AND CLOSE BUTTON DIV */}
                    <div className="flex flex-row items-center justify-between w-full h-auto xl:mb-2">
                        {/* TITLE */}
                        <div className="w-auto self-end">
                            <h2 className="text text-left">
                                {title}
                            </h2>
                        </div>
                    </div>

                    {/* SUBTITLE (FOR MOBILE ONLY)*/}
                    <div className="w-full">
                        <h3 className="grey desc text-left">
                            {subtitle}
                        </h3>
                    </div>

                    {/* KEY FEATURES AND SPECIFICATIONS */}
                    <div className="my-2 flex-grow flex flex-col justify-between">
                        {/* KEY FEATURES */}
                        {/* <div className="w-[48%]">
                            <h2 className="text text-left">
                                KEY FEATURES
                            </h2>
                            <h3 className="grey desc text-left">
                                {keyfeat}
                            </h3>
                        </div> */}

                        {/* SPAN */}
                        {/* <span className="black_col w-full h-[1px] mx-[1%] my-[2%]"></span> */}

                        {/* SPECIFICATIONS */}
                        <div className="w-[96%]">
                            <h2 className="text text-left">
                                SPECIFICATIONS
                            </h2>
                            <h3 className="grey desc text-left">
                                {spec}
                            </h3>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}
