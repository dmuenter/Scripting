#include "/Scripting/SupportScripts/Unsmart.jsx";
#include "/Scripting/ConstructionScripts.jsx";

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
    {   
        key: "br_PatchCheckbox",
        functionToRun: process_BR_Patch
    },
    {   
        key: "br_BeanieCheckbox",
        functionToRun: process_BR_Beanie
    },
    {   
        key: "br_PillowcaseCheckbox",
        functionToRun: process_BR_Pillowcase
    },
    {   
        key: "ep_DogTagCheckbox",
        functionToRun: process_EP_DogTag
    },
    {   
        key: "ds_DogTagCheckbox",
        functionToRun: process_DS_DogTag
    },
    {   
        key: "ep_KeyChainCheckbox",
        functionToRun: process_EP_KeyChain
    },
    {   
        key: "ds_KeyChainCheckbox",
        functionToRun: process_DS_KeyChain
    },
    {
        key: "br_ApronCheckbox",
        functionToRun: process_BR_Apron
    },
    {
        key: "br_CrewSocksCheckbox",
        functionToRun: process_BR_CrewSocks
    },
    {
        key: "ds_MousePadCheckbox",
        functionToRun: process_DS_MousePad
    },
    {
        key: "ds_SequinSquareCheckbox",
        functionToRun: process_DS_SequinSquare
    },
    {
        key: "ds_SequinHeartCheckbox",
        functionToRun: process_DS_SequinHeart
    },
];

// Product Scripts (identification stage)

