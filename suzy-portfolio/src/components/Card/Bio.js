import React from "react";
import MePix from "../../Assets/Images/Me-Paris.JPG";
import Figure from 'react-bootstrap/Figure'


function BioCard() {
    return (

        <article className="row single-post mt-auto no-gutters">
            <div className="col-md-12">
                <div className="image-wrapper float-left pr-3">

                    <Figure>
                        <Figure.Image
                            width={350}
                            // height={180}
                            alt="http://placehold.it/250x250"
                            src={MePix}
                            roundedCircle
                        />
                    </Figure>
                </div>
                <div id="main-text" className="single-post-content-wrapper p-3">
                    <blockquote className="blockquote">
                        <h3 className="mb-0 text-weight-bolder">“The only thing that is stopping you from where you are to
                            where you want to go is your comfort zone”</h3>
                        <footer className="blockquote-footer">Dhaval Gaudier</footer>
                    </blockquote>
                    <h6 className="text-weight-bold"> Hi there! My Name is Azucena Gonzalez. A former business professional
                    that turned into a Full Stack Software Engineer. What I love about programming is that you never
                    stop learning. More importantly, I love the ability to create anything
                    imagined, test it and improve it as technology progresses. It is challenging, engaging and
                    highly rewarding. At times it can be hair splitting yet in the end it is fulfilling and worth
                    every bit of effort.
                    </h6>
                    <h6 className="text-weight-bold">During my free time, I love to travel, hike, work on personal coding
                    projects and occassionaly seek adventures. I took a year off from work and had an experience of
                    a lifetime, I accepted a volunteer opportunity as Director of Operations
                    for a nonprofit school and relocated to West African country Ghana. I am excited and eager to begin this new chapter in my career, and and super excited to see where my next adventure takes me!
                    </h6>
                </div>
            </div>
        </article>

    );
}

export default BioCard; 