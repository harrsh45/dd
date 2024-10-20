window.onload = function() {
    const createBarChart = (ctx, value) => {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Health Score'],
                datasets: [{
                    label: 'Health Score',
                    data: [value],
                    backgroundColor: value > 75 ? '#4caf50' : value > 50 ? '#ffeb3b' : '#f44336',  // Green for high, Yellow for medium, Red for low
                    borderWidth: 1,
                    borderColor: '#e0e0e0'
                }]
            },
            options: {
                indexAxis: 'y', 
                scales: {
                    x: {
                        min: 0,
                        max: 100,
                        ticks: {
                            color: '#ffffff'
                        },
                        grid: {
                            color: '#333333'
                        }
                    },
                    y: {
                        ticks: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: true },
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    };

   
    createBarChart(document.getElementById('healthScore1').getContext('2d'), 90);  // Slack
    createBarChart(document.getElementById('healthScore2').getContext('2d'), 84);  // Apple
    createBarChart(document.getElementById('healthScore3').getContext('2d'), 50);  // HubSpot
    createBarChart(document.getElementById('healthScore4').getContext('2d'), 6);   // Samsung
    createBarChart(document.getElementById('healthScore5').getContext('2d'), 1);   // Bosch
};
