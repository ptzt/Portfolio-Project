import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {TiSocialTwitter} from 'react-icons/ti'
import '../style/main.css'



function Main() {
    return(
        <body className= 'mn' >
            <header>
            <button type="button" id="button"><AiFillGithub size={35}/></button>
            <button type="button" id="button"><TiSocialTwitter size={35}/></button>
            </header>

            <p className = "p1">Heyy, soy Tomas✌️</p>
            <p className="p2">Soy fullstack web Developer. Tengo 20 años y vivo en Argentina</p>

            <footer className="footer">
            <h1>Tomas Millan</h1>
            <p>Fullstack Developer • 2021</p>
            </footer>
        </body>
    )
}

export default Main;