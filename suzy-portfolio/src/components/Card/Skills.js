import React from "react";
import Image from 'react-bootstrap/Image'
import Html from "../../Assets/Images/mark-word-icon.png";
import Css from "../../Assets/Images/css-logo.png";
import Js from "../../Assets/Images/js-logo.png";
import Jquery from "../../Assets/Images/jquery-logo.jpeg";
import Bootstrap from "../../Assets/Images/bootstrap-logo.png";
import Express from "../../Assets/Images/express-logo.jpeg";
import Ajax from "../../Assets/Images/ajax-logo.png";
import Node from "../../Assets/Images/node.-logo.jpeg";
import Npm from "../../Assets/Images/npm_logo.png";
import MySQL from "../../Assets/Images/mysql-logo.jpeg";
import Sequelize from "../../Assets/Images/sequelize-logo.png";
import MongoDB from "../../Assets/Images/mongodb-logo.png";
import Mongoose from "../../Assets/Images/mongoose-logo.png";
import ReactJS from "../../Assets/Images/react-logo-2.png";
import MERN from "../../Assets/Images/Mern-Stack-Program-logo.png";


function Skills() {
    return (
        <div>
            <article>
                    <h2>Skills</h2>
                    <Image src={Html} alt="html" className="logos" width={80} height={80} roundedCircle />
                    <Image src={Css} alt="css" className="logos" width={80} height={80} roundedCircle />
                    <Image src={Js} alt="js" className="logos" width={80} height={80} roundedCircle />
                    <Image src={Jquery} alt="jquery" className="logos" width={80} height={80} roundedCircle />
                    <Image src={Bootstrap} alt="bootstrap" className="logos" width={80} height={80} roundedCircle />
                    <Image src={Express} alt="express" className="logos" width={80} height={80} roundedCircle />
                    <Image src={Ajax} alt="ajax" className="logos" width={80} height={80} roundedCircle />
                    <Image src={Node} alt="node" className="logos" width={80} height={80} roundedCircle />
                    <Image src={Npm} alt="npm" className="logos" width={80} height={80} roundedCircle />
                    <Image src={MySQL} alt="mysql" className="logos" width={80} height={80} roundedCircle />
                    <Image src={Sequelize} alt="sequelize" className="logos" width={80} height={80} roundedCircle />
                    <Image src={MongoDB} alt="mongodb" className="logos" width={80} height={80} roundedCircle />
                    <Image src={Mongoose} alt="mongoose" className="logos" width={80} height={80} roundedCircle />
                    <Image src={ReactJS} alt="react" className="logos" width={80} height={80} roundedCircle />
                    <Image src={MERN} alt="mern" className="logos" width={80} height={80} roundedCircle />

                    </article>
                    <br></br>
                    <br></br>
        </div>
    );
}

export default Skills; 