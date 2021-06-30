import { Editor, Transforms } from "slate"

const BlockButton = ({editor,icon,format}) => {

    const renderBlock = () => {
        const [match] = Editor.nodes(editor, {
          match: n => n.type === format,
        })
        Transforms.setNodes(
          editor,
          { type: match ? null : format },
          { match: n => Editor.isBlock(editor, n) }
        )
    }
    
    return (
        <button className="ml-4" onClick={e => {
            e.preventDefault();
            renderBlock()
        }}>
            {icon}
        </button>
    )
}
export default BlockButton;