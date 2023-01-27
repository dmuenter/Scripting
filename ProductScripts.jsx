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
    {
        key: "dts_AluminumWalletCheckbox",
        functionToRun: process_DTS_AluminumWallet
    },
    {
        key: "dts_CeramicCoasterCheckbox",
        functionToRun: process_DTS_CeramicCoaster
    },
    {
        key: "dts_MagnetCheckbox",
        functionToRun: process_DTS_Magnet
    },
    {
        key: "dts_GlassCoasterCheckbox",
        functionToRun: process_DTS_GlassCoaster
    },
    {
        key: "dts_FlaskCheckbox",
        functionToRun: process_DTS_Flask
    },
    {
        key: "ep_FlaskCheckbox",
        functionToRun: process_EP_Flask
    },
    {
        key: "dts_MasonCheckbox",
        functionToRun: process_DTS_Mason
    },
    {
        key: "ep_VectorCheckbox",
        functionToRun: process_EP_Vector
    },
    {
        key: "dts_VectorCheckbox",
        functionToRun: process_DTS_Vector
    },
    {
        key: "ep_BeerMugCheckbox",
        functionToRun: process_EP_BeerMug
    },
    {
        key: "ep_PintGlassCheckbox",
        functionToRun: process_EP_PintGlass
    },
    {
        key: "ep_StemlessWineCheckbox",
        functionToRun: process_EP_StemlessWine
    },
    {
        key: "ep_WineGlassCheckbox",
        functionToRun: process_EP_WineGlass
    },
    {
        key: "ep_PilsnerGlassCheckbox",
        functionToRun: process_EP_PilsnerGlass
    },
    {
        key: "dts_OrnamentDangleCheckbox",
        functionToRun: process_DTS_OrnamentDangle
    },
    {
        key: "dts_WoodMagnetCheckbox",
        functionToRun: process_DTS_WoodMagnet
    },
    {
        key: "dts_WoodPrintCheckbox",
        functionToRun: process_DTS_WoodPrint
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
    applyEngravingOnSilver("EP");
    setLayerVisibility("EP inverted", false);
    saveJPG(activeDocument, File(saveListingDestination + " - SILVER"));
    setLayerVisibility("EP", false);
    selectLayerPixels("EP inverted");
    layerLock("SILVER", false);
    makeMask("SILVER");
    setLayerVisibility("EP inverted", false);
    setActiveLayer("SILVER");
    processBases(saveListingDestination);
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
    processBases(saveListingDestination);
    closeDocument();
}

