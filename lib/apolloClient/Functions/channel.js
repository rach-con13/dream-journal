import { gql } from '@apollo/client';

export const CREATE_CHANNEL = gql`
  mutation CreateChannel($authID: String, $title: String, $pinned: Boolean) {
    createChannel(authID: $authID, title: $title, pinned: $pinned) {
      id
      title
      pinned
    }
  }
`;

export const GET_CHANNELS = gql`
  query getChannels {
    channels {
      id
      title
      pinned
    }
  }
`;

export const GET_CHANNEL = gql`
  query getChannel($id: String) {
    Channel(id: $id) {
      id
      title
      pinned
    }
  }
`;

export const DELETE_CHANNEL = gql`
  mutation DeleteChannel($id: String) {
    deleteChannel(id: $id) {
      id
    }
  }
`;

export const UPDATE_CHANNEL = gql`
  mutation UpdateChannel($id: String, $title: String, $pinned: Boolean) {
    updateChannel(id: $id, title: $title, pinned: $pinned) {
      id
      title
      pinned
    }
  }
`;
