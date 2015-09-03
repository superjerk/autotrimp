document.getElementById("food").appendChild(document.createTextNode("*"));
document.getElementById("wood").appendChild(document.createTextNode("*"));
document.getElementById("metal").appendChild(document.createTextNode("*"));
var myVar=setInterval(function () {myTimer()}, 5000);

function myTimer() {
  var food = game.resources.food.owned / game.resources.food.max;
  var wood = game.resources.wood.owned / game.resources.wood.max;
  var metal = game.resources.metal.owned / game.resources.metal.max;
  alert(food);
  alert(wood);
  alert(metal);

  clearInterval(myVar);
}

