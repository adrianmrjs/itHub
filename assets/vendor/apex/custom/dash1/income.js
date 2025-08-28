var options = {
  series: [
    {
      name: "2024",
      data: [1, 2, 5, 4, 2, 5, 3],
    },
    {
      name: "2023",
      data: [-2, -1, -5, -1, -2, -3, -3],
    },
  ],
  chart: {
    toolbar: {
      show: false,
    },
    type: "bar",
    height: 237,
    stacked: true,
  },
  colors: ["#396BFF", "#ffa563"],
  plotOptions: {
    bar: {
      horizontal: false,
      barHeight: "50%",
      columnWidth: "10",
      borderRadius: [5],
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "all",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: true,
    padding: {
      top: 0,
      bottom: 0,
      right: 10,
    },
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
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: [
      "S",
      "M",
      "T",
      "W",
      "T",
      "F",
      "S",
    ],
  },
  yaxis: {
    tickAmount: 4,
    min: -5,
    max: 5,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$' + val + '' + 'k';
      },
    },
    theme: 'dark',
  },
};

var chart = new ApexCharts(document.querySelector("#income"), options);

chart.render();