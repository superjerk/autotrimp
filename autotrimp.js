//Old load notification
//document.getElementById("food").appendChild(document.createTextNode("*"));

//Line things up, OCD FTW!
//fixed !! document.getElementById("buyCol").style.paddingRight = ".3%";
//fixed !!document.getElementById("rightCol").style.paddingLeft = ".3%";
document.getElementById("helium").style.height = "32.4%";

//setup talk button
document.getElementById("buildingsQueue").innerHTML = "<div style='width: 75%; float: left;'><span style='display: block;' id='noQueue'>Nothing in queue...</span><div id='queueItemsHere'></div></div><div style='color: rgb(255, 255, 255); font-size: 1.2em; text-align: center; padding-left: 22px; padding-top: 2px; padding-right: 0px;' class='col-xs-3'><div id='buildingsCollectBtn' class='workBtn pointer noselect' onClick='talk()' style='background: rgb(0, 0, 0) none repeat scroll 0% 0%;'>Talk</div></div>";

//setup talk window
document.getElementById("boneWrapper").insertAdjacentHTML('beforebegin', '<div id="autotrimp" style="position: absolute; background: rgb(153, 153, 153) none repeat scroll 0% 0%; border: 2px solid rgb(0, 0, 0); width: 64vw; margin: 10vh 18vw; z-index: 10000000; text-align: center; font-size: 1.3vw; display: none; padding: 0.2vw; color: rgb(255, 255, 255);"><div style="width: 100%; display: table; border-spacing: 0.3vw;" id="autotrimp0"><div style="display: table-row;" id="autorow"><div style="border: 1px solid white; background: rgb(84, 83, 83) none repeat scroll 0% 0%; display: table-cell; width: 20%;" id="pic"><img style="max-height: 13vw;" src="https://cloud.githubusercontent.com/assets/14081390/9893516/d9db4782-5bde-11e5-8791-91638bb6aaae.jpg"></div><div id="qs" style="border: 1px solid white; background: rgb(84, 83, 83) none repeat scroll 0% 0%; display: table-cell; width: 60%; vertical-align: top; padding: 0.5%;"><p style="text-align: left; font-size: 0.9em;" id="q">This is the question.</p><p></p><p style="font-size: 0.8em;"><a style="color: rgb(124, 202, 228); text-decoration: underline;" href="#" id="1" onclick="alert(\'clicked\')">Answer 1</a></p><p style="font-size: 0.8em;"><a style="color: rgb(124, 202, 228); text-decoration: underline;" href="#" id="2" onclick="alert(\'clicked\')">Answer 2</a></p><p style="font-size: 0.8em;"><a style="color: rgb(124, 202, 228); text-decoration: underline;" href="#" id="3" onclick="alert(\'clicked\')"></a></p></div><div id="button" style="display: table-cell; width: 20%; background: rgb(153, 153, 153) none repeat scroll 0% 0%; vertical-align: top;"><div class="boneBtn dangerColor pointer noselect" onclick="document.getElementById(\'autotrimp\').style.display = \'none\'">Close</div></div></div></div></div>');
document.getElementById("autotrimp").insertAdjacentHTML('beforeend', '<div style="width: 100%; display: table; border-spacing:0.3vw;" id="autosettings"><div style="border: 1px solid white; background: rgb(84, 83, 83) none repeat scroll 0% 0%; width: 100%; padding: .3vw;" id="autosettings0">Settings</div></div>');

