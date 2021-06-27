import {FiAlignLeft,FiAlignRight,FiAlignCenter,FiAlignJustify} from "react-icons/fi";
const alignmentFormat = [{
    name:'leftalign',
    icon:<FiAlignLeft />,
    styles:{color:"red"}
},{
    name:'rightalign',
    icon:<FiAlignRight />,
    styles:{textAlign:"right"}
},{
    name:'centeralign',
    icon:<FiAlignCenter />,
    styles:{textAlign:"center"}
},{
    name:'justifyalign',
    icon:<FiAlignJustify />,
    styles:{textAlign:"justify"}
}]
export default alignmentFormat;