console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "Milestone: 500 Followers";
const text =
  "Thank you for your support and interest! Today I reached a new Milestone: 500 Followers. Thanks a lot!";
let n_likes = 12;
const commentCreator = "Andreas K.";
const isReported = false;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(title);
console.log(text);
console.log(n_likes);
console.log(commentCreator);
console.log(isReported);

n_likes++;
console.log(n_likes);
// --^-- write your code here --^--
