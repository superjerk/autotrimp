//Old load notifications
//document.getElementById("food").appendChild(document.createTextNode("*"));

//globals-why weren't they here earlier?
var gobj = {};
var hobj = {};
var aobj = {};
var premapscounter = 0;
var buildcounter = 0;
var autoTSettings = {};
var version = "0.32b";
var testhealth = 0;
var testblock = 0;
var testattack = 0;

//Line things up, OCD FTW!
//fixed !! document.getElementById("buyCol").style.paddingRight = ".3%";
//fixed !!document.getElementById("rightCol").style.paddingLeft = ".3%";
document.getElementById("helium").style.height = "32.4%";
document.getElementById("boneFlavorRow").innerHTML = "The Bone Trader trades bones for...bonuses"

//Setup bone number addition
document.getElementById("boneBtnMain").style = "font-size: 1vw;";
document.getElementById("boneBtnMain").innerHTML = "Bone Trader (" + game.global.b + ")";

//setup talk button
document.getElementById("buildingsQueue").style = "width: 75%; float: left;";
document.getElementById("queueContainer").insertAdjacentHTML('beforeend', '<div style="color: rgb(255, 255, 255); font-size: 1.2em; text-align: center; width: 25%; float: right; padding-left: 1.1vw;"><div id="buildingsCollectBtn" class="workBtn pointer noselect" onclick="talk()" style="background: rgb(0, 0, 0) none repeat scroll 0% 0%; margin-top: 0.3vh;">Talk</div></div>');

//setup talk window
document.getElementById("boneWrapper").insertAdjacentHTML('beforebegin', '<div id="autotrimp" style="position: absolute; background: rgb(153, 153, 153) none repeat scroll 0% 0%; border: 2px solid rgb(0, 0, 0); width: 64vw; margin: 6vh 18vw; z-index: 10000000; text-align: center; font-size: 1.3vw; display: none; padding: 0.2vw; color: rgb(255, 255, 255);"><div style="width: 100%; display: table; border-spacing: 0.3vw;" id="autotrimp0"><div style="display: table-row;" id="autorow"><div style="border: 1px solid white; background: rgb(84, 83, 83) none repeat scroll 0% 0%; display: table-cell; width: 20%;" id="pic"><img style="max-height: 13vw;" src="https://cloud.githubusercontent.com/assets/14081390/9893516/d9db4782-5bde-11e5-8791-91638bb6aaae.jpg"></div><div id="qs" style="border: 1px solid white; background: rgb(84, 83, 83) none repeat scroll 0% 0%; display: table-cell; width: 60%; vertical-align: top; padding: 0.5%;"><p style="text-align: left; font-size: 0.9em;" id="q">This is the question.</p><p></p><p style="font-size: 0.8em;"><a style="color: rgb(124, 202, 228); text-decoration: underline;" href="#" id="1" onclick="alert(\'clicked\')">Answer 1</a></p><p style="font-size: 0.8em;"><a style="color: rgb(124, 202, 228); text-decoration: underline;" href="#" id="2" onclick="alert(\'clicked\')">Answer 2</a></p><p style="font-size: 0.8em;"><a style="color: rgb(124, 202, 228); text-decoration: underline;" href="#" id="3" onclick="alert(\'clicked\')"></a></p></div><div id="button" style="display: table-cell; width: 20%; background: rgb(153, 153, 153) none repeat scroll 0% 0%; vertical-align: top;"><div class="boneBtn dangerColor pointer noselect" onclick="document.getElementById(\'autotrimp\').style.display = \'none\'">Close</div></div></div></div></div>');
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
conversation[7] = {Q:"I can tell the trimps to build storage buildings before they get full. I can also buy Gyms and Tributes as soon as we can afford them, and read some upgrade books to you and the trimps when you're not available.",R1:"Which upgrade books?",L1:8, R2:"What else?", L2:9};
conversation[8] = {Q:"The upgrades I can read are: Speedfarming, Speedlumber, Speedminer, Speedscience, (all the Mega versions too), Efficiency, TrainTacular, Gymystic, Potency, Egg, UberHut, UberHouse, UberMansion, UberHotel, UberResort, and Bounty",R1:"Ok, cool",L1:9};
conversation[9] = {Q:"I can also highlight the housing that makes the most use of our gems, and the equipment that makes the best use of our metal.",R1:"Cool, what else?",L1:10};
conversation[10] = {Q:"I'll bring us back to the world if we idle on the premap screen too long and I'll send you back to science-ing if you stay building on an empty queue. I can also <b>unteach</b> Shieldblock.",R1:"Why unteach Shieldblock?",L1:11, R2:"Anything else?",L2:12};
conversation[11] = {Q:"As we learn more and more Gymystic, our shields becomes less and less useful for blocking. The extra health comes in real handy post z60.",R1:"I get it.",L1:12};
conversation[12] = {Q:"I can help you respec the portal perks if you've already done it this round, and I can automatically flip between Dominance and Heap formations depending on the enemy we're facing.",R1:"Ok.",L1:13};
conversation[13] = {Q:"That's it for now, but I'll let you know if I pick up any more tricks. Use the buttons below to let me know what you'd like done.",R1:"Ok.",L1:2};
updateConvo(0);

