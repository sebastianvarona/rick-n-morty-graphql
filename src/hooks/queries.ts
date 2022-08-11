import { gql } from '@apollo/client';

export const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int) {
    characters(page: $page) {
      info {
        prev
        next
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      origin {
        name
      }
    }
  }
`;
