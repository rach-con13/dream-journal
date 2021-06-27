import {FaBold,FaItalic,FaStrikethrough,FaUnderline} from "react-icons/fa";
const typeFormats = [{
    name:"bold",
    icon:<FaBold/>,
    classList:"bold",
    styles:{fontWeight:'bold'}
 
},{
    name:"italic",
    icon:<FaItalic/>,
    classList:"italic",
    styles:{fontStyle:'italic'}
 
},{
    name:"strikethrough",
    icon:<FaStrikethrough/>,
    classList:"line-through text-red-400",
    styles:{textDecoration:"line-through"}
 
},{
    name:'underline',
    icon:<FaUnderline/>,
    classList:"underline",
    styles:{textDecoration:"underline"}
   
}]

export default typeFormats;