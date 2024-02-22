try{

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
    name: "Jonathan",
    email: "jonathan@gmail.com",
    phone: "(097) 234-5678",
    address: "Kuvukiland, Utopia, SA"
}

let userProfileData = localStorage.getItem('userProfileData') ? JSON.parse(localStorage.getItem('userProfileData')) : [userProfileInformation]

function editInfo(){
    nameFormInput.value = userProfileData.name 
    emailFormInput.value = userProfileData.email 
    phoneFormInput.value = userProfileData.phone 
    addressFormInput.value = userProfileData.address 

}

function showInfo( ){
    nameTextField.innerHTML = userProfileData.name 
    emailTextField.innerHTML = userProfileData.email 
    phoneTextField.innerHTML = userProfileData.phone 
    addressTextField.innerHTML = userProfileData.address 

    updateHeaderProfileUI();
}

formSubmitButton.addEventListener('click', () => {
    
    const information = {
        name: nameFormInput.value,
        email: emailFormInput.value,
        phone: phoneFormInput.value,
        address: addressFormInput.value
    }
    console.log(information)
    userProfileData = information 

    localStorage.setItem('userProfileData', JSON.stringify(information) )
    showInfo()
})

function updateHeaderProfileUI(){
    const userProfileNameElement = document.getElementById("name-textfield2")
    userProfileNameElement.innerHTML = userProfileData.name
}

updateHeaderProfileUI()

showInfo()


} catch(err){
    console.log(err)
    

    let userProfileData = localStorage.getItem('userProfileData') ? JSON.parse(localStorage.getItem('userProfileData')) : [userProfileInformation]

    function updateHeaderProfileUI(){
        const userProfileNameElement = document.getElementById("name-textfield2")
        userProfileNameElement.innerHTML = userProfileData.name
    }
    
    updateHeaderProfileUI()
    
    showInfo()
    
}

function readURL(input) 
{
    document.getElementById("imgInput").style.display = "block";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('imgInput').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}