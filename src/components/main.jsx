import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {TiSocialTwitter} from 'react-icons/ti'
import '../style/main.css'



function Main() {
    return(
        <body className= 'mn' >
            <header>
                <form method="get" action="https://github.com/ptzt">
                    <button id="button"><AiFillGithub size={35}/></button>
                </form>
            </header>


            <p className = "p1">Heyy, soy Tomas✌️</p>
            <p className="p2">Lorem ipsum dolor sit amet consectetur adipiscing elit orci enim, per cum dui himenaeos turpis ultricies vehicula nibh viverra, curabitur luctus ornare semper ligula montes iaculis vel. Ad tincidunt fringilla fermentum dignissim magnis pretium class luctus lacinia senectus et, facilisi morbi posuere euismod proin consequat curabitur enim scelerisque leo feugiat mus, pharetra tristique felis eu ligula eros sed maecenas hendrerit nunc. Metus condimentum accumsan vivamus sociis nisi sollicitudin dui magnis etiam cum justo mauris fames pharetra, et lacinia vitae duis habitant litora luctus auctor mi ac aptent conubia ante. Consequat est massa inceptos litora rutrum luctus, quis etiam quisque congue molestie iaculis tristique, mi habitant dui ornare aliquam.</p>
            <p className ="p3">¿Que hago?</p>
            <p className="p2">Lorem ipsum dolor sit amet consectetur adipiscing elit, metus mollis cubilia ut tortor feugiat in, fringilla eros ultricies senectus inceptos velit. Rutrum vivamus ante id luctus odio blandit porta, augue dui ligula rhoncus pulvinar fames nunc, semper sociosqu cursus posuere taciti neque. Torquent conubia bibendum massa quam, hendrerit praesent mi.</p>
            <p className="p3">Tecnologias</p>
            <p className="p2">Utilizo una amplia gama de herramientas para abordar cada obstáculo de la manera más eficiente posible</p>
            <footer className="footer">
            <h1>Tomas Millan</h1>
            <p>Fullstack Developer • 2021</p>
            </footer>
        </body>
    )
}

export default Main;