import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollonTOP(){

    const Location = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[Location])

return null;
}
export default ScrollonTOP