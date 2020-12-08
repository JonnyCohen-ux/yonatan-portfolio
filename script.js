const styles = document.querySelectorAll(".style");
const changeColorButtons = document.querySelectorAll(".changeColorButton");
const changeColorSet = document.querySelector(".changeColorSet");
const colorChanger = document.querySelector(".colorChanger");
const burgerMenu = document.querySelector(".burgerMenu");
const aside = document.querySelector(".aside");

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
