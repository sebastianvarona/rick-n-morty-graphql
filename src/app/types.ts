// Character type definition
// Optional properties are marked with ?, these are used for fetching GetCharacter query
// Property [key: string]: any is used for fetching GetAllCharacters query to omit properties that are not needed in the Type definition.
export type Character = {
  id: number;
  name: string;
  image: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: {
    name: string;
  };
  [key: string]: any;
};

// Info type definition
// Makes part of the data returned by the GetAllCharacters query
export type Info = {
  next: number | null;
  prev: number | null;
  [key: string]: any;
};

// Characters type definition
// Makes part of the data returned by the GetAllCharacters query
export type Characters = {
  characters: {
    info: Info;
    results: Character[];
  };
};

// Variables used to pass data to the GetAllCharacters query
export type CharactersVars = {
  page: number;
};

// Variables used to pass data to the GetCharacter query
export type CharacterVars = {
  id: number | null;
};
