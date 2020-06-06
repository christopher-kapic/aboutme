let morebutton = document.getElementById("moreclick");

// morebutton.onclick = function () {
//   let more = document.getElementsByClassName("more");
//   more.style["display"] = "inline";
// };

function showmore() {
  let more = document.getElementById("more");
  more.innerHTML =
    "<br />In order to fix this, I created an alarm clock that opens a YouTube video from a list of links in a Google Spreadsheet. This allows me to hear a different song every day, and I can also let others contribute to the list of songs. Because of this, sometimes I am surprised with a song that I was absolutely <i>not</i> expecting!";
  morebutton.innerHTML = "<br />";
}
