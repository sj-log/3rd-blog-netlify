import React from 'react';
import '../scss/styles.scss';
import Typed from 'react-typed';

var Intro = () => {
    return (
        <section className="body-section">
            <section className="img-section carousel">
                <img
                    id='carousel-img'
                    alt="Sj Vipassana Study"
                    src='https://user-images.githubusercontent.com/35059428/70877639-abf15f00-2001-11ea-8f29-528abe924e1c.png'></img>
            </section>
            <aside className="text-section">
            <Typed
                strings={[
                    "Hello! I'm SJ",
                    "I'm searching for a way to make this world better",
                    "Through Writing code and text."]}
                    typeSpeed={70}
                    backSpeed={50}
                    attr=""
                    loop >
                    <span type="text"/>
                </Typed>
            </aside>
        </section>
    )

}

export default Intro;