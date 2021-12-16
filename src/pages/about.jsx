import React from 'react'
import '../style/about.css'
import me from '../style/melol.jpeg'

function About() {
    return(
        <body className="mn">
        <div className="main">
            <p className="p1">Sobre mi</p>
            <h3 className="p2">Este soy yo 🐼</h3>
            <img className = "resize" src={me} alt="me"/>
            <p className="p2">Soy un programador Fullstack del Norte de Argentina mas precisamente de Tucuman!. Me preocupo por el código accesible y eficaz. Soy un gran admirador de leer y tengo pensado en contribuir al código abierto, me parece muy interesante y lindo ver a comunidades tan grandes trabajando juntas. Programo hace un año y medio, he aprendido mucho sobre principios de programación, escalado y arquitectura de sistemas. En este momento, estoy aprendiendo NextJs y Typescript con mucha calma pero me gustaria migrar este sitio a esas tecnologias en un tiempo.</p>
            <p className="p2">
                No estoy 100% seguro de qué poner en esta página, no lo he considerado mucho. Si tenes alguna idea o queres darme algun feedback , 
                <a className="git"href="/talk">podes hacerlo aca!</a></p>
        </div>
        <footer className="footer">
                <div>
                 <h1 className='p1-footer'>Tomas Millan</h1>
                <p className='p2-footer'>Programador fullstack</p>
               </div>
           </footer>
        </body>
    )
}

export default About;