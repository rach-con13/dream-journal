import { useCallback } from "react"

export const CodeElement = props => {
    return (
      <pre className="bg-gray-200 p-3" {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }

export const ImageElement = props => {
  return (
    <img src="" {...props.attributes}>
      {props.children}
    </img>
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

