import { Editor } from "slate";
import toolbar from "..";
import typeFormats from "./formats/typeFormats";

// render mark if it exists
export const renderMark = (editor,format) => {
    let marks = Editor.marks(editor);
    if(marks[format]) {
        Editor.removeMark(editor,format)
    } else {
        Editor.addMark(editor,format,true);
        
    }
}
// if mark is selected, render it's styles
export const renderMarkStyles = (leaf) => {
    let classes = " ";
    let markStyles = {};
    toolbar.forEach(section => {
        console.log(section);
        section.tools.forEach(tool => {
            if(leaf[tool.name]) {
                let formatStyles = tool.styles;
                markStyles = {...markStyles,...formatStyles}
            }
        })
    })
    // typeFormats && typeFormats.forEach(format => {
    //     if(leaf[format.name]) { 
    //         let formatStyles = format.styles;
    //         markStyles = {...markStyles,...formatStyles}
    //     }
    // })

    return markStyles;
}


    