import Products from "../../../../panels/Products"
import { ServeGroupItems } from "../../../../Custom_Functions/ServeGroupItems";

export default function BedandBathroomFurnishings (props){
  const products = ServeGroupItems("BedandBathroomFurnishings");



    return (
            <Products products = {products} />
    )
}