import { cards } from "./northObjects.js";

const heroSection = document.getElementById("hero-section");
const stateBtn = document.getElementsByClassName("state-btn");
const cardElems = document.getElementsByClassName("card");
const logoElem = document.getElementById("logo");
console.log(stateBtn);

const heroSectionDesc = document.getElementById("heroSectionDesc");

logoElem.onclick = goHome;

function goHome() {
  window.location.href = "/Adrenaline_junkie/index.html";
}

function changeState(state) {
  const parsedState = state.replace(" ", "");
  const innerHTML = `
    <h1 style="font-family: rounded-corners; font-size: 40px;">${cards[parsedState].heading}</h1>
    <p style="font-family: rethink-semibold; font-size:22px; margin-top:20px; margin-right:40px;">${cards[parsedState].para}</p>
    `;
  heroSectionDesc.innerHTML = innerHTML;

  heroSection.style.backgroundImage = cards[parsedState].back_image;
}

changeState("Himachal Pradesh");

console.log(stateBtn, typeof stateBtn);
for (let i = 0; i < stateBtn.length; i++) {
  stateBtn[i].onclick = (e) => {
    changeState(e.target.innerText);

    changeState(Object.keys(cards)[i]);

    let currentId = 2;
    cardElems[i].setAttribute("id", "card1");
    for (let j = i + 1; j < cardElems.length; j++) {
      cardElems[j].setAttribute("id", "card" + currentId);
      currentId++;
    }
    for (let j = 0; j < i; j++) {
      cardElems[j].setAttribute("id", "card" + currentId);
      currentId++;
    }
  };
}

for (let i = 0; i < cardElems.length; i++) {
  cardElems[i].setAttribute("id", "card" + (i + 1).toString());
  cardElems[i].style.backgroundImage = Object.values(cards)[i].card_image;

  cardElems[i].onclick = (e) => {
    changeState(Object.keys(cards)[i]);

    let currentId = 2;
    cardElems[i].setAttribute("id", "card1");
    for (let j = i + 1; j < cardElems.length; j++) {
      cardElems[j].setAttribute("id", "card" + currentId);
      currentId++;
    }
    for (let j = 0; j < i; j++) {
      cardElems[j].setAttribute("id", "card" + currentId);
      currentId++;
    }
  };
}

// --------------- Hamburgere Animation--------------------
var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById("nav");
var blue = document.getElementById("blue");

icon.addEventListener("click", function () {
  icon1.classList.toggle("a");
  icon2.classList.toggle("c");
  icon3.classList.toggle("b");
  nav.classList.toggle("show");
  blue.classList.toggle("slide");
});
