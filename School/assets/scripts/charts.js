
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Not Started',
            'Completed',
            'In Progress'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [120, 75, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels:{
                    boxHeight: '5',
                    // padding: 50
                }
            }
        },
    }
});


var ctx = document.getElementById('myChart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'January', 'February', 'March', 'April', 'May', 'June', 'July'
          ],
          datasets: [{
            label: 'My First Dataset',
            lineTension: 0.6,
            data: [0,10,5,2,20,30,45],
            fill: true,
            fillColor: "red",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,0.8)",
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            
            hoverOffset: 4,
            
          }
        ]
        },
    options: {
        bezierCurve: true,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels:{
                    boxHeight: '5',
                    // padding: 50
                }
            }
        },
    }
});
