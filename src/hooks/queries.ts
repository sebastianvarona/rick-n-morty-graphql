import { gql } from '@apollo/client';

// QUERY: Get all characters
// Receives basic character data and data if there's a previous and/or a next page
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

// QUERY: Get character by id
// Receives more detailed character data
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
