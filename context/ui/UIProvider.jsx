import { useReducer } from 'react'
import { ui } from '../../utils';
import { UIContext, uiReducer } from './';

const UI_INITIAL_STATE = {
    isMenuOpen: false,
}

export const UIProvider = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const toggleSideMenu = () => dispatch({ type: ui.toggleMenu });

    return (
        <UIContext.Provider value={{
            ...state,

            //Methods
            toggleSideMenu,
        }}>
            {children}
        </UIContext.Provider>
    )
}