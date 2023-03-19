 /////npm install react-icons --save /////
import { FcStart,FcPlus } from "react-icons/fc";
import { BsToggleOn,BsXbox } from "react-icons/bs";
import { MdOutlineFamilyRestroom,MdOutlineEmojiEvents } from "react-icons/md";

////////////////////////////////// React Icons ////////////////////////////////////////////////
function ReactIcons(){

    return(
        <div>
            <div className="exampleHeader">React Icons</div>
            <h3 className=""><FcStart /> <FcPlus /></h3>
            <h3><BsToggleOn /> <BsXbox /></h3>
            <h3><MdOutlineFamilyRestroom  /> <MdOutlineEmojiEvents/></h3>
        </div>
    )
}

export {
    ReactIcons
}