document.getElementById('sendEmailButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const subject = `Contato de ${name} - Vindo da Landing Page`;
    const body = `Nome: ${name}%0D%0AEmail: ${email}%0D%0ATelefone: ${phone}%0D%0AMensagem: ${message}`;

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});