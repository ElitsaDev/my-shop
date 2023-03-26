import Hero from './Hero';

export default function HeroList({heroes}) {
    return (
        <section className="hero">
            <div className="hero__slider owl-carousel">
                {heroes.length > 0 && heroes.map(hero =>
                    < Hero 
                        {...hero}
                        key={hero._id}  
                    />
                )}
            </div>
        </section>
    );
}