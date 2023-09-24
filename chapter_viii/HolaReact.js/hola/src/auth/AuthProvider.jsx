import { useContext, createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext({
  isAuthenticated: false
})

AuthProvider.propTypes = {
    children: PropTypes.node,
  };

export function AuthProvider({children}) {
    const [isAuthenticated] = useState(false)

    return(
        <AuthContext.Provider value={{ isAuthenticated }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
