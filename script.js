document.getElementById("adminForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let adminData = { name, email, password };

  // Store in Local Storage
  let admins = JSON.parse(localStorage.getItem("admins")) || [];
  admins.push(adminData);
  localStorage.setItem("admins", JSON.stringify(admins));

  alert("Admin Registered Successfully!");
  document.getElementById("adminForm").reset();
});
