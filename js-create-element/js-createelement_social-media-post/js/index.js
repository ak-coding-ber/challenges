console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
newPostSection = document.createElement("section");
newPostSection.classList.add("post");

newPostText = document.createElement("p");
newPostText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newPostText.classList.add("post__content");

newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

newPostCreatedByInfo = document.createElement("span");
newPostCreatedByInfo.classList.add("post__username");
newPostCreatedByInfo.textContent = "@username";

newPostLikeButton = document.createElement("button");
newPostLikeButton.classList.add("post__button");
newPostLikeButton.textContent = "♥ Like";
newPostLikeButton.addEventListener("click", handleLikeButtonClick);

newPostFooter.append(newPostCreatedByInfo, newPostLikeButton);
newPostSection.append(newPostText, newPostFooter);

document.body.append(newPostSection);
