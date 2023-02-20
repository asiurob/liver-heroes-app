import { createContext, useReducer } from "react";
import { types } from "../types/types";
import { authReducer } from './'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const init = () => {
        const user = JSON.parse(localStorage.getItem('user') );

        return { logged: !!user, user }
    }

    const [state, dispatch] = useReducer(authReducer, {} , init)

    const login = (name = '') => {
        const user = {
            username: name
        };
        dispatch({
            type: types.login,
            payload: user
        })

        localStorage.setItem('user', JSON.stringify(user));
    }

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({
            type: types.logout,
        })
    }

    return (
        <AuthContext.Provider value={{
            logout, login, ...state
        }}>
            { children }
        </AuthContext.Provider>
    )
}
