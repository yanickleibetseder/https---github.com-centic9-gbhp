const dropdownButton = document.getElementById('dropdown-button');
const dropdownList = document.getElementById('dropdown-list');
const dropdownItems = document.querySelectorAll('.dropdown-item');

// Klick auf den Button toggelt die Sichtbarkeit
dropdownButton.addEventListener('click', (e) => {
  dropdownList.classList.toggle('hidden');
  e.stopPropagation();
});

// Klick auf ein Item ändert den Button-Text
dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    dropdownButton.textContent = item.textContent + " ▾"; // Text ändern + Pfeil behalten
    dropdownList.classList.add('hidden'); // Dropdown schließen
  });
});

// Klick außerhalb schließt das Dropdown
document.addEventListener('click', () => {
  dropdownList.classList.add('hidden');
});