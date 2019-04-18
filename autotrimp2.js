//globals
document.getElementById("boneFlavorRow").innerHTML = "The Bone Trader trades bones for...bonuses"

var myVar=setInterval(function () {resourceTimer()}, 3000);

function resourceTimer() {
  	var food = game.resources.food.owned / (game.resources.food.max + (game.resources.food.max * game.portal.Packrat.modifier * game.portal.Packrat.level));
  	var wood = game.resources.wood.owned / (game.resources.wood.max + (game.resources.wood.max * game.portal.Packrat.modifier * game.portal.Packrat.level));
  	var metal = game.resources.metal.owned / (game.resources.metal.max + (game.resources.metal.max * game.portal.Packrat.modifier * game.portal.Packrat.level));

	//Buy resource buildings
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
}//end resourceTimer loop
