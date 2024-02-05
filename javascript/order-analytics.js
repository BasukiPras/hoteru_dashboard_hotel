const toggler = document.querySelector(".btn");

toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

// superior hotel
var form = document.getElementById("user-form-modal"),
    userRoom = document.getElementById("number"),
    userName = document.getElementById("name"),
    sDate = document.getElementById("sDate"),
    eDate = document.getElementById("eDate"),
    submitBtn = document.querySelector(".submit"),
    userInfo = document.getElementById("data"),
    modal = document.getElementById("user-Form-modal"),
    modalTitle = document.querySelector("#user-form-modal .modal-title"),
    newUserBtn = document.querySelector(".newUser")

    
let standartRoomData = localStorage.getItem('userProfileStandart') ? JSON.parse(localStorage.getItem('userProfileStandart')) : []

let deluxeRoomData = localStorage.getItem('userProfileDeluxe') ? JSON.parse(localStorage.getItem('userProfileDeluxe')) : []
   
let superiorRoomData = localStorage.getItem('userProfileSuperior') ? JSON.parse(localStorage.getItem('userProfileSuperior')) : []

let allData = []

standartRoomData.forEach((data) => { allData.push(data) })
deluxeRoomData.forEach((data) => { allData.push(data) })
superiorRoomData.forEach((data) => { allData.push(data) })

let isEdit = false, editId


console.log(standartRoomData)
console.log(deluxeRoomData)
console.log(superiorRoomData)

// newUserBtn.addEventListener('click', ()=> {
//     submitBtn.innerText = 'Submit',
//     modalTitle.innerText = "Fill the Form"
//     isEdit = false
//     // form.reset()
// })

function showData( shownData ){

  console.log("Show Data")
  console.log(shownData)

  document.querySelectorAll('.hoteldata').forEach(info => info.remove())
  shownData.forEach((element, index) => {
      let createElement = `<tr class="hoteldata">
          <td class="text-nowrap align-middle">${element.Number}</td>
          <td class="text-nowrap align-middle">${element.Name}</td>
          <td class="text-nowrap align-middle">${element.startDate} - ${element.endDate}</td>
          </tr>`                                    

      userInfo.innerHTML += createElement
  })

}
showData( allData    )



let searchNameElement = document.querySelector(".name-search")

searchNameElement.oninput = () => {
  searchByName();
}

const searchByName = () =>{
  let search = searchNameElement.value.toLowerCase();
  var results = [];
  console.log("Search")
  
  allData.forEach(function(data) {
    let name = data.Name
    if(name.includes(search)) 
        results.push(data)
  })
  
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


