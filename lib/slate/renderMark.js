import { Editor } from "slate";
 const renderMark = (editor,format) => {
    let marks = Editor.marks(editor);
    if(marks[format]) {
        Editor.removeMark(editor,format)
    } else {
        Editor.addMark(editor,format,true);
        
    }
}
export default renderMark;