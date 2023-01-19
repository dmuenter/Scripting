//Cross-product functions and variables

//Open template file
function openTemplate(path) {
    var currentFile = File(path);
    var currentTemplate = open(currentFile);
    app.displayDialogs = DialogModes.ERROR;
};

//Set image orientation type
function setOrientationTarget(data) {
    var setLayerTarget = "orientation" + data.imageOrientation;
    return activeDocument.layerSets.getByName("Targets").artLayers.getByName(setLayerTarget);
}

//Check if current layer is a Smart Object that can be operated on
function replaceSmartObject(data, targetLayer) {
    $.writeln("starting smart object check");
    if (targetLayer.kind != "LayerKind.SMARTOBJECT") {
        alert("selected layer is not a smart object");
    } else {
        replaceContents(data.inputFilePath, targetLayer);
        $.writeln("file should be swapped from " + targetLayer + " to " + data.inputFilePath);
    }
}

//Replace SmartObject Contents
function replaceContents(newFile, targetSmartObject) {
    setActiveLayer(targetSmartObject);
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

// //Separate SmartObject into Layers
function separateSmartObject() {
    callUnsmart();
}

//Process a file inside of template
function processFile(data) {
    var orientationTarget = setOrientationTarget(data);
    replaceSmartObject(data, orientationTarget);
    separateSmartObject();
    $.writeln("smartobject layer separated");
}

//Keep Color layer
function keepColor(currentLayer, type) {
    var currentGroupName = app.activeDocument.activeLayer.name;
    var activeGroup = app.activeDocument.activeLayer;
    currentLayer = activeGroup.artLayers.getByName("Color");
    currentLayer.move(activeDocument.layerSets.getByName("Targets"), ElementPlacement.PLACEBEFORE);

    if (type === "print") {
        deleteAllLayersExcept(["Color"]);
    } else { //for listing files
    
    }
}

//Keep EP Inverted layer
function keepEPInverted(currentLayer, type) {
    var currentGroupName = app.activeDocument.activeLayer.name;
    var activeGroup = app.activeDocument.activeLayer;
    currentLayer = activeGroup.artLayers.getByName("EP inverted");
    currentLayer.move(activeDocument.layerSets.getByName("Targets"), ElementPlacement.PLACEBEFORE);

    if (type === "print") { //for print files
       deleteAllLayersExcept(["EP inverted"]);
    } else { //for listing files
        deleteAllLayersExcept(["EP inverted"]);
    }    
}

//Keep EP and EP Inverted layers
function keepBothEP(currentLayer, type) {
    var currentGroupName = app.activeDocument.activeLayer.name;
    var activeGroup = app.activeDocument.activeLayer;
    currentLayer = activeGroup.artLayers.getByName("EP");
    currentLayer.move(activeDocument.layerSets.getByName("Targets"), ElementPlacement.PLACEBEFORE);
    currentLayer = activeGroup.artLayers.getByName("EP inverted");
    currentLayer.move(activeDocument.layerSets.getByName("Targets"), ElementPlacement.PLACEBEFORE);
   
    if (type === "print") {
        deleteAllLayersExcept(["EP", "EP inverted"])
    } else { //for listing files
        deleteAllLayersExcept(["EP", "EP inverted"])
    }
}

//Layer and Folder deletion

function deleteAllLayersExcept(layersToKeep) {
    var layersToDelete = [];
    for (var layerCt = 0; layerCt < activeDocument.artLayers.length; layerCt++) {
        //if (activeDocument.artLayers[layerCt].name === layersToKeep[layerCt].name) {
        if (layersToKeep.includes(activeDocument.artLayers[layerCt].name)) {
            $.writeln("skipping " + activeDocument.artLayers[layerCt].name);
            continue;
        } else {
            $.writeln("pushing for deletion " + activeDocument.artLayers[layerCt].name);
            layersToDelete.push(activeDocument.artLayers[layerCt]);
        }
    }
    for (var deleteTar = 0; deleteTar < layersToDelete.length; deleteTar++) {
        if (layersToDelete[deleteTar].allLocked === true) {
            $.writeln("not deleting " + layersToDelete[deleteTar] + " because locked");
            continue;
        } else {
        $.writeln("deleting " + layersToDelete[deleteTar].name);
        layersToDelete[deleteTar].remove();
        }
    }
}

function unlockAllFoldersExcept(foldersToKeepLocked) {
    var foldersToUnlock = [];
    var folderCt = activeDocument.layerSets.length;
    for (var folderUnlockCt = 0; folderUnlockCt < folderCt; folderUnlockCt++) {
        if (foldersToKeepLocked.includes(activeDocument.layerSets[folderUnlockCt].name)) {
            $.writeln("ensuring that " + activeDocument.layerSets[folderUnlockCt].name + " is locked");
            activeDocument.layerSets[folderUnlockCt].allLocked = true;
        } else {
            $.writeln ("unlocking " + activeDocument.layerSets[folderUnlockCt].name);
            activeDocument.layerSets[folderUnlockCt].allLocked = false;
        }
    }
}

function deleteAllFolders() {
    var foldersToDelete = [];
    var folderCt = activeDocument.layerSets.length;
    for (var folderDeleteCt = 0; folderDeleteCt < folderCt; folderDeleteCt++) {
        if (activeDocument.layerSets[folderDeleteCt].allLocked === false) {
            $.writeln("pushing for deletion " + activeDocument.layerSets[folderDeleteCt].name);
            foldersToDelete.push(activeDocument.layerSets[folderDeleteCt]);
        } else {
            $.writeln("skipping " + activeDocument.layerSets[folderDeleteCt].name);
        }
    }
    for (var deleteTar = 0; deleteTar < foldersToDelete.length; deleteTar++) {
        $.writeln("deleting " + foldersToDelete[deleteTar].name);
        foldersToDelete[deleteTar].remove();
    }
}

//Apply Glassware #404040 to print file
function apply404040(currentLayer) {
    applyColorOverlay(
        {
            r: 64,
            g: 64,
            b: 64,
        })
    var tempLayer = activeDocument.artLayers.add();
    tempLayer.name = "EP inverted";
    activeDocument.mergeVisibleLayers();
}

function applyListingGlassGray(currentLayer) {
    setActiveLayer(activeDocument.artLayers.getByName("EP inverted"));
    applyColorOverlay(
        {
            r: 188,
            g: 188,
            b: 188,
        })
        var tempLayer = activeDocument.artLayers.add();
        tempLayer.name = "EP inverted";
        activeDocument.mergeVisibleLayers();
}

function applyEngravingOnSilver(currentLayer) {
    setActiveLayer(activeDocument.artLayers.getByName("EP"));
    applyColorOverlay(
        {
            r: 82,
            g: 45,
            b: 16,
        })
}


    
function applyColorOverlay(color) {
    var desc6 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(charIDToTypeID('Prpr'), charIDToTypeID('Lefx'));
    ref1.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    desc6.putReference(charIDToTypeID('null'), ref1);
    var desc7 = new ActionDescriptor();
    var desc8 = new ActionDescriptor();
    desc8.putBoolean(charIDToTypeID('enab'), true);
    desc8.putBoolean(stringIDToTypeID('present'), true);
    desc8.putBoolean(stringIDToTypeID('showInDialog'), true);
    desc8.putEnumerated(charIDToTypeID('Md  '), charIDToTypeID('BlnM'), charIDToTypeID('Nrml'));
    var desc9 = new ActionDescriptor();
    desc9.putDouble(charIDToTypeID('Rd  '), color.r);
    desc9.putDouble(charIDToTypeID('Grn '), color.g);
    desc9.putDouble(charIDToTypeID('Bl  '), color.b);
    desc8.putObject(charIDToTypeID('Clr '), charIDToTypeID('RGBC'), desc9);
    desc8.putUnitDouble(charIDToTypeID('Opct'), charIDToTypeID('#Prc'), 100.000000);
    desc7.putObject(charIDToTypeID('SoFi'), charIDToTypeID('SoFi'), desc8);
    desc6.putObject(charIDToTypeID('T   '), charIDToTypeID('Lefx'), desc7);
    executeAction(charIDToTypeID('setd'), desc6, DialogModes.NO);
};

function savePSD(activeDocument, destination) {
    var psdSaveOptions = new PhotoshopSaveOptions();
    psdSaveOptions.alphaChannels = true;
    psdSaveOptions.embedColorProfile = true;
    activeDocument.saveAs(destination, psdSaveOptions, false, Extension.LOWERCASE);
}

function saveJPG(activeDocument, destination, humanAssist) {
    if (humanAssist === true) {
        savePSD(activeDocument, destination);
    } else {
        var jpgSaveOptions = new JPEGSaveOptions();
        jpgSaveOptions.embedColorProfile = true;
        jpgSaveOptions.quality = 12;
        activeDocument.saveAs(destination, jpgSaveOptions, false, Extension.LOWERCASE);
    }
}

function closeDocument() {
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

function processBaseVariations(saveListingDestination) {
    var basesGroup = activeDocument.layerSets.getByName("Bases").artLayers;
    if (basesGroup[0].name === "SILVER") {
        applyEngravingOnSilver(activeDocument.artLayers.getByName("EP"));
        setLayerVisibility("EP inverted", false);
        var saveListingLoc = File(saveListingDestination + " - " + basesGroup[0].name);
        saveJPG(activeDocument, saveListingLoc, false);
        if (basesGroup.length > 1) {
            activeDocument.artLayers.getByName("EP").remove();
            selectCurrentLayerPixels();
            activeDocument.layerSets.getByName("Bases").allLocked = false;
            activeLayer = activeDocument.layerSets.getByName("Bases").artLayers.getByName("SILVER");
            setActiveLayer(activeLayer);
            $.writeln("currently selecting " + activeLayer.name);
            makeMask();
        }
    }
    var layerToHide;
    var layerToShow;
    for (var i = 1; i < basesGroup.length; i++) {
        if (i === 1) {
            layerToShow = basesGroup[i].name;
            $.writeln("need to show " + layerToShow);
            setLayerVisibility(layerToShow, true);
            $.writeln("black base set up")
        } else {
            layerToHide = basesGroup[i-1].name;
            layerToShow = basesGroup[i].name;
            setLayerVisibility(layerToHide, false);
            setLayerVisibility(layerToShow, true);
        }
        $.writeln("starting save for " + basesGroup)
        saveListingLoc = File(saveListingDestination + " - " + basesGroup[i].name);
        saveJPG(activeDocument, saveListingLoc, false);
    }
}

// Layer Helpers
function getActiveLayer() {
    return app.activeDocument.activeLayer;
}

function setActiveLayer(newActiveLayer) {
    if (typeof newActiveLayer === 'string') {
        app.activeDocument.activeLayer = getLayerByName(newActiveLayer)
    } else {
        app.activeDocument.activeLayer = newActiveLayer;
    }
}

function getLayerByName(name) {
    return activeDocument.artLayers.getByName(name);
}

function getFolderByName(name) {
    return activeDocument.layerSets.getByName(name);
}

function setLayerVisibility(layerName, visibility) {
    // var storeActiveLayer = currentLayer;
    // currentLayer = activeDocument.artLayers
    var desc11 = new ActionDescriptor();
    var idnull = stringIDToTypeID("null");
    var list6 = new ActionList();
    var ref8 = new ActionReference();
    var idlayer = stringIDToTypeID("layer");
    ref8.putName(idlayer, layerName);
    list6.putReference(ref8);
    desc11.putList(idnull, list6);
    var desc = new ActionDescriptor()
    var ref = new ActionReference();

    var idlayer = stringIDToTypeID("layer");
    ref = new ActionReference();
    ref.putName(idlayer, layerName);
    var desc = executeActionGet(ref);
    var vis = desc.getBoolean(charIDToTypeID("Vsbl"));

    if(visibility === false){
        var idhide = stringIDToTypeID("hide");
        executeAction(idhide, desc11, DialogModes.NO);
    }else{
        var idshow = stringIDToTypeID( "show" );
        executeAction(idshow, desc11, DialogModes.NO);
    }
}

function layerLock(name, status) {
    activeDocument.artLayers.getByName(name).allLocked = status;
}

//Photoshop Functions

function selectLayerPixels(targetLayerName) {
    var storeLayer = getActiveLayer();
    setActiveLayer(targetLayerName);

    var id1268 = charIDToTypeID( "setd" );
    var desc307 = new ActionDescriptor();
    var id1269 = charIDToTypeID( "null" );
    var ref257 = new ActionReference();
    var id1270 = charIDToTypeID( "Chnl" );
    var id1271 = charIDToTypeID( "fsel" );
    ref257.putProperty( id1270, id1271 );
    desc307.putReference( id1269, ref257 );
    var id1272 = charIDToTypeID( "T   " );
    var ref258 = new ActionReference();
    var id1273 = charIDToTypeID( "Chnl" );
    var id1274 = charIDToTypeID( "Chnl" );
    var id1275 = charIDToTypeID( "Trsp" );
    ref258.putEnumerated( id1273, id1274, id1275 );
    desc307.putReference( id1272, ref258 );
    executeAction( id1268, desc307, DialogModes.NO )

    setActiveLayer(storeLayer);
}

function makeMask(targetLayerName) {
    var storeLayer = getActiveLayer();
    setActiveLayer(targetLayerName);

    var id4564 = charIDToTypeID( "Mk  " );
    var desc984 = new ActionDescriptor();
    var id4565 = charIDToTypeID( "Nw  " );
    var id4566 = charIDToTypeID( "Chnl" );
    desc984.putClass( id4565, id4566 );
    var id4567 = charIDToTypeID( "At  " );
    var ref659 = new ActionReference();
    var id4568 = charIDToTypeID( "Chnl" );
    var id4569 = charIDToTypeID( "Chnl" );
    var id4570 = charIDToTypeID( "Msk " );
    ref659.putEnumerated( id4568, id4569, id4570 );
    desc984.putReference( id4567, ref659 );
    var id4571 = charIDToTypeID( "Usng" );
    var id4572 = charIDToTypeID( "UsrM" );
    var id4573 = charIDToTypeID( "RvlS" );
    desc984.putEnumerated( id4571, id4572, id4573 );
    executeAction( id4564, desc984, DialogModes.NO );

    setActiveLayer(storeLayer);
}

function getLayerWidth(activeLayer) {
    $.writeln(activeLayer.name);
    var layerBounds = activeLayer.bounds;
    return layerBounds[2] - layerBounds[0];
}

function getLayerHeight(activeLayer) {
    $.writeln(activeLayer.name);
    var layerBounds = activeLayer.bounds;
    return layerBounds[3] - layerBounds[1];
}

function MoveLayerTo(activeLayer, fX,fY) { //original by Max Kielland
    $.writeln(activeLayer.name);
    var layerWidth = getLayerWidth(activeLayer);
    $.writeln(layerWidth);
    var layerHeight = getLayerHeight(activeLayer);
    $.writeln(layerHeight);

    var Position = activeLayer.bounds;
    Position[0] = fX - Position[0] + (layerWidth / 2);
    Position[1] = fY - Position[1] + (layerHeight / 2);
  
    activeLayer.translate(-Position[0],-Position[1]);
  }

  function renameLayer(currentName, desiredName) {
    currentLayer = activeDocument.artLayers.getByName(currentName);
    currentLayer.name = desiredName;
  }

  function magicWand (x, y, tol, sampleAllLyrs){
    var idsetd = charIDToTypeID( "setd" );
        var desc2 = new ActionDescriptor();
        var idnull = charIDToTypeID( "null" );
            var ref1 = new ActionReference();
            var idChnl = charIDToTypeID( "Chnl" );
            var idfsel = charIDToTypeID( "fsel" );
            ref1.putProperty( idChnl, idfsel );
        desc2.putReference( idnull, ref1 );
        var idT = charIDToTypeID( "T   " );
            var desc3 = new ActionDescriptor();
            var idHrzn = charIDToTypeID( "Hrzn" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc3.putUnitDouble( idHrzn, idPxl, x );
            var idVrtc = charIDToTypeID( "Vrtc" );
            var idPxl = charIDToTypeID( "#Pxl" );
            desc3.putUnitDouble( idVrtc, idPxl, y);
        var idPnt = charIDToTypeID( "Pnt " );
        desc2.putObject( idT, idPnt, desc3 );
        var idTlrn = charIDToTypeID( "Tlrn" );
        desc2.putInteger( idTlrn, tol);
        var idAntA = charIDToTypeID( "AntA" );
        desc2.putBoolean( idAntA, true );
        var idCntg = charIDToTypeID( "Cntg" );
        desc2.putBoolean( idCntg, true );

        if (sampleAllLyrs == true) {
        var idMrgd = charIDToTypeID( "Mrgd" ); //added a 'sample all layers' uhhh element
        desc2.putBoolean( idMrgd, true);
        }

    executeAction( idsetd, desc2, DialogModes.NO );
    };

function rasterizeLayer() {
    var idrasterizeLayer = stringIDToTypeID( "rasterizeLayer" );
    var desc5 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref4.putEnumerated( idLyr, idOrdn, idTrgt );
    desc5.putReference( idnull, ref4 );
    var idWhat = charIDToTypeID( "What" );
    var idrasterizeItem = stringIDToTypeID( "rasterizeItem" );
    var idlayerStyle = stringIDToTypeID( "layerStyle" );
    desc5.putEnumerated( idWhat, idrasterizeItem, idlayerStyle );
executeAction( idrasterizeLayer, desc5, DialogModes.NO );
}
    

//Selection functions

function selectAll() {
    app.activeDocument.selection.selectAll();
}

function copySelection() {
    app.activeDocument.selection.copy();
}

function deselect() {
    app.activeDocument.selection.deselect();
}

function paste() {
    app.activeDocument.paste();
}


//Some other helpers

function convertHextoRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}