import React, { useState } from 'react';
import { ImageButton } from '../../../lib/slate/slateButtons/imageButton';
import { ImageModal } from './imageModal';

export default function EditorImageSection(props) {
  const [url, setUrl] = useState(null);

  const getImageURL = (value) => {
    setUrl(value);
  };
  return (
    <>
      <ImageButton />
      <ImageModal onSubmit={getImageURL} />
    </>
  );
}
