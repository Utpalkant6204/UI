document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const dob = document.querySelector("#dob").value;
    const employeeId = document.querySelector("#eid").value;
    const email = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;

    if (!firstName || !lastName || !dob || !employeeId || !email || !password) {
      alert("Please fill out all fields");
      return;
    }

    // Example age validation
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    if (age <= 19) {
      alert("You must be minimum 20 years old to sign up.");
      return;
    }

    let usersData = JSON.parse(localStorage.getItem("usersData")) || [];
    console.log(usersData)

    if (isNaN(employeeId) || employeeId === "") {
      alert("Employee ID must be a non-empty number.");
      return;
    }
    if (usersData.includes(employeeId)) {
      alert("Employee ID must be unique.");
      return;
    }

    const userExists = usersData.some((user) => user.email === email);

    if (userExists) {
      alert(
        "User with this email already exists. Please use a different email."
      );
      return;
    }

    // Create an object with the form data
    const formData = {
      username :email,
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      employeeId: employeeId,
      email: email,
      password: password,
      name: "",
    };

    usersData.push(formData);

    // Convert the array to a JSON string and store it in local storage
    localStorage.setItem("usersData", JSON.stringify(usersData));

    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#dob").value = "";
    document.querySelector("#eid").value = "";
    document.querySelector("#exampleInputEmail1").value = "";
    document.querySelector("#exampleInputPassword1").value = "";

    window.location.href = "../index.html";
  });
});
