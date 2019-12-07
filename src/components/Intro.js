import React from 'react';
import '../scss/styles.scss';
import Typed from 'react-typed';

var Intro = () => {
    var imgs = [
        'https://user-images.githubusercontent.com/35059428/69769074-9806ca00-11c6-11ea-9' +
                '79e-cc45f1c5f2cb.png',
        'https://user-images.githubusercontent.com/35059428/69770220-9ee40b80-11cb-11ea-9' +
                'f4f-5d0c38a95929.png',
        'https://scontent-sin2-1.cdninstagram.com/vp/dce8f3d6e157f4081f51751074023a11/5E2' +
                '78B55/t51.2885-15/e35/45350830_808270686177244_7067872797703318700_n.jpg?_nc_ht=' +
                'scontent-sin2-1.cdninstagram.com&_nc_cat=104'
    ]

    return (
        <section className="body-section">
            <section className="img-section carousel">
                <img
                    id='carousel-img'
                    alt="Sj Vipassana Study"
                    src='https://scontent-sin2-1.cdninstagram.com/vp/dce8f3d6e157f4081f51751074023a11/5E278B55/t51.2885-15/e35/45350830_808270686177244_7067872797703318700_n.jpg?_nc_ht=scontent-sin2-1.cdninstagram.com&_nc_cat=104'></img>
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