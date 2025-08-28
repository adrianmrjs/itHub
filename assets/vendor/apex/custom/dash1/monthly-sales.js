var options = {
  chart: {
    height: 160,
    width: '100%',
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      distributed: true,
      columnWidth: '12',
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 0,
  },
  series: [{
    name: 'Sales',
    data: [2000, 4000, 6000, 8000]
  }],
  legend: {
    show: false,
  },
  xaxis: {
    show: false,
    categories: ['Q1', 'Q2', 'Q3', 'Q4'],
  },
  yaxis: {
    show: false,
  },
  fill: {
    colors: ["#39d9ff", "#29f7ad", "#fff66c", "#ff926f"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return + val
      },
    },
    theme: 'dark',
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false,
      }
    },
  },
  colors: ['#ffffff'],
}
var chart = new ApexCharts(
  document.querySelector("#monthlySales"),
  options
);
chart.render();