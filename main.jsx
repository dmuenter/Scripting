#include "./SupportScripts/extendscript-es5-shim.jsxinc";
#include "./ProductScripts.jsx";

var data = {
    inputFilePath: "C:/Scripting/sampleWide.psd",
    fileSKU: "RF - 0003",
    colorVariationStatus: false,
    imageOrientation: "Wide",
    backgroundColor: "#ffffff",
    products: [
    "dts_WaterBottleCheckbox", //good after rf
    "ep_BeerCanGlassCheckbox", //good afer rf
    "dts_BeerCanGlassCheckbox", //good after rf
    "dts_ScotchCGlassCheckbox", //good after rf
    "ep_ScotchCGlassCheckbox", //good after rf
    "dts_ScotchMGlassCheckbox", //good after rf
    "ep_ScotchMGlassCheckbox", //good after rf
    "ep_PolarMugCheckbox", //good after rf
    "br_BaseballCapCheckbox", //good after rf
    "ds_MugCheckbox", //good after rf
    "br_PatchCheckbox", //good after rf
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
}

