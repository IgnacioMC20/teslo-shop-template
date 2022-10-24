import { ui } from "../../utils";


export const uiReducer = (state, action) => {
  switch (action.type) {
    case ui.toggleMenu:
        return {
            ...state,
            isMenuOpen: !state.isMenuOpen
        }
  
    default:
        return state;
  }
}