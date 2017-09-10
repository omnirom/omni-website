import {
  pageReducer,
  toggleNavDrawer,
  initialState,
  TOGGLE_NAV_DRAWER
} from './pageReducer';

describe('Page Reducer', () => {
  it('returns initialState', () => {
    const expected = { navDrawerState: false };

    expect(pageReducer(initialState)).toEqual(expected);
  });

  it('returns toggleNavDrawer action', () => {
    const expected = { type: TOGGLE_NAV_DRAWER };

    expect(toggleNavDrawer()).toEqual(expected);
  });

  it('handles toggleNavDrawer action', () => {
    const openedDrawerState = pageReducer(initialState, toggleNavDrawer());
    const expected = { navDrawerState: true };

    expect(openedDrawerState).toEqual(expected);
  });
});
