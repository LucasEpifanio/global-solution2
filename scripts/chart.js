const data = {
    labels: ['Mónaco', 'Japão', 'Suécia', 'Itália', 'Finlándia'],
    values: [1.80, 2.21, 2.74, 3.18, 3.36],
  };

  // Configuração do gráfico
  const config = {
    type: 'bar',
    data: {
      labels: data.labels,
      datasets: [{
        label: 'Índice de Causas da Mortalidade Infantil',
        data: data.values,
        backgroundColor: '#7aeb5e43', 
        borderColor: '#46C326', 
        borderWidth: 1, 
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            title: function (context) {
              return context[0].label;
            },
            label: function (context) {
              return 'Índice: ' + context.parsed.y;
            },
          },
        },
      },
    },
  };

  // Inicializa o gráfico:
  const ctx = document.getElementById('mortalidadeInfantilChart').getContext('2d');
  new Chart(ctx, config);