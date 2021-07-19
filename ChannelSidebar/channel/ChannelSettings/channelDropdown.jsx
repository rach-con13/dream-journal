import PropTypes from 'prop-types';
import { BsPencil } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import {
  UpdateCacheAfterDelete,
  UpdateCacheAfterUpdate,
} from '../../../lib/apolloClient/CacheUpdates/updates';
import {
  DELETE_CHANNEL,
  UPDATE_CHANNEL,
} from '../../../lib/apolloClient/Functions/channel';
import DropdownButton from './DropdownButton';
export default function ChannelDropdown({ setOpen, id, title }) {
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className=" fixed left-0 top-0 w-full h-full "
      />
      <div
        style={{
          left: '18%',
          top: 'auto',
        }}
        className="w-2/12 fixed py-2   rounded-sm  top-full z-50 bg-white shadow-md"
      >
        <DropdownButton
          mutation={DELETE_CHANNEL}
          update={UpdateCacheAfterDelete}
          variables={{ id: id }}
          icon={<RiDeleteBinLine />}
          name="Delete"
          id={id}
        />
        <DropdownButton
          mutation={UPDATE_CHANNEL}
          update={UpdateCacheAfterUpdate}
          variables={{ id: id, title: title, pinned: true }}
          icon={<AiOutlineStar />}
          name="Add to Favourite"
          id={id}
        />
        {/* <DropdownButton mutation={UPDATE_CHANNEL} update={UpdateCacheAfterUpdate} variables={{id:id}} */}

        {/* <DropdownButton
          icon={<RiDeleteBinLine />}
          name="Delete"
          title={name}
          mutation={DELETE_CHANNEL}
          hotkey="ctrl+del"
          id={id}
        /> */}
        {/* <DropdownButton
            onClick={() => channelContext.dispatch({ type: 'rename' })}
            icon={<BsPencil />}
            name="Rename"
            hotkey="ctrl+r"
          /> */}
        {/* <DropdownButton
          icon={<AiOutlineStar />}
          mutation={ADD_FAVOURITE_CHANNEL}
          type="favourite"
          name="Add to Favourites"
          hotkey=""
        /> */}
      </div>
    </>
  );
}

ChannelDropdown.propTypes = {
  setOpen: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
};
