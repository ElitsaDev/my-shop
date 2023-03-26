import * as heroService from '../../services/heroService';
import { useState, useEffect } from 'react';
import Hero from './Hero';

export default function HeroList() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        heroService.getAll()
            .then(data => {
                setHeroes(Object.values(data))
            })
            .catch(error => {
                console.log("Error" + error);
            })
    }, []);

    return (
        <section className="hero">
            <div className="hero__slider owl-carousel">
                {heroes.map(hero =>
                    < Hero 
                        {...hero}
                        key={hero._id}  
                    />
                )}
            </div>
        </section>
    );
}