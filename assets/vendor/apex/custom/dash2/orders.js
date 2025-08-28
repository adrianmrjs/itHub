var options = {
  chart: {
    height: 310,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  series: [{
    name: 'Visitors',
    data: [70, 80, 90, 80, 90, 80, 90, 80, 90, 80, 90, 80]
  }, {
    name: 'Conversions',
    data: [60, 70, 80, 70, 80, 70, 80, 70, 80, 70, 80, 70]
  }],
  grid: {
    borderColor: "#dae1ea",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 20,
      bottom: 0,
      left: 20,
    },
  },
  xaxis: {
    categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  colors: ["#396bff", "#ff9446", "#28256d"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.2,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },

  markers: {
    size: 0,
    opacity: 0.3,
    colors: ["#396bff", "#b7945e", "#28256d"],
    strokeColor: "#ffffff",
    strokeWidth: 2,
    hover: {
      size: 7,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return +val + "k";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#orders"), options);

chart.render();
