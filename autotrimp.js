var myVar=setInterval(function () {myTimer()}, 3000);

function myTimer() {
  var temp = game.resources.wood.owned / game.resources.wood.max;
    if (temp < .5) {
      alert(temp);
    }
}

