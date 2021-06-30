import React from 'react';
import { Editor } from 'slate';

import MarkButton from "../../lib/slate/slateButtons/markButton";
import BlockButton from "../../lib/slate/slateButtons/blockButton";
import {BsCode} from 'react-icons/bs';
import {FaBold,FaItalic,FaStrikethrough,FaUnderline,FaQuoteRight} from "react-icons/fa";
export default function EditorToolbar(props) {
  
    

    return (
        <div className="font-semibold w-full py-5 shadow-sm px-4 text-dark mb-3">
            <div className="flex items-center ">
                <p className="text-lg font-semibold">My First Entry </p>
                <div  className="flex-1  flex ml-8 align-center">
                       
                       <MarkButton editor={props.editor} format='bold' icon={<FaBold />} />
                       <MarkButton editor={props.editor} format='italic' icon={<FaItalic />} />
                       <MarkButton editor={props.editor} format='underline' icon={<FaUnderline />} />
                       <MarkButton editor={props.editor} format='strikethrough' icon={<FaStrikethrough />} />
                       <BlockButton editor={props.editor} format='code' icon={<BsCode />} />
                       <BlockButton editor={props.editor} format='quote' icon={<FaQuoteRight />} />
           
                </div>
            </div>
        </div>
    )
}
