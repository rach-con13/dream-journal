import PropTypes from 'prop-types';

import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { RiAddBoxLine } from 'react-icons/ri';
import { WithToggle } from '../../hooks/withToggle';

import ChannelSettings from './ChannelSettings/channelSettings';

const Channel = ({ title, pinned, color, id, onClick, selected }) => {
  const { open, setOpen } = WithToggle();

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
          <p className="ml-2">{pinned ? 'PIN' : ''}</p>
        </div>
        <ChannelSettings id={id} title={title} />

        {/* {open ? (
          <ChannelItemDropdown name={name} id={id} setOpen={setOpen} />
        ) : null} */}
      </div>
      {/* <ColorPicker open={open}/>
       */}
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
  pinned: PropTypes.boolean,
};
export default Channel;
