import { useCallback } from "react"
import { useFocused, useSelected } from "slate-react"

export const CodeElement = props => {
    return (
      <pre className="bg-gray-200 p-3" {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }

export const ImageElement = ({attributes,children,element}) => {
  const selected = useSelected();
  const focused = useFocused();

  const shadow = selected && focused ? "shadow-sm" : 'no-shadow';
  return (
   <div {...attributes}>
     <div contentEditable={false}>
       <img src={element.url} className={shadow} />
     </div>
     {children}
   </div>
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

