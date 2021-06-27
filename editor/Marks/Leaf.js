// text nodes in slate.js are considered leaves . 
// create a function called Leaf which will change style of text 
import {renderMarkStyles} from "./index";
 export const Leaf = props => {
   const currentStyles = renderMarkStyles(props.leaf);



    return (
      <span 
        {...props.attributes}
        style={currentStyles}>
        {props.children}
      </span>
    )
  }