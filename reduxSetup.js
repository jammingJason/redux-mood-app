const INITIAL_STATE = { face: 'ʕ✖﹏✖ʔ' };
function faceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GRIMACING':
      return { ...state, face: '❃ႣᄎႣ❃' };
    case 'BLUSHING':
      return { ...state, face: '(⺣ﻌ⺣)' };
    case 'ANGRY':
      return { ...state, face: '⋋_⋌' };
    case 'NERVOUS':
      return { ...state, face: '⊙﹏⊙' };
    case 'RESET':
      return { ...state, face: 'ʕ✖﹏✖ʔ' };
    default:
      return state;
  }
}

const store = Redux.createStore(faceReducer);
