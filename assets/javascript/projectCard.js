class projectCard extends HTMLElement {
    constructor() {
        super();
            
            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(this.build());
            shadow.appendChild(this.style());

    }

    build () {
    
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "projectCard");

    


        
        const title = document.createElement("a");
        title.href = this.getAttribute("linkDoProjeto");
        title.target = "blank";
        title.setAttribute("class", "projectName");
        title.textContent = (this.getAttribute("projectName") || "Nome do Projeto");
        componentRoot.appendChild(title)
        
        
        const divThumbContainer = document.createElement ("div");
        divThumbContainer.setAttribute("class", "thumbContainer");
        componentRoot.appendChild(divThumbContainer);

        const thumbNailPic = document.createElement("img");
        thumbNailPic.setAttribute("class", "thumbnail")
        thumbNailPic.src = this.getAttribute("thumb") || ("assets/img/thumbnails/empty.png");
        thumbNailPic.alt = (this.getAttribute("thumb-alt") || "Foto que ilustra o projeto desenvolvido");
        divThumbContainer.appendChild(thumbNailPic);

        

        const resumeContainer = document.createElement("div");
        resumeContainer.setAttribute("class", "resumeContainer");
        componentRoot.appendChild(resumeContainer)

        const projectDescription = document.createElement("p");
        projectDescription.setAttribute("class", "projectResume");
        projectDescription.textContent = (this.getAttribute("projectDescription") || "Uma breve descrição do projeto");
        resumeContainer.appendChild(projectDescription);
        
        
        const techContainer = document.createElement('div');
        techContainer.setAttribute('class', 'techContainer');
        componentRoot.appendChild(techContainer);

        const technologies = this.getAttribute("technologies") ? this.getAttribute ("technologies").split(",") : [];
        const ul = document.createElement("ul");
        const listTitle = document.createElement ('h3');
        listTitle.textContent = ('Tecnologias utilizadas');
        ul.appendChild(listTitle);        
        ul.setAttribute("class", "techList");
        

        
        for (let i = 0; i < technologies.length; i++) {
            const li = document.createElement("li");
            li.textContent = technologies[i];
            ul.appendChild(li);


        }

        document.addEventListener("click", (event) => {
            const allTechLists = document.querySelectorAll(".techList");
            allTechLists.forEach(techList => {
                if (!techList.closest(".projectCard")?.contains(event.target)) {
                    techList.classList.remove("visible");
                }
            });
        });
        
  
        techContainer.appendChild(ul);

    

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
                position:relative;
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

                .thumbContainer .thumbnail {
                    filter: grayscale(100%);
                    transition: filter 0.5s ease;
                }

                .thumbnail {
                        width: 100%;
                        height: 100%;
                        object-fit:cover ;
                        border: none;
                }

                .thumbContainer:hover .thumbnail,
                .thumbContainer:active .thumbnail {
                    filter: grayscale(0%);
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
                    width:fit-content;
                    height;
                }

                .projectResume {
                    color:var(--branco);
                    font-family:var(--FonteTextos);
                    text-align:justify;
                    margin:0;
                    padding:0;
                }

                .techContainer {
                    position: relative; 

                    }


                 .techList {
                    display: none; 
                    position: relative; 
                    top: 100%; 
                    left: 0;
                    background: transparent;
                    color:var(--branco);
                    font-family:var(--FonteTextos);
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    border: none;
                    z-index: 10;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    width: fit-content;
                }
                .techList > h3 {
                    font-family:var(--Fontetitulos)
                }
                .projectCard:hover .techList {
                    display: block; 
                }
                
                .techList li {
                    padding: 5px 10px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .techList li:hover {
                    color:var(--cor03);
                    background-color: #e0e0e0;
                    font-weight: bold
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