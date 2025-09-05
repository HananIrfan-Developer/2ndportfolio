document.addEventListener("DOMContentLoaded", function () {
  let navcontact = document.getElementById("nav-contact");
  navcontact.addEventListener("click", function () {
    if (navcontact.innerText === "Contact") {
      navcontact.innerText = "WhatsApp";
      navcontact.style.color = "crimson";
    } else {
      navcontact.innerText = "Contact";
      navcontact.style.color = "white";
    }
  });

  let header = document.getElementsByTagName("header")[0];
  let nav = document.getElementsByTagName("nav")[0];
  let navlinks = document.querySelector(".nav-links");
  let menueicon = document.getElementsByClassName("menu-icon")[0];
  let mainsection = document.getElementsByClassName("mainsection")[0];
  let main = document.getElementsByTagName("main")[0];
  let mainimage = document.getElementsByClassName("mainimage")[0]; // <-- added [0]
});
