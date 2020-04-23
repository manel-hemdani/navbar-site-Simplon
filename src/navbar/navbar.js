import React from 'react';
import '../App.css';

const buttonsArray = ["Accueil", "Equipe", "A propos", "Contact"]


function Navbar() {
    return (

        <div className="navdiv" >
            <div className="container">
                {buttonsArray.map((el) => (
                    <button className="btn">
                        {el}
                    </button>
                ))
                }
            </div>

            <div>
                <img className="logo" src="Simplon.png">
                </img>
            </div>

        </div>


    );
}

export default Navbar;