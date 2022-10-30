import React from 'react';



function Section1() {

    return <section id='section1' className='section home'>
        <div className='im-co'><img className='back-image' src="image1004.png" alt="asdf" /></div>
        <h1 id="heading" className="heading">Psychological services</h1>
        <p className="subtext">The way of success</p>
    </section>
}


function Section2(props) {

    return <section id='section2' className='section about'>
        <h1 id="heading" className="heading">The way we connect...</h1>
        <p className="subtext">In person and online</p>
        <div className='serv-img-container'>
            <div className='service'>
                <img className='serv-img' src={props.theme ? "inper-dark.svg": "inper-light.svg"} alt="interview" />
            </div>
            <div className='service'>
                <img className='serv-img' src={props.theme ? "online-dark.svg": "online-light.svg"} alt="online" />
            </div>
        </div>
    </section>
}

function Section3(props) {

    return <section id='section3' className='section project'>
        <h1 id="heading" className="heading">Our services</h1>
        <p className="subtext">We do our best</p>
        <div className="type-container">
            <div className="type-subcon">
                <img className='type-img' src={props.theme ? "ord-dark.svg" : "ord-light.svg"} alt="coach" />
                <p className="type-text">Coaching</p>
            </div>
            <div className="type-subcon">
                <img className='type-img' src={props.theme ? "posit-dark.svg" : "posit-light.svg"} alt="positive" />
                <p className="type-text">Problem solving</p>
            </div>
            <div className="type-subcon">
                <img className='type-img' src={props.theme ? "relax-dark.svg" : "relax-light.svg"} alt="relax" />
                <p className="type-text">Relaxation</p>
            </div>
        </div>
    </section>
}

function Section4() {


    return <section id='section4' className='section contact'>
        <h1 id="heading" className="heading">Contacts</h1>
        <p className="subtext">Choose whatsapp</p>
        <div className="contact-container">
            <i className="contact-icon fa-brands fa-instagram"></i>
            <i className="contact-icon fa-brands fa-youtube"></i>
            <i className="contact-icon fa-brands fa-facebook"></i>
            <i className="contact-icon fa-brands fa-twitter"></i>
            <i className="contact-icon fa-brands fa-whatsapp"></i>
        </div>
    </section>
}



export { Section1, Section2, Section3, Section4 }