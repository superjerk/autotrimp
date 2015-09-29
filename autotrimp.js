//Old load notification
//document.getElementById("food").appendChild(document.createTextNode("*"));

//fix paddings for id=buyCol and id=rightCol to .3%
//document.getElementById("buyCol").style.paddingRight = ".3%";
//document.getElementById("rightCol").style.paddingLeft = ".3%";

//setup talk button
document.getElementById("buildingsQueue").innerHTML = "<div style='width: 75%; float: left;'><span style='display: block;' id='noQueue'>Nothing in queue...</span><div id='queueItemsHere'></div></div><div style='color: rgb(255, 255, 255); font-size: 1.2em; text-align: center; padding-left: 23px; padding-top: 2px; padding-right: 0px;' class='col-xs-3'><div id='buildingsCollectBtn' class='workBtn pointer noselect' onClick='talk()' style='background: rgb(0, 0, 0) none repeat scroll 0% 0%;'>Talk</div></div>";

//setup talk window
document.getElementById("boneWrapper").insertAdjacentHTML('beforebegin', '<div id="autotrimp" style="position: absolute; background: rgb(153, 153, 153) none repeat scroll 0% 0%; border: 2px solid rgb(0, 0, 0); width: 50vw; margin: 10vh 25vw; z-index: 10000000; text-align: center; font-size: 1.3vw; display: none; padding: 0.2vw; color: rgb(255, 255, 255);"><div style="width: 100%; display: table; border-spacing: 0.3vw;" id="autotrimp0"><div style="display: table-row;" id="autorow"><div style="border: 1px solid white; background: rgb(84, 83, 83) none repeat scroll 0% 0%; display: table-cell; width: 20%;" id="pic"><img style="max-height: 10vw;" src="https://cloud.githubusercontent.com/assets/14081390/9893516/d9db4782-5bde-11e5-8791-91638bb6aaae.jpg"></div><div id="qs" style="border: 1px solid white; background: rgb(84, 83, 83) none repeat scroll 0% 0%; display: table-cell; width: 60%; vertical-align: top; padding: 0.5%;"><p style="text-align: left; font-size: 0.9em;" id="q">This is the question.</p><p></p><p style="font-size: 0.8em;"><a style="color: rgb(124, 202, 228); text-decoration: underline;" href="#" id="1" onclick="alert(\'clicked\')">Answer 1</a></p><p style="font-size: 0.8em;"><a style="color: rgb(124, 202, 228); text-decoration: underline;" href="#" id="2" onclick="alert(\'clicked\')">Answer 2</a></p><p style="font-size: 0.8em;"><a style="color: rgb(124, 202, 228); text-decoration: underline;" href="#" id="3" onclick="alert(\'clicked\')"></a></p></div><div id="button" style="display: table-cell; width: 20%; background: rgb(153, 153, 153) none repeat scroll 0% 0%; vertical-align: top;"><div class="boneBtn dangerColor pointer noselect" onclick="document.getElementById(\'autotrimp\').style.display = \'none\'">Close</div></div></div></div></div>');
document.getElementById("autotrimp").insertAdjacentHTML('beforeend', '<div style="width: 100%; display: table; border-spacing:0.3vw;" id="autosettings"><div style="border: 1px solid white; background: rgb(84, 83, 83) none repeat scroll 0% 0%; width: 100%; padding: .3vw;" id="autosettings0">Settings</div></div>');

//setup convo array
var conversation = [];
conversation[0] = {Q:"Hello.",R1:"What?!?!",L1:3,R2:"Oh.",L2:1};
conversation[1] = {Q:"What do you want to change?",R1:"Nothing.",L1:2,R2:"That's it.",L2:2};
conversation[2] = {Q:"Ok.",R1:"Hello?",L1:0};
conversation[3] = {Q:"Ok.",R1:"Ok.",L1:0};
updateConvo(0);

//setup options
var autobuildings = {enabled: 0, description: "Automatically buy storage buildings at 90% capacity", titles: ["Not Buying", "Buying"]};
var autoupgrades = {enabled: 0, description: "Automatically read certain upgrade books to you and the trimps", titles: ["Not Reading", "Reading"]};
var autohousing = {enabled: 0, description: "Automatically buy the most efficient housing (except wormholes and gigastations)", titles: ["Not Buying", "Buying"]};
var autoTSettings = {autobuildings, autoupgrades, autohousing};

