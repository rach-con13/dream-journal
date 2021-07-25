import { useLazyQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/userContext';
import { GET_CHANNEL_ENTRIES } from '../../../lib/apolloClient/Functions/entry';
import ChannelEntry from './channelEntry';
const ChannelEntriesBar = ({ open }) => {
  // get entries of selected channel
  const { selectedChannel } = useContext(UserContext);
  const [getEntries, { loading, error, data }] =
    useLazyQuery(GET_CHANNEL_ENTRIES);

  useEffect(() => {
    if (selectedChannel) {
      getEntries({ variables: { id: selectedChannel } });
    }
  }, [selectedChannel, getEntries]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error..</p>;

  return (
    <div
      style={{ width: '30%', left: `${open ? '0%' : '-30%'}` }}
      className={` absolute  z-0 transition-all  h-full  bg-primary-light`}
    >
      <div>
        <div className="w-full py-1 bg-blue-500" />
        <div className="relative w-10/12 py-4 mx-auto ">
          <h4 className="text-lg font-bold text-primary">
            {data?.channel?.title}
          </h4>
        </div>
        <div>
          <div className="text-primary ">
            {data?.channel?.entries.map((entry) => {
              return <ChannelEntry key={entry._id} title={entry.title} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
ChannelEntriesBar.propTypes = {
  open: PropTypes.boolean,
};
export default ChannelEntriesBar;
