#include "/Scripting/SupportScripts/Unsmart.jsx"

var currentFile = File(Folder.appData.path + "/Scripting/Templates/Print File Templates/ScotchGlass/Scotch - Capitol - Template.psd");
var currentTemplate = open(currentFile);
app.displayDialogs = DialogModes.ERROR;

$.writeln("Starting Script.");

//OUTPUT LOL
function logTextLayer(logTarget) {
    var artLayerRef = currentDocument.artLayers.add();
    artLayerRef.kind = LayerKind.TEXT;
    var textItemRef = artLayerRef.textItem;
    textItemRef.contents = logTarget;
    };
//logTextLayer();
//alert(Folder.appData.path);

var imageOrientation = "Square"; //Tall, Square, or Wide; later should be assigned by a GUI dropdown? Case sensitive currently.

var currentDocument = activeDocument;
var currentLayer = currentDocument.activeLayer;

//set currentLayer to the appropriate imageOrientation that will be swapped out
var setOrientationTargetName = 'orientation' + imageOrientation;
currentLayer = currentDocument.layerSets.getByName("Targets").artLayers.getByName(setOrientationTargetName); //outputs [ArtLayer setOrientationTargetName]

//Putting together file path because it hates it otherwise (see commented out code). Later should be assigned by browsing and selecting in a GUI?
var scriptedFilePath = Folder.appData.path + "/Scripting/sample" + imageOrientation + ".psd";

//Check if current layer is a Smart Object and set the file that we want to swap in to a variable. Otherwise, send a dialog window.
if (currentLayer.kind != "LayerKind.SMARTOBJECT") {
    alert("selected layer is not a smart object")
} else {
//  var scriptedFile = File(`C:/Users/dipty/OneDrive/Desktop/Scripting Revamp/JS testing EP and DCS scotches/sample${imageOrientation}.psd`)
    var scriptedFile = File(scriptedFilePath)
};

currentLayer = replaceContents(scriptedFile, currentLayer);


//Replace SmartObject Contents
function replaceContents(newFile, targetSmartObject) {
    app.activeDocument.activeLayer = targetSmartObject;
    // =======================================================
    var idplacedLayerReplaceContents = stringIDToTypeID("placedLayerReplaceContents");
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    desc3.putPath(idnull, new File(newFile));
    var idPgNm = charIDToTypeID("PgNm");
    desc3.putInteger(idPgNm, 1);
    executeAction(idplacedLayerReplaceContents, desc3, DialogModes.NO);
    return app.activeDocument.activeLayer
};

//Call Unsmart Script
callUnsmart();
