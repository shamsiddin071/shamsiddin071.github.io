const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

// Modalni ochish
openBtn.onclick = () => {
  modal.style.display = "flex";
};

// Modalni yopish
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Tashqarisini bossang ham yopiladi
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
