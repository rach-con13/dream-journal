import { useLazyQuery } from '@apollo/client';
import { createContext, useEffect, useState } from 'react';
import React from 'react';
import { GET_USER_CHANNELS } from '../lib/apolloClient/Functions/user';
import Firebase from '../lib/firebase/firebase.config';
import PropTypes from 'prop-types';

export const UserContext = React.createContext();

// returns current logged in user and return user channels
export const UserProvider = ({ children }) => {
  const [authID, setAuthID] = useState(null); // auth-id from firebase user
  const [selectedChannel, setSelected] = useState(null);

  const [getChannels, { loading, error, data }] =
    useLazyQuery(GET_USER_CHANNELS);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthID(user.uid);
        getChannels({ variables: { authID: user.uid } });
      }
    });
  }, [getChannels]);
  return (
    <UserContext.Provider
      value={{ data, loading, error, selectedChannel, setSelected }}
    >
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node,
};
