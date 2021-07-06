import { Editor, Transforms } from "slate"
import PropTypes from "prop-types";
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

BlockButton.propTypes = {
    editor:PropTypes.object,
    icon:PropTypes.element,
    format:PropTypes.string

}
export default BlockButton;