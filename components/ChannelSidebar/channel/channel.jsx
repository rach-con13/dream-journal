import PropTypes from 'prop-types';
import { useState } from 'react';

import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { RiAddBoxLine } from 'react-icons/ri';
import { WithToggle } from '../../../hooks/withToggle';

import ChannelSettings from './ChannelSettings/channelSettings';

const Channel = ({ title, color, id, onClick, selected }) => {
  const { open, setOpen } = WithToggle();
  const [isUpdating, setUpdating] = useState(false);

  return (
    <>
      <div
        data-id={id}
        onClick={onClick}
        className={`${
          selected ? 'bg-primary-dark rounded-sm' : ''
        } hover:bg-primary-dark hover:rounded-sm hover:p-2  transition-all relative flex items-center justify-between px-2 py-2 mt-2`}
      >
        <div className="flex items-center">
          <button className={`p-2 rounded-full ${color}`} />
          <p className="ml-3 text-base">{title}</p>
        </div>
        <ChannelSettings id={id} title={title} />
      </div>
    </>
  );
};

Channel.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.boolean,
  title: PropTypes.string,
};
export default Channel;