function process_DTS_AluminumWallet(data){
    var printTemplatePath = File("C:/Scripting/Templates/AluminumWallet/Aluminum Wallet - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/AluminumWallet/Aluminum Wallet - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - AW - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - AW  - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

// Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    unlockAllFoldersExcept(["Bases"]);
    deleteAllFolders();
    if (data.imageOrientation === "Wide") {
        activeDocument.rotateCanvas(-90);
    }
    savePSD(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DTS_CeramicCoaster(data) {
    var printTemplatePath = File("C:/Scripting/Templates/CeramicCoaster/Ceramic Coaster - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/CeramicCoaster/Ceramic Coaster - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - CST - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - CST  - " + data.fileSKU);

// //Generate Print File
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
    activeDocument.artLayers[0].merge();
    getLayerByName("Fill").blendMode = BlendMode.MULTIPLY;
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DTS_Magnet(data) {
    var printTemplatePath = File("C:/Scripting/Templates/Magnet/Magnet - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Magnet/Magnet - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - MT - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - MT - " + data.fileSKU);

// //Generate Print File
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
    activeDocument.artLayers[1].merge();
    getLayerByName("Fill").blendMode = BlendMode.MULTIPLY;
    if (data.imageOrientation === "Wide") {
        activeDocument.rotateCanvas(-90);
    }
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DTS_GlassCoaster(data) {
    var printTemplatePath = File("C:/Scripting/Templates/CoasterGlass/Glass Coaster - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/CoasterGlass/Glass Coaster - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - Glass Coaster - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Glass Coaster - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

// Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();

}

function process_DTS_Flask(data) {
    var printTemplatePath = File("C:/Scripting/Templates/Flask/DTS - Flask - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Flask/Flask - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - Flask - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Flask - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

// Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_EP_Flask(data) {
    var printTemplatePath = File("C:/Scripting/Templates/Flask/EP - Flask - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Flask/Flask - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - Flask - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Flask - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepEP("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

// Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepEP("listing");
    deleteAllFolders();
    applyEngravingOnSilver("EP");
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DTS_Mason(data) {
    var printTemplatePath = File("C:/Scripting/Templates/Mason/DTS - Mason - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Mason/Mason - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - Mason - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Mason - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

// Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_EP_Vector(data) {
    var printTemplatePath = File("C:/Scripting/Templates/Vector/EP - Vector - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Vector/Vector - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - VT - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - VT - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepEPInverted("print");
    deleteAllFolders();
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    unlockAllFoldersExcept(["Bases"]);
    for (var i = 0; i < 3; i++) { //iterate through folders 0, 1, 2
        selectLayerPixels("EP inverted");
        makeMask(activeDocument.layerSets[i]);
    }
    setLayerVisibility("EP inverted", false);
    savePSD(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DTS_Vector(data) {
    var printTemplatePath = File("C:/Scripting/Templates/Vector/DTS - Vector - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/Vector/Vector - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - VT - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - VT - " + data.fileSKU);

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
    unlockAllFoldersExcept(["Bases"]);
    deleteAllFolders();
    savePSD(activeDocument, saveListingDestination);
    closeDocument();
}

function process_EP_BeerMug(data) {
    var printTemplatePath = File("C:/Scripting/Templates/BeerMug/EP - Beer Mug - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/BeerMug/EP - Beer Mug - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - Beer Mug - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Beer Mug - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepEPInverted("print");
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

function process_EP_PintGlass(data) {
    var printTemplatePath = File("C:/Scripting/Templates/BeerMug/EP - Beer Mug - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/BeerMug/EP - Beer Mug - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - Beer Mug - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Beer Mug - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepEPInverted("print");
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

function process_EP_StemlessWine(data) {
    var printTemplatePath = File("C:/Scripting/Templates/WineGlasses/EP - Wine Glasses - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/WineGlasses/Stemless Wine - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - Wine Glass and Stemless - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Stemless Wine - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepEPInverted("print");
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

function process_EP_WineGlass(data) {
    var printTemplatePath = File("C:/Scripting/Templates/WineGlasses/EP - Wine Glasses - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/WineGlasses/Wine Glass - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - Wine Glass and Stemless - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Wine Glass - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepEPInverted("print");
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

function process_EP_PilsnerGlass(data) {
    var printTemplatePath = File("C:/Scripting/Templates/PilsnerGlass/EP - Pilsner - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/PilsnerGlass/Pilsner - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - Pilsner - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Pilsner - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepEPInverted("print");
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

function process_DTS_OrnamentDangle(data) {
    var printTemplatePath = File("C:/Scripting/Templates/OrnamentDangle/Ornament Sheet - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/OrnamentDangle/Ornament Dangle - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - Ornament Sheet - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Ornament Dangle - " + data.fileSKU);

//Generate Print File
    openTemplate(printTemplatePath);
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    setActiveLayer("Color");
    magicWand(0, 0, 0, false);
    activeDocument.selection.invert();
    activeDocument.selection.expand(150);
    activeDocument.selection.smooth(40);
    createNewLayer("Fill");
    setActiveLayer("Fill");
    activeDocument.selection.fill(hexToSolidColorSwatch(data.backgroundColor));
    deselect();
    setActiveLayer("Fill").move(activeDocument.layerSets.getByName("Ornament Shape"), ElementPlacement.PLACEATBEGINNING);
    setActiveLayer("Color").move(activeDocument.layerSets.getByName("Ornament Shape"), ElementPlacement.PLACEATBEGINNING);
    activeDocument.layerSets.getByName("Ornament Shape").allLocked = false;
    applyColorOverlay(activeDocument.layerSets.getByName("Ornament Shape").artLayers.getByName("Hanger"), convertHextoRGB(data.backgroundColor));
    savePSD(activeDocument, savePrintDestination);
    closeDocument();

//Generate Listing File
    openTemplate(listingTemplatePath);
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    setActiveLayer("Color");
    magicWand(0, 0 , 0, false);
    activeDocument.selection.invert();
    activeDocument.selection.expand(40);
    activeDocument.selection.smooth(20);
    createNewLayer("Fill");
    setActiveLayer("Fill");
    activeDocument.selection.fill(hexToSolidColorSwatch(data.backgroundColor));
    deselect();
    unlockAllFoldersExcept([]);
    setActiveLayer("Color").move(activeDocument.layerSets.getByName("Pieces"), ElementPlacement.PLACEATEND);
    setActiveLayer("Fill").move(activeDocument.layerSets.getByName("Pieces"), ElementPlacement.PLACEATEND);
    setActiveLayer(activeDocument.layerSets.getByName("Pieces").artLayers.getByName("AttachmentCircle")).move(activeDocument.layerSets.getByName("Pieces"), ElementPlacement.PLACEATEND);
    applyColorOverlay(activeDocument.layerSets.getByName("Pieces").artLayers.getByName("AttachmentCircle"), convertHextoRGB(data.backgroundColor));
    savePSD(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DTS_WoodMagnet(data) {
    var printTemplatePath = File("C:/Scripting/Templates/WoodMagnet/DTS - Wood Magnet - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/WoodMagnet/Wood Magnet - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - Wood Magnet - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Wood Magnet - " + data.fileSKU);

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
    unlockAllFoldersExcept(["Bases"]);
    deleteAllFolders();
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}

function process_DTS_WoodPrint(data) {
    var printTemplatePath = File("C:/Scripting/Templates/WoodPrint/DTS - Wood Print - Template.psd");
    var listingTemplatePath = File("C:/Scripting/Templates/WoodPrint/Wood Print - Listing Template.psd");
    var savePrintDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - WP - " + data.fileSKU);
    var saveListingDestination = File("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - WP - " + data.fileSKU);

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
    unlockAllFoldersExcept(["Bases"]);
    deleteAllFolders();
    if (data.imageOrientation === "Wide") {
        activeDocument.rotateCanvas(-90);
    }
    saveJPG(activeDocument, saveListingDestination);
    closeDocument();
}