import React from 'react'
import '../style/about.css'
import me from '../style/melol.JPG'

function About() {
    return(
        <body className="mn">
        <div className="main">
            <img className = "resize" src={me} alt="me"/>
            <h3 className="p2">Este soy yo 🐼</h3>
            <p className="p1">Sobre mi</p>
            <p className="p2">Soy un programador Fullstack del Norte de Argentina mas precisamente de Tucuman!. Me preocupo por el código accesible y eficaz. Soy un gran admirador de leer y tengo pensado en contribuir al código abierto, me parece muy interesante y lindo ver a comunidades tan grandes trabajando juntas. Programo hace un año y medio, he aprendido mucho sobre principios de programación, escalado y arquitectura de sistemas. En este momento, estoy aprendiendo NextJs y Typescript con mucha calma pero me gustaria migrar este sitio a esas tecnologias en un tiempo.</p>
            <p className="p2">
                No estoy 100% seguro de qué poner en esta página, no lo he considerado mucho. Si tenes alguna idea o queres darme algun feedback , 
                <a className="git"href="/contact">podes hacerlo aca!</a></p>
        </div>
        </body>
    )
}

export default About;