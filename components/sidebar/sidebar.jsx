import { gql, useQuery } from '@apollo/client';
import React from 'react';
import PropTypes from 'prop-types';

import ChannelBar from '../channel/sidebar/channelBar';

const USERS = gql`
  query getUsers {
    users {
      id
      username
      password
      email
    }
  }
`;

export default function Sidebar({ toggle }) {
  // const {loading,error,data} = useQuery(USERS);

  // if(loading) return <p>Loading...</p>
  // if (error) return <p>Error</p>

  // console.log(data);

  return (
    <div className="h-full transition-all bg-primary-superdark">
      <ChannelBar toggle={toggle} />
    </div>
  );
}
Sidebar.propTypes = {
  toggle: PropTypes.boolean,
};
