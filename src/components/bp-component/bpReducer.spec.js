import {
  bpReducer,
  toggleText,
  initialState,
  TOGGLE_TEXT
} from './bpReducer';

describe('Boilerplate Reducer', () => {
  it('returns initialState', () => {
    const expected = { toggleState: true };

    expect(bpReducer(initialState)).toEqual(expected);
  });

  it('returns toggleText action', () => {
    const expected = { type: TOGGLE_TEXT };

    expect(toggleText()).toEqual(expected);
  });

  it('handles toggleText action', () => {
    const toggledState = bpReducer(initialState, toggleText());
    const expected = { toggleState: false };

    expect(toggledState).toEqual(expected);
  });
});
