document.addEventListener("DOMContentLoaded", function () {
  const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
  const loggedin = JSON.parse(localStorage.getItem("loggedin")) || [];

  const userList = [
    {
      username: "admin",
      password: "admin",
      firstName: "Manish",
      lastName: "Kumar",
      dateOfBirth: "1995-05-15",
      employeeID: 1034,
      email: "manish.kumar@beehyv.com",
      profilePicture: "/path/to/profile_picture.jpg",
      designation: "Software Developer",
      contactNumber: "9931716580",
      address: "Masjid Banda, Kondapur",
      language: "English",
    },
    {
      username: "vineetks",
      password: "vineetks",
      firstName: "Vineet",
      lastName: "Ks",
      dateOfBirth: "1995-05-15",
      employeeID: 12345,
      email: "vineetks@beehyv.com",
      profilePicture: "/path/to/profile_picture.jpg",
      designation: "Senior Software Developer",
      contactNumber: "1234567890",
      address: "Masjid Banda, Kondapur",
      language: "English",
    },
    // Additional user entries can be added similarly
  ];

  if (usersData.length === 0) {
    const userListString = JSON.stringify(userList);

    localStorage.setItem("usersData", userListString);
  }

  console.log(loggedin.length)
  if (loggedin.length !== 0) {
    window.location.href = "./webpage/index.html";
    return;
  }

  function sendingdetails(emailValue) {
    const loggedindata = {
      email: emailValue,
    };
    loggedin.push(loggedindata);
    localStorage.setItem("loggedin", JSON.stringify(loggedin));
  }

  const loginForm = document.querySelector(".formdetails");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInput = document.querySelector("#input1").value;
    const password = document.querySelector("#input2").value;

    // Check if userInput is an email or username
    const user = usersData.find(
      (user) =>
        (user.email === userInput || user.username === userInput) &&
        user.password === password
    );

    if (!user) {
      alert(
        "User not found or wrong password. Please SignUp or check your credentials."
      );
      return;
    }

    // If user found
    sendingdetails(user.email);
    window.location.href = "./webpage/index.html";
  });
});