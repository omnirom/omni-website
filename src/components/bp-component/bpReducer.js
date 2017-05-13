export const TOGGLE_TEXT = 'TOGGLE_TEXT';

export const initialState = {
  toggleState: true
};

export const bpReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case TOGGLE_TEXT:
        return {
          toggleState: !state.toggleState
        };
      default:
        return state;
    }
};

export const toggleText = () => ({ type: TOGGLE_TEXT });

export default bpReducer;
