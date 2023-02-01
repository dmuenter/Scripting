#include "./SupportScripts/extendscript-es5-shim.jsxinc";
#include "./ProductScripts.jsx";

var data = {
    inputFilePath: "C:/Scripting/sampleTall.psd",
    fileSKU: "EX - 0002",
    colorVariationStatus: false,
    imageOrientation: "Tall",
    backgroundColor: "#ffffff",
    products: [
    // "dts_WaterBottleCheckbox",
    // "ep_BeerCanGlassCheckbox",
    // "dts_BeerCanGlassCheckbox",
    // "dts_ScotchCGlassCheckbox",
    // "ep_ScotchCGlassCheckbox",
    // "dts_ScotchMGlassCheckbox",
    // "ep_ScotchMGlassCheckbox",
    // "ep_PolarMugCheckbox",
    // "br_BaseballCapCheckbox",
    // "ds_MugCheckbox",
    // "br_PatchCheckbox",
    // "br_BeanieCheckbox",
    // "br_PillowcaseCheckbox",
    // "ep_DogTagCheckbox",
    // "ep_KeyChainCheckbox",
    // "ds_DogTagCheckbox",
    // "ds_KeyChainCheckbox",
    // "br_ApronCheckbox",
    // "br_CrewSocksCheckbox",
    // "ds_MousePadCheckbox",
    // "ds_SequinSquareCheckbox",
    // "ds_SequinHeartCheckbox",
    // "dts_AluminumWalletCheckbox",
    // "dts_CeramicCoasterCheckbox",
    // "dts_MagnetCheckbox",
    // "dts_GlassCoasterCheckbox",
    // "dts_FlaskCheckbox",
    // "ep_FlaskCheckbox",
    // "dts_MasonCheckbox",
    // "ep_VectorCheckbox",
    // "dts_VectorCheckbox",
    // "ep_BeerMugCheckbox",
    // "ep_PintGlassCheckbox",
    // "ep_StemlessWineCheckbox",
    // "ep_WineGlassCheckbox",
    // "ep_PilsnerGlassCheckbox",
    // "dts_OrnamentDangleCheckbox",
    // "dts_WoodMagnetCheckbox",
    // "dts_WoodPrintCheckbox",
    // "dts_SCBCheckbox",
    // "ep_SCBCheckbox",
    // "dts_CandleCheckbox",
    // "vinyl_StickerCheckbox",
    // "dts_PolarMugCheckbox",
    "dts_PintGlassCheckbox",
    "dts_PilsnerGlassCheckbox",
    "dts_StemlessWineCheckbox",
    "dts_WineGlassCheckbox",
]
};


main(data);
function main(data) {
 //   printObject(data);
    createDestinationFolders(data);
    processProducts(data);
}

function createDestinationFolders(data) {
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

    alert("Script done running.");

}

