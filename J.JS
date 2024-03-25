// تعريف الدوال لتغيير اللغة لكل بطاقة
function changeToArabic(cardId) {
  document.getElementById("card-eng-" + cardId).style.display = "none";
  document.getElementById("card-ar-" + cardId).style.display = "block";
}

function changeToEnglish(cardId) {
  document.getElementById("card-eng-" + cardId).style.display = "block";
  document.getElementById("card-ar-" + cardId).style.display = "none";
}

// تعيين event listeners لكل بطاقة
document.querySelectorAll(".card-container").forEach((container) => {
  const cardId = container.getAttribute("data-card-id");
  container
    .querySelector(".card-eng")
    .addEventListener("mouseover", () => changeToArabic(cardId));
  container
    .querySelector(".card-eng")
    .addEventListener("mouseout", () => changeToEnglish(cardId));
});
