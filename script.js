// script.js
import * as Chart from 'chart.js';
// script.js
import * as Chart from 'chart.js';

// Données d'exemple pour les graphiques
const data1 = {
  labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
  datasets: [{
    label: 'Ventes',
    data: [100, 200, 300, 400, 500, 600],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

const data2 = {
  labels: ['Tâche 1', 'Tâche 2', 'Tâche 3'],
  datasets: [{
    label: 'Progression',
    data: [75, 50, 25],
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 205, 86, 0.2)'],
    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 205, 86, 1)'],
    borderWidth: 1
  }]
};

const data3 = {
  labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
  datasets: [{
    label: 'Visiteurs',
    data: [150, 200, 300, 500, 250],
    backgroundColor: 'rgba(255, 205, 86, 0.2)',
    borderColor: 'rgba(255, 205, 86, 1)',
    borderWidth: 1
  }]
};

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
    datasets: [{
      label: 'Ventes',
      data: [100, 200, 300, 400, 500, 600],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

