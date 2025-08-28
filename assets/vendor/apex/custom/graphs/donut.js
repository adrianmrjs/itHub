var options = {
  chart: {
    width: 300,
    type: "donut",
  },
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  series: [20, 20, 20, 20, 20],
  legend: {
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 0,
  },
  colors: ["#396BFF", "#537FFF", "#6E92FF", "#88A6FF", "#A2BAFF", "#BDCDFF", "#D7E1FF"],
};
var chart = new ApexCharts(document.querySelector("#donut"), options);
chart.render();
