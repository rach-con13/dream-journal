import { useCallback } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useFocused, useSelected } from "slate-react"

export const CodeElement = props => {

    return (
      <pre className="p-3 bg-gray-200" {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }

  CodeElement.propTypes = {
    attributes:PropTypes.object,
    children:PropTypes.object
  }

export const ImageElement = ({attributes,children,element}) => {
  const selected = useSelected();
  const focused = useFocused();

  const shadow = selected && focused ? "shadow-sm" : 'no-shadow';
  return (
   <div {...attributes}>
     <div contentEditable={false}>
     
       <Image src={element.url} className={shadow} alt="" />
     </div>
     {children}
   </div>
  )
}
ImageElement.propTypes = {
  attributes:PropTypes.object,
  children:PropTypes.object,
  element:PropTypes.object
}


  export const QuoteElement = props => {
    return (
      <p className="pl-4 mt-3 text-gray-400 border-l-4 border-gray-300 border-solid first:mt-0" {...props.attributes}>{props.children}</p>
    )
  }
  QuoteElement.propTypes = {
    attributes:PropTypes.object,
    children:PropTypes.object
  }


  export const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
  }

  DefaultElement.propTypes = {
    attributes:PropTypes.object,
    children:PropTypes.node
  }