//add buttons
var autosettings = document.getElementById("autosettings0");
var html = "";
for (var item in autoTSettings) {
  var optionItem = autoTSettings[item]; 
  var text = optionItem.titles[optionItem.enabled]; 
  html += "<div class='optionContainer'><div id='toggle" + item + "' class='noselect settingBtn settingBtn" + optionItem.enabled + "' onclick='toggleAutoSetting(\"" + item + "\")'>" + text + "</div><div class='optionItemDescription'>" + optionItem.description + "</div></div> ";}
autosettings.innerHTML = html;

//setup default settings
toggleAutoSetting(autoTSettings.autobuildings);
toggleAutoSetting(autoTSettings.autoupgrades);

//create unlearn shieldblock button
var autosettings = document.getElementById("autosettings0");
var html = "<div class='optionContainer'><div id='remove Shieldblock' class='noselect settingBtn settingBtn 0' onclick='removeShieldblock()'>Remove Shieldblock</div><div class='optionItemDescription'>If you want us trimps to stop using shields to block and use them for health again, we will.</div></div>";
//call loop
var myVar=setInterval(function () {myTimer()}, 10000);

//alert("done");

//only functions below here
function updateConvo (place) {
  document.getElementById("q").innerHTML = conversation[place].Q;
  document.getElementById("1").innerHTML = conversation[place].R1;
  document.getElementById("1").onclick = (function() { var test = conversation[place].L1; return function() {updateConvo(test + '');}})();
  if ("R2" in conversation[place]) {document.getElementById("2").innerHTML = conversation[place].R2;}
  else {document.getElementById("2").innerHTML = "";}
  if ("L2" in conversation[place]) {document.getElementById("2").onclick = (function() { var test = conversation[place].L2; return function() {updateConvo(test + '');}})();}
  if ("R3" in conversation[place]) {document.getElementById("3").innerHTML = conversation[place].R3;}
  else {document.getElementById("3").innerHTML = "";}
  if ("L3" in conversation[place]) {document.getElementById("3").onclick = (function() { var test = conversation[place].L3; return function() {updateConvo(test + '');}})();}
}

function removeShieldblock() {
	game.upgrades.Shieldblock.done = 0;	
	game.equipment.shield.blocknow = false;
	game.equipment.tooltip = "A big, wooden shield. Adds $healthCalculated$ health to each soldier per level.";
	document.getElemendById("remove Shieldblock").class = "noselect settingBtn settingBtn 1";
}

function toggleAutoSetting(setting){
	var autoOption = autoTSettings[setting];
	var toggles = autoOption.titles.length;
	if (toggles == 2)	autoOption.enabled = (autoOption.enabled) ? 0 : 1;
	else {
		autoOption.enabled++;
		if (autoOption.enabled >= toggles) menuOption.enabled = 0;
	}
	if (autoOption.onToggle) autoOption.onToggle();
	var menuElem = document.getElementById("toggle" + setting);
	menuElem.innerHTML = autoOption.titles[autoOption.enabled];
	menuElem.className = "";
	menuElem.className = "settingBtn settingBtn" + autoOption.enabled;
}

function talk() {
  document.getElementById("autotrimp").style.display = "block";
}

function myTimer() {
  var food = game.resources.food.owned / game.resources.food.max;
  var wood = game.resources.wood.owned / game.resources.wood.max;
  var metal = game.resources.metal.owned / game.resources.metal.max;

//Buy resource buildings
if (autoTSettings.autobuildings.enabled == 1) {
  if (food > .9) {
    buyBuilding('Barn');
  }
  if (wood > .9) {
    buyBuilding('Shed');
  }
  if (metal > .9) {
    buyBuilding('Forge');
  }
}
//Buy speed upgrades
  autotrimpupgrades = ["Egg", "UberHut", "UberHouse", "UberMansion", "UberHotel", "UberResort", "Bounty", "Efficiency", "TrainTacular", "Gymystic", "Megascience", "Megaminer", "Megalumber", "Megafarming", "Speedfarming", "Speedlumber", "Speedminer", "Speedscience", "Potency"]
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


