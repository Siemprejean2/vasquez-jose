document.addEventListener('DOMContentLoaded', function() {
    // Obtener información del usuario almacenada en localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const usernameElement = document.getElementById('username');
    if (currentUser && usernameElement) {
        usernameElement.textContent = currentUser.username;
    }

    // Simular transacciones (esto debería obtenerse de una fuente de datos real)
    const transactions = [
        { type: 'Entrada', amount: 10000 },
        { type: 'Salida', amount: 5000 },
        { type: 'Ganancia', amount: 5000 },
        // Más transacciones...
    ];

    // Generar la tabla de transacciones
    const transactionsTable = document.getElementById('transactions-table');
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${transaction.type}</td><td>${transaction.amount}</td>`;
        transactionsTable.appendChild(row);
    });

    // Calcular total de salidas y entradas
    let totalSalidas = 0;
    let totalEntradas = 0;
    transactions.forEach(transaction => {
        if (transaction.type === 'Salida') {
            totalSalidas += transaction.amount;
        } else if (transaction.type === 'Entrada') {
            totalEntradas += transaction.amount;
        }
    });

    // Configurar datos para el gráfico
    const chartData = {
        labels: ['Salidas', 'Entradas'],
        datasets: [{
            label: 'Comparativa',
            data: [totalSalidas, totalEntradas],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)', // Color para Salidas
                'rgba(54, 162, 235, 0.5)',  // Color para Entradas
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    };

    // Configurar opciones del gráfico
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    // Crear el gráfico de comparación
    const ctx = document.getElementById('comparison-chart').getContext('2d');
    const comparisonChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });
    // Botón de logout
    const logoutButton = document.getElementById('logout-btn');
    logoutButton.addEventListener('click', function() {
        // Limpiar el localStorage
        localStorage.removeItem('currentUser');
        // Redirigir a la página de inicio de sesión u otra página
        window.location.href = 'login.html'; // Cambia 'inicio-sesion.html' por la página a la que deseas redirigir
    });

    // Resto del código para generar la tabla y el gráfico...
});
