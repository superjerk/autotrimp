//Old load notification
//document.getElementById("food").appendChild(document.createTextNode("*"));

//fix paddings for id=buyCol and id=rightCol to .3%
document.getElementById("buyCol").style.paddingRight = ".3%";
document.getElementById("rightCol").style.paddingLeft = ".3%";

//setup talk button
document.getElementById("buildingsQueue").innerHTML = "<div style='width: 75%; float: left;'><span style='display: block;' id='noQueue'>Nothing in queue...</span><div id='queueItemsHere'></div></div><div style='color: rgb(255, 255, 255); font-size: 1.2em; text-align: center; padding-left: 23px; padding-top: 2px; padding-right: 0px;' class='col-xs-3'><div id='buildingsCollectBtn' class='workBtn pointer noselect' onClick='talk()' style='background: rgb(0, 0, 0) none repeat scroll 0% 0%;'>Talk</div></div>"

//call loop
var myVar=setInterval(function () {myTimer()}, 10000);

function talk() {
  alert("talk");
}

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
  autotrimpupgrades = ["Egg", "UberHut", "UberHouse", "UberMansion", "UberHotel", "UberResort", "Bounty", "Efficiency", "TrainTacular", "Gymystic", "Speedfarming", "Speedlumber", "Speedminer", "Speedscience", "Potency"]
  for (var key in game.upgrades) {
    if (autotrimpupgrades.indexOf(key) != -1) { 
      if (game.upgrades[key].allowed > game.upgrades[key].done) {
        buyUpgrade(key);
      }
    }
  }

//Buy coordination

  if (game.upgrades.Coordination.allowed > game.upgrades.Coordination.done) {
    if ((game.resources.trimps.realMax() > (game.resources.trimps.maxSoldiers * 3))) {
      buyUpgrade('Coordination');
    }
  }
  //clearInterval(myVar);
}//end loop


