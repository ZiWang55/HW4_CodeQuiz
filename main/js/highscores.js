function printHighscores() {
    let highscores = JSON.parse(widow.localStorage.getItem("highscores")) || [];

    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function(score) {
        let liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;


        var olEl = document.getElementsById("highscores");
        olEl.appendChild(liTag);
    });
        
    }

    function clearHighscores() {
        window.localStorage.removeItem("highscores");
        window.location.reload();
    }

    document.getElementById("clear").onclick= clearHighscores;

    printHighscores();



// var userDetails = JSON.parse(localStorage.getItem("userDetails"))||[];
// var htmlScreen = ""
// console.log(userDetails);
// for (let i = 0; i < userDetails.length; i++) {
// htmlScreen += `<h4>User :${userDetails[i].user} ---- Score: ${userDetails[i].score}</h4>`
// // htmlScreen += userDetails[i]
// }
// document.querySelector("#highscore").innerHTML=htmlScreen;
