#include "/Scripting/SupportScripts/Unsmart.jsx"
#include "/Scripting/ConstructionScripts.jsx"

const ProductScripts = [
    {
        key: "dts_ScotchCGlassCheckbox",
        functionToRun: process_DTS_ScotchGlassC
    },
    {
        key: "ep_ScotchCGlassCheckbox",
        functionToRun: process_EP_ScotchGlassC
    },
    {
        key: "dts_ScotchMGlassCheckbox",
        functionToRun: process_DTS_ScotchGlassM
    },
    {
        key: "ep_ScotchMGlassCheckbox",
        functionToRun: process_EP_ScotchGlassM
    },
    {
        key: "dts_BeerCanGlassCheckbox",
        functionToRun: process_DTS_BeerCanGlass
    },
    {
        key: "ep_BeerCanGlassCheckbox",
        functionToRun: process_EP_BeerCanGlass
    },
    {
        key: "dts_WaterBottleCheckbox",
        functionToRun: process_DTS_WaterBottle
    },
    {
        key: "ep_PolarMugCheckbox",
        functionToRun: process_EP_PolarMug
    },
    {
        key: "br_BaseballCapCheckbox",
        functionToRun: process_BR_BaseballCap
    },
    {
        key: "ds_MugCheckbox",
        functionToRun: process_DS_Mug
    },
    { key: "br_PatchCheckbox",
        functionToRun: process_BR_Patch
    },
];



// //Cross-product functions and variables

// //Open template file
// function openTemplate(path) {
//     var currentFile = File(path);
//     var currentTemplate = open(currentFile);
//     app.displayDialogs = DialogModes.ERROR;
// };

// //Set image orientation type
// function setOrientationTarget(data, currentLayer) {
//     var setLayerTarget = "orientation" + data.imageOrientation;
//     currentLayer = activeDocument.layerSets.getByName("Targets").artLayers.getByName(setLayerTarget);
//     return currentLayer;
// }

// //Check if current layer is a Smart Object that can be operated on
// function replaceSmartObject(data, currentLayer) {
//     $.writeln("starting smart object check");
//     if (currentLayer.kind != "LayerKind.SMARTOBJECT") {
//         alert("selected layer is not a smart object");
//         return null;
//     } else {
//         currentLayer = replaceContents(data.inputFilePath, currentLayer);
//         $.writeln("file should be swapped from " + currentLayer + " to " + data.inputFilePath);
//         return currentLayer;
//     }
// }

// //Replace SmartObject Contents
// function replaceContents(newFile, targetSmartObject) {
//     app.activeDocument.activeLayer = targetSmartObject;
//     // =======================================================
//     var idplacedLayerReplaceContents = stringIDToTypeID("placedLayerReplaceContents");
//     var desc3 = new ActionDescriptor();
//     var idnull = charIDToTypeID("null");
//     desc3.putPath(idnull, new File(newFile));
//     var idPgNm = charIDToTypeID("PgNm");
//     desc3.putInteger(idPgNm, 1);
//     executeAction(idplacedLayerReplaceContents, desc3, DialogModes.NO);
//     return app.activeDocument.activeLayer
// };

// // //Separate SmartObject into Layers
// function separateSmartObject() {
//     callUnsmart();
// }

// //Process a file inside of template
// function processFile(data, currentLayer) {
//     currentLayer = setOrientationTarget(data, currentLayer);
//     currentLayer = replaceSmartObject(data, currentLayer);
//     separateSmartObject();
//     $.writeln("smartobject layer separated");
// }

// //Keep Color layer
// function keepColor(currentLayer, type) {
//     var currentGroupName = app.activeDocument.activeLayer.name;
//     var activeGroup = app.activeDocument.activeLayer;
//     currentLayer = activeGroup.artLayers.getByName("Color");
//     currentLayer.move(activeDocument.layerSets.getByName("Targets"), ElementPlacement.PLACEBEFORE);

//     if (type === "print") {
//         deleteAllLayersExcept(["Color"]);
//     } else { //for listing files
    
//     }
// }

// //Keep EP Inverted layer
// function keepEPInverted(currentLayer, type) {
//     var currentGroupName = app.activeDocument.activeLayer.name;
//     var activeGroup = app.activeDocument.activeLayer;
//     currentLayer = activeGroup.artLayers.getByName("EP inverted");
//     currentLayer.move(activeDocument.layerSets.getByName("Targets"), ElementPlacement.PLACEBEFORE);

