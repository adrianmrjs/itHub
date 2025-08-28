// Morris Donut
Morris.Donut({
  element: "donutColors",
  data: [
    { value: 30, label: "foo" },
    { value: 15, label: "bar" },
    { value: 10, label: "baz" },
    { value: 5, label: "A really really long label" },
  ],
  backgroundColor: "#17181c",
  labelColor: "#17181c",
  colors: ["#396BFF", "#537FFF", "#6E92FF", "#88A6FF", "#A2BAFF", "#BDCDFF", "#D7E1FF"],
  resize: true,
  hideHover: "auto",
  gridLineColor: "#dfd6ff",
  formatter: function (x) {
    return x + "%";
  },
});
