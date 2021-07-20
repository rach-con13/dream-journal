//
// deleted,updated,favourited
import PropTypes from 'prop-types';
import React from 'react';
import { useReducer, useState } from 'react';
import {
  ADD_FAVOURITE_CHANNEL,
  DELETE_CHANNEL,
} from '../../lib/apolloClient/Functions/channel';

export const ChannelContext = React.createContext();

const ChannelProvider = ({ children }) => {
  const [currentChannel, setChannel] = useState({});

  return (
    <ChannelContext.Provider value={{ currentChannel, setChannel }}>
      {children}
    </ChannelContext.Provider>
  );
};
ChannelProvider.propTypes = {
  children: PropTypes.node,
};

export default ChannelProvider;
