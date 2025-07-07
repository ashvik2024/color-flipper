let colorCode = document.getElementById("colorCode");
let changeColor = document.getElementById("changeColor");
let navCopyBtn = document.getElementById("navCopyBtn");
let mainCopyBtn = document.getElementById("mainCopyBtn");

// Change Color Button
changeColor.addEventListener("click", () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  randomColor = "#" + randomColor.padStart(6, "0");

  document.body.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
});

// Copy to Clipboard (both buttons)
function copyColor(btn) {
  navigator.clipboard.writeText(colorCode.textContent);
  btn.textContent = "Copied!";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 1000);
}

navCopyBtn.addEventListener("click", () => copyColor(navCopyBtn));
mainCopyBtn.addEventListener("click", () => copyColor(mainCopyBtn));
