import SearchCard from "../components/SearchCard";
import { v4 as uuidv4 } from "uuid";
import { allprods } from "../App";
import { SEARCHED } from "../panels/ProductArea";
import { useState } from "react";
import { Link } from "react-router-dom";
import bluearrow from "../SVGs/r_b_arrow.svg";
import { PATHS } from "./Konga/Konga";
import { useParams } from "react-router-dom";
import { useServeAllKongaItems } from "../Custom_Functions/ServeAllKongaItems";



function goBack(){
    if(PATHS[PATHS.length-1]){
        return PATHS[PATHS.length-1]
    }
    else if(PATHS[PATHS.length-1] !== "undefined"){
        console.log(PATHS[PATHS.length-1])
        return "/konga/computers-and-accessories/computing/bags-cases-covers"
    }
    else if(PATHS[PATHS.length-1] === "undefined"){
        return "/konga/computers-and-accessories/computing/bags-cases-covers"
    }
}

export default function Searched() {
    const { searched } = useParams();
    let ITEMS = useServeAllKongaItems()

    var state;
    let count = [1];
    ITEMS.forEach((item) => {
        if (searched === item.title) {
            const newstuff = {
            title: item.title,
            subtitle: item.subtitle,
            image: item.image,
            price: item.price,
            star: item.star,
            spec: item.spec,
            link : item.link,
            };
            state = newstuff;
        }
    });
      return (
            <div className="w-full white_col h-full p-8">
                {count.map(()=>{
                        if(state){
                            return (
                                <div key = {uuidv4()}>
                                    <Link className="mb-4 specs flex flex-row items-center justify-center" to = {goBack()} > <img className = "rotate-180 mx-2" src= {bluearrow}/> Return to view more </Link>
                                    <SearchCard
                                        title={state.title}
                                        subtitle={state.subtitle}
                                        image={state.image}
                                        price = {state.price}
                                        star = {state.star}
                                        spec = {state.spec}
                                        link = {state.link}
                                    />
                                </div>

                            )
                        }
                        else{
                            return (
                                <Link key = {uuidv4()} className="mb-4 specs flex flex-row items-center justify-center" to = "/konga/computers-and-accessories/computing/bags-cases-covers" > <img className = "rotate-180 mx-2" src= {bluearrow}/> Return to view more </Link>
                            )
                        }
                    })
                }
            </div>
      );
}