//     if (type === "print") { //for print files
//        deleteAllLayersExcept(["EP inverted"]);
//     } else { //for listing files
//         deleteAllLayersExcept(["EP inverted"]);
//     }    
// }

// //Keep EP and EP Inverted layers
// function keepBothEP(currentLayer, type) {
//     var currentGroupName = app.activeDocument.activeLayer.name;
//     var activeGroup = app.activeDocument.activeLayer;
//     currentLayer = activeGroup.artLayers.getByName("EP");
//     currentLayer.move(activeDocument.layerSets.getByName("Targets"), ElementPlacement.PLACEBEFORE);
//     currentLayer = activeGroup.artLayers.getByName("EP inverted");
//     currentLayer.move(activeDocument.layerSets.getByName("Targets"), ElementPlacement.PLACEBEFORE);
   
//     if (type === "print") {
//         deleteAllLayersExcept(["EP", "EP inverted"])
//     } else { //for listing files
//         deleteAllLayersExcept(["EP", "EP inverted"])
//     }
// }

// //Layer and Folder deletion

// function deleteAllLayersExcept(layersToKeep) {
//     var layersToDelete = [];
//     for (var layerCt = 0; layerCt < activeDocument.artLayers.length; layerCt++) {
//         //if (activeDocument.artLayers[layerCt].name === layersToKeep[layerCt].name) {
//         if (layersToKeep.includes(activeDocument.artLayers[layerCt].name)) {
//             $.writeln("skipping " + activeDocument.artLayers[layerCt].name);
//             continue;
//         } else {
//             $.writeln("pushing for deletion " + activeDocument.artLayers[layerCt].name);
//             layersToDelete.push(activeDocument.artLayers[layerCt]);
//         }
//     }
//     for (var deleteTar = 0; deleteTar < layersToDelete.length; deleteTar++) {
//         if (layersToDelete[deleteTar].allLocked === true) {
//             $.writeln("not deleting " + layersToDelete[deleteTar] + " because locked");
//             continue;
//         } else {
//         $.writeln("deleting " + layersToDelete[deleteTar].name);
//         layersToDelete[deleteTar].remove();
//         }
//     }
// }

// function unlockAllFoldersExcept(foldersToKeepLocked) {
//     var foldersToUnlock = [];
//     var folderCt = activeDocument.layerSets.length;
//     for (var folderUnlockCt = 0; folderUnlockCt < folderCt; folderUnlockCt++) {
//         if (foldersToKeepLocked.includes(activeDocument.layerSets[folderUnlockCt].name)) {
//             $.writeln("ensuring that " + activeDocument.layerSets[folderUnlockCt].name + " is locked");
//             activeDocument.layerSets[folderUnlockCt].allLocked = true;
//         } else {
//             $.writeln ("unlocking " + activeDocument.layerSets[folderUnlockCt].name);
//             activeDocument.layerSets[folderUnlockCt].allLocked = false;
//         }
//     }
// }

// function deleteAllFolders() {
//     var foldersToDelete = [];
//     var folderCt = activeDocument.layerSets.length;
//     for (var folderDeleteCt = 0; folderDeleteCt < folderCt; folderDeleteCt++) {
//         if (activeDocument.layerSets[folderDeleteCt].allLocked === false) {
//             $.writeln("pushing for deletion " + activeDocument.layerSets[folderDeleteCt].name);
//             foldersToDelete.push(activeDocument.layerSets[folderDeleteCt]);
//         } else {
//             $.writeln("skipping " + activeDocument.layerSets[folderDeleteCt].name);
//         }
//     }
//     for (var deleteTar = 0; deleteTar < foldersToDelete.length; deleteTar++) {
//         $.writeln("deleting " + foldersToDelete[deleteTar].name);
//         foldersToDelete[deleteTar].remove();
//     }
// }

// //Apply Glassware #404040 to print file
// function apply404040(currentLayer) {
//     applyColorOverlay(
//         {
//             r: 64,
//             g: 64,
//             b: 64,
//         })
//     var tempLayer = activeDocument.artLayers.add();
//     tempLayer.name = "EP inverted";
//     activeDocument.mergeVisibleLayers();
// }

