var options = {
  series: [20, 20, 20, 20, 20],
  labels: ["A", "B", "C", "D", "E"],
  chart: {
    height: 280,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
      donut: {
        size: "70%",
      },
    },
  },
  grid: {
    padding: {
      bottom: -80,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
    name: {
      show: false,
    },
  },
  stroke: {
    width: 5,
    colors: "#FFFFFF",
  },
  colors: [
    "#396BFF",
    "#668CFF",
    "#93AEFF",
    "#f3c83a",
    "#ffa563",
  ],
};

var chart = new ApexCharts(
  document.querySelector("#tasks"),
  options
);
chart.render();