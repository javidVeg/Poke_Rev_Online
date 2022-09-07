import React from 'react';
import { AiOutlineLinkedin } from "react-icons/ai"
import { FaReact } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import { SiFramer } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { BsYoutube } from "react-icons/bs"
import { BsReddit } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { FaEbay } from "react-icons/fa"
import { MdOutlineCatchingPokemon } from "react-icons/md"



import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='nav-col'>
                        <div>
                            <h1>The PokeCave</h1>
                            <hr className='divider' />
                        </div>
                        <a href="#home"><MdOutlineCatchingPokemon/> Home</a>
                        <a href='#about'><MdOutlineCatchingPokemon/> PokeRev Packs</a>
                        <a href='#tech'><MdOutlineCatchingPokemon/> Stores</a>
                        <a href='#projects'><MdOutlineCatchingPokemon/> Giveaways</a>
                        <a href='#about'><MdOutlineCatchingPokemon/> About</a>
                        <a href='#contact'><MdOutlineCatchingPokemon/> Contact</a>
                    </div>
                    <div className='find-col'>
                        
                        <a href='https://www.linkedin.com/in/davidandrewmartinez/'><BsYoutube size={35} color="grey"   /></a>
                        <a href='https://github.com/javidVeg'><BsInstagram size={30} color="grey"   /></a>
                        <a href='https://github.com/javidVeg'><BsReddit size={30} color="grey"   /></a>
                        <a href='https://github.com/javidVeg'><BsTwitter size={30} color="grey"  /></a>
                        <a href='https://github.com/javidVeg'><FaEbay size={60} color="grey"  /></a>

                    </div>
                    {/* <div className='memoji-col flex flex-col items-center'>
                        <img className="memoji-real" src={memoji} alt="alt-memoji"/>
                    </div> */}
                </div>
                <div className='footer-bottom text-white flex flex-row flex-wrap self-center md:mt-20 '>
                    <div className='foot-left text-emerald-500 mr-4 text-center'>
                        David Andrew Martinez &reg; {new Date().getFullYear()}
                    </div>
                    <div className='foot-right text-center flex flex-row mr-4 ' >
                        Created using:
                    </div>
                    <div className='foot-right text-center flex flex-row gap-2 -ml-2 self-center'>
                        <FaReact /><SiTailwindcss /><SiFramer />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer