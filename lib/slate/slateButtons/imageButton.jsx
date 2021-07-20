import { useSlateStatic } from 'slate-react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  insertImage,
  isImageUrl,
} from '../../../components/editor/plugins/withImage';
import { BiImage } from 'react-icons/bi';

export const ImageButton = ({ open, setOpen, url }) => {
  const editor = useSlateStatic();

  const displayImageOptionsModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  // event.preventDefault()
  // const url = window.prompt('Enter the URL of the image:')
  // if (url && !isImageUrl(url)) {
  //   alert('URL is not an image')
  //   return
  // }
  // insertImage(editor, url)
  let OpenClass = open ? 'block' : 'hidden';
  return (
    <>
      <button
        className="ml-4 outline-none text-2xl"
        onMouseDown={displayImageOptionsModal}
      >
        <BiImage />
      </button>
    </>
  );
};

ImageButton.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  url: PropTypes.string,
};
