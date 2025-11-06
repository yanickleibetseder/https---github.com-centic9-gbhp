const trainerteam = document.getElementById("trainerteam");
const rennteam = document.getElementById("rennteam");
const nachwuchs = document.getElementById("nachwuchs");

const panels = [trainerteam, rennteam, nachwuchs];

function setActivePanel(active) {
  panels.forEach(panel => {
    if (panel === active) {
      panel.style.width = "60%";
      panel.style.backgroundColor = "white";
      panel.querySelector("h1").style.fontSize = "100px";
      panel.querySelector("h1").style.top = "100px";
    } else {
      panel.style.width = "20%";
      panel.style.backgroundColor = "lightgrey";
      panel.querySelector("h1").style.fontSize = "40px";
      panel.querySelector("h1").style.top = "50%";
    }
  });
}

trainerteam.addEventListener("mouseenter", () => setActivePanel(trainerteam));
rennteam.addEventListener("mouseenter", () => setActivePanel(rennteam));
nachwuchs.addEventListener("mouseenter", () => setActivePanel(nachwuchs));

trainerteam.addEventListener("click", () => {
  window.location.href = "Trainerteam/Trainerteam.html";
});

rennteam.addEventListener("click", () => {
  window.location.href = "Rennteam/Rennteam.html";
});

nachwuchs.addEventListener("click", () => {
  window.location.href = "Nachwuchs/Nachwuchs.html";
});