// Preloader function
const wholePage = document.querySelector(".whole-page");
const preloader = document.querySelector(".preloader");
window.onload = setTimeout(() => {
  preloader.style.display = "none";
  wholePage.style.display = "block";
}, 1000);

// Scalability function
const body = document.querySelector("body");
let scaleFactor;
function scalability() {
  scaleFactor = body.clientWidth / wholePage.clientWidth;
  if (scaleFactor > 1) {
    return;
  }
  wholePage.style.transform = `scale(${scaleFactor})`;
}
scalability();
window.addEventListener("resize", () => {
  scalability();
});

// Close button function
let addCloseButton = (parentElement) => {
  let closeButton = document.createElement("span");
  closeButton.className = "close-button";
  let closeButtonText = document.createTextNode("X");
  closeButton.appendChild(closeButtonText);
  parentElement.appendChild(closeButton);
};

// Create help popup
document.querySelector(".image-2").addEventListener("click", () => {
  container.style.opacity = "0.3";
  let popupHelp = document.createElement("div");
  popupHelp.className = "popup-help";
  let p = document.createElement("p");
  let pText = document.createTextNode("Help content goes here.");
  p.appendChild(pText);
  popupHelp.appendChild(p);
  addCloseButton(popupHelp);
  document.body.appendChild(popupHelp);
});

// Create dummy image popup
document.querySelector(".image-1").addEventListener("click", () => {
  container.style.opacity = "0.3";
  let popupContainer = document.createElement("div");
  popupContainer.className = "popup-container";
  let popupImage = document.createElement("div");
  popupImage.className = "popup-image";
  let image = document.createElement("img");
  image.src = "./assets/dummy.jpg";
  popupImage.appendChild(image);
  popupContainer.appendChild(popupImage);
  addCloseButton(popupContainer);
  document.body.appendChild(popupContainer);
});

// Close the popups
document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    container.style.opacity = "1";
  }
});

// Matching functionality
document.querySelectorAll(".img-parent").forEach((image) => {
  image.addEventListener("click", (e) => {
    let out = e.target.className;
    document.querySelectorAll(".p-parent").forEach((p) => {
      p.addEventListener("click", (e) => {
        if (e.target.textContent === out) {
          document.getElementById("correct").play();
        } else {
          document.getElementById("incorrect").play();
          const image = e.target.nextElementSibling;
          image.style.display = "block";
          let isVisible = true;
          const intervalId = setInterval(() => {
            if (isVisible) {
              image.style.display = "none";
            } else {
              image.style.display = "block";
            }
            isVisible = !isVisible;
          }, 1000);
          setTimeout(() => {
            clearInterval(intervalId);
            image.style.display = "none";
          }, 3000);
        }
      });
    });
  });
});
