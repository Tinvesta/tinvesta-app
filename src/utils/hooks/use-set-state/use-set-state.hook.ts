import { useReducer } from 'react';

const reducer = <T>(previousState: T, updatedState: Partial<T>) => ({
  ...previousState,
  ...updatedState,
});

export function useSetState<T>(initialState: T): [T, (state: Partial<T>) => void] {
  const [state, dispatch] = useReducer(
    (previousState: T, updatedState: Partial<T>) => reducer(previousState, updatedState),
    initialState,
  );

  const setState = (updatedState: Partial<T>): void => dispatch(updatedState);

  return [state, setState];
}
