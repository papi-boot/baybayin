var $;

$ = require('jquery');

$('#userInput').on('keyup', function(){
  
  var text = ""
  var answer = document.getElementById("userInput").value;
  switch(answer){
  case "A":
    text = "NoteA";
    break;
  case "B":
    text = "NoteB";
    break;
  case "C":
    text = "NoteC";
    break;

  default:
    text = "I have never heard of that note";
}

document.getElementById("baybayinOutput").innerHTML = text;

});