import { gql } from '@apollo/client';

export const CREATE_CHANNEL = gql`
  mutation CreateChannel($title: String, $pinned: Boolean) {
    createChannel(title: $title, pinned: $pinned) {
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
