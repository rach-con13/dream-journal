import { gql } from "@apollo/client";

export const CREATE_ENTRY = gql`
    mutation CreateEntry($title:String,$content:String) {
        createEntry(title:$title,content:$content) {
            id
            title
            content
        }
    }
`;

export const GET_ENTRIES = gql`
    query getEntries {
        entries {
            id
            title
            content
        }
    }
`;

export const GET_ENTRY = gql`
    query getEntry($id:String) {
        entry(id:$id) {
            id
            title
            content
        }
    }
`;

