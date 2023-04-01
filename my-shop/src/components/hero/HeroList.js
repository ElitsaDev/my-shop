import { useState, useEffect } from 'react';
import Hero from './Hero';
import * as heroService from '../../services/heroService';

export default function HeroList({ onStateHandler}) {
    const [heroes, setHeroes] = useState([]);
   

    useEffect(() => {
        heroService.getAll()
            .then(data => {     
                setHeroes(Object.values(data));
                onStateHandler(() => false);
            })
            .catch(error => {
                console.log("Error" + error);
            })  
    }, []);

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