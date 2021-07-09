import React from "react";
import renderMark from "../renderMark";
import PropTypes from "prop-types";
const MarkButton = ({editor,format,icon}) => {

    return (
        <button className="ml-4 outline-none" onClick={(e) => {
            e.preventDefault();
            renderMark(editor,format);
        }} >
            {icon}
        </button>
    )
}
MarkButton.propTypes = {
    format:PropTypes.string,
    editor:PropTypes.object,
    icon:PropTypes.object

}

export default MarkButton;