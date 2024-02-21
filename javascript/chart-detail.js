const toggler = document.querySelector(".btn");

toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});
var options = {
    series: [{
      name: "Revenue Today",
      data: [940, 1012, 1335, 1401, 1390, 1332, 1369]
  }],
    chart: {
        toolbar: {
            show: false
          },
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Revenue Today',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  var options = {
    series: [{
      name: "Today Bookings",
      data: [17, 19, 28, 30, 28, 22, 29]
  }],
    chart: {
        toolbar: {
            show: false
          },
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Today Bookings',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();
  var options = {
    series: [{
      name: "Monthly Bookings",
      data: [810, 841, 835, 851, 849, 862, 839, 891, 848]
  }],
    chart: {
        toolbar: {
            show: false
          },
    height: 360,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Monthly Bookings',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();
  var options = {
    series: [{
      name: "Yearly Bookings",
      data: [8010, 9641, 9835, 8351, 10490]
  }],
    chart: {
        toolbar: {
            show: false
          },
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Yearly Bookings',
    align: 'center'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['2019', '2020', '2021', '2022', '2023'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();