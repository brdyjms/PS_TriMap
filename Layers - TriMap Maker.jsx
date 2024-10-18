// Main function to wrap all actions into a single history state
function createTriColorMap() {
	var doc = app.activeDocument;

	// Set all layers visible
	function setAllLayersVisible() {
		var layers = doc.artLayers;
		for (var i = 0; i < layers.length; i++) {
			layers[i].visible = true;
		}
		var layerSets = doc.layerSets;
		for (var j = 0; j < layerSets.length; j++) {
			layerSets[j].visible = true;
		}
	}

	// Create a solid white layer named "TriColor Map"
	function createWhiteLayer() {
		var solidColorLayer = doc.artLayers.add();
		solidColorLayer.name = "TriColor Map";
		var color = new SolidColor();
		color.rgb.red = 255;
		color.rgb.green = 255;
		color.rgb.blue = 255;
		doc.activeLayer = solidColorLayer;
		doc.selection.selectAll();
		doc.selection.fill(color);
		doc.selection.deselect();
		solidColorLayer.move(doc, ElementPlacement.PLACEATBEGINNING);
	}

	// Copy a specific layer to a specific channel
	function copyToChannel(layerIndex, channelName) {
		var sourceLayer = doc.artLayers[layerIndex];
		doc.activeLayer = sourceLayer;
		doc.selection.selectAll();
		doc.selection.copy();

		var triLayer = doc.artLayers.getByName("TriColor Map");
		doc.activeLayer = triLayer;

		var targetChannel = doc.channels.getByName(channelName);
		doc.activeChannels = [targetChannel];
		doc.paste();
		doc.selection.deselect();
		doc.activeLayer = triLayer;
	}

	// Select the RGB channel
	function selectRGBChannel() {
		var rgbChannels = [
			doc.channels.getByName("Red"),
			doc.channels.getByName("Green"),
			doc.channels.getByName("Blue")
		];
		doc.activeChannels = rgbChannels;
	}

	// Execute the actions
	setAllLayersVisible();
	createWhiteLayer();
	copyToChannel(doc.artLayers.length - 3, "Red");
	copyToChannel(doc.artLayers.length - 2, "Green");
	copyToChannel(doc.artLayers.length - 1, "Blue");
	selectRGBChannel();
}

// Run the entire script as a single history step
app.activeDocument.suspendHistory("Create TriColor Map", "createTriColorMap()");
