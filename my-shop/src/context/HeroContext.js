import { useState, useEffect, createContext } from 'react';
import { heroServiceFactory } from '../services/heroService';

export const HeroContext = createContext();

export function HeroProvider({ children }) {
    const [heroes, setHeroes] = useState([]);
    const heroService = heroServiceFactory();

    useEffect(() => {
        heroService.getAll()
            .then(data => {
                console.log(data)
                setHeroes(Object.values(data));
            })
            .catch(error => {
                console.log("Error" + error);
            });
    }, []);

    const contextValues = {
        heroes,
    }

    return (
        <>
            <HeroContext.Provider value={contextValues}>
                {children}
            </HeroContext.Provider>
        </>
    );
}