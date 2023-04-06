import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from '../services/authService';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();
    const authService = authServiceFactory( auth.accessToken );

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/');

        } catch (error) {
            console.log(error);
        }
    }

    const onRegisterSubmit = async (data) => {
        const {repass, ...registerData} = data;

        if(repass !== registerData.password){
            return;
        }

        try {
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    const onLogout =  async () => {
       await authService.logout();
       console.log(localStorage)
       localStorage.removeItem('cart');
        setAuth({});
    }

    if(auth.email === 'peter@abv.bg' || auth.email === 'john@abv.bg'){
            auth.isAdministr = true;
    }    
 
    const contextObject = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
        isAdmin:  auth.isAdministr,
    }

    return (
        <>
            <AuthContext.Provider value={contextObject}>
                {children}
            </AuthContext.Provider>
        </>
    )
}