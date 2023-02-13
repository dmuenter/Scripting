#include "./SupportScripts/extendscript-es5-shim.jsxinc";
#include "./ProductScripts.jsx";

// var data = { //test hardcoded data for single file
//     inputFilePath: "C:/Scripting/sampleTall.psd",
//     fileSKU: "TALL",
//     PSPStatus: false,
//     imageOrientation: "Tall",
//     backgroundColor: "#ffffff",
//     products: [
//     // "dts_WaterBottleCheckbox",
//     // "ep_BeerCanGlassCheckbox",
//     // "dts_BeerCanGlassCheckbox",
//     // "dts_ScotchCGlassCheckbox",
//     // "ep_ScotchCGlassCheckbox",
//     // "dts_ScotchMGlassCheckbox",
//     // "ep_ScotchMGlassCheckbox",
//     // "ep_PolarMugCheckbox",
//     // "br_BaseballCapCheckbox",
//     // "ds_MugCheckbox",
//     // "br_PatchCheckbox",
//     // "br_BeanieCheckbox",
//     // "br_PillowcaseCheckbox",
//     // "ep_DogTagCheckbox",
//     // "ep_KeyChainCheckbox",
//     // "ds_DogTagCheckbox",
//     // "ds_KeyChainCheckbox",
//     // "br_ApronCheckbox",
//     // "br_CrewSocksCheckbox",
//     // "ds_MousePadCheckbox",
//     // "ds_SequinSquareCheckbox",
//     // "ds_SequinHeartCheckbox",
//     // "dts_AluminumWalletCheckbox",
//     // "dts_CeramicCoasterCheckbox",
//     // "dts_MagnetCheckbox",
//     // "dts_GlassCoasterCheckbox",
//     // "dts_FlaskCheckbox",
//     // "ep_FlaskCheckbox",
//     // "dts_MasonCheckbox",
//     // "ep_VectorCheckbox",
//     // "dts_VectorCheckbox",
//     // "ep_BeerMugCheckbox",
//     // "ep_PintGlassCheckbox",
//     // "ep_StemlessWineCheckbox",
//     // "ep_WineGlassCheckbox",
//     // "ep_PilsnerGlassCheckbox",
//     // "dts_OrnamentDangleCheckbox",
//     // "dts_WoodMagnetCheckbox",
//     // "dts_WoodPrintCheckbox",
//     // "dts_SCBCheckbox",
//     // "ep_SCBCheckbox",
//     // "dts_CandleCheckbox",
//     // "vinyl_StickerCheckbox",
//     // "dts_PolarMugCheckbox",
//     // "dts_PintGlassCheckbox",
//     // "dts_PilsnerGlassCheckbox",
//     // "dts_StemlessWineCheckbox",
//     // "dts_WineGlassCheckbox",
// ]
// }

// var data = [ //test hardcoded data for multiple files
//     {
//         inputFilePath: "C:/Users/dipty/OneDrive/Pictures/testFolder/GREEN.psd",
//         fileSKU: "BF - 0001 - GREEN",
//         PSPStatus: false,
//         imageOrientation: "Square",
//         backgroundColor: "#ffffff",
//         products: [
//             "dts_MagnetCheckbox"
//         ]
//     },
//     {
//         inputFilePath: "C:/Users/dipty/OneDrive/Pictures/testFolder/RED.psd",
//         fileSKU: "BF - 0001 - RED",
//         PSPStatus: false,
//         imageOrientation: "Square",
//         backgroundColor: "#ffffff",
//         products: [
//             "dts_MagnetCheckbox"
//         ]
//     }
// ]

var assistFiles = [];

//main(data); //comment out if using UI to test, renenable if testing from main

function main(data) {
    data.forEach(function(variation) {
        createDestinationFolders(variation);
        processProducts(variation);
    })
    assistFiles.forEach(function(assistFile) {
        open(File(assistFile));
    })
    if (assistFiles.length > 0) {
        alert("Script done running. Please make decisions and changes for opened files that need human judgment.");
    } else {
        alert("Script done running.");
    }
}

function checkforOutputsFolder() { //checks if Outputs folder exists, creates it if not
    var outputsFolder = Folder("C:/Scripting/Outputs");
    if (! outputsFoldersFolder.exists) {
        outputsFolder.create();
    }
}

function createDestinationFolders(data) { //creates folder for SKU and listing/print folders inside
    var destinationFolder = new Folder("C:/Scripting/Outputs/" + data.fileSKU);
    destinationFolder.create();
    var printFilesFolder = new Folder("C:/Scripting/Outputs/" + data.fileSKU + "/Print Files");
    printFilesFolder.create();
    var listingFilesFolder = new Folder("C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files");
    listingFilesFolder.create();
}

function processProducts(data) {
    data.products.forEach(function(product) {
        ProductScripts.filter(function(productsScriptsItem) {
            return product === productsScriptsItem.key;
        })[0].functionToRun(data);
    })
}