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

export type Info = {
  next: number | null;
  prev: number | null;
  [key: string]: any;
};

export type Characters = {
  characters: {
    info: Info;
    results: Character[];
  };
};

export type CharactersVars = {
  page: number;
};

export type CharacterVars = {
  id: number | null;
};
