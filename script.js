const styles = document.querySelectorAll(".style");
const changeColorButtons = document.querySelectorAll(".changeColorButton");
const changeColorSet = document.querySelector(".changeColorSet");
const colorChanger = document.querySelector(".colorChanger");
const burgerMenu = document.querySelector(".burgerMenu");
const aside = document.querySelector(".aside");
const navLinks = document.querySelectorAll(".nav > li a");
const sections = document.querySelectorAll(".section");

console.log(navLinks);

// Change Theme Color
for (let i = 0; i < styles.length; i++) {
  let colorSelected = styles[i].className.split(" ")[1];
  for (let j = 0; j < changeColorButtons.length; j++) {
    changeColorButtons[j].addEventListener("click", () => {
      let buttonSwithcer = changeColorButtons[j].className.split(" ")[1];
      if (buttonSwithcer === colorSelected) {
        styles[i].removeAttribute("disabled");
      } else {
        styles[i].setAttribute("disabled", true);
      }
    });
  }
}

// Open ColorSwicher
changeColorSet.addEventListener("click", () => {
  colorChanger.classList.toggle("openColorCahnger");
});

// Open Sidebar Menu On Mobile
burgerMenu.addEventListener("click", () => {
  aside.classList.toggle("openSideBar");
});

// Add active class
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
    navLinks[i].classList.add("active");
  });
}

// Plceholder
const nav = document.querySelector(".nav"),
  navlist = document.querySelectorAll("li");
for (let i = 0; i < navlist.length; i++) {
  const aLinks = navlist[i].querySelector("a");
  aLinks.addEventListener("click", function () {
    console.log(this);

    showSection(this);
  });
}

function showSection(sect) {
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("acticeSection");
  }
  const target = sect.getAttribute("href").split("#")[1];

  document.querySelector("#" + target).classList.add("acticeSection");
}
