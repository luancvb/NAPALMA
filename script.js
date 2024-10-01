document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const loginButton = document.getElementById('loginButton');
    loginButton.disabled = true;
    loginButton.textContent = 'Validando...';

    setTimeout(() => {
        window.location.href = 'pagina_principal/pagina_de_marcacao/pagina_marcacao.html';
    }, 5000);
});