//setup options
var checking = JSON.parse(localStorage.getItem("autotrimpsave"))
if (checking != null && checking.versioning == version) {
	autoTSettings = checking;	
}
else {
	var versioning = {version: version};
	var autobuildings = {enabled: 0, description: "Automatically buy storage buildings when they're 90% full", titles: ["Not Buying", "Buying"]};
	var autotributes = {enabled: 0, description: "Automatically buy tributes when we can afford them", titles: ["Not Buying", "Buying"]};
	var autogyms = {enabled: 0, description: "Automatically buy gyms when we can afford them", titles: ["Not Buying", "Buying"]};
	var autoupgrades = {enabled: 0, description: "Automatically read certain upgrade books to you and the trimps", titles: ["Not Reading", "Reading"]};
	var autohousing = {enabled: 0, description: "Highlight the most gem-efficient housing in green", titles: ["Not Highlighting", "Highlighting"]};
	var autoequipment = {enabled: 0, description: "Highlight the most metal-efficient equipment in blue and red", titles: ["Not Highlighting", "Highlighting"]};
	var autopremaps = {enabled: 0, description: "Bring us back to the world if we're in the premaps screen for 30 seconds", titles: ["Not Switching", "Switching"]};
	var autoscience = {enabled: 0, description: "I'll send you back to work on science if you've been trying to build on an empty queue for 30 seconds", titles: ["Not Switching", "Switching"]};
	var autoformations = {enabled: 0, description: "Automatically switch between Heap and Dominance formations based on enemy", titles: ["Not Switching", "Switching"]};
	var autosnimps = {enabled: 0, description: "I'll automatically buy items to help us get past snimps, squimps, and other fast enemies", titles: ["Not Avoiding", "Avoiding"]};
	autoTSettings = {versioning: version, autobuildings: autobuildings, autotributes: autotributes, autogyms: autogyms, autoupgrades: autoupgrades, autohousing: autohousing, autoequipment: autoequipment, autopremaps: autopremaps, autoscience: autoscience, autosnimps: autosnimps, autoformations: autoformations};
}

//add buttonss
var autosettings = document.getElementById("autosettings0");
var html = "";
for (var item in autoTSettings) {
	if (item != "versioning") {
		var optionItem = autoTSettings[item]; 
  		var text = optionItem.titles[optionItem.enabled]; 
  		html += "<div class='optionContainer'><div id='toggle" + item + "' class='noselect settingBtn settingBtn" + optionItem.enabled + "' onclick='toggleAutoSetting(\"" + item + "\")'>" + text + "</div><div class='optionItemDescription'>" + optionItem.description + "</div></div> ";
	}
}
autosettings.innerHTML = html;

//create unlearn shieldblock button
autosettings.insertAdjacentHTML('beforeend', "<div class='optionContainer'><div id='remove Shieldblock' class='noselect settingBtn btn-warning' onclick='removeShieldblock()'>Unlearn Shieldblock</div><div class='optionItemDescription'>We'll stop teaching the trimps to use shields to block and we'll use them for health again</div></div>");
autosettings.insertAdjacentHTML('beforeend', "<div class='optionContainer'><div id='add Respec' class='noselect settingBtn btn-warning' onclick='addRespec()'>Add a Respec</div><div class='optionItemDescription'>If you've already used your respec but want to do it again anyway, let me know.</div></div>");

//call loop
var myVar=setInterval(function () {myTimer()}, 7000);
var newVar=setInterval(function () {newTimer()}, 1500);

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

