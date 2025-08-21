// collect all the element needed
const firstnameEl = document.querySelector("#firstname");
const lastnameEl = document.querySelector("#lastname");
const emailEl = document.querySelector("#email");
const passwordEl = document.getElementById("password");
const formTag = document.querySelector("form");

formTag.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent the auto reload

  // verify inputs
  const firstname = firstnameEl.value;
  const lastname = lastnameEl.value;
  const email = emailEl.value;
  const password = passwordEl.value;

  if (!firstname || !lastname || !email || !password) {
    alert("All field is required ‼");
    return;
  }

  // create the data as object
  const data = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  };

  console.log(data);
  // display success message
  alert("Account created successfully✅");

  // save to browser storage
  localStorage.setItem("userInfo", JSON.stringify(data));

  // clear the input fields
  firstnameEl.value = "";
  lastnameEl.value = "";
  emailEl.value = "";
  passwordEl.value = "";

  window.location.href = "./index.html";
});
