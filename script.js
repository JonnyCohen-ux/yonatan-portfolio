const styles = document.querySelectorAll(".style");
const changeColorButtons = document.querySelectorAll(".changeColorButton");

const changeColorSet = document.querySelector(".changeColorSet");
const colorChanger = document.querySelector(".colorChanger");
// console.log(styles);
console.log(changeColorButtons);

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

changeColorSet.addEventListener("click", () => {
  console.log("test");
  colorChanger.classList.toggle("openColorCahnger");
});
