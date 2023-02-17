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
    {
        key: "dts_SCBCheckbox",
        functionToRun: process_DTS_SCB
    },
    {
        key: "ep_SCBCheckbox",
        functionToRun: process_EP_SCB
    },
    {
        key: "dts_CandleCheckbox",
        functionToRun: process_DTS_Candle
    },
    {
        key: "vinyl_StickerCheckbox",
        functionToRun: process_VINYL_Sticker
    },
    {
        key: "dts_PolarMugCheckbox",
        functionToRun: process_DTS_PolarMug
    },
    {
        key: "dts_PintGlassCheckbox",
        functionToRun: process_DTS_PintGlass
    },
    {
        key: "dts_PilsnerGlassCheckbox",
        functionToRun: process_DTS_PilsnerGlass
    },
    {
        key: "dts_StemlessWineCheckbox",
        functionToRun: process_DTS_StemlessWine
    },
    {
        key: "dts_WineGlassCheckbox",
        functionToRun: process_DTS_WineGlass
    },
];

// Product Scripts (identification stage)

function process_DTS_ScotchGlassC(data) {
//Capitol
    var printTemplatePath = "C:/Scripting/Templates/ScotchGlass/Scotch - Capitol - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/ScotchGlass/Scotch - Capitol - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - SCOTCH - Capitol - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Scotch - Capitol - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination), false);
    closeDocument();
}

