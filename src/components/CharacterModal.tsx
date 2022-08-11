import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// Redux
import { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../app/modal-slice';

import { Character, CharacterVars } from '../app/types';

// GraphQL
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../hooks/queries';

function CharacterModal(): JSX.Element {
  const [character, setCharacter] = useState<Character | null>(null);

  const isOpen = useSelector((state: RootState) => state.modal.show);
  const characterId = useSelector(
    (state: RootState) => state.modal.characterId
  );
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(openModal(false));
  };

  const { loading, error, data } = useQuery<
    { character: Character },
    CharacterVars
  >(GET_CHARACTER, { variables: { id: characterId } });

  useEffect(() => {
    if (data) {
      console.log(data.character);
      setCharacter(data.character);
    }
  }, [data, characterId]);

  const renderElement = () => {
    if (loading)
      <div className="animate-pulse flex flex-col gap-3 pb-4">
        <div className="h-9 w-28 bg-gray-100/10"></div>
        <div className="grid grid-cols-5">
          <div className="col-span-2 w-32 h-32 rounded-full outline outline-3 outline-gray-100/10 bg-gray-100/10"></div>
          <div className="col-span-3">
            {[...Array(4)].map((_, index) => (
              <div className="h-6 w-32 bg-gray-100/10"></div>
            ))}
          </div>
        </div>
      </div>;
    if (error) <div>error</div>;
    return (
      <div className="flex flex-col gap-3 pb-4">
        <h1 className="text-gray-900 font-bold text-3xl h-9 mb-4">
          {loading ? '...' : character?.name}
        </h1>
        <div className="grid grid-cols-5">
          <div className="h-full flex items-center rounded-full col-span-2">
            <img
              className={`w-32 h-32 rounded-full bg-gray-900/20 outline outline-3 outline-gray-900/30 outline-offset-4 ${
                loading ? 'opacity-0' : 'opacity-100'
              }`}
              src={character?.image}
              alt={character?.name}
            />
          </div>
          <div className="col-span-3 h-full flex flex-col justify-center">
            <p className="min-h-6 text-lg">
              <strong>Species: </strong>
              {loading ? '...' : character?.species}
            </p>
            <p className="min-h-6 text-lg">
              <strong>Gender: </strong>
              {loading ? '...' : character?.gender}
            </p>
            <p className="min-h-6 text-lg">
              <strong>Status: </strong>
              {loading ? '...' : character?.status}
            </p>
            <p className="min-h-6 text-lg">
              <strong>Origin: </strong>
              {loading ? '...' : character?.origin?.name}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full  items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-gray-100 text-gray-900 p-10 text-left align-middle shadow-xl transition-all relative">
                <div
                  onClick={closeModal}
                  className="absolute right-4 top-4 hover:rotate-90 transition-transform cursor-pointer"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>{' '}
                </div>
                {renderElement()}
                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md outline outline-transparent transition-colors bg-red-200 px-4 py-2 text-sm text-red-600 hover:bg-red-500 hover:text-white ring-2 ring-red-500 ring-offset-2 font-bold"
                    onClick={closeModal}
                  >
                    New favorite{' '}
                    <svg
                      className="ml-2 w-5 h-5"
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CharacterModal;
