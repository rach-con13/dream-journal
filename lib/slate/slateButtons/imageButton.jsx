import { useSlateStatic } from "slate-react";
import {useState} from "react";
import PropTypes from "prop-types";
import { insertImage, isImageUrl } from "../../../components/editor/plugins/withImage"

export const ImageButton = ({open,setOpen}) => {
    const editor = useSlateStatic();
 

    const displayImageOptionsModal = (e) => {
        e.preventDefault();
        setOpen(true);
        
    }
    // event.preventDefault()
    // const url = window.prompt('Enter the URL of the image:')
    // if (url && !isImageUrl(url)) {
    //   alert('URL is not an image')
    //   return
    // }
    // insertImage(editor, url)
    let OpenClass = open ? 'block': 'hidden';
    return (
        <>
     
      <button
        onMouseDown={displayImageOptionsModal}
      >
        <p>Image</p>
      </button>
      </>
    )
  }

  ImageButton.propTypes = {
      open:PropTypes.bool,
      setOpen:PropTypes.func
  }
