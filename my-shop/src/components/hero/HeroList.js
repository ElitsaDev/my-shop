
import { useContext } from 'react';
import { HeroContext } from '../../context/HeroContext';
import Hero from './Hero';

export default function HeroList() {
    const { heroes }  = useContext(HeroContext);
    
    return (
        <section className="hero">
            <div className="hero__slider owl-carousel" >
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