// function applyListingGlassGray(currentLayer) {
//     setActiveLayer(activeDocument.artLayers.getByName("EP inverted"));
//     applyColorOverlay(
//         {
//             r: 188,
//             g: 188,
//             b: 188,
//         })
//         var tempLayer = activeDocument.artLayers.add();
//         tempLayer.name = "EP inverted";
//         activeDocument.mergeVisibleLayers();
// }

// function applyEngravingOnSilver(currentLayer) {
//     setActiveLayer(activeDocument.artLayers.getByName("EP"));
//     applyColorOverlay(
//         {
//             r: 82,
//             g: 45,
//             b: 16,
//         })
// }


    
// function applyColorOverlay(color) {
//     var desc6 = new ActionDescriptor();
//     var ref1 = new ActionReference();
//     ref1.putProperty(charIDToTypeID('Prpr'), charIDToTypeID('Lefx'));
//     ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
//     desc6.putReference(charIDToTypeID('null'), ref1);
//     var desc7 = new ActionDescriptor();
//     var desc8 = new ActionDescriptor();
//     desc8.putBoolean(charIDToTypeID('enab'), true);
//     desc8.putBoolean(stringIDToTypeID('present'), true);
//     desc8.putBoolean(stringIDToTypeID('showInDialog'), true);
//     desc8.putEnumerated(charIDToTypeID('Md  '), charIDToTypeID('BlnM'), charIDToTypeID('Nrml'));
//     var desc9 = new ActionDescriptor();
//     desc9.putDouble(charIDToTypeID('Rd  '), color.r);
//     desc9.putDouble(charIDToTypeID('Grn '), color.g);
//     desc9.putDouble(charIDToTypeID('Bl  '), color.b);
//     desc8.putObject(charIDToTypeID('Clr '), charIDToTypeID('RGBC'), desc9);
//     desc8.putUnitDouble(charIDToTypeID('Opct'), charIDToTypeID('#Prc'), 100.000000);
//     desc7.putObject(charIDToTypeID('SoFi'), charIDToTypeID('SoFi'), desc8);
//     desc6.putObject(charIDToTypeID('T   '), charIDToTypeID('Lefx'), desc7);
//     executeAction(charIDToTypeID('setd'), desc6, DialogModes.NO);
// };

// function savePSD(activeDocument, destination) {
//     var psdSaveOptions = new PhotoshopSaveOptions();
//     psdSaveOptions.alphaChannels = true;
//     psdSaveOptions.embedColorProfile = true;
//     activeDocument.saveAs(destination, psdSaveOptions, false, Extension.LOWERCASE);
// }

// function saveJPG(activeDocument, destination, humanAssist) {
//     if (humanAssist === true) {
//         savePSD(activeDocument, destination);
//     } else {
//         var jpgSaveOptions = new JPEGSaveOptions();
//         jpgSaveOptions.embedColorProfile = true;
//         jpgSaveOptions.quality = 12;
//         activeDocument.saveAs(destination, jpgSaveOptions, false, Extension.LOWERCASE);
//     }
// }

// function closeDocument() {
//     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
// }

// Product Scripts (identification stage)

