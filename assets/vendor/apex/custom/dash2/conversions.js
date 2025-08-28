var options = {
  chart: {
    width: 323,
    type: "pie",
  },
  labels: ["Facebook", "Twitter", "Instagram", "Google", "Youtube"],
  series: [45, 25, 15, 10, 5],
  legend: {
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  colors: ["#396bff", "#7094ff", "#ffb27a", "#e3ebf3", "#edf2f7"],
};
var chart = new ApexCharts(document.querySelector("#conversions"), options);
chart.render();