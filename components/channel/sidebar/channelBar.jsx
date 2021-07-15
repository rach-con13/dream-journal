import ChannelItem from '../channelItem/channelItem';
import { AiOutlineSetting } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Channels from './channels';
import CreateChannel from './createChannel';
const ChannelBar = ({ toggle,onClick}) => {
  return (
    <div className="h-full transition-all bg-primary-superdark">
    
      <div
        style={{ boxSizing: 'border-box' }}
        className="relative z-10 h-full text-primary bg-primary-superdark"
      >
        <div className="w-10/12 py-4 mx-auto flex items-center justify-between">
          <p className="text-lg">Search</p>
          <button
            onClick={toggle}
            className="text-lg text-primary-superlight font-bold"
          >
            <AiOutlineArrowRight />
          </button>
        </div>
        <CreateChannel />
        <Channels />
      </div>
    </div>
  );
};
export default ChannelBar;
