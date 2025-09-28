// NAME:friendACBottom
// AUTHORS: Y0nxy
// DESCRIPTION: Moves Friend Activity Button Down.

(async function friendACBottom() {
	if (!(Spicetify.CosmosAsync && Spicetify.URI)) {
		setTimeout(friendACBottom, 300);
		return;
	}
	
	//console.log("Started")
	// Select the button using its aria-label attribute
	var button = document.querySelector('[aria-label="Friend Activity"]');

	// Check if the button is found
	if (button) {
		// Select the target container using its class
		var targetContainer = document.querySelector('.main-nowPlayingBar-extraControls');
		//console.log("Found!")

		button.style.background = 'transparent';
		// Append the button to the target container
		if (targetContainer) {
			targetContainer.insertBefore(button, targetContainer.firstChild);
		}
	}
})();
