const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
  hideMenu();
}

// RESPONSIVE MOBILE MENU
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

const showMenu = () => {
  hamburger.style.display = "none";
  close.style.transform = "translateY(0)";
  menu.style.transform = "translateY(0)";
};

const hideMenu = () => {
  close.style.transform = "translateY(-40rem)";
  hamburger.style.display = "block";
  
  menu.style.transform = "translateY(-200%)";
};

hamburger.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);








  function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";

  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = "Invalid email address";
    isValid = false;
  }

  return isValid;
}


function isValidEmail(email) {
  alert("form submitted.");
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);

}

