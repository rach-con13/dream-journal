import { useCallback } from "react"

export const CodeElement = props => {
    return (
      <pre className="bg-gray-200 p-3" {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }

  export const QuoteElement = props => {
    return (
      <p className="border-solid border-l-4 pl-4 border-gray-300 text-gray-400 first:mt-0 mt-3" {...props.attributes}>{props.children}</p>
    )
  }
  export const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
  }


 export const Leaf = props => {
   
  
    let fontStyles = (leaf) => {
      switch(leaf) {
        case leaf.bold:
          return {fontWeight:"bold"}
          break;
        case leaf.italic:
          return {fontStyle:'italic'}
          break;
        default:
          return;
      }
    }

    // text highlighting

    return (
      <span 
        {...props.attributes}
        style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal',
      fontStyle: props.leaf.italic ? 'italic' : 'normal' }}
      >
        {props.children}
      </span>
    )
  }