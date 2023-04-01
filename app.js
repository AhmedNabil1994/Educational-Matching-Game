// Preloader function
const container = document.querySelector(".container");
const preloader = document.querySelector(".preloader");
window.onload = setTimeout(() => {
  preloader.style.display = "none";
  container.style.display = "block";
}, 1000);

let addCloseButton = (parentElement)=>{
  let closeButton = document.createElement("span");
  closeButton.className = "close-button";
  let closeButtonText = document.createTextNode("X");
  closeButton.appendChild(closeButtonText);
  parentElement.appendChild(closeButton);
}
// Create help popup
document.querySelector(".image-2").addEventListener("click", () => {
  container.style.opacity = "0.3";
  let popupHelp = document.createElement("div");
  popupHelp.className = "popup-help";
  let p = document.createElement("p");
  let pText = document.createTextNode("Help content goes here.");
  p.appendChild(pText);
  popupHelp.appendChild(p);
  addCloseButton(popupHelp)
  document.body.appendChild(popupHelp);
});

// Create dummy image popup
document.querySelector(".image-1").addEventListener("click", () => {
  container.style.opacity = "0.3";
  let popupImage = document.createElement("div");
  popupImage.className = "popup-image";
  let image = document.createElement("img");
  image.src = "./assets/dummy.jpg";
  popupImage.appendChild(image);
  addCloseButton(popupImage)
  document.body.appendChild(popupImage);
});

// Close the popups
document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    container.style.opacity = "1";
  }
});
