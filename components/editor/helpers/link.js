import { Element, Transforms } from "slate"

const createLinkNode = (href,text) => ({
    type:"link",
    href,
    children:[{text}]
})

const removeLink = (editor,opts={}) => {
    Transforms.unwrapNodes(editor, {
        ...opts,
        match:(n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === "link"
    });
};

const insertLink = (editor,url) => {
    if(!url) return; // if url doesn't exist return
    const {selection} = editor;
    const link = createLinkNode(url,"New Link");

    ReactEditor
}