function updateHousingHighlighting() {
	var ahousing = ["Mansion", "Hotel", "Resort", "Collector", "Warpstation"];
	var ghousing = [];
	for (ahouse in ahousing) {
		if (game.buildings[ahousing[ahouse]].locked == 0) {
			ghousing.push(ahousing[ahouse]);
		}
	}
	if (ghousing.length) {
		for (ghouse in ghousing) {
			var gbuilding = game.buildings[ghousing[ghouse]];
			var gcost = 0;
			gcost += getBuildingItemPrice(gbuilding, "gems");
			var gratio = gcost / gbuilding.increase.by;
			gobj[ghousing[ghouse]] = gratio;
			if (document.getElementById(ghousing[ghouse]).style.border = "1px solid #00CC00") {
				document.getElementById(ghousing[ghouse]).style.border = "1px solid #FFFFFF";
				document.getElementById(ghousing[ghouse]).removeEventListener("click", updateHousingHighlighting);
			}
		}
		var keysSorted = Object.keys(gobj).sort(function(a,b){return gobj[a]-gobj[b]});
		document.getElementById(keysSorted[0]).style.border = "1px solid #00CC00";
		document.getElementById(keysSorted[0]).addEventListener('click',updateHousingHighlighting,false);
	}
}

function updateHealthHighlighting() {
	var ahealth = ["Boots", "Helmet", "Pants", "Shoulderguards", "Breastplate"];
	var ghealth = [];
	for (aheal in ahealth) {
		if (game.equipment[ahealth[aheal]].locked == 0) {
			ghealth.push(ahealth[aheal]);
		}
	}
	if (ghealth.length) {
		for (gheal in ghealth) {
			var hequip = game.equipment[ghealth[gheal]];
			var mcost = 0;
			mcost += getBuildingItemPrice(hequip, "metal", true);
			var mratio = mcost / hequip.healthCalculated;
			hobj[ghealth[gheal]] = mratio;
			if (document.getElementById(ghealth[gheal]).style.border = "1px solid #0000FF") {
				document.getElementById(ghealth[gheal]).style.border = "1px solid #FFFFFF";
				document.getElementById(ghealth[gheal]).removeEventListener("click", updateHealthHighlighting);
			}
		}
		var hkeysSorted = Object.keys(hobj).sort(function(a,b){return hobj[a]-hobj[b]});
		document.getElementById(hkeysSorted[0]).style.border = "1px solid #0000FF";
		document.getElementById(hkeysSorted[0]).addEventListener('click',updateHealthHighlighting,false);
	}
}

