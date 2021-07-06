import { useCallback } from "react"
import { useFocused, useSelected } from "slate-react"

export const CodeElement = props => {
    return (
      <pre className="p-3 bg-gray-200" {...props.attributes}>
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
      <p className="pl-4 mt-3 text-gray-400 border-l-4 border-gray-300 border-solid first:mt-0" {...props.attributes}>{props.children}</p>
    )
  }
  export const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
  }

