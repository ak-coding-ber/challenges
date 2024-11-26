console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const yPositionWindow = window.scrollY;
  const heightWindow = window.innerHeight;
  const heightWebsite = document.body.clientHeight;

  //available space to scroll
  const scrollHeight = heightWebsite - heightWindow;

  //calculate how much percent of all available scrolling space the user has scrolled down
  const percentageScrolled = (window.scrollY * 100) / scrollHeight;
  // need to add % here otherwise it's not working
  return percentageScrolled + "%";
}

document.addEventListener("scroll", () => {
  progressBar.style.width = calculateScrollPercentage();
});
