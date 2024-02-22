const toggler = document.querySelector(".btn");

toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});


// superior hotel
var superiorDataDocument = document.querySelector("#superior-data"),
    standartDataDocument = document.querySelector("#standart-data"),
    deluxeDataDocument = document.querySelector("#deluxe-data")

var orderDataDocument = document.querySelectorAll(".data")
    
var standartRoomData = localStorage.getItem('userProfileStandart') ? JSON.parse(localStorage.getItem('userProfileStandart')) : [],
    deluxeRoomData = localStorage.getItem('userProfileDeluxe') ? JSON.parse(localStorage.getItem('userProfileDeluxe')) : [],
    superiorRoomData = localStorage.getItem('userProfileSuperior') ? JSON.parse(localStorage.getItem('userProfileSuperior')) : []

var orderData = []
orderData.push(standartRoomData, superiorRoomData, deluxeRoomData)

let currentIndex = 0

function showData( shownData ){
  console.log(shownData)
  document.querySelectorAll('.hoteldata').forEach(info => info.remove())
  shownData.forEach((element, index) => {
      let createElement = `<tr class="hoteldata">
          <td class="text-nowrap align-middle">${element.Number}</td>
          <td class="text-nowrap align-middle">${element.Name}</td>
          <td class="text-nowrap align-middle">${element.startDate} - ${element.endDate}</td>
          </tr>`                                    

      orderDataDocument[currentIndex].innerHTML += createElement
  })

  
}

let searchNameElement = document.querySelectorAll(".name-search")

searchNameElement.oninput = () => {
  searchByName();
}

const searchByName = () =>{
  console.log("Searching Name")

  let search = searchNameElement[currentIndex].value.toLowerCase();
  var results = [];
  
  orderData[currentIndex].forEach(function(data) {
    let name = data.Name.toLowerCase()
    if(name.includes(search)) 
        results.push(data)
  })
  
  console.log(results)
  showData(results);
}

let searchDateElement = document.querySelector(".date-search")

searchDateElement.oninput = () => {
  searchByDate();
}

let searchByDate = () => {
  let search = searchDateElement.value
  var results = [];
  
  allData.forEach(function(data) {
    let date = data.startDate
    if(date === search) {
      results.push(data)
    }
  })
  
  showData(results);
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  switch(cityName){
    case 'order-standart': {
      currentIndex = 0; break;
    }
    case 'order-superior': {
      currentIndex = 1; break;
    }
    case 'order-deluxe': {
      currentIndex = 2; break;
    }
  }
  showData(orderData[currentIndex])

}
document.getElementById("defaultOpen").click();