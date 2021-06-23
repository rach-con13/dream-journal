import {FaBold,FaItalic,FaQuoteRight} from "react-icons/fa";
import {BsCode} from "react-icons/bs";
 import { toggleBoldMark, toggleItalicMark,toggleCodeBlock,toggleQuoteBlock } from './editorFunctions';

const FontStyles = [{
    icon:<FaBold />,
    name:'bold',
    mouseDown:toggleBoldMark
},{
    icon:<FaItalic />,
    name:'italic',
    mouseDown:toggleItalicMark
}]

const TextBlockStyles = [{
    icon:<BsCode />,
    name:'Code',
    mouseDown:toggleCodeBlock
},{
    icon:<FaQuoteRight />,
    name:"Quote",
    mouseDown:toggleQuoteBlock
}]

const Toolbar = [{
    tools:FontStyles
},{
    tools:TextBlockStyles
}]
export default Toolbar;