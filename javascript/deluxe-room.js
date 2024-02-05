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

    
let getData = localStorage.getItem('userProfileDeluxe') ? JSON.parse(localStorage.getItem('userProfileDeluxe')) : []

let isEdit = false, editId




newUserBtn.addEventListener('click', ()=> {
    submitBtn.innerText = 'Submit',
    modalTitle.innerText = "Fill the Form"
    isEdit = false
    // form.reset()
})

function showData( shownData ){

  console.log("Show Data")
  console.log(shownData)

  document.querySelectorAll('.hoteldata').forEach(info => info.remove())
  shownData.forEach((element, index) => {
      let createElement = `<tr class="hoteldata">
          <td class="text-nowrap align-middle">${element.Number}</td>
          <td class="text-nowrap align-middle">${element.Name}</td>
          <td class="text-nowrap align-middle">${element.startDate} - ${element.endDate}</td>
          <td class="text-center align-middle">
              <div class="btn-group align-top">
              <button class="btn btn-sm btn-outline-secondary badge" style="background-color: #B6BBC4" 
              onclick="editInfo(${element.Number}, '${element.Name}', '${element.startDate}', '${element.endDate}')" type="button" 
              data-bs-toggle="modal" data-bs-target="#user-form-modal">Edit</button>
              <button class="btn btn-sm btn-outline-secondary badge" style="background-color: #B6BBC4" onclick="deleteInfo(${index})"
              type="button"><i class="fa fa-trash"></i></button>
          </div>
              </td>
          </tr>`                                    

      userInfo.innerHTML += createElement
  })

}
showData( getData )

function editInfo(index, number, name, Sdate, Edate){
    console.log(index)
    console.log(number)
    console.log(name)
    console.log(Sdate)
    console.log(Edate)

    isEdit = true
    editId = index
    userRoom.value = number
    userName.value = name
    sDate.value = Sdate
    eDate.value = Edate
    
    console.log(index, number, name, Sdate, Edate)

    submitBtn.innerText = "Update"
    modalTitle.innerText = "Update The Form"
}

function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1)
        localStorage.setItem("userProfileDeluxe", JSON.stringify(getData))
        showData( getData )
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const information = {
      Number: userRoom.value,
        Name: userName.value,
        startDate: sDate.value,
        endDate: eDate.value
    }

    if(!isEdit){
        getData.push(information)
    }
    else{
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('userProfileDeluxe', JSON.stringify(getData))
    console.log(localStorage.getItem("userProfileDeluxe"))

    submitBtn.innerText = "Submit"
    modalTitle.innerHTML = "Fill The Form"

    showData( getData )

    // form.reset()

    // modal.style.display = "none"
    // document.querySelector(".modal-backdrop").remove()
})

let searchNameElement = document.querySelector(".name-search")

searchNameElement.oninput = () => {
  searchByName();
}

const searchByName = () =>{
  let search = searchNameElement.value.toLowerCase();
  var results = [];
  console.log("Search")
  
  getData.forEach(function(data) {
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
  
  getData.forEach(function(data) {
    let date = data.startDate
    if(date === search) {
      results.push(data)
    }
  })
  
  showData(results);
}
