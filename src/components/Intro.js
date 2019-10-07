import React from 'react';
import '../scss/styles.scss'
import {Link} from 'react-router-dom';

var Intro = () => {
   return (
        <section className="body-section">
            <section className="img-section">
             <img alt="Sj Vipassana Study" src="https://scontent-sin2-1.cdninstagram.com/vp/dce8f3d6e157f4081f51751074023a11/5E278B55/t51.2885-15/e35/45350830_808270686177244_7067872797703318700_n.jpg?_nc_ht=scontent-sin2-1.cdninstagram.com&_nc_cat=104"></img>
                {/* <img src="https://scontent-sin2-1.cdninstagram.com/vp/1c14a1efa3a8fae5465243b00ada8a88/5E23DEC0/t51.2885-15/e35/47581801_323181528283940_4634403341321352258_n.jpg?_nc_ht=scontent-sin2-1.cdninstagram.com&_nc_cat=108"></img> */}
                {/* <img
                    src="https://scontent-sin6-1.cdninstagram.com/vp/b32f778adfe5fa3822f4a0e54edafef8/5E23D78C/t51.2885-15/e35/s1080x1080/67673091_890824034610624_4093358327862933201_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=100"></img> */}
            </section>
            <aside className="text-section">
                <h1>Good things with freedom</h1>
                <p>Have been traveled world, to make better version of myself.</p>
                <p>Wanna make better world by enriching my capacity.</p>
                <p>This place is the showcase how I spread goodness.</p>
                <button className="a read-more"><Link to="/about">Read More</Link></button>
            </aside>
        </section>
    )

}

export default Intro;