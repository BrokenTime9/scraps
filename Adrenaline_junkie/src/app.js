
const North = document.getElementById("north-india");
const South = document.getElementById("south-india");
const East = document.getElementById("east-india");
const West = document.getElementById("west-india");

// blur and translate animation-------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// text opacity animation----------------------------------
const observerOpacity = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity1");
    } else {
      entry.target.classList.remove("opacity1");
    }
  });
});

const opacityElements = document.querySelectorAll(".opacity0");
opacityElements.forEach((el) => observerOpacity.observe(el));

// Navigation--------------------------------------------

North.onclick = navToNorth;
function navToNorth() {
  window.location.href = "/Adrenaline_junkie/states/northStates.html";
}

West.onclick = navToWest;

function navToWest() {
  window.location.href = "/Adrenaline_junkie/states/westStates.html";
}
East.onclick = navToEast;

function navToEast() {
  window.location.href = "/Adrenaline_junkie/states/eastStates.html";
}

South.onclick = navToSouth;

function navToSouth() {
  window.location.href = "/Adrenaline_junkie/states/southStates.html";
}
