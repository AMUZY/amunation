import "../button.scss";
import "../theme.scss";
import "../font.scss";
import "../navbar.scss";
import "../card.scss";
import {v4 as uuidv4} from "uuid"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
// import placeholder from "../PICTURES/placeholder.png"


export default function SearchCard (props){
    return (
        <div className="flex flex-col justify-center items-center">
            {/* <h1 className="w-max h-max subtitle_semibold">NAME:</h1> */}
            <h1 className="mb-4 title"> {props.title} </h1>
            <h1 className="w-max h-max subtitle_semibold">DESCRIPTION:</h1>
            <h1 className="mb-4 subtitle grey"> {props.subtitle} </h1>
            <div className="mb-4 overflow-x-scroll min-h-[50px] searchimgCont max-w-full h-auto px-8 flex flex-row items-center">
                {
                    props.src.map((item)=>{
                        return (
                            <LazyLoadImage effect="blur" key = {uuidv4()} src = {item.img} placeholderSrc= {item.img} className="searchlazyimg"/>
                        )
                    })
                }
            </div>
            <h1 className="w-max h-max subtitle_semibold">PRICE:</h1>
            <h1 className="mb-4 subtitle"> {"₦" + props.price} </h1>
            <h1 className="w-max h-max subtitle_semibold">RATING:</h1>
            <img className = "mb-4 w-40 grey" src = {props.star} />
            <h1 className="w-max h-max subtitle_semibold">SPECIFICATIONS:</h1>
            <h1 className="mb-4 subtitle grey"> {props.spec} </h1>
            {/* PURCHASE LINK */}
            <a
              href={props.prodlink}
              type="button"
              className="mt-[6px] w-full md:w-auto pur_btn theme_col white "
            >
              <h2 className="w-full text-center subtitle_semibold">Purchase</h2>
            </a>
        </div>
    )
}