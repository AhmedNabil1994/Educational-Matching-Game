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
function scalabilityHandler(e) {
  scaleFactor = body.clientWidth / wholePage.clientWidth;
  wholePage.style.transform = `scale(${scaleFactor > 1 ? 1 : scaleFactor})`;
}
window.addEventListener("resize", scalabilityHandler);
window.addEventListener("load", scalabilityHandler);

// Close button function
let addCloseButton = (parentElement) => {
  let closeButton = document.createElement("span");
  closeButton.className = "close-button";
  let closeButtonText = document.createTextNode("X");
  closeButton.appendChild(closeButtonText);
  parentElement.appendChild(closeButton);
};

// Opacity change function
function changePageOpacity() {
  document.querySelector(".section-1").style.opacity = "0.3";
  document.querySelector(".section-2").style.opacity = "0.3";
  document.querySelector(".section-3").style.opacity = "0.3";
}

// Create help popup
document.querySelector(".image-2").addEventListener("click", () => {
  changePageOpacity();
  let popupHelp = document.createElement("div");
  popupHelp.className = "popup-help";
  let p = document.createElement("p");
  let pText = document.createTextNode("Help content goes here.");
  p.appendChild(pText);
  popupHelp.appendChild(p);
  addCloseButton(popupHelp);
  wholePage.appendChild(popupHelp);
});

// Create dummy image popup
document.querySelector(".image-1").addEventListener("click", () => {
  changePageOpacity();
  let popupContainer = document.createElement("div");
  popupContainer.className = "popup-container";
  let popupImage = document.createElement("div");
  popupImage.className = "popup-image";
  let image = document.createElement("img");
  image.src = "./assets/dummy.jpg";
  popupImage.appendChild(image);
  popupContainer.appendChild(popupImage);
  addCloseButton(popupContainer);
  wholePage.appendChild(popupContainer);
});

// Close the popups
document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".section-1").style.opacity = "1";
    document.querySelector(".section-2").style.opacity = "1";
    document.querySelector(".section-3").style.opacity = "1";
  }
});

// Matching functionality
const imageDivs = document.querySelectorAll(".image");
const wordDivs = document.querySelectorAll(".word");
let imageName = "";
let selectedImage = "";
// Image clicking
imageDivs.forEach((imageDiv) => {
  imageDiv.addEventListener("click", (e) => {
    selectedImage = imageDiv;
    imageName = imageDiv.querySelector("img").className;
    // Remove all clicked classes from all bullets
    imageDivs.forEach((div) => {
      div.querySelector(".bullet").classList.remove("clicked");
    });
    // Add clicked class to the current bullet
    imageDiv.querySelector(".bullet").classList.add("clicked");
  });
});
// Word clicking
wordDivs.forEach((wordDiv) => {
  wordDiv.addEventListener("click", (e) => {
    imageDivs.forEach((div) => {
      if (div.querySelector(".bullet").classList.contains("clicked")) {
        matching(wordDiv, selectedImage);
      }
    });
  });
});

// Matching function
function matching(wordDiv, imageDiv) {
  // Case of not matching
  if (imageName !== wordDiv.querySelector("span").textContent) {
    document.getElementById("incorrect").play();
    const crossMarkImage = wordDiv.querySelector(".cross-mark");
    // Image and image bullet show and hide
    crossMarkImage.style.display = "block";
    wordDiv.querySelector(".bullet").classList.add("clicked");
    const intervalId = setInterval(() => {}, 1000);
    setTimeout(() => {
      clearInterval(intervalId);
      crossMarkImage.style.display = "none";
      wordDiv.querySelector(".bullet").classList.remove("clicked");
    }, 2000);
  } else {
    document.getElementById("correct").play();
    imageDiv.querySelector(".bullet").classList.remove("clicked");
    wordDiv.querySelector(".bullet").classList.remove("clicked");
    imageDiv.style.opacity = "0.3";
    wordDiv.style.opacity = "0.3";
    imageDiv.style.pointerEvents = "none";
    wordDiv.style.pointerEvents = "none";
    document.getElementById(imageName).style.display = "block";
  }
}

// Reset function
document.querySelector(".replay").addEventListener("click", () => {
  document.querySelectorAll(".bullet").forEach((bullet) => {
    bullet.classList.remove("clicked");
  });
  imageDivs.forEach((div) => {
    div.style.opacity = "1";
    div.style.pointerEvents = "auto";
  });
  wordDivs.forEach((div) => {
    div.style.opacity = "1";
    div.style.pointerEvents = "auto";
  });
  document.querySelectorAll("line").forEach((line) => {
    line.style.display = "none";
  });
});

// Show amswer function
document.querySelector(".showAnswer").addEventListener("click", () => {
  document.querySelectorAll(".bullet").forEach((bullet) => {
    bullet.classList.remove("clicked");
  });
  imageDivs.forEach((div) => {
    div.style.opacity = "0.3";
    div.style.pointerEvents = "none";
  });
  wordDivs.forEach((div) => {
    div.style.opacity = "0.3";
    div.style.pointerEvents = "none";
  });
  document.querySelectorAll("line").forEach((line) => {
    line.style.display = "block";
  });
});
