
//Obter os links
const navLinks = document.querySelectorAll ('.menu')

//Trocar as sections que estão ativas
function showSection(event) {
    event.preventDefault();

   //Remover a classe 'active' de todas as sections
   document.querySelectorAll('section').forEach(section => {
    section.classList.remove('active')
   });

    //Pegar o valor da data-section do link certo
   const sectionId = event.target.getAttribute('data-section');

   //Mostra a seção correspondente
   document.getElementById(sectionId).classList.add('active');
}

//Capturar o click nos links
navLinks.forEach(
    link => {
        link.addEventListener(`click`, showSection);
    }
)