//setup convo array
var conversation = [];
conversation[0] = {Q:"Hello.",R1:"What?!?!",L1:3,R2:"Oh.",L2:1};
conversation[1] = {Q:"What do you want to change? Click the buttons below.",R1:"Nothing.",L1:2,R2:"That's it.",L2:2};
conversation[2] = {Q:"Ok.",R1:"Hello?",L1:0};
conversation[3] = {Q:"I figured you'd find me eventually. Before you ask...yes, I can talk. No, none of the other trimps seem to be able to.",R1:"What else do you know?",L1:4};
conversation[4] = {Q:"Not much more than you, unfortunately. Whatever brought you here is also what made me...smarter than the average trimp. Before you got here, I wasn't anymore self-aware than any other trimp.",R1:"What are we doing here?",L1:5};
conversation[5] = {Q:"I don't know--I don't even know where <b>here</b> is. This is all new to me too.",R1:"Well, what do you suggest we do?",L1:6};
conversation[6] = {Q:"Keep going. Maybe we'll find some answers. Since we're friends now, I've picked up a few tricks that will help us.",R1:"Like what?",L1:7};
conversation[7] = {Q:"I can tell the trimps to build storage buildings before they get full. I can also buy Gyms and Tributes as soon as we can afford them, and read some upgrade books to the trimps when you're not available.",R1:"Which upgrade books?",L1:8, R2:"What else?", L2:9};
conversation[8] = {Q:"The upgrades I can read are: Speedfarming, Speedlumber, Speedminer, Speedscience, (all the Mega versions too), Efficiency, TrainTacular, Gymystic, Potency, Egg, UberHut, UberHouse, UberMansion, UberHotel, UberResort, and Bounty",R1:"Ok, cool",L1:9};
conversation[9] = {Q:"I can also highlight the housing that makes the most use of our gems, and I can <b>unteach</b> Shieldblock.",R1:"Why unteach Shieldblock?",L1:10, R2:"Anything else?",L2:11};
conversation[10] = {Q:"As we learn more and more Gymystic, our shields becomes less and less useful for blocking. The extra health comes in real handy post z60.",R1:"I get it.",L1:11};
conversation[11] = {Q:"I can also help you respec all the portal perks. We get one automatically, but sometimes you need a second, or a third, or whatever.",R1:"Ok.",L1:12};
conversation[12] = {Q:"That's it for now, but I'll let you know if I pick up any more tricks. Use the buttons below to let me know what you'd like done.",R1:"Ok.",L1:2};
updateConvo(0);

//setup options
var autobuildings = {enabled: 0, description: "Automatically buy storage buildings when they're 90% full", titles: ["Not Buying", "Buying"]};
var autoupgrades = {enabled: 0, description: "Automatically read certain upgrade books to you and the trimps", titles: ["Not Reading", "Reading"]};
var autohousing = {enabled: 0, description: "Highlight the most gem-efficient housing in green", titles: ["Not Highlighting", "Highlighting"]};
var autotributes = {enabled: 0, description: "Automatically buy tributes when we can afford them", titles: ["Not Buying", "Buying"]};
var autogyms = {enabled: 0, description: "Automatically buy gyms when we can afford them", titles: ["Not Buying", "Buying"]};
var autoTSettings = {autobuildings, autotributes, autogyms, autoupgrades, autohousing};

//add buttons
var autosettings = document.getElementById("autosettings0");
var html = "";
for (var item in autoTSettings) {
  var optionItem = autoTSettings[item]; 
  var text = optionItem.titles[optionItem.enabled]; 
  html += "<div class='optionContainer'><div id='toggle" + item + "' class='noselect settingBtn settingBtn" + optionItem.enabled + "' onclick='toggleAutoSetting(\"" + item + "\")'>" + text + "</div><div class='optionItemDescription'>" + optionItem.description + "</div></div> ";}
autosettings.innerHTML = html;

//setup default settings
toggleAutoSetting("autobuildings");
toggleAutoSetting("autoupgrades");

//create unlearn shieldblock button
autosettings.insertAdjacentHTML('beforeend', "<div class='optionContainer'><div id='remove Shieldblock' class='noselect settingBtn btn-warning' onclick='removeShieldblock()'>Unlearn Shieldblock</div><div class='optionItemDescription'>We'll stop teaching the trimps to use shields to block and we'll use them for health again</div></div>");
autosettings.insertAdjacentHTML('beforeend', "<div class='optionContainer'><div id='add Respec' class='noselect settingBtn btn-warning' onclick='addRespec()'>Add a Respec</div><div class='optionItemDescription'>If you've already used your respec but want to do it again anyway, let me know.</div></div>");

