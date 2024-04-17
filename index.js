
// document.querySelector("button").addEventListener("click", handleClick); // THis will output when we click the selected object
// document.querySelector("button").addEventListener("click", handleClick()); // THis will output without our click the selected object
// document.querySelector(".set").addEventListener("click", function handleClick(){
//   alert("I got clicked!");
// });


// document.querySelector(".set").addEventListener("click", handleClick); // But this isn't good way


var numOfDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttoninnerhtml = this.innerHTML;
    makesound(buttoninnerhtml)
    buttonAnimation(buttoninnerhtml)
    console.log(buttoninnerhtml);

  });
}


// for (var i = 0; i < numOfDrum; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function {
//     alert("I got clicked!");
//   });
// }
/*
function handleClick(){
  // console.log(this);
  // console.log(this.innerHTML);
  console.log(this.style.color = "white");
}
*/



document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimation(event.key)
  }
)


function makesound(key){
  switch (key) {
      case "w":
      var audio = new Audio('./sounds/snare.mp3');

          audio.play();
          break;

      case "a":
      var audio = new Audio('./sounds/kick-bass.mp3');

              audio.play();
              break;

      case "s":
      var audio = new Audio('./sounds/tom-1.mp3');

              audio.play();
              break;

      case "d":
              var audio = new Audio('./sounds/tom-4.mp3');
              audio.play();
              break;

       case "j":
       var audio = new Audio('./sounds/tom-2.mp3');

          audio.play();
          break;

      case "k":
          var audio = new Audio('./sounds/crash.mp3');
                  audio.play();
                  break;

      case "l":
      var audio = new Audio('./sounds/tom-3.mp3');

           audio.play();
                  break;
      default:
          break;
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
      activeButton.classList.remove("pressed");
  }, 250);
}
