export const TOGGLE_NAV_DRAWER = 'TOGGLE_NAV_DRAWER';

export const initialState = {
  navDrawerState: false
};

export const pageReducer = (state = initialState, action = {}) => {
    return {
      navDrawerState: !state.navDrawerState
    };
};

export const toggleNavDrawer = () => ({ type: TOGGLE_NAV_DRAWER });

export default pageReducer;
