import { MouseEventHandler } from 'react';

import { Characters } from '../app/types';

// Redux
import type { RootState } from '../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrementPage, incrementPage } from '../app/app-slice';

function Controls(): JSX.Element {
  const data: Characters | null = useSelector(
    (state: RootState) => state.app.data
  );
  const dispatch = useDispatch();

  if (data) {
    return (
      <div className="flex justify-between py-4">
        <Button
          text="Previous"
          display={data?.characters.info.prev}
          handler={() => {
            dispatch(decrementPage());
          }}
        />
        <Button
          text="Next"
          display={data?.characters.info.next}
          handler={() => {
            dispatch(incrementPage());
          }}
        />
      </div>
    );
  }
  return <div />;
}

function Button(props: {
  text: string;
  display: number | null;
  handler: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  return (
    <button
      className={`bg-neutral-800 hover:bg-neutral-700 rounded-md p-2 transition-colors ${
        props.display ? '' : 'opacity-0'
      }`}
      onClick={props.handler}
    >
      {props.text}
    </button>
  );
}

export default Controls;
