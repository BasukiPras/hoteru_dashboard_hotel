const toggler = document.querySelector(".btn");

toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

// standart-room
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

    
let getData = localStorage.getItem('userProfileStandart') ? JSON.parse(localStorage.getItem('userProfileStandart')) : []

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
              <button class="btn btn-sm btn-outline-secondary badge"  
              onclick="editInfo(${element.Number}, '${element.Name}', '${element.startDate}', '${element.endDate}', '${index}')" type="button" 
              data-bs-toggle="modal" data-bs-target="#user-form-modal"><i class="fas fa-edit"></i></button>
              <button class="btn btn-sm btn-outline-secondary badge-trash" onclick="deleteInfo(${index})"
              type="button"><i class="fa fa-trash"></i></button>
          </div>
              </td>
          </tr>`                                    

      userInfo.innerHTML += createElement
  })

}
showData( getData )
editInfo(1, 1, 1, 1)

function editInfo(number, name, Sdate, Edate, index){
    console.log("Edit Info")
    console.log(index)

    isEdit = true
    userRoom.value = number
    userName.value = name
    sDate.value = Sdate
    eDate.value = Edate
    editId = index

    submitBtn.innerText = "Update"
    modalTitle.innerText = "Update The Form"
}

function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1)
        localStorage.setItem("userProfileStandart", JSON.stringify(getData))
        showData( getData )
    }
}

form.addEventListener('submit', (e)=> {
    console.log('Form submitted')
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
        console.log(editId)
    }

    localStorage.setItem('userProfileStandart', JSON.stringify(getData))
    console.log(localStorage.getItem("userProfileStandart"))

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
    let name = data.Name.toLowerCase()
    
    if(name.includes(search)) {
        results.push(data)
    } 
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
    let sdate = data.startDate
    let edate = data.endDate
    if(sdate === search) {
      results.push(data)
    }
    if(edate === search) {
        results.push(data)
      }
  })
  
  showData(results);
}
