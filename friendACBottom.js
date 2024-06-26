// NAME:friendACBottom
// AUTHORS: Y0nxy
// DESCRIPTION: Moves Friend Activity Button Down.

(async function friendACBottom() {
	if (!Spicetify.CosmosAsync) {
		setTimeout(friendACBottom, 10);
		return;
	}
	
	
	// Select the button using its aria-label attribute
	var button = document.querySelector('.encore-over-media-set.main-topBar-buddyFeed[aria-label="Friend Activity"]');

	// Check if the button is found
	if (button) {
		// Select the target container using its class
		var targetContainer = document.querySelector('.main-nowPlayingBar-extraControls');

		button.style.background = 'transparent';
		// Append the button to the target container
		if (targetContainer) {
			targetContainer.insertBefore(button.parentElement, targetContainer.firstChild);
		}
	}
})();
