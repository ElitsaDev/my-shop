import { useState, useEffect } from 'react';
import Hero from './Hero';
import * as heroService from '../../services/heroService';

import { useContext } from 'react';
import { HeroesContext } from '../../context/HeroesContext';
export default function HeroList() {
    const [heroes, setHeroes] = useState([]);
   
    const {onStateHandler} = useContext(HeroesContext)

    useEffect(() => {
        heroService.getAll()
            .then(data => {     
                setHeroes(Object.values(data));
                onStateHandler(false);
            })
            .catch(error => {
                console.log("Error" + error);
            })  
    }, [onStateHandler]);

    return (
        <section className="hero">
            <div className="hero__slider owl-carousel" >
                { heroes.map(hero =>
                    < Hero 
                        {...hero}
                        key={hero._id}  
                    />
                )}
            </div>
        </section>
    );
}