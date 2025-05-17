// The Language Menu
let langButton = document.getElementById("lang-button");
let langMenu = document.getElementById("lang-menu");

langButton.onclick = function () {
  if (langMenu.style.display === "none") {
    langMenu.style.display = "flex";
  } else {
    langMenu.style.display = "none";
  }
};

// The Pages Menu
let button = document.getElementById("btn");
let menu = document.getElementById("menu");

button.onclick = function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    console.log("none");
  } else {
    menu.style.display = "none";
  }
};

// The Scroll-top Button
let scrobtn = document.getElementById("scrobtn");

window.onscroll = function () {
  if (window.scrollY >= 400) {
    scrobtn.style.opacity = "1";
  } else {
    scrobtn.style.opacity = "0";
  }
};

scrobtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

//

if (document.title == "Monakhy") {
  console.log("Yes");
}

// Make The links Active ]
let links = document.querySelectorAll(".c-bar-menu li");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function (event) {
    // Remove The Active Class From All Links
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }

    // Add The Active Class
    this.classList.toggle("active");
  };
}
