const emailEl = document.querySelector("#email");
const passwordEl = document.getElementById("password");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // collect input values
  const email = emailEl.value;
  const password = passwordEl.value;

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  // verify user
  if (!email || !password) {
    alert("Provide your email and password to Sign in");
    return;
  }

  // verify the right user
  if (email !== userInfo.email && password !== userInfo.password) {
    alert("Invalid Email or Password");
    return;
  }

  console.log(userInfo);

  alert("Logged in successfully ✅");

  window.location.href = "./home.html";
});
