export const TOGGLE_NAV_DRAWER = 'TOGGLE_NAV_DRAWER';

export const initialState = {
  navDrawerState: false
};

export const pageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case TOGGLE_NAV_DRAWER:
        return {
          navDrawerState: !state.navDrawerState
        };
      default:
        return state;
    }
};

export const toggleNavDrawer = () => ({ type: TOGGLE_NAV_DRAWER });

export default pageReducer;
