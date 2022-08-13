import Controls from './components/Controls';
import List from './components/List';
import CharacterModal from './components/CharacterModal';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import FavouritesSideBar from './components/FavouritesSideBar';

function App() {
  const characterId: number | null = useSelector(
    (state: RootState) => state.modal.characterId
  );
  return (
    <div className="App">
      <FavouritesSideBar />
      <div className="max-w-7xl mx-auto p-6 sm:p-12">
        <h1 className="text-7xl font-bold text-center mb-12">Rick & Morty</h1>
        <CharacterModal />
        <Controls />
        <List />
        <Controls />
      </div>
    </div>
  );
}

export default App;