function process_DTS_ScotchGlassC(data) {
//Capitol
    var printTemplatePath = File("C:/Scripting/Templates/ScotchGlass/Scotch - Capitol - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/ScotchGlass/Scotch - Capitol - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/Scotch - Capitol - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/Scotch - Capitol - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepColor(currentLayer, "print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();
// Generate Listing File
    openTemplate(listingTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepColor(currentLayer, "listing");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    saveJPG(activeDocument, saveListingDestination, false);
    closeDocument();
}

function process_EP_ScotchGlassC(data) {
    var printTemplatePath = File("C:/Scripting/Templates/ScotchGlass/EP Scotch - Capitol - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/ScotchGlass/Scotch - Capitol - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP Scotch - Capitol - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP Scotch - Capitol - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, getActiveLayer());
    keepEPInverted(currentLayer, "print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    apply404040(currentLayer);    
    savePSD(activeDocument, savePrintDestination);
    closeDocument();
// Generate Listing File
    openTemplate(listingTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepEPInverted(currentLayer, "listing");
    deleteAllFolders();
    applyListingGlassGray(currentLayer);
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DTS_ScotchGlassM(data) {
//Manhatan
    var printTemplatePath = File("C:/Scripting/Templates/ScotchGlass/Scotch - Manhatan - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/ScotchGlass/Scotch - Manhatan - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/Scotch - Manhatan - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/Scotch - Manhatan - " + data.fileSKU);
    
//Generate Print File
    openTemplate(printTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepColor(currentLayer, "print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();
// Generate Listing File
    openTemplate(listingTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepColor(currentLayer, "listing");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    saveJPG(activeDocument, saveListingDestination, false);
    closeDocument();
}
    
function process_EP_ScotchGlassM(data) {
//Manhatan
    var printTemplatePath = File("C:/Scripting/Templates/ScotchGlass/EP Scotch - Manhatan - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/ScotchGlass/Scotch - Manhatan - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP Scotch - Manhatan - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP Scotch - Manhatan - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepEPInverted(currentLayer, "print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    apply404040(currentLayer);    
    savePSD(activeDocument, savePrintDestination);
    closeDocument();
// Generate Listing File
    openTemplate(listingTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepEPInverted(currentLayer, "listing");
    deleteAllFolders();
    applyListingGlassGray(currentLayer);
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DTS_BeerCanGlass(data) {
    var printTemplatePath = File("C:/Scripting/Templates/BeerCanGlass/Beer Can Glass - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/BeerCanGlass/Beer Can Glass - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/Beer Can Glass - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/Beer Can Glass - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepColor(currentLayer, "print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();
// Generate Listing File
    openTemplate(listingTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepColor(currentLayer, "listing");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    saveJPG(activeDocument, saveListingDestination, false);
    closeDocument();
}

function process_EP_BeerCanGlass(data) {
    var printTemplatePath = File("C:/Scripting/Templates/BeerCanGlass/EP Beer Can Glass - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/BeerCanGlass/Beer Can Glass - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP Beer Can Glass - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP Beer Can Glass - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepEPInverted(currentLayer, "print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    apply404040(currentLayer);    
    savePSD(activeDocument, savePrintDestination);
    closeDocument();
// Generate Listing File
    openTemplate(listingTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepEPInverted(currentLayer, "listing");
    deleteAllFolders();
    applyListingGlassGray(currentLayer);
    saveJPG(activeDocument, saveListingDestination, false);
    closeDocument();
}

function process_DTS_WaterBottle(data){
    var printTemplatePath = File("C:/Scripting/Templates/WaterBottle/Water Bottle - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/WaterBottle/Water Bottle - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/Water Bottle - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/Water Bottle - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepColor(currentLayer, "print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();
// Generate Listing File
    openTemplate(listingTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepColor(currentLayer, "listing");
    unlockAllFoldersExcept(["Bases"]);
    deleteAllFolders();
    savePSD(activeDocument, saveListingDestination);
    closeDocument();
}

function process_EP_PolarMug(data) {
    var printTemplatePath = File("C:/Scripting/Templates/PolarMug/EP - Polar Mug - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/PolarMug/Polar Mug - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - Polar Mug - " + data.fileSKU);
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Polar Mug - " + data.fileSKU;

//Generate Print File
    openTemplate(printTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepBothEP(currentLayer, "print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();
    
//Generate Listing Files
    openTemplate(listingTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepBothEP(currentLayer, "listing");
    deleteAllFolders();
    processBaseVariations(saveListingDestination);
    closeDocument();
}

function process_BR_BaseballCap(data) {
    var printTemplatePath = File("C:/Scripting/Templates/Hat/Hat - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Hat/Hat - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - Hat - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - Hat - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepColor(currentLayer, "print");
    deleteAllFolders();
    currentLayer = activeDocument.artLayers.getByName("Color");
    currentLayer.duplicate(currentDocument, ElementPlacement.PLACEATBEGINNING);
    currentLayer = activeDocument.artLayers.getByName("Color copy");
    currentLayer.rotate(180, AnchorPosition.MIDDLECENTER);
    MoveLayerTo(currentLayer, 3770, 2061);
    renameLayer("Color", "Left");
    renameLayer("Color copy", "Right");
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepColor(currentLayer, "listing");
    deleteAllFolders();
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DS_Mug(data) {
    var printTemplatePath = File("C:/Scripting/Templates/Mug/Mug - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Mug/Mug - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DS - Mug - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DS - Mug - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepColor(currentLayer, "print");
    deleteAllFolders();
    $.writeln(currentLayer);
    activeLayer = activeDocument.artLayers.getByName("Color");
    $.writeln(activeLayer);
    activeLayer.copy();
    magicWand (1900, 600, 0, true);
    currentDocument.paste();
    deselect();
    activeDocument.artLayers[0].merge();
    renameLayer("Layer 1", "Top Set");
    activeLayer = activeDocument.artLayers[0];
    magicWand (650, 1650, 0, true);
    currentDocument.paste();
    magicWand (1900, 1650, 0, true);
    currentDocument.paste();
    activeDocument.artLayers[0].merge();
    renameLayer("Layer 1", "Mid Set");
    magicWand (650, 2700, 0, true);
    currentDocument.paste();
    magicWand (1900, 2700, 0, true);
    currentDocument.paste();
    activeDocument.artLayers[0].merge();
    renameLayer("Layer 1", "Bot Set");
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    var currentDocument = activeDocument;
    var currentLayer = currentDocument.activeLayer;
    processFile(data, currentLayer);
    keepColor(currentLayer, "listing");
    deleteAllFolders();
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_BR_Patch(data) {
    var printTemplatePath = File("C:/Scripting/Templates/Patch/Patch - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Patch/Patch - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - Patch - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - Patch - " + data.fileSKU);

// //Generate Print File
//     openTemplate(printTemplatePath);
//     var currentDocument = activeDocument;
//     var currentLayer = currentDocument.activeLayer;
//     processFile(data, currentLayer);
//     keepColor(currentLayer, "print");
//     deleteAllFolders();
//     layerLock("Fill", false);
//     currentLayer = activeDocument.artLayers.getByName("Fill");
//     var bgRGB = convertHextoRGB(data.backgroundColor);
//     $.writeln(bgRGB.r + " " + bgRGB.g + " " + bgRGB.b);
//     applyColorOverlay(bgRGB);
//     rasterizeLayer();
//     activeDocument.artLayers[0].merge();
//     savePSD(activeDocument, savePrintDestination);

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data, getActiveLayer());
    keepColor(currentLayer, "listing");
    deleteAllFolders();
    layerLock("Fill", false);
    currentLayer = activeDocument.artLayers.getByName("Fill");
    var bgRGB = convertHextoRGB(data.backgroundColor);
    $.writeln(bgRGB.r + " " + bgRGB.g + " " + bgRGB.b);
    applyColorOverlay(bgRGB);
    rasterizeLayer();
     //some kind of, if all 3 of r g or b values are below a certain threshold, set Fill's Fill % to 90%?
    //e.g. black (0,0,0) is too dark and doesn't work with the multiply setting
    //order of operations to accomplish this is weird
    // set both Color and Fill layer to multiply. Set Fill to 90% if necessary.
    //Layer selection of Color, expand by 1 px, invert selection, create layer Mask?
    //alternatively, contract by 1 px, delete from Fill
    //don't need to merge layers in either of these cases
    setActiveLayer(activeDocument.artLayers.getByName("Color"));
    selectLayerPixels("Color");
    //magicWand(0, 0, false); //selection on correct layer not working is causing problems here
    activeDocument.selection.invert();
    activeDocument.selection.expand(1);
//    selectCurrentLayerPixels(); //currently we are not selecting pixels on the correct layer
    //setActiveLayer(activeDocument.artLayers.getByName("Fill"));
    makeMask("Fill");
    currentLayer.blendMode = BlendMode.MULTIPLY;
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    // saveJPG(activeDocument, saveListingDestination);
    // closeDocument();
}

// function processBaseVariations(saveListingDestination) {
//     var basesGroup = activeDocument.layerSets.getByName("Bases").artLayers;
//     if (basesGroup[0].name === "SILVER") {
//         applyEngravingOnSilver(activeDocument.artLayers.getByName("EP"));
//         setLayerVisibility("EP inverted", false);
//         var saveListingLoc = File(saveListingDestination + " - " + basesGroup[0].name);
//         saveJPG(activeDocument, saveListingLoc, false);
//         if (basesGroup.length > 1) {
//             activeDocument.artLayers.getByName("EP").remove();
//             selectCurrentLayerPixels();
//             activeDocument.layerSets.getByName("Bases").allLocked = false;
//             activeLayer = activeDocument.layerSets.getByName("Bases").artLayers.getByName("SILVER");
//             setActiveLayer(activeLayer);
//             $.writeln("currently selecting " + activeLayer.name);
//             makeMask();
//         }
//     }
//     var layerToHide;
//     var layerToShow;
//     for (var i = 1; i < basesGroup.length; i++) {
//         if (i === 1) {
//             layerToShow = basesGroup[i].name;
//             $.writeln("need to show " + layerToShow);
//             setLayerVisibility(layerToShow, true);
//             $.writeln("black base set up")
//         } else {
//             layerToHide = basesGroup[i-1].name;
//             layerToShow = basesGroup[i].name;
//             setLayerVisibility(layerToHide, false);
//             setLayerVisibility(layerToShow, true);
//         }
//         $.writeln("starting save for " + basesGroup)
//         saveListingLoc = File(saveListingDestination + " - " + basesGroup[i].name);
//         saveJPG(activeDocument, saveListingLoc, false);
//     }
// }

// // Layer Helpers
// function getActiveLayer() {
//     return app.activeDocument.activeLayer;
// }

// function setActiveLayer(newActiveLayer) {
//     app.activeDocument.activeLayer = newActiveLayer;
// } 

// function setLayerVisibility(layerName, visibility) {
//     // var storeActiveLayer = currentLayer;
//     // currentLayer = activeDocument.artLayers
//     var desc11 = new ActionDescriptor();
//     var idnull = stringIDToTypeID("null");
//     var list6 = new ActionList();
//     var ref8 = new ActionReference();
//     var idlayer = stringIDToTypeID("layer");
//     ref8.putName(idlayer, layerName);
//     list6.putReference(ref8);
//     desc11.putList(idnull, list6);
//     var desc = new ActionDescriptor()
//     var ref = new ActionReference();

//     var idlayer = stringIDToTypeID("layer");
//     ref = new ActionReference();
//     ref.putName(idlayer, layerName);
//     var desc = executeActionGet(ref);
//     var vis = desc.getBoolean(charIDToTypeID("Vsbl"));

//     if(visibility === false){
//         var idhide = stringIDToTypeID("hide");
//         executeAction(idhide, desc11, DialogModes.NO);
//     }else{
//         var idshow = stringIDToTypeID( "show" );
//         executeAction(idshow, desc11, DialogModes.NO);
//     }
// }

// //Photoshop Functions

// function selectCurrentLayerPixels() {
//     var id1268 = charIDToTypeID( "setd" );
//     var desc307 = new ActionDescriptor();
//     var id1269 = charIDToTypeID( "null" );
//     var ref257 = new ActionReference();
//     var id1270 = charIDToTypeID( "Chnl" );
//     var id1271 = charIDToTypeID( "fsel" );
//     ref257.putProperty( id1270, id1271 );
//     desc307.putReference( id1269, ref257 );
//     var id1272 = charIDToTypeID( "T   " );
//     var ref258 = new ActionReference();
//     var id1273 = charIDToTypeID( "Chnl" );
//     var id1274 = charIDToTypeID( "Chnl" );
//     var id1275 = charIDToTypeID( "Trsp" );
//     ref258.putEnumerated( id1273, id1274, id1275 );
//     desc307.putReference( id1272, ref258 );
//     executeAction( id1268, desc307, DialogModes.NO )
// }

// function makeMask() {
//     var id4564 = charIDToTypeID( "Mk  " );
//     var desc984 = new ActionDescriptor();
//     var id4565 = charIDToTypeID( "Nw  " );
//     var id4566 = charIDToTypeID( "Chnl" );
//     desc984.putClass( id4565, id4566 );
//     var id4567 = charIDToTypeID( "At  " );
//     var ref659 = new ActionReference();
//     var id4568 = charIDToTypeID( "Chnl" );
//     var id4569 = charIDToTypeID( "Chnl" );
//     var id4570 = charIDToTypeID( "Msk " );
//     ref659.putEnumerated( id4568, id4569, id4570 );
//     desc984.putReference( id4567, ref659 );
//     var id4571 = charIDToTypeID( "Usng" );
//     var id4572 = charIDToTypeID( "UsrM" );
//     var id4573 = charIDToTypeID( "RvlS" );
//     desc984.putEnumerated( id4571, id4572, id4573 );
//     executeAction( id4564, desc984, DialogModes.NO );
// }