const colours = ["#E4E400", "#FFA500", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8F00FF"];

window.addEventListener("mousedown", (e) => {
  const colour = colours.shift();
  document.documentElement.style.setProperty("--highlight-colour", colour);
  colours.push(colour);
});

var output = ""

//..DATE & TIME..\\

function fullDate()
{
  str = "";

  var minutes = new Array(00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59);
  var hours = new Array(00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23);
  var seconds = new Array(00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59);

  var myNumber = 7;
  var formattedNumber = ("0" + myNumber).slice(-2);

  var days = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
  var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

  var now = new Date();

  str += days[now.getDay()] + " " + months[now.getMonth()] + " " + now.getDate() + " " + now.getFullYear() + " - " + hours[now.getHours()] +":" + minutes[now.getMinutes()] + ":" + seconds[now.getSeconds()].toString();
}
setInterval(fullDate, 1);

//..COMMENTS..\\

function unableToComment() {

  if document.getElementByID("commentInput").innerText = "" or " " in textbox: Don't do below.
  // Make a variables with a div, p tag, and text inside it
  const commentDiv = document.createElement("div"); // Make a div
  const commentHeader = document.createElement("p") // Make a p for the header
  const commentText = document.createElement("p") // Make a p for the text
  const commentHeaderText = document.createTextNode("Unknown User - "+str); // Header Text
  const commentBodyText = document.createTextNode("UNABLE TO POST.\t PLEASE SIGN IN." + str); // Comment Text

  const completeCommentHeader = commentHeader.appendChild(commentHeaderText); // put the comment header in the p.
  const completeCommentText = commentText.appendChild(commentBodyText); // put the comment text in the p.
  commentText.className += "commentBox";
  //|..........|\\
  var completeCommentDiv = commentDiv.appendChild(commentHeader); // put the 'p's in the div
  completeCommentDiv = commentDiv.appendChild(commentHeader); // put the 'p's in the div

  const outerCommentDiv = document.getElementById("comments");
  outerCommentDiv.appendChild(completeCommentDiv);

}

// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// https://www.codegrepper.com/code-examples/javascript/insert+inside+div+js
// https://stackoverflow.com/questions/36798005/append-multiple-items-in-javascript
//https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript


// Mini navbar.