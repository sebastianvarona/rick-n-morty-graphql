import { useDispatch, useSelector } from 'react-redux';
import { openSidebar } from '../app/sidebar-slice';
import { RootState } from '../app/store';

// Component that displays the last favourite character in the list.
// Also displays the favourites history list in the app-slice via Redux.
function FavouritesSideBar(): JSX.Element {
  const isOpen = useSelector((state: RootState) => state.sidebar.show);
  const favouriteCharacter = useSelector(
    (state: RootState) => state.app.favouriteCharacter
  );
  const history = useSelector((state: RootState) => state.app.history);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={`flex gap-3 fixed z-10 top-36 right-8 bg-red-800 hover:bg-red-700 rounded-md p-2 transition-colors ${
          isOpen ? 'opacity-0' : ''
        }`}
        onClick={() => dispatch(openSidebar(true))}
      >
        Favourite{' '}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm ${
          isOpen ? '' : 'hidden'
        }`}
      />
      <div
        className={`z-20 w-96 h-screen transition-transform fixed top-0 right-0 bg-neutral-800 rounded-l-lg p-6 ${
          isOpen ? '' : 'translate-x-96'
        }`}
      >
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-8">Favourite</h2>
          <svg
            className="w-6 h-6 hover:rotate-90 transition-transform cursor-pointer"
            onClick={() => dispatch(openSidebar(false))}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {!favouriteCharacter ? (
          'No favourite character'
        ) : (
          <div>
            <h3 className="font-bold text-3xl mb-4">
              {favouriteCharacter.name}
            </h3>
            <img
              className={`w-32 h-32 mb-4 rounded-full bg-gray-500/20 outline outline-3 outline-gray-500/30 outline-offset-4`}
              src={favouriteCharacter.image}
              alt={favouriteCharacter.name}
            />
            <p className="min-h-6 text-lg">
              <strong>Species: </strong>
              {favouriteCharacter.species}
            </p>
            <p className="min-h-6 text-lg">
              <strong>Gender: </strong>
              {favouriteCharacter.gender}
            </p>
            <p className="min-h-6 text-lg">
              <strong>Status: </strong>
              {favouriteCharacter.status}
            </p>
            <p className="min-h-6 text-lg">
              <strong>Origin: </strong>
              {favouriteCharacter.origin?.name}
            </p>
          </div>
        )}
        <div>
          <h2 className="text-2xl font-bold mt-20">History</h2>
          <ul className="scrollable h-56 overflow-y-scroll">
            {history.map((character, index) => (
              <li>
                {index + 1}. {character}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FavouritesSideBar;
