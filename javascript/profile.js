const userProfileInformation = {
  picture: "/hoteru_dashboard_hotel/assets/avatar.png",
  name: "Jonathan",
  email: "jonathan@gmail.com",
  phone: "(097) 234-5678",
  address: "Kuvukiland, Utopia, SA",
};

var userProfileData = localStorage.getItem("userProfileData")
  ? JSON.parse(localStorage.getItem("userProfileData"))
  : userProfileInformation;

try {
  const toggler = document.querySelector(".btn");

  toggler.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
  });

  const form = document.querySelector("form"),
    nameFormInput = document.querySelector("form #name"),
    emailFormInput = document.querySelector("form #email"),
    phoneFormInput = document.querySelector("form #phone"),
    addressFormInput = document.querySelector("form #address"),
    formSubmitButton = document.querySelector("#form-submit");

  const nameTextField = document.querySelector("#name-textfield"),
    emailTextField = document.querySelector("#email-textfield"),
    phoneTextField = document.querySelector("#phone-textfield"),
    addressTextField = document.querySelector("#address-textfield");

  function editInfo() {
    nameFormInput.value = userProfileData.name;
    emailFormInput.value = userProfileData.email;
    phoneFormInput.value = userProfileData.phone;
    addressFormInput.value = userProfileData.address;
  }

  function showInfo() {
    nameTextField.innerHTML = userProfileData.name;
    emailTextField.innerHTML = userProfileData.email;
    phoneTextField.innerHTML = userProfileData.phone;
    addressTextField.innerHTML = userProfileData.address;

    let imgAvatarElement = document.getElementById("imgAvatar");
    imgAvatarElement.src = userProfileData.picture;

    updateHeaderProfileUI();
  }

  formSubmitButton.addEventListener("click", () => {
    let imgAvatarElement = document.getElementById("imgAvatar");
    const information = {
      picture:
        imgAvatarElement.src == undefined
          ? "/hoteru_dashboard_hotel/assets/avatar.png"
          : imgAvatarElement.src,
      name: nameFormInput.value,
      email: emailFormInput.value,
      phone: phoneFormInput.value,
      address: addressFormInput.value,
    };
    userProfileData = information;

    localStorage.setItem("userProfileData", JSON.stringify(information));

    showInfo();
  });

  function readURL(input) {
    if (input.files[0].size > 1000000) {
      alert("This file is too large!");
      return;
    }

    // document.getElementById("imgInput").style.display = "none";

    let imgAvatarElement = document.getElementById("imgAvatar");

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        imgAvatarElement.src = e.target.result;
        userProfileData.picture = e.target.result;
        
        localStorage.setItem("userProfileData", JSON.stringify(userProfileData));

        userProfileData = localStorage.getItem("userProfileData")
          ? JSON.parse(localStorage.getItem("userProfileData"))
          : userProfileInformation;

        showInfo();
      };

      reader.readAsDataURL(input.files[0]);
    }

    console.log(userProfileData);

  }

  function updateHeaderProfileUI() {
    const userProfileNameElement = document.getElementById("name-textfield2");
    userProfileNameElement.innerHTML = userProfileData.name;

    let headerProfileImgElement = document.getElementById(
      "header-profile-image"
    );
    headerProfileImgElement.src = userProfileData.picture;
  }

  updateHeaderProfileUI();

  showInfo();
} catch (err) {
  console.log(err);

  function updateHeaderProfileUI() {
    const userProfileNameElement = document.getElementById("name-textfield2");
    userProfileNameElement.innerHTML = userProfileData.name;

    let headerProfileImgElement = document.getElementById(
      "header-profile-image"
    );
    headerProfileImgElement.src = userProfileData.picture;
  }

  updateHeaderProfileUI();

  showInfo();
}
