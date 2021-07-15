import PropTypes from 'prop-types';
import { AiOutlineSetting } from 'react-icons/ai';
import { WithToggle } from '../../../hooks/withToggle';
import ColorPicker from '../colorPicker';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { RiAddBoxLine } from 'react-icons/ri';
import WithSelected from '../../../hooks/withSelected';
import ChannelItemDropdown from './channelItemDropdown';
const ChannelItem = ({ name, color, id, onClick, selected }) => {
  const { open, setOpen } = WithToggle();
  const chooseColor = () => {};

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
          <button
            onClick={chooseColor}
            className={`p-2 rounded-full ${color}`}
          />
          <p className="ml-3 text-base">{name}</p>
        </div>
        <div className="flex items-center">
          <p onClick={() => setOpen(true)} className="text-lg">
            <HiOutlineDotsHorizontal />
          </p>
          <p className="text-lg ml-2">
            <RiAddBoxLine />
          </p>
        </div>
        {open ? <ChannelItemDropdown id={id} setOpen={setOpen} /> : null}
      </div>
      {/* <ColorPicker open={open}/>
       */}
    </>
  );
};

ChannelItem.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.boolean,
};
export default ChannelItem;
