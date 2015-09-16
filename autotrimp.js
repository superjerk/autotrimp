//Old load notification
//document.getElementById("food").appendChild(document.createTextNode("*"));

//fix paddings for id=buyCol and id=rightCol to .3%
document.getElementById("buyCol").style.paddingRight = ".3%";
document.getElementById("rightCol").style.paddingLeft = ".3%";

//setup talk button
document.getElementById("buildingsQueue").innerHTML = "<div style='width: 75%; float: left;'><span style='display: block;' id='noQueue'>Nothing in queue...</span><div id='queueItemsHere'></div></div><div style='color: rgb(255, 255, 255); font-size: 1.2em; text-align: center; padding-left: 23px; padding-top: 2px; padding-right: 0px;' class='col-xs-3'><div id='buildingsCollectBtn' class='workBtn pointer noselect' onClick='talk()' style='background: rgb(0, 0, 0) none repeat scroll 0% 0%;'>Talk</div></div>";

//setup talk window
document.getElementById("boneWrapper").insertAdjacentHTML('beforebegin', '<div id="autotrimp" style="position: absolute; background: rgb(153, 153, 153) none repeat scroll 0% 0%; border: 2px solid rgb(0, 0, 0); width: 50vw; margin: 10vh 25vw; z-index: 10000000; text-align: center; font-size: 1.3vw; display: none; padding: 0.2vw; color: rgb(255, 255, 255);"><div style="width: 100%; display: table; border-spacing: 0.3vw;" id="autotrimp0"><div style="display: table-row;" id="autorow"><div style="border: 1px solid white; background: rgb(51, 51, 51) none repeat scroll 0% 0%; display: table-cell; width: 20%;" id="pic"><img style="max-height: 10vw;" src="https://cloud.githubusercontent.com/assets/14081390/9893516/d9db4782-5bde-11e5-8791-91638bb6aaae.jpg"></div><div id="qs" style="border: 1px solid white; background: rgb(51, 51, 51) none repeat scroll 0% 0%; display: table-cell; width: 60%; vertical-align: top; padding: 0.5%;"><p style="text-align: left; font-size: 0.8em;" id="q">This is the question.</p><p style="font-size: 0.8em;"><a href="#" id="1" onclick="alert(\'clicked\')">Answer 1</a></p><p style="font-size: 0.8em;"><a href="#" id="2" onclick="alert(\'clicked\')">Answer 2</a></p><p style="font-size: 0.8em;"></p></div><div id="button" style="display: table-cell; width: 20%; background: rgb(153, 153, 153) none repeat scroll 0% 0%; vertical-align: top;"><div class="boneBtn dangerColor pointer noselect" onclick="document.getElementById(\'autotrimp\').style.display = \'none\'">Close</div></div></div></div></div>');

//setup convo array
var conversation = [];
conversation[0] = {Q:"Hello.",R1:"What?!?!",L1:3,R2:"Oh.",L2:1};
conversation[1] = {Q:"What do you want to change?",R1:"Nothing.",L1:2,R2:"That's it.",L2:2};
conversation[2] = {Q:"Ok.",R1:"Hello?",L1:0};

//call loop
var myVar=setInterval(function () {myTimer()}, 10000);


//only functions below here
function updateConvo (place) {
  document.getElementById("q").innerHTML = conversation[place].Q;
  document.getElementById("1").innerHTML = conversation[place].R1;
  document.getElementById("1").onclick = updateConvo(conversation[place].L1);
  document.getElementById("2").innerHTML = conversation[place].R2;
  document.getElementById("2").onclick = updateConvo(conversation[place].L2);
  document.getElementById("3").innerHTML = conversation[place].R3;
  document.getElementById("3").onclick = updateConvo(conversation[place].L3);
}

function talk() {
  document.getElementById("autotrimp").style.display = "block";
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


