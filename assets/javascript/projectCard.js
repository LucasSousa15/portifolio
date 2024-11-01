class projectCard extends HTMLElement {
    constructor() {
        super();
            //construção do objeto
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(this.build());
            shadow.appendChild(this.style());

    }

    build () {
    //Elemento Principal ("pai")
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "projectCard");

    //Elementos Filhos que estarão dentro da div "pai"

        //H2 que vai receber o nome do projeto
        const title = document.createElement("h2");
        title.setAttribute("class", "projectName");
        title.textContent = (this.getAttribute("projectName") || "Nome do Projeto");
        componentRoot.appendChild(title)
        
        //div pra ser o container da Thumbnail do projeto
        const divThumbContainer = document.createElement ("div");
        divThumbContainer.setAttribute("class", "thumbContainer");
        componentRoot.appendChild(divThumbContainer);

        const thumbNailPic = document.createElement("img");
        thumbNailPic.setAttribute("class", "thumbnail")
        thumbNailPic.src = this.getAttribute("thumb") || ("assets/img/thumbnails/empty.png");
        thumbNailPic.alt = (this.getAttribute("thumb-alt") || "Foto que ilustra o projeto desenvolvido");
        divThumbContainer.appendChild(thumbNailPic);

        const projectDescription = document.createElement("p");
        projectDescription.setAttribute("class", "projectResume");
        projectDescription.textContent = (this.getAttribute("projectDescription") || "Uma breve descrição do projeto");
        componentRoot.appendChild(projectDescription);

    

    return componentRoot
    }

    style () {
        const style = document.createElement("style");
        style.textContent = `


        .projectCard {
                   
                max-width: 550px;                          
                align-items: center;          
                justify-content: center;      
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 3px;
                background-color: rgba(255, 255, 255, 0.237);
                border-radius: 15px;
            }

            @charset "UTF-8";

            @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');

            @import url('https://fonts.googleapis.com/css2?family=Prosto+One&family=Rowdies:wght@300;400;700&display=swap');

            :root {
                --cor00:#2D76B6;
                --cor01:#442F74;
                --cor02:#16063A;
                --cor03:#F229FF;
                --preto:#000;
                --branco:#fff;
                --Fontetitulos:"Prosto One";
                --FonteTextos:"Source Code Pro";
                }

                *{
                    margin:0px;
                    padding: 0px;
                    box-sizing: border-box;
                }

                .thumbContainer {
                    border-radius: 15%; 
                    overflow: hidden
                }

                .thumbnail {
                        width: 100%;
                        height: 100%;
                        object-fit:cover ;
                        border: none;
                }

                .projectName {
                    color: var(--branco);
                    font-family:var(--Fontetitulos);
                    font-size: 1.4em;
                    text-align:center;
                }
                    

                .projectResume {
                    color:var(--branco);
                    font-family:var(--FonteTextos);
                    text-align:justify;
                    margin:0;
                    padding:0;
                }

                        @media (max-width: 600px) {
                    .projectCard {
                        height: auto;  
                        margin-bottom: 15px;     
                    }
            `


    return style 
    }
}

customElements.define('project-card', projectCard);