$(document).ready(function(){
  var ctx = document.getElementById("chart-target");
  var chartTarget = new Chart(ctx, {
    type: 'line',
    responsive: 'true',
    scaleOverride : true,
    scaleSteps : 20,
    scaleStepWidth : 50,
    scaleStartValue : 0,
    borderWidth: 5,
    data: {
      labels: ["2011", "2012", "2012", "2014", "2015", "2016", "2017", "2018"],
      datasets: [{
        label: '# of Votes',
        data: [0, 80, 70, 50, 70, 80, 65, 80],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
})