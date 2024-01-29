document.addEventListener("DOMContentLoaded", function () {
  const userloggedin = JSON.parse(localStorage.getItem("loggedin")) || [];
  console.log(userloggedin);

  let usersData = JSON.parse(localStorage.getItem("usersData"));
  console.log(usersData);
  const user = usersData.filter((user) => user.email === userloggedin.email);
  console.log(user);

  const beforelogin = document.getElementById("before");
  const afterlogin = document.getElementById("after");

  console.log(userloggedin.length);
  if (userloggedin.length !== 0) {
    beforelogin.style.display = "none";
    afterlogin.style.display = "flex"; 
  } else {
    beforelogin.style.display = "flex";
    afterlogin.style.display = "none";
  }

  const logoutAnchor = document.querySelector("#after a");
  if (logoutAnchor) {
    logoutAnchor.addEventListener("click", function (){
        localStorage.removeItem("loggedin");
    });
  }

  const btn = document.querySelector("#submit");

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const updatedName = document.querySelector("#nameInput").value;
    const updateddegination = document.querySelector("#designationInput").value;
    const updatedaddress = document.querySelector("#addressInput").value;
    const mobileInput = document.querySelector("#mobileInput").value;
    const emailinput = document.querySelector("#emailInput").value;
    const linkinput = document.querySelector("#linkInput").value;
    const langinput = document.querySelector("#languageInput").value;
    const fileinput = document.querySelector("#fileInput");


    const file = fileinput.files[0];

    if(mobileInput >0 && mobileInput.length!==10){
      alert("Invalid mobile number");
      return;
    }
    const data = {
      name: updatedName,
      degination: updateddegination,
      address: updatedaddress,
      number: mobileInput,
      email1: emailinput,
      link: linkinput,
      language: langinput,
    };

    const mergedUserData = { ...user[0], ...data };
    usersData = usersData.map((user) =>
      user.email === userloggedin.email ? mergedUserData : user
    );
    localStorage.setItem("usersData", JSON.stringify(usersData));
    window.location.reload();
  });

  const userName = document.querySelector("#userName");
  const userDesignation = document.querySelector("#userDesignation");
  const userAddress = document.querySelector("#userAddress");
  const userNumber = document.querySelector("#userNumber");
  const userEmail = document.querySelector("#userEmail");
  const userLink = document.querySelector("#userLink");
  const userLanguage = document.querySelector("#userLanguage");

  if (user[0].name) {
    userName.innerText = user[0].name;
  }

  if (user[0].degination) {
    userDesignation.innerText = user[0].degination;
  }

  if (user[0].address) {
    userAddress.innerText = user[0].address;
  }

  if (user[0].number) {
    userNumber.innerText = user[0].number;
  }

  if (user[0].email) {
    userEmail.innerText = user[0].email;
  }

  if (user[0].link) {
    userLink.innerText = user[0].link;
  }

  if (user[0].language) {
    userLanguage.innerText = user[0].language;
  }
});
