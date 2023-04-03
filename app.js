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
// scalability();
window.addEventListener("resize", () => {
  scalability();
});
window.addEventListener("load", () => {
  // scalability();
});

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
// document.querySelectorAll(".img-parent").forEach((image) => {
//   image.addEventListener("click", (e) => {
//     let out = e.target.className;
//     document.querySelectorAll(".p-parent").forEach((p) => {
//       p.addEventListener("click", (e) => {
//         if (e.target.textContent === out) {
//           document.getElementById("correct").play();
//         } else {
//           document.getElementById("incorrect").play();
//           const image = e.target.nextElementSibling;
//           image.style.display = "block";
//           let isVisible = true;
//           const intervalId = setInterval(() => {
//             if (isVisible) {
//               image.style.display = "none";
//             } else {
//               image.style.display = "block";
//             }
//             isVisible = !isVisible;
//           }, 1000);
//           setTimeout(() => {
//             clearInterval(intervalId);
//             image.style.display = "none";
//           }, 3000);
//         }
//       });
//     });
//   });
// });





const imageDivs = document.querySelectorAll(".image");
const wordDivs = document.querySelectorAll(".word");

imageDivs.forEach((imageDiv) => {
  imageDiv.addEventListener("click", (e) => {
    let imageName = imageDiv.querySelector("img").className;
    imageDivs.forEach((div) => {
      div.querySelector(".bullet").classList.remove("clicked");
    });
    imageDiv.querySelector(".bullet").classList.add("clicked");
    // when you click the word
    wordDivs.forEach((wordDiv) => {
      wordDiv.addEventListener("click", (e) => {
        if (imageName !== wordDiv.querySelector("span").textContent) {
          document.getElementById("incorrect").play();
          const crossMarkImage = wordDiv.querySelector(".cross-mark");
          crossMarkImage.style.display = "block";
          let isVisible = true;
          const intervalId = setInterval(() => {}, 1000);
          setTimeout(() => {
            clearInterval(intervalId);
            crossMarkImage.style.display = "none";
            wordDiv.querySelector(".bullet").classList.remove("clicked");
          }, 2000);
        }
        wordDivs.forEach((div) => {
          div.querySelector(".bullet").classList.remove("clicked");
        });
        wordDiv.querySelector(".bullet").classList.add("clicked");
      });
    });
  });
});
