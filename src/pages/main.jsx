import React from 'react'
import {AiFillGithub, 
        AiFillLinkedin,
        
    } from 'react-icons/ai'

import { DiReact,
         DiMongodb,
         DiNodejs,
         DiPostgresql,
         DiNpm   } from 'react-icons/di'

import {SiNextdotjs

    } from 'react-icons/si'

import {IoLogoJavascript

} from 'react-icons/io'



import '../style/main.css'



function Main() {
    return(
        <div className= 'mn' >
            <helmet>
                <style>{'body{background-color:#101010;}'}</style>
             </helmet>
             
            <div className="main">
                <header className="header">
                    <form className="form" method="get" action="https://github.com/ptzt" target="_blank">    
                        <button id="button"><AiFillGithub size={35}/></button>
                    </form>
                    <form className="form" method="get" action="https://www.linkedin.com/in/tomasmillandev/" target="_blank">    
                        <button id="button"><AiFillLinkedin size={35}/></button>
                    </form>
            <p className = "p1">Heyy, soy Tomas✌️</p>
                </header>

            <div>   
                <p className="p2">Soy un programador de 20 años de Argentina. Estoy interesado en aplicaciones tanto frontend como backend, siempre usando codigo de calidad y trabajando en equipo😃.</p>
            </div>
            <div>
                <p className ="p3">¿Que hago?💭</p>
                <p className="p2">Actualmente programo en React en el frontend y Nodejs en el backend, y estoy aprendiendo NextJs por su amplia mejora al rendimiento de paginas. Pero me adapto a lo que se necesite en el momento, pueden consultar mi <a className="git" href="https://github.com/ptzt">Github</a> para ver mis proyectos y colaboracines.</p>
            </div>

            <div>
                <p className="p3">Tecnologias💻</p>
                <p className="p2">Utilizo una amplia gama de herramientas para abordar cada obstáculo de la manera más eficiente posible, voy aprendiendo tecnologias nuevas con mucho esfuerzo y dedicacion, pero estas son las que mejor controlo hasta el momento.</p>
                <p className="icons">
                <h3><DiReact size={35}/> React.js</h3>
                <h3><IoLogoJavascript size={35}/> Javascript</h3>
                <h3><DiNodejs size={35}/> Node.js</h3>
                <h3><DiMongodb size={35}/> MongoDB</h3>
                <h3><DiPostgresql size={35}/> Postgresql</h3>
                <h3><SiNextdotjs size={35}/> Next.js</h3>
                <h3><DiNpm size={35}/> Npm</h3>
                </p>

            </div>
            
        </div>
            <footer className="footer">
            <h1>Tomas Millan</h1>
            <p>Fullstack Developer • 2021</p>
            </footer>
        </div>
    )
}

export default Main;