import React from "react";
import renderMark from "../renderMark";

const MarkButton = ({editor,format,icon}) => {
    
    return (
        <button className="outline-none ml-4" onClick={(e) => {
            e.preventDefault();
            renderMark(editor,format);
        }} >
            {icon}
        </button>
    )
}

export default MarkButton;