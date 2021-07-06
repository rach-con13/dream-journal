import next from 'next';
import React, { useCallback, useMemo, useState } from 'react'
import {createEditor,Editor, Transforms,Text} from "slate";
import {Slate,Editable,withReact} from "slate-react";
import EditorToolbar from "./editorToolbar";
import { CodeElement,QuoteElement,DefaultElement, Leaf } from './elementBlocks';


export default function EditorSection(props) {
    const [editor] = useState(() => withReact(createEditor()))
    // const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },
    ])
   const renderElement = useCallback(props => {

       switch(props.element.type) {
           case 'code':
               return <CodeElement {...props} />
           case "quote":
               return <QuoteElement {...props} />
           default:
               return <DefaultElement {...props} />
       }
   })
   
   const renderLeaf = useCallback(props => <Leaf {...props} />, [])

    return (
        <div>
          
            <Slate  editor={editor}
            value={value} 
            onChange={newValue => setValue(newValue)}>
              
                <EditorToolbar editor={editor} /> 
                <div className="w-10/12 mx-auto mt-8 ">
                    <Editable renderLeaf={renderLeaf} renderElement={renderElement} />
                </div>
            
            </Slate>
           
        </div>
    )
}
