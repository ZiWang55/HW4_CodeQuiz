function printHighscores() {
  // getting score from highscores logic.js location
  let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  // sorting scores by decending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    // creat li tag for the score and user name
    let liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    // display the order list in highscores div
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}
// for clearing function to remove the scores
function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;
// for when page loads
printHighscores();

// var userDetails = JSON.parse(localStorage.getItem("userDetails"))||[];
// var htmlScreen = ""
// console.log(userDetails);
// for (let i = 0; i < userDetails.length; i++) {
// htmlScreen += `<h4>User :${userDetails[i].user} ---- Score: ${userDetails[i].score}</h4>`
// // htmlScreen += userDetails[i]
// }
// document.querySelector("#highscore").innerHTML=htmlScreen;
