import React from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsPencil } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import DropdownButton from './dropdownButton';
import { useMutation } from '@apollo/client';
import { DELETE_CHANNEL } from '../../../lib/apolloClient/Functions/channel';

export default function ChannelItemDropdown({ setOpen, id }) {
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className="fixed left-0 top-0 w-full h-full "
      />
      <div
        style={{ left: '80%' }}
        className="w-full absolute py-2  rounded-sm  top-full z-50 bg-white shadow-md"
      >
        <DropdownButton
          icon={<RiDeleteBinLine />}
          name="Delete"
          hotkey="ctrl+del"
        />
        <DropdownButton icon={<BsPencil />} name="Rename" hotkey="ctrl+r" />
        <DropdownButton
          icon={<AiOutlineStar />}
          name="Add to Favourites"
          hotkey=""
        />
      </div>
    </>
  );
}

ChannelItemDropdown.propTypes = {
  setOpen: PropTypes.func,
  id: PropTypes.string,
};
