import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyDzwS5FGMlIwpnREoRpf7cJm1OcPW5ZtMQ",
  authDomain: "granitbiker-bfad5.firebaseapp.com",
  projectId: "granitbiker-bfad5",
  storageBucket: "granitbiker-bfad5.firebasestorage.app",
  messagingSenderId: "309599374861",
  appId: "1:309599374861:web:ebcb3f8b1365b5e59dcf44",
  measurementId: "G-VMP1PDR7PX"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Container für die Boxen
const boxArea = document.getElementById("box-area");
if (!boxArea) console.error("Box-Container nicht gefunden!");

// Funktion: Boxen erstellen
function createBox(member) {
  const boxWrapper = document.createElement("div");
  boxWrapper.className = "box";
  boxWrapper.innerHTML = `
    <img src="${member.imageUrl}" alt="${member.name}">
    <div class="overlay">
      <h3>${member.name}</h3>
    </div>
  `;
  boxArea.appendChild(boxWrapper);
}

// Firestore-Daten laden
async function loadTeam() {
  try {
    const querySnapshot = await getDocs(collection(db, "team"));
    if (querySnapshot.empty) console.warn("Keine Dokumente gefunden!");
    querySnapshot.forEach(doc => {
      createBox(doc.data());
    });
  } catch (error) {
    console.error("Fehler beim Laden der Teamdaten:", error);
  }
}

// Seite laden
loadTeam();
