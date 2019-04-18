//globals
var gobj = {};
var hobj = {};
var aobj = {};
var hkeysSorted = [];
var premapscounter = 0;
var buildcounter = 0;
var autoTSettings = {};
var version = "0.37b";
var wasgathering = "";
var badguyMinAtt = 0;
var badguyMaxAtt = 0;
var badguyFast = false;
var mysoldiers = 0;
var mytoughness = 0;
var blockformation = 1;
var healthformation = 1;
var myblock = 0;
var myhealth = 0;

document.getElementById("boneFlavorRow").innerHTML = "The Bone Trader trades bones for...bonuses"

function myTimer() {
  	var food = game.resources.food.owned / (game.resources.food.max + (game.resources.food.max * game.portal.Packrat.modifier * game.portal.Packrat.level));
  	var wood = game.resources.wood.owned / (game.resources.wood.max + (game.resources.wood.max * game.portal.Packrat.modifier * game.portal.Packrat.level));
  	var metal = game.resources.metal.owned / (game.resources.metal.max + (game.resources.metal.max * game.portal.Packrat.modifier * game.portal.Packrat.level));

	//Buy resource buildings
	//if (autoTSettings.autobuildings.enabled == 1) {
	if (1 == 1) {
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
}//end loop
