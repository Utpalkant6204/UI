document.addEventListener("DOMContentLoaded", function () {
  function sendingdetails(emailValue) {
   const loggedin = {
    email : emailValue,
   }
   localStorage.setItem("loggedin", JSON.stringify(loggedin));
  }

  const loginForm = document.querySelector(".formdetails");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#input1").value;
    const password = document.querySelector("#input2").value;

    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    //const user = usersData.find((user) => user.email === email && user.password === password);

    const emailValidate = usersData.find((user) => user.email === email);

    console.log(emailValidate);
    if (!emailValidate) {
      alert("User not found. Please SignUp");
      return;
    } else {
      const user = usersData.find((user) => user.password === password);

      if (emailValidate && user) {
        sendingdetails(email);
        window.location.href = "./webpage/index.html";
        return;
      }

      if (!user) {
        alert("wrong Password");
      }
    }
  });
});