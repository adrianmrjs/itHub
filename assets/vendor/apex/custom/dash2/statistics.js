var options = {
  chart: {
    height: 320,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 3,
    colors: ['transparent']
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      borderRadius: 6,
    },
  },
  series: [
    {
      name: "High",
      data: [10, 20, 30, 40, 50, 60, 70],
    },
    {
      name: "Low",
      data: [15, 25, 35, 45, 55, 65, 75],
    },
  ],
  grid: {
    borderColor: "#dee5f3",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  xaxis: {
    categories: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  colors: ['#5781ff', '#ffa563'],
  legend: {
    show: false,
  },
  markers: {
    size: 0,
    opacity: 0.3,
    colors: ['#5781ff', '#ffa563'],
    strokeColor: "#ffffff",
    strokeWidth: 2,
    hover: {
      size: 7,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val;
      },
    },
    theme: 'dark',
  },
};

var chart = new ApexCharts(document.querySelector("#statistics"), options);

chart.render();

