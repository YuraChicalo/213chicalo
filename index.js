const button = document.getElementById("switch");
const body = document.getElementsByTagName("body")[0];
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");
const form = document.querySelector(".res");
const submit = document.querySelector(".in6");
const text1 = document.querySelector(".afterwhat");
const text2 = document.querySelector(".histofres");
const text3 = document.querySelector(".lid");

const black = "#5c646e";


//IIFD
(function () {
  let isBlack = true;

  //arrow function
  button.addEventListener("click", () => {
    isBlack = !isBlack;

    if (isBlack) {
      changeTheme("Black theme", "#e2e2e9", "white", "#f3f3f3", "url(images/input.png)", "1px solid #d8dbde", "5px solid white", black,black, black);
    } else {
      changeTheme("Light theme", "#544f6e", "#68628a", "#8379b8", "#8379b8", "1px solid black", "2px solid black", "black", "black", "black");
    }
  });
})();

function changeTheme(buttonTheme, bodyTheme, containerTheme, navTheme, form1Theme, form2Theme, submitTheme, text1Theme, text2Theme, text3Theme) {
  button.innerHTML = buttonTheme;
  body.style.background = bodyTheme;
  container.style.background = containerTheme;
  nav.style.background = navTheme;
  form.style.background = form1Theme;
  form.style.border = form2Theme;
  submit.style.border = submitTheme;
  text1.style.color = text1Theme;
  text2.style.color = text2Theme;
  text3.style.color = text3Theme;
}


