console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(numberOfStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  let filledStars = numberOfStars;

  for (i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    if (i <= filledStars) {
      img.setAttribute("src", "./assets/star-filled.svg");
    } else {
      img.setAttribute("src", "./assets/star-empty.svg");
    }

    starContainer.append(img);
  }
  //--^-- your code here --^--
}

renderStars(3);
