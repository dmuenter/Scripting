// Hello World Script

//Remember the current unit settings of Photoshop and set the units to the value expected by the script
var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.INCHES;

//Create a new 2x4 inch document (width, height) and assign to a variable
//Pointing to app isn't necessary due to JS already being run in Photoshop you don't need to target it
var docRef = /*app.*/documents.add(2, 4);

//Create a new art layer containing text
var artLayerRef = docRef.artLayers.add();
artLayerRef.kind = LayerKind.TEXT;

//Set the contents of the text layer
var textItemRef = artLayerRef.textItem;
textItemRef.contents = "Hello, World";

//Release references
docRef = null;
artLayerRef = null;
textItemRef = null;

//Restore original ruler units of Photoshop from before doing this script
app.preferences.rulerUnits = originalUnit;