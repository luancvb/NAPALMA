const scheduleData = {
    cardiologia: {
        'Clínica A': [
            { date: '2024-10-01', time: '10:00' },
            { date: '2024-10-02', time: '14:00' }
        ],
        'Clínica B': [
            { date: '2024-10-03', time: '09:00' },
            { date: '2024-10-04', time: '11:00' }
        ]
    },
    dermatologia: {
        'Clínica C': [
            { date: '2024-10-05', time: '08:00' },
            { date: '2024-10-06', time: '13:00' }
        ],
        'Clínica D': [
            { date: '2024-10-07', time: '15:00' },
            { date: '2024-10-08', time: '16:00' }
        ]
    },
    pediatria: {
        'Clínica E': [
            { date: '2024-10-09', time: '10:00' },
            { date: '2024-10-10', time: '14:00' }
        ],
        'Clínica F': [
            { date: '2024-10-11', time: '09:00' },
            { date: '2024-10-12', time: '11:00' }
        ]
    },
    ortopedia: {
        'Clínica G': [
            { date: '2024-10-13', time: '08:00' },
            { date: '2024-10-14', time: '13:00' }
        ],
        'Clínica H': [
            { date: '2024-10-15', time: '15:00' },
            { date: '2024-10-16', time: '16:00' }
        ]
    }
};

document.getElementById('specialty').addEventListener('change', function () {
    const specialty = this.value;
    const locationGroup = document.getElementById('location-group');
    const locationSelect = document.getElementById('location');
    const scheduleGroup = document.getElementById('schedule-group');
    const scheduleSelect = document.getElementById('schedule');
    const bookButton = document.getElementById('book-appointment');

    locationSelect.innerHTML = '<option value="">Selecione...</option>';
    scheduleSelect.innerHTML = '<option value="">Selecione...</option>';
    locationGroup.style.display = 'none';
    scheduleGroup.style.display = 'none';
    bookButton.style.display = 'none';

    if (scheduleData[specialty]) {
        Object.keys(scheduleData[specialty]).forEach(location => {
            const option = document.createElement('option');
            option.value = location;
            option.textContent = location;
            locationSelect.appendChild(option);
        });
        locationGroup.style.display = 'block';
    }
});

document.getElementById('location').addEventListener('change', function () {
    const specialty = document.getElementById('specialty').value;
    const location = this.value;
    const scheduleSelect = document.getElementById('schedule');
    const scheduleGroup = document.getElementById('schedule-group');
    const bookButton = document.getElementById('book-appointment');

    scheduleSelect.innerHTML = '<option value="">Selecione...</option>';
    scheduleGroup.style.display = 'none';
    bookButton.style.display = 'none';

    if (scheduleData[specialty] && scheduleData[specialty][location]) {
        scheduleData[specialty][location].forEach(slot => {
            const option = document.createElement('option');
            option.value = `${slot.date} ${slot.time}`;
            option.textContent = `Data: ${slot.date}, Horário: ${slot.time}`;
            scheduleSelect.appendChild(option);
        });
        scheduleGroup.style.display = 'block';
    }
});

document.getElementById('schedule').addEventListener('change', function () {
    const bookButton = document.getElementById('book-appointment');
    if (this.value) {
        bookButton.style.display = 'block';
    } else {
        bookButton.style.display = 'none';
    }
});
