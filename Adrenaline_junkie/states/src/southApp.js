import { cards } from "./southObjects.js";
import { heroCards } from "./southObjects.js";
const heroSection = document.getElementById("hero-section");
const stateBtn = document.getElementsByClassName("state-btn");
const cardElems = document.getElementsByClassName("card");
const logoElem = document.getElementById("logo");
const heroCard = document.getElementById("hero-card");
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
    <p style="font-family: rethink-regular; font-size:22px;">${cards[parsedState].para}</p>
    `;
  heroSectionDesc.innerHTML = innerHTML;

  heroSection.style.backgroundImage = cards[parsedState].back_image;

  heroCard.innerHTML = "";

  for (let i = 0; i < Object.keys(heroCards[parsedState]).length; i++) {
    heroCard.innerHTML += `<li id = "${[
      Object.values(heroCards[parsedState])[i]["id"],
    ]}" class="info-cards"><img src="${[
      Object.values(heroCards[parsedState])[i]["image"],
    ]}" alt="#" style="width:100%; height:55%;" class="info-cards-image" ><div class="info-cards-desc"><h1 class="info-cards-h">${[
      Object.values(heroCards[parsedState])[i]["heading"],
    ]}</h1><p class="info-cards-p">${[
      Object.values(heroCards[parsedState])[i]["p"],
    ]}</p><p class="book">Book now <i class="fa-solid fa-arrow-right-long"></i></p><hr></div>
    </li>`;
  }
}

changeState("Maharashtra");

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
// --------------- Hamburger Animation--------------------
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

// ---------------- hero card------------------------------

console.log(Object.keys(heroCards["Maharashtra"]));
// console.log(heroCards["Maharashtra"][0].heading);
console.log([Object.values(heroCards["Maharashtra"])[0]["heading"]]); //veryyyyyyy imppppp madafaqa

// ---------------------------------------Mouse hover over card

const test = document.querySelectorAll(".info-cards");

test.forEach((currentCard) => {
  const imgElement = currentCard.querySelector(".info-cards-image");

  currentCard.addEventListener("mouseenter", () => {
    // Scale up the image on mouseenter
    imgElement.style.transform = "scale(1.1)";
    imgElement.style.height = "55%";
  });

  currentCard.addEventListener("mouseleave", () => {
    // Reset the scale on mouseleave
    imgElement.style.transform = "scale(1)";
  });
});
