import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { RiAddBoxLine } from 'react-icons/ri';
import ChannelDropdown from './channelDropdown';

export default function ChannelSettings({ id, title }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center">
        <p onClick={() => setOpen(true)} className="text-lg">
          <HiOutlineDotsHorizontal />
        </p>
        <p className="text-lg ml-2">
          <RiAddBoxLine />
        </p>
      </div>
      {open ? <ChannelDropdown title={title} id={id} setOpen={setOpen} /> : ''}
    </>
  );
}

ChannelSettings.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};