function process_EP_ScotchGlassC(data) {
    var printTemplatePath = "C:/Scripting/Templates/ScotchGlass/EP Scotch - Capitol - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/ScotchGlass/Scotch - Capitol - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - SCOTCH - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Scotch - Capitol - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepEPInverted("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    apply404040("EP Inverted");    
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    applyListingGlassGray("EP Inverted");
    setActiveLayer("EP Inverted");
    applyListingGlassInnerGlow();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_ScotchGlassM(data) {
//Manhatan
    var printTemplatePath = "C:/Scripting/Templates/ScotchGlass/Scotch - Manhatan - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/ScotchGlass/Scotch - Manhatan - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - SCOTCH - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Scotch - Manhatan - " + data.fileSKU;
    
//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination), false);
    closeDocument();
}
    
function process_EP_ScotchGlassM(data) {
//Manhatan
    var printTemplatePath = "C:/Scripting/Templates/ScotchGlass/EP Scotch - Manhatan - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/ScotchGlass/Scotch - Manhatan - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - SCOTCH - Manhatan - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Scotch - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepEPInverted("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    apply404040("EP Inverted");    
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    applyListingGlassGray("EP Inverted");
    setActiveLayer("EP Inverted");
    applyListingGlassInnerGlow();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_BeerCanGlass(data) {
    var printTemplatePath = "C:/Scripting/Templates/BeerCanGlass/Beer Can Glass - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/BeerCanGlass/Beer Can Glass - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - BEER CAN - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Beer Can - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination), false);
    closeDocument();
}

function process_EP_BeerCanGlass(data) {
    var printTemplatePath = "C:/Scripting/Templates/BeerCanGlass/EP Beer Can Glass - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/BeerCanGlass/Beer Can Glass - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - BEER CAN - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Beer Can - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepEPInverted("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    $.writeln("about to apply 404040");
    apply404040("EP Inverted");    
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    applyListingGlassGray("EP Inverted");
    setActiveLayer("EP Inverted");
    applyListingGlassInnerGlow();
    saveJPG(activeDocument, File(saveListingDestination), false);
    closeDocument();
}

function process_DTS_WaterBottle(data){
    var printTemplatePath = "C:/Scripting/Templates/WaterBottle/Water Bottle - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/WaterBottle/Water Bottle - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - WATER BOTTLE - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Water Bottle - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    unlockAllFoldersExcept(["Bases"]);
    deleteAllFolders();
    savePSD(activeDocument, File(saveListingDestination), true);
    closeDocument();
}

function process_EP_PolarMug(data) {
    var printTemplatePath = "C:/Scripting/Templates/PolarMug/EP - Polar Mug - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/PolarMug/Polar Mug - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - POLAR MUG - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Polar Mug - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepBothEP("print");
    unlockAllFoldersExcept([]);
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();
    
//Generate Listing Files
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepBothEP("listing");
    deleteAllFolders();
    applyEngravingOnSilver("EP");
    setLayerVisibility("EP Inverted", false);
    saveJPG(activeDocument, File(saveListingDestination + " - SILVER"));
    setLayerVisibility("EP", false);
    selectLayerPixels("EP Inverted");
    layerLock("SILVER", false);
    makeMask("SILVER");
    setLayerVisibility("EP Inverted", false);
    setActiveLayer("SILVER");
    processBases(saveListingDestination); //Don't need File() as it's inside of the function
    closeDocument();
}

function process_DTS_PolarMug(data) {
    var printTemplatePath = "C:/Scripting/Templates/PolarMug/DTS - Polar Mug - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/PolarMug/Polar Mug - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - POLAR MUG - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Polar Mug - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing Files
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    setActiveLayer("SILVER").move(activeDocument.layerSets.getByName("Bases"), ElementPlacement.PLACEATBEGINNING);
    processBases(saveListingDestination); //Don't need File() as it's inside of the function
    closeDocument();
}

function process_BR_BaseballCap(data) {
    var printTemplatePath = "C:/Scripting/Templates/Hat/Hat - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Hat/Hat - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - HT - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - Hat - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
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
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DS_Mug(data) {
    var printTemplatePath = "C:/Scripting/Templates/Mug/Mug - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Mug/Mug - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DS - MG - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DS - Mug - " + data.fileSKU;

    if (data.PSPStatus === true) {
        printTemplatePath = switchToPSPTemplate(printTemplatePath);
        //Listing image shows only front side so conversion is not necessary
    }

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    setActiveLayer("Color");
    getActiveLayer().copy();

    if (data.PSPStatus === true) {
        getLayerByName("Logo Top").move(activeDocument.artLayers.getByName("Color"), ElementPlacement.PLACEAFTER);
        layerLock("Logo Top", false);
        activeDocument.artLayers[0].merge();
        renameLayer("Logo Top", "Top Set");
        magicWand (1900, 1650, 0, true);
        activeDocument.paste();
        getLayerByName("Logo Mid").move(activeDocument.artLayers.getByName("Layer 1"), ElementPlacement.PLACEAFTER);
        layerLock("Logo Mid", false);
        activeDocument.artLayers[0].merge();
        renameLayer("Logo Mid", "Mid Set");
        magicWand (1900, 2700, 0, true);
        activeDocument.paste();
        getLayerByName("Logo Bot").move(activeDocument.artLayers.getByName("Layer 1"), ElementPlacement.PLACEAFTER);
        layerLock("Logo Bot", false);
        activeDocument.artLayers[0].merge();
        renameLayer("Logo Bot", "Bot Set");

    } else {
        magicWand (1900, 600, 0, true);
        activeDocument.paste();
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
        
    }
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_BR_Patch(data) {
    var printTemplatePath = "C:/Scripting/Templates/Patch/Patch - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Patch/Patch - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - HS P - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - HS Patch - " + data.fileSKU;

    if (data.PSPStatus === true) {
        printTemplatePath = switchToPSPTemplate(printTemplatePath);
        listingTemplatePath = switchToPSPTemplate(listingTemplatePath);
    }

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    layerLock("Fill", false);

    if (data.PSPStatus === true) {
        setPSPBackground(data);

    } else {
        applyColorOverlay("Fill", convertHextoRGB(data.backgroundColor));
        setActiveLayer("Fill");
        rasterizeLayer();
    }
    activeDocument.artLayers[0].merge();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data, getActiveLayer());
    keepColor("listing");
    deleteAllFolders();
    layerLock("Fill", false);

    if (data.PSPStatus === true) {
        setPSPBackground(data);
        activeDocument.artLayers[0].merge();

    } else {
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
    }
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_BR_Beanie(data) {
    var printTemplatePath = "C:/Scripting/Templates/Beanie/Beanie - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Beanie/Beanie - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - BEANIE - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - Beanie - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_BR_Pillowcase (data) {
    var printTemplatePath = "C:/Scripting/Templates/Pillowcase/Pillowcase - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Pillowcase/Pillowcase - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - PC - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - Pillowcase - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_EP_DogTag(data) {
    var printTemplatePath = "C:/Scripting/Templates/DogTag KeyChain/EP DT KC - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/DogTag KeyChain/DT KC - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - DT KC - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Dog Tag - " + data.fileSKU;

// //Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepBothEP("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepBothEP("listing");
    deleteAllFolders();
    applyColorOverlay("EP", convertHextoRGB("#c8c8c8"));
    applyColorOverlay("EP Inverted", convertHextoRGB("#c8c8c8"));
    savePSD(activeDocument, File(saveListingDestination), true);
    closeDocument();
}

function process_EP_KeyChain(data) {
var printTemplatePath = "C:/Scripting/Templates/DogTag KeyChain/EP DT KC - Template.psd";
var listingTemplatePath = "C:/Scripting/Templates/DogTag KeyChain/DT KC - Listing Template.psd";
var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - DT KC - " + data.fileSKU;
var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Key Chain - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepBothEP("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepBothEP("listing");
    deleteAllFolders();
    MoveLayerTo(getLayerByName("EP"), 1967, 2962);
    MoveLayerTo(getLayerByName("EP Inverted"), 1967, 2962);
    setLayerVisibility(activeDocument.layerSets.getByName("Dog Tag"), false);
    setLayerVisibility(activeDocument.layerSets.getByName("Key Chain"), true);
    applyColorOverlay("EP", convertHextoRGB("#c8c8c8"));
    applyColorOverlay("EP Inverted", convertHextoRGB("#c8c8c8"));
    savePSD(activeDocument, File(saveListingDestination), true);
    closeDocument();
}

function process_DS_DogTag(data) {
    var printTemplatePath = "C:/Scripting/Templates/DogTag KeyChain/DS DT KC - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/DogTag KeyChain/DT KC - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DS - DT KC - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DS - Dog Tag - " + data.fileSKU;

// //Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    setLayerVisibility(activeDocument.layerSets.getByName("Dog Tag").artLayers.getByName("DS"), true);
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DS_KeyChain(data) {
var printTemplatePath = "C:/Scripting/Templates/DogTag KeyChain/DS DT KC - Template.psd";
var listingTemplatePath = "C:/Scripting/Templates/DogTag KeyChain/DT KC - Listing Template.psd";
var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DS - DT KC - " + data.fileSKU;
var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DS - Key Chain - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    MoveLayerTo(getLayerByName("Color"), 1967, 2962);
    setLayerVisibility(activeDocument.layerSets.getByName("Dog Tag"), false);
    setLayerVisibility(activeDocument.layerSets.getByName("Key Chain"), true);
    setLayerVisibility(activeDocument.layerSets.getByName("Key Chain").artLayers.getByName("DS"), true);
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_BR_Apron(data) {
    var printTemplatePath = "C:/Scripting/Templates/Apron/Apron - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Apron/Apron - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - APRON - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - Apron - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_BR_CrewSocks(data) {
    var printTemplatePath = "C:/Scripting/Templates/CrewSocks/Crew Socks - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/CrewSocks/Crew Socks - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - CS - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - CrewSocks - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DS_MousePad(data) {
    var printTemplatePath = "C:/Scripting/Templates/MousePad/MousePad - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/MousePad/MousePad - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/BR - MP - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/BR - MousePad - " + data.fileSKU;

    if (data.PSPStatus === true) {
        printTemplatePath = switchToPSPTemplate(printTemplatePath);
        listingTemplatePath = switchToPSPTemplate(listingTemplatePath);
    }

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    layerLock("Fill", false);

    if (data.PSPStatus === true) {
        setPSPBackground(data);
    
    } else {
    applyColorOverlay("Fill", convertHextoRGB(data.backgroundColor));
    setActiveLayer("Fill");
    rasterizeLayer();
    }
    activeDocument.artLayers[0].merge();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// //Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data, getActiveLayer());
    keepColor("listing");
    deleteAllFolders();
    layerLock("Fill", false);

    if (data.PSPStatus === true) {
        setPSPBackground(data);
        activeDocument.artLayers[0].merge();

    } else {
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
    } 
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DS_SequinSquare(data) {
    var printTemplatePath = "C:/Scripting/Templates/SequinPillows/Sequin Square - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/SequinPillows/Sequin Square - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DS - SEQUIN SQUARE - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DS - Sequin Square - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    var saveUncovered = saveListingDestination + " - UNCOVERED";
    saveJPG(activeDocument, File(saveUncovered));
    setLayerVisibility("Hand", true);
    setLayerVisibility(activeDocument.layerSets.getByName("Bases"), true)
    var saveSilver = saveListingDestination + " - SILVER";
    saveJPG(activeDocument, File(saveSilver));
    closeDocument();
}

function process_DS_SequinHeart(data) {
    var printTemplatePath = "C:/Scripting/Templates/SequinPillows/Sequin Heart - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/SequinPillows/Sequin Heart - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DS - SEQUIN HEART - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DS - Sequin Heart - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    getLayerByName("Color").blendMode = BlendMode.MULTIPLY;
    var saveLocation = saveListingDestination + " - UNCOVERED";
    saveJPG(activeDocument, File(saveLocation));
    processBases(saveListingDestination); //Don't need File() as it's inside of the function
    closeDocument();
}

function process_DTS_AluminumWallet(data){
    var printTemplatePath = "C:/Scripting/Templates/AluminumWallet/Aluminum Wallet - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/AluminumWallet/Aluminum Wallet - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - AW - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - AluminumWallet  - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    unlockAllFoldersExcept(["Bases"]);
    deleteAllFolders();
    if (data.imageOrientation === "Wide") {
        activeDocument.rotateCanvas(-90);
    }
    savePSD(activeDocument, File(saveListingDestination), true);
    closeDocument();
}

function process_DTS_CeramicCoaster(data) {
    var printTemplatePath = "C:/Scripting/Templates/CeramicCoaster/Ceramic Coaster - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/CeramicCoaster/Ceramic Coaster - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - CST - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Ceramic Coaster  - " + data.fileSKU;

    if (data.PSPStatus === true) {
        printTemplatePath = switchToPSPTemplate(printTemplatePath);
        listingTemplatePath = switchToPSPTemplate(listingTemplatePath);
    }

// //Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    layerLock("Fill", false);

    if (data.PSPStatus === true) {
        setPSPBackground(data);

    } else {
    applyColorOverlay("Fill", convertHextoRGB(data.backgroundColor));
    setActiveLayer("Fill");
    rasterizeLayer();
    }

    activeDocument.artLayers[0].merge();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data, getActiveLayer());
    keepColor("listing");
    deleteAllFolders();
    layerLock("Fill", false);

    if (data.PSPStatus === true) {
        setPSPBackground(data);

    } else {
    var bgRGB = convertHextoRGB(data.backgroundColor);
    applyColorOverlay("Fill", bgRGB);
    setActiveLayer("Fill");
    rasterizeLayer();
    if (bgRGB.r <= 35 && bgRGB.g <= 35 && bgRGB.b <= 35) {
        setFillOpacity("Fill", 90);
        }
    }
    activeDocument.artLayers[0].merge();
    getLayerByName("Fill").blendMode = BlendMode.MULTIPLY;
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_Magnet(data) {
    var printTemplatePath = "C:/Scripting/Templates/Magnet/Magnet - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Magnet/Magnet - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - MT - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Magnet - " + data.fileSKU;

    if (data.PSPStatus === true) {
        printTemplatePath = switchToPSPTemplate(printTemplatePath);
        listingTemplatePath = switchToPSPTemplate(listingTemplatePath);
    }

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    layerLock("Fill", false);
    if (data.PSPStatus === true) {
        setPSPBackground(data);
        activeDocument.mergeVisibleLayers();
        layerLock("Color", true);
        unlockAllLayersExcept(["Color"]);
        deleteAllLayersExcept([]);
    } else {
        applyColorOverlay("Fill", convertHextoRGB(data.backgroundColor));
        setActiveLayer("Fill");
        rasterizeLayer();
        activeDocument.artLayers[0].merge();
    }
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data, getActiveLayer());
    keepColor("listing");
    deleteAllFolders();
    layerLock("Fill", false);
    if (data.PSPStatus === true) {
        setPSPBackground(data);
        activeDocument.mergeVisibleLayers();
        layerLock("Color", true);
        unlockAllLayersExcept(["Color"]);
        deleteAllLayersExcept([]);
    } else {
        var bgRGB = convertHextoRGB(data.backgroundColor);
        applyColorOverlay("Fill", bgRGB);
        setActiveLayer("Fill");
        rasterizeLayer();
        if (bgRGB.r <= 35 && bgRGB.g <= 35 && bgRGB.b <= 35) {
            setFillOpacity("Fill", 90);
        }
        activeDocument.artLayers[1].merge();
        getLayerByName("Fill").blendMode = BlendMode.MULTIPLY;
    }
    if (data.imageOrientation === "Wide") {
        activeDocument.rotateCanvas(-90);
    }
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_GlassCoaster(data) {
    var printTemplatePath = "C:/Scripting/Templates/CoasterGlass/Glass Coaster - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/CoasterGlass/Glass Coaster - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - SQUARE COASTER - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Square Glass Coaster - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();

}

function process_DTS_Flask(data) {
    var printTemplatePath = "C:/Scripting/Templates/Flask/DTS - Flask - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Flask/Flask - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - FLASK - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Flask - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_EP_Flask(data) {
    var printTemplatePath = "C:/Scripting/Templates/Flask/EP - Flask - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Flask/Flask - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - FLASK - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Flask - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepEP("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepEP("listing");
    deleteAllFolders();
    applyEngravingOnSilver("EP");
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_Mason(data) {
    var printTemplatePath = "C:/Scripting/Templates/Mason/DTS - Mason - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Mason/Mason - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - MASON JAR - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Mason Jar - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_EP_Vector(data) {
    var printTemplatePath = "C:/Scripting/Templates/Vector/EP - Vector - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Vector/Vector - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - VT - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Vector - " + data.fileSKU;

    if (data.PSPStatus === true) {
        printTemplatePath = switchToPSPTemplate(printTemplatePath);
        listingTemplatePath = switchToPSPTemplate(listingTemplatePath);
    }

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepEPInverted("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    unlockAllFoldersExcept(["Bases"]);

    var i; //index //PSP logic
    var g; //layer groups #
    if (data.PSPStatus === true) {
        i = 1;
        g = 4; //layer groups #
    } else {
        i = 0;
        g = 3; //layer groups #
    }

    for (; i < g; i++) { //iterate through folders 0, 1, 2
        selectLayerPixels("EP Inverted");
        makeMask(activeDocument.layerSets[i]);
    }
    setLayerVisibility("EP Inverted", false);
    savePSD(activeDocument, File(saveListingDestination), true);
    closeDocument();
}

function process_DTS_Vector(data) {
    var printTemplatePath = "C:/Scripting/Templates/Vector/DTS - Vector - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Vector/Vector - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - VT - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Vector - " + data.fileSKU;

    if (data.PSPStatus === true) {
        printTemplatePath = switchToPSPTemplate(printTemplatePath);
        listingTemplatePath = switchToPSPTemplate(listingTemplatePath);
    }

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    unlockAllFoldersExcept(["Bases", "Logos"]);
    deleteAllFolders();
    savePSD(activeDocument, File(saveListingDestination), true);
    closeDocument();
}

function process_EP_BeerMug(data) {
    var printTemplatePath = "C:/Scripting/Templates/BeerMug/EP - Beer Mug - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/BeerMug/EP - Beer Mug - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - BEER MUG - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Beer Mug - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepEPInverted("print");
    deleteAllFolders();
    apply404040("EP Inverted");    
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    applyListingGlassGray("EP Inverted");
    setActiveLayer("EP Inverted");
    applyListingGlassInnerGlow();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_EP_PintGlass(data) {
    var printTemplatePath = "C:/Scripting/Templates/PintGlass/EP - Pint - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/PintGlass/Pint - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - PINT - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Pint - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepEPInverted("print");
    deleteAllFolders();
    apply404040("EP Inverted");    
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    applyListingGlassGray("EP Inverted");
    setActiveLayer("EP Inverted");
    applyListingGlassInnerGlow();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_PintGlass(data) {
    var printTemplatePath = "C:/Scripting/Templates/PintGlass/DTS - Pint - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/PintGlass/Pint - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - PINT - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Pint - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_EP_StemlessWine(data) {
    var printTemplatePath = "C:/Scripting/Templates/WineGlasses/EP - Wine Glasses - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/WineGlasses/Stemless Wine - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - WINE - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Stemless Wine - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepEPInverted("print");
    deleteAllFolders();
    apply404040("EP Inverted");    
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    applyListingGlassGray("EP Inverted");
    setActiveLayer("EP Inverted");
    applyListingGlassInnerGlow();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_StemlessWine(data) {
    var printTemplatePath = "C:/Scripting/Templates/WineGlasses/DTS - Wine Glasses - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/WineGlasses/Stemless Wine - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - WINE - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Stemless Wine - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_EP_WineGlass(data) {
    var printTemplatePath = "C:/Scripting/Templates/WineGlasses/EP - Wine Glasses - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/WineGlasses/Wine Glass - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - WINE - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Wine Glass - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepEPInverted("print");
    deleteAllFolders();
    apply404040("EP Inverted");    
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    applyListingGlassGray("EP Inverted");
    setActiveLayer("EP Inverted");
    applyListingGlassInnerGlow();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_WineGlass(data) {
    var printTemplatePath = "C:/Scripting/Templates/WineGlasses/DTS - Wine Glasses - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/WineGlasses/Wine Glass - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - WINE - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Wine Glass - " + data.fileSKU;

// //Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_EP_PilsnerGlass(data) {
    var printTemplatePath = "C:/Scripting/Templates/PilsnerGlass/EP - Pilsner - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/PilsnerGlass/Pilsner - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - PILSNER - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Pilsner - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepEPInverted("print");
    deleteAllFolders();
    apply404040("EP Inverted");    
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepEPInverted("listing");
    deleteAllFolders();
    applyListingGlassGray("EP Inverted");
    setActiveLayer("EP Inverted");
    applyListingGlassInnerGlow();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_PilsnerGlass(data) {
    var printTemplatePath = "C:/Scripting/Templates/PilsnerGlass/DTS - Pilsner - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/PilsnerGlass/Pilsner - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - PILSNER - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Pilsner - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_OrnamentDangle(data) {
    var printTemplatePath = "C:/Scripting/Templates/OrnamentDangle/Ornament Sheet - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/OrnamentDangle/Ornament Dangle - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - ORNAMENT SHEET 12x12 - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Ornament Dangle - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
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
    savePSD(activeDocument, File(savePrintDestination), true);
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
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
    savePSD(activeDocument, File(saveListingDestination), true);
    closeDocument();
}

function process_DTS_WoodMagnet(data) {
    var printTemplatePath = "C:/Scripting/Templates/WoodMagnet/DTS - Wood Magnet - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/WoodMagnet/Wood Magnet - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - WOOD MAGNET - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Wood Magnet - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    unlockAllFoldersExcept(["Bases"]);
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_WoodPrint(data) {
    var printTemplatePath = "C:/Scripting/Templates/WoodPrint/DTS - Wood Print - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/WoodPrint/Wood Print - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - WP - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Wood Print - " + data.fileSKU;

    if (data.PSPStatus === true) {
        printTemplatePath = switchToPSPTemplate(printTemplatePath);
        listingTemplatePath = switchToPSPTemplate(listingTemplatePath);
    }

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();

    if (data.PSPStatus === true) {
        setPSPBackground(data);
        if (data.imageOrientation === "Wide") {
            layerLock("Vertical", false);
            getLayerByName("Vertical").remove();
            layerLock("Horizontal", false);
        } else {
            layerLock("Horizontal", false);
            getLayerByName("Horizontal").remove();
            layerLock("Vertical", false);
        }
        activeDocument.artLayers[0].merge();
    }

    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    unlockAllFoldersExcept([]);
    deleteAllFolders();

    if (data.PSPStatus === true) {
        setPSPBackground(data);
        if (data.imageOrientation === "Wide") {
            layerLock("Vertical", false);
            getLayerByName("Vertical").remove();
            layerLock("Horizontal", false);
        } else {
            layerLock("Horizontal", false);
            getLayerByName("Horizontal").remove();
            layerLock("Vertical", false);
        }
    }

    if (data.imageOrientation === "Wide") {
        activeDocument.rotateCanvas(-90);
    }
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_SCB(data) {
    var printTemplatePath = "C:/Scripting/Templates/SCB/DTS - SCB - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/SCB/DTS - SCB - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - SCB - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Small Cutting Board - " + data.fileSKU;   

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_EP_SCB(data) {
    var printTemplatePath = "C:/Scripting/Templates/SCB/EP - SCB - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/SCB/EP - SCB - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/EP - SCB - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/EP - Small Cutting Board - " + data.fileSKU;   

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepEP("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepEP("listing");
    deleteAllFolders();
    getLayerByName("EP").blendMode = BlendMode.OVERLAY;
    if (data.imageOrientation === "Wide") {
        activeDocument.rotateCanvas(-90);
    }
    setActiveLayer("EP");
    applySCBInnerShadow();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_DTS_Candle(data) {
    var printTemplatePath = "C:/Scripting/Templates/Candle/DTS - Candle 6 in - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Candle/DTS - Candle 6 in - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DTS - CANDLE 6 IN - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DTS - Candle 6 in - " + data.fileSKU;   

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}

function process_VINYL_Sticker(data) {
    var printTemplatePath = "C:/Scripting/Templates/Sticker/Sticker - Template.psd";
    var listingTemplatePath = "C:/Scripting/Templates/Sticker/Sticker - Listing Template.psd";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/VINYL - STK - DC - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/VINYL - Sticker - DC - " + data.fileSKU;   

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    keepColor("print");
    deleteAllFolders();
    setActiveLayer("Color");
    magicWand(0, 0, 0, false);
    activeDocument.selection.invert();
    activeDocument.selection.expand(40);
    activeDocument.selection.smooth(20);
    activeDocument.selection.makeWorkPath(0);
    magicWand(0, 0, 0, false);
    activeDocument.selection.invert();
    activeDocument.selection.expand(60);
    activeDocument.selection.smooth(30);
    createNewLayer("Fill");
    setActiveLayer("Fill");
    activeDocument.selection.fill(hexToSolidColorSwatch(data.backgroundColor));
    deselect();
    getLayerByName("Fill").move(getLayerByName("Color"), ElementPlacement.PLACEAFTER);
    layerLock("SKU", false);
    getLayerByName("SKU").textItem.contents = "STK - DC - " + data.fileSKU;
    exportPath(activeDocument, savePrintDestination); //Don't need File() as it's inside of the function
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();
    

//Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    keepColor("listing");
    deleteAllFolders();
    unlockAllFoldersExcept([]);
    setActiveLayer("Color");
    magicWand(0, 0 , 0, false);
    activeDocument.selection.invert();
    activeDocument.selection.expand(60);
    activeDocument.selection.smooth(30);
    createNewLayer("Fill");
    setActiveLayer("Fill");
    activeDocument.selection.fill(hexToSolidColorSwatch(data.backgroundColor));
    deselect();
    unlockAllFoldersExcept([]);
    setActiveLayer("Color").move(activeDocument.layerSets.getByName("Shadow"), ElementPlacement.PLACEATEND);
    setActiveLayer("Fill").move(activeDocument.layerSets.getByName("Shadow"), ElementPlacement.PLACEATEND);
    saveJPG(activeDocument, File(saveListingDestination));
    closeDocument();
}