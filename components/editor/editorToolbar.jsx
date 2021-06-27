import React from 'react';
import { Editor } from 'slate';
import { isBoldMarkActive, testMark, toggleBoldMark } from './editorFunctions';
import toolbar from "../../editor/index";
import {renderMark} from "../../editor/Marks/index";



export default function EditorToolbar(props) {
  
    

    return (
        <div className="bg-white font-semibold w-full py-5 shadow-sm px-4 text-gray-800 mb-3">
            <div className="flex items-center ">
                <p className="text-lg font-semibold">My First Entry </p>
                <div  className="flex-1  flex ml-8">
                       
                      {toolbar.map((section,index) => {
                          return (
                           <div  className="flex first:border-none  border-l-2 px-4 border-solid border-gray-400 items-center ">
                           {section.tools.map((tool,index) => {
                            
                            return (
                                <button onMouseDown={(e) => {
                                    e.preventDefault();
                                    renderMark(props.editor,tool.name);
                                }} key={index} className="text-lg first:px-0 pl-3 font-semibold">
                                   {tool.icon}
                                </button>
                            )
                           })}
                           </div>
                          )

                      })}

           
                </div>
            </div>
        </div>
    )
}
