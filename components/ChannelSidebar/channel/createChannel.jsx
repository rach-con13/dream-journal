import { useMutation } from '@apollo/client';
import React, { useState } from 'react';

import { UpdateChannelsAfterCreate } from '../../../lib/apolloClient/CacheUpdates/updates';
import {
  CREATE_CHANNEL,
  GET_CHANNELS,
} from '../../../lib/apolloClient/Functions/channel';
import { GET_ENTRIES } from '../../../lib/apolloClient/Functions/entry';
import Firebase from '../../../lib/firebase/firebase.config';

export default function CreateChannel(props) {
  const [createChannel, { data }] = useMutation(CREATE_CHANNEL, {
    update: UpdateChannelsAfterCreate,
  });
  const [userID, setUserID] = useState(null);

  const createNewChannel = async () => {
    getCurrentUser();
  };

  const getCurrentUser = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        createChannel({
          variables: {
            authID: user.uid,
            title: 'Untitled',
            pinned: false,
          },
        });
      } else {
        console.log('signed out');
      }
    });
  };

  return (
    <>
      <div className="py-4 mx-auto bg-primary-dark">
        <div onClick={createNewChannel} className="w-10/12 mx-auto">
          <p className="text-base font-bold">New Channel</p>
        </div>
      </div>
    </>
  );
}