//call loop
var myVar=setInterval(function () {myTimer()}, 10000);
var gobj = {};
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
	if (game.upgrades.Shieldblock.done == 1) {
		prestigeEquipment("Shield", false, true);
		game.equipment.Shield.blockNow = false;
		game.equipment.Shield.tooltip = "A big, wooden shield. Adds $healthCalculated$ health to each soldier per level.";
		levelEquipment("Shield", 1);
		game.upgrades.Shieldblock.done = 0;	
	}
}

function addRespec() {
	if (game.global.canRespecPerks == false) {
		game.global.canRespecPerks = true;
	}
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
    message("Bought us another barn. It's red...hooray.", "Loot", "*eye2", "exotic");
  }
  if (wood > .9) {
    buyBuilding('Shed');
    message("Bought us another shed. It's very shed-like", "Loot", "*eye2", "exotic");
  }
  if (metal > .9) {
    buyBuilding('Forge');
    message("Bought us another forge. It's a good forge.", "Loot", "*eye2", "exotic")
  }
}

//Buy tributes
if (autoTSettings.autotributes.enabled == 1) {
	if (getBuildingItemPrice(game.buildings.Tribute, "food", false) <= game.resources.food.owned) {
		buyBuilding('Tribute');
		message("Bought us a tribute. The gems must flow!", "Loot", "*eye2", "exotic")
	}
}

//Buy gyms

if (autoTSettings.autogyms.enabled == 1) {
	if (getBuildingItemPrice(game.buildings.Gym, "wood", false) <= game.resources.wood.owned) {
		buyBuilding('Gym');
		message("Bought us a gym. Open 24/7.", "Loot", "*eye2", "exotic")
	}
}

//Highlight housing
if (autoTSettings.autohousing.enabled == 1) {
	var ghousing = ["Mansion", "Hotel", "Resort", "Collector", "Warpstation"];
	for (ghouse in ghousing) {
		var gbuilding = game.buildings[ghousing[ghouse]];
		var gcost = 0;
		gcost += getBuildingItemPrice(gbuilding, "gems");
		var gratio = gcost / gbuilding.increase.by;
		gobj[ghousing[ghouse]] = gratio;
		if (document.getElementById(ghousing[ghouse]).style.border = "1px solid #00CC00") {
			document.getElementById(ghousing[ghouse]).style.border = "1px solid #FFFFFF";
		}
	}
	var keysSorted = Object.keys(gobj).sort(function(a,b){return gobj[a]-gobj[b]});
	document.getElementById(keysSorted[0]).style.border = "1px solid #00CC00";
} else {
	var ghousing = ["Mansion", "Hotel", "Resort", "Collector", "Warpstation"];
	for (ghouse in ghousing) {
		document.getElementById(ghousing[ghouse]).style.border = "1px solid #FFFFFF";
	}
}


//Buy speed upgrades
if (autoTSettings.autoupgrades.enabled == 1) {
  autotrimpupgrades = ["Egg", "UberHut", "UberHouse", "UberMansion", "UberHotel", "UberResort", "Bounty", "Efficiency", "TrainTacular", "Gymystic", "Megascience", "Megaminer", "Megalumber", "Megafarming", "Speedfarming", "Speedlumber", "Speedminer", "Speedscience", "Potency"]
  for (var key in game.upgrades) {
    if (autotrimpupgrades.indexOf(key) != -1) { 
      if (game.upgrades[key].allowed > game.upgrades[key].done) {
        buyUpgrade(key);
        message("Read the trimps the " + key + " book. Only some of them listened.", "Loot", "*eye2", "exotic")
      }
    }
  }

//Buy coordination

  if (game.upgrades.Coordination.allowed > game.upgrades.Coordination.done) {
    if ((game.resources.trimps.realMax() > (game.resources.trimps.maxSoldiers * 3))) {
      buyUpgrade('Coordination');
      message("We read Coordination together before bedtime, it was sweet. Now let's go kill something.", "Loot", "*eye2", "exotic")
    }
  }
}

  //clearInterval(myVar);
}//end loop