function process_DTS_ScotchGlassC(data) {
//Capitol
    var printTemplatePath = File("C:/Scripting/Templates/ScotchGlass/Scotch - Capitol - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/ScotchGlass/Scotch - Capitol - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/Scotch - Capitol - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/Scotch - Capitol - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();
// Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
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
    processFile(data);
    keepEPInverted("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    apply404040("EP inverted");    
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

// Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    applyListingGlassGray("EP inverted");
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
    processFile(data);
    keepColor("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

// Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
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
    processFile(data);
    keepEPInverted("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    apply404040("EP inverted");    
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

// Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    applyListingGlassGray("EP inverted");
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
    processFile(data);
    keepColor("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

// Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
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
    processFile(data);
    keepEPInverted("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    $.writeln("about to apply 404040");
    apply404040("EP inverted");    
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

// Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    applyListingGlassGray("EP inverted");
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
    processFile(data);
    keepColor("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

// Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
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
    processFile(data);
    keepBothEP("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();
    
//Generate Listing Files
    openTemplate(listingTemplatePath);
    processFile(data);
    keepBothEP("listing");
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
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    setActiveLayer("Color"); //currentLayer = activeDocument.artLayers.getByName("Color");
    getActiveLayer().duplicate(activeDocument, ElementPlacement.PLACEATBEGINNING);
    setActiveLayer("Color copy"); //currentLayer = activeDocument.artLayers.getByName("Color copy");
    getActiveLayer().rotate(180, AnchorPosition.MIDDLECENTER);
    MoveLayerTo(getActiveLayer(), 3770, 2061);
    renameLayer("Color", "Left");
    renameLayer("Color copy", "Right");
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
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
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    setActiveLayer("Color");
    getActiveLayer().copy();
    magicWand (1900, 600, 0, true);
    activeDocument.paste();
    //deselect();
    activeDocument.artLayers[0].merge();
    renameLayer("Color", "Top Set");
    activeLayer = activeDocument.artLayers[0];
    magicWand (650, 1650, 0, true);
    activeDocument.paste();
    magicWand (1900, 1650, 0, true);
    activeDocument.paste();
    activeDocument.artLayers[0].merge();
    renameLayer("Layer 1", "Mid Set");
    magicWand (650, 2700, 0, true);
    activeDocument.paste();
    magicWand (1900, 2700, 0, true);
    activeDocument.paste();
    activeDocument.artLayers[0].merge();
    renameLayer("Layer 1", "Bot Set");
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_BR_Patch(data) {
    var printTemplatePath = File("C:/Scripting/Templates/Patch/Patch - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Patch/Patch - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - Patch - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - Patch - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    layerLock("Fill", false);
    applyColorOverlay("Fill", convertHextoRGB(data.backgroundColor));
    setActiveLayer("Fill");
    rasterizeLayer();
    activeDocument.artLayers[0].merge();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data, getActiveLayer());
    keepColor("listing");
    deleteAllFolders();
    layerLock("Fill", false);
    var bgRGB = convertHextoRGB(data.backgroundColor);
    applyColorOverlay("Fill", bgRGB);
    setActiveLayer("Fill");
    rasterizeLayer();
    if (bgRGB.r <= 35 && bgRGB.g <= 35 && bgRGB.b <= 35) {
        setFillOpacity("Fill", 90);
        }
    selectLayerPixels("Color");
    activeDocument.selection.invert();
    activeDocument.selection.expand(1);
    makeMask("Fill");
    getLayerByName("Fill").blendMode = BlendMode.MULTIPLY;
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_BR_Beanie(data) {
    var printTemplatePath = File("C:/Scripting/Templates/Beanie/Beanie - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Beanie/Beanie - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - Beanie - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - Beanie - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_BR_Pillowcase (data) {
    var printTemplatePath = File("C:/Scripting/Templates/Pillowcase/Pillowcase - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Pillowcase/Pillowcase - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - Pillowcase - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - Pillowcase - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_EP_DogTag(data) {
    var printTemplatePath = File("C:/Scripting/Templates/DogTag KeyChain/EP DT KC - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/DogTag KeyChain/DT KC - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - DT KC - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - DT - " + data.fileSKU);

// //Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepBothEP("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepBothEP("listing");
    deleteAllFolders();
    applyColorOverlay("EP", convertHextoRGB("#c8c8c8"));
    applyColorOverlay("EP inverted", convertHextoRGB("#c8c8c8"));
    savePSD(activeDocument, saveListingDestination);
    closeDocument();
}

function process_EP_KeyChain(data) {
var printTemplatePath = File("C:/Scripting/Templates/DogTag KeyChain/EP DT KC - Template.psd");
var listingTemplatePath = File("C:/Scripting/Templates/DogTag KeyChain/DT KC - Listing Template.psd");
var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - DT KC - " + data.fileSKU);
var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - KC - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepBothEP("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepBothEP("listing");
    deleteAllFolders();
    MoveLayerTo(getLayerByName("EP"), 1967, 2962);
    MoveLayerTo(getLayerByName("EP inverted"), 1967, 2962);
    setLayerVisibility(activeDocument.layerSets.getByName("Dog Tag"), false);
    setLayerVisibility(activeDocument.layerSets.getByName("Key Chain"), true);
    applyColorOverlay("EP", convertHextoRGB("#c8c8c8"));
    applyColorOverlay("EP inverted", convertHextoRGB("#c8c8c8"));
    savePSD(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DS_DogTag(data) {
    var printTemplatePath = File("C:/Scripting/Templates/DogTag KeyChain/DS DT KC - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/DogTag KeyChain/DT KC - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DS - DT KC - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DS - DT - " + data.fileSKU);

// //Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DS_KeyChain(data) {
var printTemplatePath = File("C:/Scripting/Templates/DogTag KeyChain/DS DT KC - Template.psd");
var listingTemplatePath = File("C:/Scripting/Templates/DogTag KeyChain/DT KC - Listing Template.psd");
var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DS - DT KC - " + data.fileSKU);
var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DS - KC - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    MoveLayerTo(getLayerByName("Color"), 1967, 2962);
    setLayerVisibility(activeDocument.layerSets.getByName("Dog Tag"), false);
    setLayerVisibility(activeDocument.layerSets.getByName("Key Chain"), true);
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_BR_Apron(data) {
    var printTemplatePath = File("C:/Scripting/Templates/Apron/Apron - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Apron/Apron - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - Apron - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - Apron - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_BR_CrewSocks(data) {
    var printTemplatePath = File("C:/Scripting/Templates/CrewSocks/Crew Socks - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/CrewSocks/Crew Socks - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - CS - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - CS - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DS_MousePad(data) {
    var printTemplatePath = File("C:/Scripting/Templates/MousePad/MousePad - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/MousePad/MousePad - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - CS - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - CS - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    layerLock("Fill", false);
    applyColorOverlay("Fill", convertHextoRGB(data.backgroundColor));
    setActiveLayer("Fill");
    rasterizeLayer();
    activeDocument.artLayers[0].merge();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

// //Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data, getActiveLayer());
    keepColor("listing");
    deleteAllFolders();
    layerLock("Fill", false);
    var bgRGB = convertHextoRGB(data.backgroundColor);
    applyColorOverlay("Fill", bgRGB);
    setActiveLayer("Fill");
    rasterizeLayer();
    if (bgRGB.r <= 35 && bgRGB.g <= 35 && bgRGB.b <= 35) {
        setFillOpacity("Fill", 90);
        }
    selectLayerPixels("Color");
    activeDocument.selection.invert();
    activeDocument.selection.expand(1);
    makeMask("Fill");
    getLayerByName("Fill").blendMode = BlendMode.MULTIPLY;
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DS_SequinSquare(data) {
    var printTemplatePath = File("C:/Scripting/Templates/SequinPillows/Sequin Square - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/SequinPillows/Sequin Square - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DS - Sequin Square - " + data.fileSKU);
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DS - Sequin Square - " + data.fileSKU;

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    var saveUncovered = File(saveListingDestination + " - UNCOVERED");
    saveJPG(activeDocument, saveUncovered);
    setLayerVisibility("Hand", true);
    setLayerVisibility(activeDocument.layerSets.getByName("Bases"), true)
    var saveSilver = File(saveListingDestination + " - SILVER");
    saveJPG(activeDocument, saveSilver);
    closeDocument();
}

function process_DS_SequinSquare(data) {
    var printTemplatePath = File("C:/Scripting/Templates/SequinPillows/Sequin Square - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/SequinPillows/Sequin Square - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DS - Sequin Square - " + data.fileSKU);
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DS - Sequin Square - " + data.fileSKU;

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    var saveLocation = File(saveListingDestination + " - UNCOVERED");
    saveJPG(activeDocument, saveLocation);
    setLayerVisibility("Hand", true);
    setLayerVisibility(activeDocument.layerSets.getByName("Bases"), true);
    saveLocation = File(saveListingDestination + " - SILVER");
    saveJPG(activeDocument, saveLocation);
    closeDocument();
}

function process_DS_SequinHeart(data) {
    var printTemplatePath = File("C:/Scripting/Templates/SequinPillows/Sequin Heart - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/SequinPillows/Sequin Heart - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DS - Sequin Heart - " + data.fileSKU);
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DS - Sequin Heart - " + data.fileSKU;

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    var saveLocation = File(saveListingDestination + " - UNCOVERED");
    saveJPG(activeDocument, saveLocation);
    var basesGroup = activeDocument.layerSets.getByName("Bases").artLayers;
    setLayerVisibility(activeDocument.layerSets.getByName("Bases"), true);
    for (var i = 0; i < basesGroup.length; i++) {
        setLayerVisibility(basesGroup[i], true);
        if (i != 0) {setLayerVisibility(basesGroup[i-1], false);
        }
        saveLocation = File(saveListingDestination + " - " + basesGroup[i].name);
        saveJPG(activeDocument, saveLocation);
    }
    closeDocument();

}