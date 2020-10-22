var userDetails = JSON.parse(localStorage.getItem("userDetails"))||[];
var htmlScreen = ""
console.log(userDetails);
for (let i = 0; i < userDetails.length; i++) {
htmlScreen += `<h4>User :${userDetails[i].user} ---- Score: ${userDetails[i].score}</h4>`
// htmlScreen += userDetails[i]
}
document.querySelector("#highscore").innerHTML=htmlScreen;
