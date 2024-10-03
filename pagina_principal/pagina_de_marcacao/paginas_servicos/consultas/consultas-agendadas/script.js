document.addEventListener('DOMContentLoaded', (event) => {
    const specialty = localStorage.getItem('specialty');
    const location = localStorage.getItem('location');
    const schedule = localStorage.getItem('schedule');

    document.getElementById('displaySpecialty').innerText = `Especialidade: ${specialty}`;
    document.getElementById('displayLocation').innerText = `Local: ${location}`;
    document.getElementById('displaySchedule').innerText = `Data e Horário: ${schedule}`;
});

function navigateToInicio(page) {
    window.location.href = "../menu-consultas.html";
}