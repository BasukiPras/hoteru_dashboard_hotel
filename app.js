const toggler = document.querySelector(".btn");

toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});
// home

{var xValues = ["View", "Favorite", "Cart"];
var yValues = [55, 49, 44, 0];
var barColors = ["green", "red","blue"];

new Chart("myChart1", {
  type: "horizontalBar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
      borderRadius: 5
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Hotel A"
    }
  }
});}

{
    var xValues = ["View", "Favorite", "Cart"];
var yValues = [65, 39, 24, 0];
var barColors = ["green", "red","blue"];

new Chart("myChart2", {
  type: "horizontalBar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
      borderRadius: 5
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Hotel B"
    }
  }
});
}
{
    var xValues = ["View", "Favorite", "Cart"];
var yValues = [105, 59, 14, 0];
var barColors = ["green", "red","blue"];

new Chart("myChart3", {
  type: "horizontalBar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
      borderRadius: 5
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Hotel C"
    }
  }
});
}
{var xValues = ["Januari", "Februari", "Maret", "April", "Mei"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "rgba(239, 114, 21,1.0)",
 "rgba(239, 114, 21,1.0)",
  "rgba(239, 114, 21,1.0)",
  "rgba(239, 114, 21,1.0)",
  "rgba(239, 114, 21,1.0)"
];

new Chart("myChart4", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
    }
  }
});}

{var xValues = ["View", "Favorite", "Booked"];
var yValues = [255, 109, 54];
var barColors = [
  "rgba(123, 210, 234,1.0)",
 "rgba(253, 255, 171,1.0)",
  "rgba(255, 128, 128,1.0)"
];

new Chart("myChart5", {
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
      display: true
    }
  }
});}

