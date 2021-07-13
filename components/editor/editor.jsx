import next from 'next';
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { createEditor, Editor, Transforms, Text, Value, Selection, Range } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import EditorToolbar from "./editorToolbar";
import { Leaf } from "../../lib/slate/leaf";
import { CodeElement, QuoteElement, ImageElement, DefaultElement } from './elementBlocks';
import { withImages } from './plugins/withImage';


export default function EditorSection(props) {
    const [editor] = useState(() => withImages(withReact(createEditor())))
    // const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ])

    const renderElement = useCallback(props => {

        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            case "quote":
                return <QuoteElement {...props} />
            case "image":
                return <ImageElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    const renderLeaf = useCallback(props => <Leaf {...props} />, [])

    return (
        <div >

            <Slate editor={editor}
                value={value}

                onChange={(newValue) => {
                    setValue(newValue);

                }}>

                <EditorToolbar editor={editor} value={value} />
                <div className="w-10/12 mx-auto mt-8 ">
                    <Editable renderLeaf={renderLeaf} renderElement={renderElement} onKeyDown={e => {
                        if (!e.ctrlKey) {
                            return;
                        }
                        switch (e.key) {
                            case '`': {
                                e.preventDefault()
                                const [match] = Editor.nodes(editor, {
                                    match: n => n.type === 'code',
                                })
                                Transforms.setNodes(
                                    editor,
                                    { type: match ? null : 'code' },
                                    { match: n => Editor.isBlock(editor, n) }
                                )
                                break
                            }
                        }
                    }} />
                </div>

            </Slate>

        </div>
    )
}

EditorSection.propTypes = {
    element: PropTypes.object
}