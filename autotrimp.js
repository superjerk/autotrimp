document.getElementById("food").appendChild(document.createTextNode("*"));
document.getElementById("wood").appendChild(document.createTextNode("*"));
document.getElementById("metal").appendChild(document.createTextNode("*"));
var myVar=setInterval(function () {myTimer()}, 10000);

function myTimer() {
  var food = game.resources.food.owned / game.resources.food.max;
  var wood = game.resources.wood.owned / game.resources.wood.max;
  var metal = game.resources.metal.owned / game.resources.metal.max;

//Buy resource buildings

  if (food > .8) {
    buyBuilding('Barn');
  }
  if (wood > .8) {
    buyBuilding('Shed');
  }
  if (metal > .8) {
    buyBuilding('Forge');
  }

//Buy speed upgrades

  if (game.upgrades.Speedfarming.allowed > game.upgrades.Speedfarming.done) {
     buyUpgrade('Speedfarming');
  }
  if (game.upgrades.Speedlumber.allowed > game.upgrades.Speedlumber.done) {
     buyUpgrade('Speedlumber');
  }
  if (game.upgrades.Speedminer.allowed > game.upgrades.Speedminer.done) {
     buyUpgrade('Speedminer');
  }
  if (game.upgrades.Speedscience.allowed > game.upgrades.Speedscience.done) {
   buyUpgrade('Speedscience');
  }

//Buy coordination

  if (game.upgrades.Coordination.allowed > game.upgrades.Coordination.done) {
    if ((game.resources.trimps.realMax() > (game.resources.trimps.maxSoldiers * 3))) {
      buyUpgrade('Coordination');
    }
  }
  //clearInterval(myVar);
}

