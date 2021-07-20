import React from 'react';
import PropTypes from 'prop-types';
import MarkButton from '../../lib/slate/slateButtons/markButton';
import BlockButton from '../../lib/slate/slateButtons/blockButton';
import { BsCode, BsFillImageFill } from 'react-icons/bs';
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
  FaQuoteRight,
} from 'react-icons/fa';
import { ImageButton } from '../../lib/slate/slateButtons/imageButton';
import { ImageModal } from './EditorImage/imageModal';
import { gql, useMutation } from '@apollo/client';
import { CREATE_ENTRY } from '../../lib/apolloClient/Functions/entry';
import EditorImageSection from './EditorImage/EditorImageSection';

export default function EditorToolbar(props) {
  const [createEntry, { data }] = useMutation(CREATE_ENTRY);
  const saveEntry = () => {
    let content = JSON.stringify(props.value);
    console.log(content);
    createEntry({ variables: { title: 'My First Entry', content: content } });
    console.log(data);
  };

  return (
    <>
      <div
        className={` bg-superlight shadow-sm w-10/12  absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2`}
      >
        {/* <ImageModal /> */}
      </div>
      <div className="w-full px-4 py-5 mb-3 font-semibold shadow-sm text-dark">
        <div className="flex items-center ">
          <p className="text-lg font-semibold">My First Entry </p>
          <div className="flex items-center justify-between flex-1 ml-8">
            <div className="flex items-center">
              <MarkButton
                editor={props.editor}
                format="bold"
                icon={<FaBold />}
              />
              <MarkButton
                editor={props.editor}
                format="italic"
                icon={<FaItalic />}
              />
              <MarkButton
                editor={props.editor}
                format="underline"
                icon={<FaUnderline />}
              />
              <MarkButton
                editor={props.editor}
                format="strikethrough"
                icon={<FaStrikethrough />}
              />
              <EditorImageSection />
              {/* <BlockButton editor={props.editor} format='image' icon={<BsFillImageFill />} /> */}
              {/* <BlockButton editor={props.editor} format='code' icon={<BsCode />} />
                       <BlockButton editor={props.editor} format='quote' icon={<FaQuoteRight />} /> */}
            </div>
            <button
              onClick={saveEntry}
              className="px-6 py-1 font-bold rounded-sm bg-dark text-light "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

EditorToolbar.propTypes = {
  editor: PropTypes.object,
  value: PropTypes.array,
};
