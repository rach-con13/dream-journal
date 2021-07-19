import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from 'react-icons/ai';
import CreateChannel from './channel/createChannel';
import Channels from './channels/channels';

const ChannelSideBar = ({ toggle, onClick }) => {
  return (
    <div className="overflow-y-auto relative z-30  h-full transition-all bg-primary-superdark">
      <div className="relative z-10 h-full text-primary bg-primary-superdark">
        <div className="w-10/12  mx-auto flex items-center justify-between">
          <input
            placeholder="Search for channels"
            className="py-4 text-lg bg-transparent w-full text-primary-superlight"
          />
          <button
            onClick={toggle}
            className="text-lg text-primary-superlight font-bold"
          >
            <AiOutlineArrowRight />
          </button>
        </div>
        <CreateChannel />
        <Channels />
        {/* <CreateChannel />
        <Channels /> */}
      </div>
    </div>
  );
};
export default ChannelSideBar;

ChannelSideBar.propTypes = {
  toggle: PropTypes.func,
  onClick: PropTypes.func,
};
