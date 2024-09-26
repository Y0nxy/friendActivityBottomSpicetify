// NAME:friendACBottom
// AUTHORS: Y0nxy
// DESCRIPTION: Moves Friend Activity Button Down.

(async function friendACBottom() {
	if (!Spicetify.CosmosAsync) {
		setTimeout(friendACBottom, 10);
		return;
	}
	

	// Select the button using its aria-label attribute
	//var button = document.querySelector('.encore-text-body-small-bold main-topBar-buddyFeed[aria-label="Friend Activity"]');
	var button = document.querySelector('button[aria-label="Friend Activity"]');
	//console.log("TEXT");
	// Check if the button is found
	if (button) {

		// Select the target container using its class
		//console.log("found button");
		var targetContainer = document.querySelector('.main-nowPlayingBar-extraControls');
		button.style.background = 'transparent';
		// Append the button to the target container
		if (targetContainer) {
			//targetContainer.insertBefore(button.parentElement, targetContainer.firstChild);
			targetContainer.insertBefore(button, targetContainer.firstChild);
		}
	}
})();
