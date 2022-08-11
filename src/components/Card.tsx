import { Character } from '../app/types';
import { useDispatch } from 'react-redux';
import { openModal, setCharacterId } from '../app/modal-slice';

function Card(props: { character: Character }): JSX.Element {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(openModal(true));
    dispatch(setCharacterId(props.character.id));
  };

  return (
    <div className="rounded-md p-4 flex flex-col items-center">
      <div className="w-32 h-32 relative rounded-full cursor-pointer">
        <img
          onClick={handleModal}
          className="w-32 h-32 rounded-full cursor-pointer"
          src={props.character.image}
          alt={props.character.name}
        />
        <div
          onClick={handleModal}
          className="absolute top-0 left-0 w-32 h-32 flex items-center justify-center  opacity-0 hover:opacity-100 transition-opacity"
        >
          <span className="bg-gray-100 text-gray-900 px-3 py-1 font-bold">
            More info...
          </span>
        </div>
      </div>
      <h2 className="text-xl font-bold text-center">{props.character.name}</h2>
    </div>
  );
}

export default Card;
