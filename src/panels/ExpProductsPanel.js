import "../button.scss"
import "../font.scss"
import "../theme.scss"
import "../products.scss"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { firebaseConfig } from "../MyFirebase"
import x from "../SVGs/circle_x_btn.svg"


// CARD IMPORT
import ExpCard from "../components/ExpCard"
import {v4 as uuidv4} from "uuid"

import {
  onSnapshot,
} from "firebase/firestore"
import { expColRef } from "../MyFirebase"


// EXPORTED ITEMS
export var EXPITEMS = [];

export var SEARCHED = {
    title : "",
}


export default function ExpProductsPanel(props){

    const [exp_prod,setExp_prod] = useState([])

    useEffect(()=>{
        onSnapshot(expColRef, (snapshot)=>{
        var exp_prod = []
        snapshot.docs.forEach((doc)=>{
            exp_prod.push({...doc.data() ,id: doc.id})
            setExp_prod(exp_prod);
            EXPITEMS = exp_prod;
            })
    })
    }, [])

    // const [prod,setProd] = useState(exp_prod);
    const [search,setSearch] = useState("hidden")
    const [check,setCheck] = useState("");
    const [filtereditems,setFiltereditems] = useState([]);
    const [xbtn,setXbtn] = useState("hidden");

    // NEW ARRAY THAT ELEMINATES DUPLICATES IN THE SHOWSEACH ARRAY

    let finalsearch = [...new Set(filtereditems.map((item)=>{return item.title }))];

    // FUNCTION THAT SETS SEARCH TO HIDDEN ON CALL OF THE EXPORT FUNCTION CLOSESEARCH ABOVE

    let navigate = useNavigate();

    const handleChange = (e) => {
        // 👇 Get input value from "event"
        e.preventDefault();
        setCheck(e.target.value);
        setSearch("block");
        if(e.target.value === "")
        {
            setSearch("hidden")
        }
        if(check.length >= 0 && e.target.value !== ""){
            setXbtn("inline-block")
        }
        else{
            setXbtn("hidden")
        }
        setFiltereditems(exp_prod.filter((item)=>{
            return(
                item.title.toLowerCase().includes(check.toLowerCase())
            )
        }))
    
        };

        const gosearch = (()=>{
        finalsearch.map((item)=>{
            if(item === check){
                SEARCHED.title = check;
                navigate("/expertnaire/search/" + check);
            }
        })
        })
        
    

    const [btnshow , setBtnshow] = useState("hidden");
    const [specshow , setSpecshow] = useState("hidden");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [why, setWhy] = useState("");

    function OpenSpec(title, subtitle, why){
        setSpecshow("block");
        setBtnshow("block");
        setTitle(title);
        setSubtitle(subtitle);
        setWhy(why);
    }
    // className="rounded-xl overflow-y-scroll my-2 py-5 section_col w-full h-[88%] sm:h-[91%] xl:h-[85%]">

    return (
        <>
        {/* SEARCH DIV */}
            <div className = "relative h-max mx-4 flex flex-row my-4 xl:w-auto ">

                {/* SEARCH BAR */}
                <div className = "relative flex-grow mr-[5px] h-max ">
                    <input type = "text"
                        value={check}
                        onKeyUp={(e)=>{
                            if(e.code === "Enter"){
                                gosearch(); 
                            }
                        }}  
                        onBlur={()=>{
                            // setFiltereditems([]);
                            // console.log("not equal to");
                            // setCheck("");    
                        }}
                        onChange={handleChange}
                        className="w-full h-full input rounded-lg border-[1px] border-gray-300 pl-3 pr-8 py-2 text overflow-hidden" placeholder="Search All Products" />

                    {/* BUTTON TO CLEAR SEARCH BAR */}
                    <button className = {"absolute h-[98%] top-0 right-1 bottom-0 nohightlight " + xbtn} onClick={()=>{setCheck("");setXbtn("hidden")}}>
                        <svg className = "bg-transparent black w-[25px]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.25 15C26.25 8.78906 21.2109 3.75 15 3.75C8.78906 3.75 3.75 8.78906 3.75 15C3.75 21.2109 8.78906 26.25 15 26.25C21.2109 26.25 26.25 21.2109 26.25 15Z" stroke="currentColor" stroke-width="0.5" stroke-miterlimit="10"/>
                            <path d="M18.75 18.75L11.25 11.25M11.25 18.75L18.75 11.25" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                    </button>
                </div>

                {/* DIV WHERE ITEMS SHOW UP */}
                <div className={"absolute z-[1] searcheddiv overflow-y-scroll white_col rounded-lg p-2 flex flex-col flex-nowrap left-0 translate-y-[100%] right-0 bottom-[-10%] max-h-[412px] " + search}> 
                    {
                        finalsearch.map((item)=>{
                            return (
                                <button type = "button" key = {uuidv4()} onClick = {()=>{
                                    setCheck(item);
                                    setSearch("hidden")
                                }} className="flex flex-row text grey mx-1 my-2 xl:my-1"> {item} </button>
                            )
                        })
                    }
                </div>

                {/* SEARCH BUTTON */}
                <button type = "submit" onClick = {()=>{
                    if(check.length > 0){
                        gosearch(); 
                    }
                    }} className = "ml-[5px] search_btn theme_col">
                    <h2 className="text white">
                        Search
                    </h2>
                </button>
            </div>

        <div className="rounded-xl flex-grow productcont overflow-y-scroll mb-2 mx-4 pt-1 section_col w-auto xl:mb-2">

            {/* MAIN ITEM CARDS */}
            <div className = "w-[100%] products pb-2 h-auto">
                {
                    exp_prod.map((item)=>{
                        return (
                            <ExpCard key = {uuidv4()} 
                                    src = {item.image} 
                                        title ={item.title} 
                                            subtitle = {item.subtitle} 
                                                use = {item.why}
                                                    prodlink = {item.link}
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
                                WHY YOU NEED THIS
                            </h2>
                            <h3 className="grey desc text-left">
                                {why}
                            </h3>
                        </div>
                    </div>
                </div>
            </button>
        </div>
        </>
    )
}
