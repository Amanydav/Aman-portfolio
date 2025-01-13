import React from "react";
import './Project.css'
import card1 from '../../img/card-1.png';
import card2 from '../../img/card-2.png';
import card3 from '../../img/card-3.png';
import card4 from '../../img/card-4.png';
import card5 from '../../img/card-5.png';
import card6 from '../../img/card-6.png';
import card7 from '../../img/card-7.png';
import card8 from '../../img/card-8.png';

const App = () => {
  return (
    <div>
        <div className="container">
            <div className="card-1">
                <img src={card1} alt="Aman Kumar Profile" />
                <p>
                    <h3>College Website</h3><br/>
                    <h4>Using Html,Css,Javascript</h4>
                </p>
                <a href="https://college-website-7.netlify.app/"><button> Visit</button></a>
            </div>
            <div className="card-2">
                <img src={card2} alt="Aman Kumar Profile"/>
                <p>
                    <h3>E-commerce</h3><br/>
                    <h4>Using Html,Css,Javascript</h4>
                </p>
                <a href="https://shopsy-ecommercee.netlify.app/"><button> Visit</button></a>
            </div>
            <div className="card-3">
                <img src={card3} alt="Aman Kumar Profile"/>
                <p>
                    <h3>Kfc</h3><br/>
                    <h4>Using Html,Css,Javascript</h4>
                </p>
                <a href="https://kfc-7.netlify.app/"><button> Visit</button></a>
            </div>
            
            <div className="card-4">
                <img src={card4} alt="Aman Kumar Profile"/>
                <p>
                    <h3>Travelling Website</h3><br/>
                    <h4>Using React.js,Node.js,moongodb</h4>
                </p>
                <a href="https://travelling-website-mern.netlify.app/home"><button> Visit</button></a>
            </div>
            
            <div className="card-5">
                <img src={card5} alt="Aman Kumar Profile"/>
                <p>
                    <h3>Travelling-Landing-Page</h3><br/>
                    <h4>Using Html,Css,Javascript</h4>
                </p>
                <a href="https://travelling-landing-page-7.netlify.app/"><button> Visit</button></a>
            </div>
            
            <div className="card-6">
                <img src={card6} alt="Aman Kumar Profile"/>
                <p>
                    <h3>Landing-Page</h3><br/>
                    <h4>Using Html,Css,Javascript</h4>
                </p>
                <a href="https://landing-page-74.netlify.app/"><button> Visit</button></a>
            </div>  
            <div className="card-7">
                <img src={card7} alt="Aman Kumar Profile"/>
                <p>
                    <h3>Temperature-convertor</h3><br/>
                    <h4>Using Html,Css,Javascript</h4>
                </p>
                <a href="https://temperature-convertor-7.netlify.app/"><button> Visit</button></a>
            </div>            
            <div className="card-8">
                <img src={card8} alt="Aman Kumar Profile"/>
                <p>
                    <h3>Game</h3><br/>
                    <h4>Using React.js,tailwind.css,touchpad,mousepad</h4>
                </p>
                <a href="https://dynamic-terrain.netlify.app/"><button> Visit</button></a>
            </div>  
        </div>
    </div>
  );
};

export default App;