function updateAttackHighlighting() {
	var aAttacking = ["Dagger", "Mace", "Polearm", "Battleaxe", "Greatsword"];
	var gAttacking = [];
	for (aAttack in aAttacking) {
		if (game.equipment[aAttacking[aAttack]].locked == 0) {
			gAttacking.push(aAttacking[aAttack]);
		}
	}
	if (gAttacking.length) {
		for (gAttack in gAttacking) {
			var aequip = game.equipment[gAttacking[gAttack]];
			var mcost = 0;
			mcost += getBuildingItemPrice(aequip, "metal", true);
			var mratio = mcost / aequip.attackCalculated;
			aobj[gAttacking[gAttack]] = mratio;
			if (document.getElementById(gAttacking[gAttack]).style.border = "1px solid #FF0000") {
				document.getElementById(gAttacking[gAttack]).style.border = "1px solid #FFFFFF";
				document.getElementById(gAttacking[gAttack]).removeEventListener("click", updateAttackHighlighting);
			}
		}
		var akeysSorted = Object.keys(aobj).sort(function(a,b){return aobj[a]-aobj[b]});
		document.getElementById(akeysSorted[0]).style.border = "1px solid #FF0000";
		document.getElementById(akeysSorted[0]).addEventListener('click',updateAttackHighlighting,false);
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
  var food = game.resources.food.owned / (game.resources.food.max + (game.resources.food.max * game.portal.Packrat.modifier * game.portal.Packrat.level));
  var wood = game.resources.wood.owned / (game.resources.wood.max + (game.resources.wood.max * game.portal.Packrat.modifier * game.portal.Packrat.level));
  var metal = game.resources.metal.owned / (game.resources.metal.max + (game.resources.metal.max * game.portal.Packrat.modifier * game.portal.Packrat.level));

//Buy resource buildings
if (autoTSettings.autobuildings.enabled == 1) {
  if (food > .9) {
    buyBuilding('Barn');
    tooltip("hide");
    message("Bought us another barn. It's red...hooray.", "Loot", "*eye2", "exotic");
  }
  if (wood > .9) {
    buyBuilding('Shed');
    tooltip("hide");
    message("Bought us another shed. It's very shed-like", "Loot", "*eye2", "exotic");
  }
  if (metal > .9) {
    buyBuilding('Forge');
    tooltip("hide");
    message("Bought us another forge. It's a good forge.", "Loot", "*eye2", "exotic")
  }
}

//Buy tributes
if (autoTSettings.autotributes.enabled == 1) {
	if (getBuildingItemPrice(game.buildings.Tribute, "food", false) <= game.resources.food.owned && game.buildings.Tribute.locked == 0) {
		buyBuilding('Tribute');
		tooltip("hide");
		message("Bought us a tribute. The gems must flow!", "Loot", "*eye2", "exotic")
	}
}

//check to see if we're stuck in premap screen
if (autoTSettings.autopremaps.enabled == 1 && game.global.preMapsActive) {
	switch (premapscounter) {
		case 0:
			premapscounter += 1;
			break;
		case 1:
			premapscounter += 1;
			break;
		case 2:
			premapscounter += 1;
			break;
		case 3:
			premapscounter = 0;
			mapsClicked();
			break;
	}
} else {
	premapscounter = 0;
}

//check to see if we're building on an empty queue
if (autoTSettings.autoscience.enabled == 1 && document.getElementById('noQueue').style.display == "block" && game.global.playerGathering == "buildings") {
	switch (buildcounter) {
		case 0:
			buildcounter += 1;
			break;
		case 1:
			buildcounter += 1;
			break;
		case 2:
			buildcounter += 1;
			break;
		case 3:
			buildcounter = 0;
			if (game.global.challengeActive != 'Scientist') {
				setGather('science');
			}
			break;
	}
} else {
	buildcounter = 0;
}

//Buy gyms

if (autoTSettings.autogyms.enabled == 1) {
	if (getBuildingItemPrice(game.buildings.Gym, "wood", false) <= game.resources.wood.owned && game.buildings.Gym.locked == 0) {
		buyBuilding('Gym');
		tooltip("hide");
		message("Bought us a gym. Open 24/7.", "Loot", "*eye2", "exotic")
	}
}

//Highlight housing
if (autoTSettings.autohousing.enabled == 1) {
	updateHousingHighlighting();
} else {
	var ahousing = ["Mansion", "Hotel", "Resort", "Collector", "Warpstation"];
	var ghousing = [];
	for (ahouse in ahousing) {
		if (game.buildings[ahousing[ahouse]].locked == 0) {
			ghousing.push(ahousing[ahouse]);
		}
	}
	for (ghouse in ghousing) {
		if (document.getElementById(ghousing[ghouse]).style.border = "1px solid #00CC00") {
			document.getElementById(ghousing[ghouse]).style.border = "1px solid #FFFFFF";
			document.getElementById(ghousing[ghouse]).removeEventListener("click", updateHousingHighlighting);
		}
	}
}

if (autoTSettings.autoequipment.enabled == 1) {
	updateHealthHighlighting();
	updateAttackHighlighting();
} else {
	var aAttacking = ["Dagger", "Mace", "Polearm", "Battleaxe", "Greatsword"];
	var gAttacking = [];
	for (aAttack in aAttacking) {
		if (game.equipment[aAttacking[aAttack]].locked == 0) {
			gAttacking.push(aAttacking[aAttack]);
		}
	}
	for (gAttack in gAttacking) {
		if (document.getElementById(gAttacking[gAttack]).style.border = "1px solid #FF0000") {
			document.getElementById(gAttacking[gAttack]).style.border = "1px solid #FFFFFF";
			document.getElementById(gAttacking[gAttack]).removeEventListener("click", updateAttackHighlighting);
		}
	}
	var ahealth = ["Boots", "Helmet", "Pants", "Shoulderguards", "Breastplate"];
	var ghealth = [];
	for (aheal in ahealth) {
		if (game.equipment[ahealth[aheal]].locked == 0) {
			ghealth.push(ahealth[aheal]);
		}
	}
	if (ghealth.length) {
		for (gheal in ghealth) {
			if (document.getElementById(ghealth[gheal]).style.border = "1px solid #0000FF") {
				document.getElementById(ghealth[gheal]).style.border = "1px solid #FFFFFF";
				document.getElementById(ghealth[gheal]).removeEventListener("click", updateHealthHighlighting);
			}
		}
	}
}

//Buy speed upgrades
if (autoTSettings.autoupgrades.enabled == 1) {
  autotrimpupgrades = ["Egg", "UberHut", "UberHouse", "UberMansion", "UberHotel", "UberResort", "Bounty", "Efficiency", "TrainTacular", "Gymystic", "Megascience", "Megaminer", "Megalumber", "Megafarming", "Speedfarming", "Speedlumber", "Speedminer", "Speedscience", "Potency"]
  for (var key in game.upgrades) {
    if (autotrimpupgrades.indexOf(key) != -1) { 
      if (game.upgrades[key].allowed > game.upgrades[key].done && canAffordTwoLevel(game.upgrades[key])) {
      	buyUpgrade(key);
        if (key == "Efficiency") {
        	message("I read you the " + key + " book while you were asleep. I think it worked.", "Loot", "*eye2", "exotic")
        } else {
        	message("Read the trimps the " + key + " book. Only some of them listened.", "Loot", "*eye2", "exotic")
        }
      }
    }
  }

//Buy coordination

  if (game.upgrades.Coordination.allowed > game.upgrades.Coordination.done) {
    if (canAffordCoordinationTrimps() && canAffordTwoLevel(game.upgrades.Coordination)){
      buyUpgrade('Coordination');
      message("We read Coordination together before bedtime, it was sweet. Now let's go kill something.", "Loot", "*eye2", "exotic")
    }
  }
}

//Update bones
document.getElementById("boneBtnMain").innerHTML = "Bone Trader (" + game.global.b + ")";

//remove alerts if they exist
var removebadge = true;
var badgeupgrades = document.getElementById("upgradesHere");
for (i = 0; i<badgeupgrades.childNodes.length; i++) { 
	if (badgeupgrades.childNodes[i].childNodes[0].innerHTML == "!") {
		removebadge = false;
	}
}
if (removebadge) {
	document.getElementById("upgradesAlert").innerHTML = "";
}

//save
localStorage.setItem("autotrimpsave",JSON.stringify(autoTSettings));

//check for portal/reset
var loglength = (log.childElementCount % 4) + 1;
for (j=1; j <= loglength; j++) {
	if ((log.childNodes[log.childElementCount-j].innerHTML).lastIndexOf('green shimmer') != -1) {
		for (item in autoTSettings) {
			if (item != "versioning") {
				while (autoTSettings[item].enabled != 0) {
					toggleAutoSetting(item);
				}
			}
		}
	}
}

  //clearInterval(myVar);
}//end loop

function newTimer() {
	if (autoTSettings.autoformations.enabled == 1 && game.upgrades.Dominance.done == 1)	{
		if (game.global.mapsActive){
			if (game.badGuys[game.global.mapGridArray[game.global.lastClearedMapCell + 1].name].fast) {
				if (game.global.formation == 2) {setFormation(1);}
			} else {
				if (game.global.formation == 1) {setFormation(2);}
			}
		} else {
			if (game.badGuys[game.global.gridArray[game.global.lastClearedCell + 1].name].fast) {
				if (game.global.formation == 2) {setFormation(1);}
			} else {
				if (game.global.formation == 1) {setFormation(2);}
			}
		}
	}
	
	//avoid snimps
	if (autoTSettings.autosnimps.enabled == 1) {
		if (autoTSettings.autoequipment.enabled != 1) {
			toggleAutoSetting(autoequipment);
		}
		var badguyMinAtt = game.global.gridArray[game.global.lastClearedCell + 1].attack * .8;
		if (game.global.mapsActive){
			badguyMinAtt = game.global.mapGridArray[game.global.lastClearedMapCell + 1].attack * .8;
			//game.badGuys[game.global.mapGridArray[game.global.lastClearedMapCell + 1].name].fast
		}
		var mysoldiers = (game.portal.Coordinated.level) ? game.portal.Coordinated.currentSend : game.resources.trimps.maxSoldiers ;
		var mytoughness = (game.portal.Toughness.level * game.portal.Toughness.modifier * 100) + 100;
		var blockformation = 1;
		var healthformation = 1;
		switch (game.global.formation) {
			case 1:
				healthformation = 4;
				blockformation = .5;
			break;
			case 2:
				healthformation = .5;
				blockformation = .5;
			break;
			case 3:
				healthformation = .5;
				blockformation = 4;
			break;
		}
		var myblock = game.global.block * game.jobs.Trainer.owned * game.jobs.Trainer.modifier * mysoldiers * blockformation;
		var myhealth = game.global.health * mysoldiers * mytoughness * healthformation;
		testblock = myblock;
		testhealth = myhealth;
		testattack = badguyMinAtt;
	}
}//end new loop
