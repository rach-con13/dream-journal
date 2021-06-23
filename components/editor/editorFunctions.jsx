import { Editor, Text, Transforms } from "slate";


export const testMark = (editor,format) => {
    let marks = Editor.marks(editor);
    if(marks[format]) {
        Editor.removeMark(editor,format)
    } else {
        Editor.addMark(editor,format,true);
        console.log(marks);
    }
  
}

export const isBoldMarkActive = (editor) => {
    const marks = Editor.marks(editor);
    console.log(marks);

    // const [match] = Editor.nodes(editor,{
    //     match:n => n.bold === true,
    //     universal:true
    // })

    // return !!match;
}

export const toggleBoldMark = (editor) => {
    const isActive = isBoldMarkActive(editor);
    isActive ? Editor.removeMark(editor,'bold') : Editor.addMark(editor,'bold');
}

const isItalicMarkActive = (editor) => {
    const [match] = Editor.nodes(editor,{
        match:n => n.italic === true,
        universal:false
    })

    return !!match;
}

export const toggleItalicMark = (editor) => {
    const isActive = isItalicMarkActive(editor);
    Transforms.setNodes(
        editor,
        {italic:isActive ? null : true},
        {match:n => Text.isText(n),split:true}
    )
}

const isCodeBlockActive = (editor) => {
   const [match] = Editor.nodes(editor, {
       match:n => n.type === 'code'
   })
   return !!match;
}
export const toggleCodeBlock = (editor) => {
    const isActive = isCodeBlockActive(editor);
    Transforms.setNodes(
        editor,
        {type:isActive ? null : 'code'},
        {match:n => Editor.isBlock(editor,n)}
    )
}

const isQuoteBlockActive = (editor) => {
    const [match] = Editor.nodes(editor, {
        match:n => n.type === 'quote'
    })
    return !!match;
}
export const toggleQuoteBlock = (editor) => {
    const isActive = isQuoteBlockActive(editor);
    Transforms.setNodes(
        editor,
        {type:isActive ? null : 'quote'},
        {match:n => Editor.isBlock(editor,n)}
    )
}
