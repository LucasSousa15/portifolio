

const navLinks = document.querySelectorAll ('.menu')


function showSection(event) {
    event.preventDefault();

   
   document.querySelectorAll('section').forEach(section => {
    section.classList.remove('active')
   });

    
   const sectionId = event.target.getAttribute('data-section');

   
   document.getElementById(sectionId).classList.add('active');
}


navLinks.forEach(
    link => {
        link.addEventListener(`click`, showSection);
    }
)

