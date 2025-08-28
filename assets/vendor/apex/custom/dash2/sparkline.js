// Sparkline 1
var options1 = {
  series: [
    {
      name: "Clicks",
      data: [1, 2, 3, 2, 1, 4, 7, 3, 6],
    },
  ],
  chart: {
    type: "line",
    height: 90,
    stacked: true,
    width: "100%",
    sparkline: {
      enabled: true,
    },
  },
  colors: ["#396bff"],
  stroke: {
    width: 4,
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
  },
  xaxis: {
    type: "day",
    categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K";
      },
    },
  },
};
var chart1 = new ApexCharts(document.querySelector("#option1"), options1);
chart1.render();


// Sparkline 2
var options2 = {
  series: [
    {
      name: "Orders",
      data: [1, 2, 3, 4, 5],
    },
    {
      name: "Orders",
      data: [1, 2, 3, 4, 5],
    },
  ],
  chart: {
    type: "bar",
    height: 90,
    stacked: true,
    width: "100%",
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "30%",
      borderRadius: 4,
    },
  },
  colors: ["#396bff", "#ff9446"],
  stroke: {
    width: 0,
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
  },
  xaxis: {
    type: "day",
    categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K";
      },
    },
  },
};
var chart2 = new ApexCharts(document.querySelector("#option2"), options2);
chart2.render();


// Sparkline 3
var options3 = {
  series: [
    {
      name: "Income",
      data: [1, 2, 1, 4, 3, 2, 7, 3, 6],
    },
  ],
  chart: {
    type: "line",
    height: 90,
    stacked: true,
    width: "100%",
    sparkline: {
      enabled: true,
    },
  },
  colors: ["#396bff"],
  stroke: {
    width: 4,
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
  },
  xaxis: {
    type: "day",
    categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K";
      },
    },
  },
};
var chart3 = new ApexCharts(document.querySelector("#option3"), options3);
chart3.render();


// Sparkline 4
var options4 = {
  series: [
    {
      name: "Income",
      data: [1, 2, 3, 4, 5],
    },
    {
      name: "Income",
      data: [1, 2, 3, 4, 5],
    },
  ],
  chart: {
    type: "bar",
    height: 90,
    stacked: true,
    width: "100%",
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "30%",
      borderRadius: 4,
    },
  },
  colors: ["#396bff", "#ff9446"],
  stroke: {
    width: 0,
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
  },
  xaxis: {
    type: "day",
    categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K";
      },
    },
  },
};
var chart4 = new ApexCharts(document.querySelector("#option4"), options4);
chart4.render();