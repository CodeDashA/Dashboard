
//!Pie Chart
const xValues = ["Male", "Female"];
const yValues = [40, 60];
const total = yValues.reduce((acc, value) => acc + value, 0);
const percentages = yValues.map(value => ((value / total) * 100).toFixed(0));

const barColors = [
  "#00aba9",
  "#ECBEB4"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Participation"
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = percentages[tooltipItem.index] + "%";
          return percentage;
        }
      }
    }
  }
});

// !Bar Chart
const barxValues = ["Male", "Female"];
const baryValues = [0.4, 0.6];

new Chart("barChart", {
  type: "bar",
  data: {
    labels: barxValues,
    datasets: [{
      backgroundColor: barColors,
      data: baryValues
    }]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Participation"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 1, // Set the maximum value to 1 since we are using decimal values
          callback: function (value) {
            return value.toFixed(1); // Display one decimal place
          }
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var currentValue = dataset.data[tooltipItem.index];
          return currentValue.toFixed(1); // Display one decimal place in the tooltip
        }
      }
    }
  }
});

// !Grouped Bar Chart

var ctx = document.getElementById("gbarChart").getContext("2d");

var data = {
    labels: ["2012", "2014", "2016"],
    datasets: [
        {
            label: "Male",
            backgroundColor: "#00aba9",
            data: [0.3,0.55,0.6]
        },
        {
            label: "Female",
            backgroundColor: "#ECBEB4",
            data: [.7,0.45,0.4]
        },
        
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      legend: { display: true },
    title: {
      display: true,
      text: "Participation"
    },
        barValueSpacing: 20,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 1, // Set the maximum value to 1 since we are using decimal values
              callback: function (value) {
                return value.toFixed(1); // Display one decimal place
              }
            }
          }]
        }
    }
});

// !Line Chart
const linexValues = [2012, 2014, 2016];

new Chart("lineChart", {
  type: "line",
  data: {
    labels: linexValues,
    datasets: [ {
      label: "Male",
      data: [0.3,0.55,0.6],
      backgroundColor: "#00aba9",
      borderColor: "#00aba9",
      fill: false
  },
  {
      label: "Female",
      data: [.7,0.45,0.4],
      backgroundColor: "#ECBEB4",
      borderColor: "#ECBEB4",
      fill: false
  },]
  },
  options: {
    legend: { display: true },
    title: {
      display: true,
      text: "Participation"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 1, // Set the maximum value to 1 since we are using decimal values
          callback: function (value) {
            return value.toFixed(1); // Display one decimal place
          }
        }
      }]
    }},
});

// ! Scatter Chart

const scatterxyValues = [
  {x:0.8, y:0.6},
  {x:0.9, y:0.8},
  {x:0.4, y:0.3},
];

new Chart("scatterChart", {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: 4,
      pointStyle: 'circle',
      pointBackgroundColor: "#00aba9",
      borderWidth: 1,
      showLine: false,
      data: scatterxyValues
    }],
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Performance vs Enjoyment"
    },
    scales: {
      xAxes: [{ticks: {min: 0, max:1}}],
      yAxes: [{ticks: {min: 0, max:1}}],
    }
  }
});

// ! Scatter Plot w/ Color

new Chart("scatterColorChart", {
  type: "scatter",
  data: {
    datasets: [{
      label: "Male",
      pointRadius: 4,
      pointStyle: 'circle',
      backgroundColor: "#00aba9",
      pointBackgroundColor: "#00aba9",
      borderWidth: 1,
      showLine: false,
      data:  [{ x: 0.8, y: 0.6 },{ x: 0.4, y: 0.3 }]
    },
    {
      label: "Female",
      pointRadius: 4,
      pointStyle: 'circle',
      backgroundColor: "#ECBEB4",
      pointBackgroundColor: "#ECBEB4",
      showLine: false,
      data:  [{ x: 0.9, y: 0.8 },{ x: 0.6, y: 0.6 }]
    }
  ],
  },
  options: {
    legend: { display: true },
    title: {
      display: true,
      text: "Performance vs Enjoyment"
    },
    scales: {
      xAxes: [{ ticks: { min: 0, max: 1 } }],
      yAxes: [{ ticks: { min: 0, max: 1 } }],
    }
  }
});

// ! Bubble Chart

const bubblexyValues = [
  {x:0.8, y:0.6, r:5},
  {x:0.9, y:0.8, r:5.5},
  {x:0.4, y:0.3, r:1},
  {x:0.6, y:0.6, r:3}
];

new Chart("bubbleChart", {
  type: "bubble",
  data: {
    datasets: [{
      pointStyle: 'circle',
      backgroundColor: "#00aba9",
      showLine: false,
      data: bubblexyValues
    }],
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Performance vs Enjoyment vs Preperation"
    },
    scales: {
      xAxes: [{ticks: {min: 0, max:1}}],
      yAxes: [{ticks: {min: 0, max:1}}],
    }
  }
});

// !Bubble Chart w/ Color

new Chart("bubbleColorChart", {
  type: "bubble",
  data: {
    datasets: [{
      label: "Male",
      pointRadius: 4,
      pointStyle: 'circle',
      backgroundColor: "#00aba9",
      pointBackgroundColor: "#00aba9",
      borderWidth: 1,
      showLine: false,
      data:  [{ x: 0.8, y: 0.6, r: 5 },{ x: 0.9, y: 0.8, r: 5.5 }]
    },
    {
      label: "Female",
      pointRadius: 4,
      pointStyle: 'circle',
      backgroundColor: "#b91d47",
      pointBackgroundColor: "#b91d47",
      showLine: false,
      data:  [{ x: 0.4, y: 0.3, r: 1},{ x: 0.6, y: 0.6, r: 3 }]
    }
  ],
  },
  options: {
    legend: { display: true },
    title: {
      display: true,
      text: "Performance vs Enjoyment"
    },
    scales: {
      xAxes: [{ ticks: { min: 0, max: 1 } }],
      yAxes: [{ ticks: { min: 0, max: 1 } }],
    }
  }
});


