import React from 'react';
import { Editor } from 'slate';
import { isBoldMarkActive, testMark, toggleBoldMark } from './editorFunctions';
import Toolbar from "./editorTools";



export default function EditorToolbar(props) {
    

    return (
        <div className="bg-white font-semibold w-full py-5 shadow-sm px-4 text-gray-800 mb-3">
            <div className="flex items-center ">
                <p className="text-lg font-semibold">My First Entry </p>
                <div  className="flex-1  flex ml-8">
                <button onMouseDown={(e) => {
                          e.preventDefault();
                            testMark(props.editor,'bold');

                        // let marks = Editor.marks(props.editor);
                      
                        // marks.bold ? Editor.removeMark(props.editor,'bold') : Editor.addMark(props.editor, 'bold', true);
                           
                      }}>Bold</button>
               {/* {Toolbar.map((section,index) => {
                   return (
                  <div  className="flex border-l-2 px-4 border-solid border-gray-400 ">
                   
                   {section.tools.map((tool,index) => {
                      return (
                          <button  onMouseDown={(e) => {
                              e.preventDefault();
                              tool.mouseDown(props.editor);
                          }} key={index} className="text-lg first:px-0 pl-3 font-semibold">{tool.icon}</button>
                      )
                  })} 
                  </div>
                   )
               })} */}
                </div>
            </div>
        </div>
    )
}
