const toggler = document.querySelector(".btn");

toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

const form = document.querySelector('form'),
    nameFormInput = document.querySelector("form #name"),
    emailFormInput = document.querySelector("form #email"),
    phoneFormInput = document.querySelector("form #phone"),
    addressFormInput = document.querySelector("form #address"),
    formSubmitButton = document.querySelector("#form-submit")

const nameTextField = document.querySelector("#name-textfield"),
    emailTextField = document.querySelector("#email-textfield"),
    phoneTextField = document.querySelector("#phone-textfield"),
    addressTextField = document.querySelector("#address-textfield")


const userProfileInformation = {
    name: "Jonathan Smith",
    email: "jonathan@gmail.com",
    phone: "(097) 234-5678",
    address: "Kuvukiland, Utopia, SA"
}

let userProfileData = localStorage.getItem('userProfileData') ? JSON.parse(localStorage.getItem('userProfileData')) : [userProfileInformation]

function editInfo(){
    nameFormInput.value = userProfileData[0].name 
    emailFormInput.value = userProfileData[0].email 
    phoneFormInput.value = userProfileData[0].phone 
    addressFormInput.value = userProfileData[0].address 
}

function showInfo( ){
    nameTextField.innerHTML = userProfileData[0].name 
    emailTextField.innerHTML = userProfileData[0].email 
    phoneTextField.innerHTML = userProfileData[0].phone 
    addressTextField.innerHTML = userProfileData[0].address 
}

formSubmitButton.addEventListener('click', () => {
    
    const information = {
        name: nameFormInput.value,
        email: emailFormInput.value,
        phone: phoneFormInput.value,
        address: addressFormInput.value
    }
    console.log(information)
    userProfileData[0] = information 

    showInfo()
})


showInfo()
