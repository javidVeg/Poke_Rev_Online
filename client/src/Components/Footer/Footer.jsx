import React from 'react';
import { BsYoutube } from "react-icons/bs"
import { BsReddit } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { FaEbay } from "react-icons/fa"
import { MdOutlineCatchingPokemon } from "react-icons/md"
import prlogo from "../../Images/Poke-Rev-Small.png"



import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='nav-col'>

                        <a href="#home"><MdOutlineCatchingPokemon /> Home</a>
                        <a href='#about'><MdOutlineCatchingPokemon /> PokeRev Packs</a>
                        <a href='#tech'><MdOutlineCatchingPokemon /> Stores</a>
                        <a href='#projects'><MdOutlineCatchingPokemon /> Giveaways</a>
                        <a href='#about'><MdOutlineCatchingPokemon /> About</a>
                        <a href='#contact'><MdOutlineCatchingPokemon /> Contact</a>
                    </div>
                    <div className='find-col'>

                        <a href='https://www.linkedin.com/in/davidandrewmartinez/'><BsYoutube size={35} color="grey" /></a>
                        <a href='https://github.com/javidVeg'><BsInstagram size={30} color="grey" /></a>
                        <a href='https://github.com/javidVeg'><BsReddit size={30} color="grey" /></a>
                        <a href='https://github.com/javidVeg'><BsTwitter size={30} color="grey" /></a>
                        <a href='https://github.com/javidVeg'><FaEbay size={60} color="grey" /></a>

                    </div>
                    {/* <div className='memoji-col flex flex-col items-center'>
                        <img className="memoji-real" src={memoji} alt="alt-memoji"/>
                    </div> */}
                </div>
                <div className='footer-bottom '>
                    <img src={prlogo} alt="pr-logo-small" width={150} />
                     &reg; {new Date().getFullYear()}
                </div>
            </div>

        </div>
    )
}

export default Footer