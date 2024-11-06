import { useReducer } from 'react';

const initialState = {
  count: 0,
  switchState: false, 
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'TOGGLE_SWITCH':
      return { ...state, switchState: !state.switchState }; 
    case 'TURN_ON':
      return { ...state, switchState: true }; 
    case 'TURN_OFF':
      return { ...state, switchState: false }; 
    default:
      return state;
  }
};

const Usereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <p>Switch: {state.switchState ? 'ON' : 'OFF'}</p>
      {/* <button onClick={() => dispatch({ type: 'TOGGLE_SWITCH' })}>Toggle Switch</button> */}
      <button onClick={() => dispatch({ type: 'TURN_ON' })}>Turn ON</button>
      <button onClick={() => dispatch({ type: 'TURN_OFF' })}>Turn OFF</button>
    </div>
  );
};

export default Usereducer;