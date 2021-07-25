import next from 'next';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  createEditor,
  Editor,
  Transforms,
  Text,
  Value,
  Selection,
  Range,
} from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import EditorToolbar from './editorToolbar';
import { Leaf } from '../../lib/slate/leaf';
import {
  CodeElement,
  QuoteElement,
  ImageElement,
  DefaultElement,
} from './Blocks/elementBlocks';

import renderMark from '../../lib/slate/renderMark';
import H1Block from './Blocks/Typography/HeadingBlock';
import HeadingBlock from './Blocks/Typography/HeadingBlock';

export default function EditorSection(props) {
  const [editor] = useState(() => withReact(createEditor()));
  // const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      case 'quote':
        return <QuoteElement {...props} />;
      case 'image':
        return <ImageElement {...props} />;
      case 'h1':
        return <HeadingBlock size="text-6xl" {...props} />;
      case 'h2':
        return <HeadingBlock size="text-5xl" {...props} />;
      case 'h3':
        return <HeadingBlock size="text-4xl" {...props} />;
      case 'h4':
        return <HeadingBlock size="text-3xl" {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    <div>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      >
        <EditorToolbar editor={editor} value={value} />
        <div className="w-10/12 mx-auto mt-8 ">
          <Editable
            renderLeaf={renderLeaf}
            renderElement={renderElement}
            onKeyDown={(event, editor, next) => {
              if (event.key === 'b' && event.metaKey) {
                editor.toggleMark('bold');
              }
              console.log(typeof next);
            }}
          />
        </div>
      </Slate>
    </div>
  );
}

EditorSection.propTypes = {
  element: PropTypes.object,
};
