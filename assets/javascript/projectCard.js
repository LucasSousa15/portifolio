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


        //A que vai receber o nome do projeto
        const title = document.createElement("a");
        title.href = this.getAttribute("linkDoProjeto");
        title.target = "blank";
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

        //Div pra conter a descrição do texto e facilitar uma possível reorganização do conteúdo de cada card

        const resumeContainer = document.createElement("div");
        resumeContainer.setAttribute("class", "resumeContainer");
        componentRoot.appendChild(resumeContainer)

        const projectDescription = document.createElement("p");
        projectDescription.setAttribute("class", "projectResume");
        projectDescription.textContent = (this.getAttribute("projectDescription") || "Uma breve descrição do projeto");
        resumeContainer.appendChild(projectDescription);
        
        //Adicionando a lista com as tecnologias.
        const technologies = this.getAttribute("technologies") ? this.getAttribute ("technologies").split(",") : [];
        const ul = document.createElement("ul");
        ul.setAttribute("class", "techList");

        //Laço para gerar os LIs dinamicamente
        for (let i = 0; i < technologies.length; i++) {
            const li = document.createElement("li");
            li.textContent = technologies[i];
            ul.appendChild(li);


        }

        resumeContainer.appendChild(ul);

    

    return componentRoot
    }

    style () {
        const style = document.createElement("style");
        style.textContent = `


        .projectCard {
                width:100%;
                max-width:100%;                        
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
                    text-decoration: none;
                }

                .projectName:hover {
                    color:var(--cor02)
                }
                    
                .resumeContainer {
                    width:300px;
                    height:300px;
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

                .techList, {
                list-style: none;
                padding: 0;
                display: none; 
                position: absolute; 
                background: white;
                border: 1px solid #ddd;
                border-radius: 4px;
                z-index: 10;
                margin-top: 5px; 
            }

            .techList li {
                padding: 5px 10px;
                transition: background-color 0.3s;
            }

            .techList li:hover {
                background-color: #e0e0e0;
            }
            `


    return style 
    }
}

customElements.define('project-card', projectCard);