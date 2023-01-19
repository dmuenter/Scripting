#include "./SupportScripts/extendscript-es5-shim.jsxinc";
#include "./ProductScripts.jsx";

var data = {
    inputFilePath: "C:/Scripting/sampleTall.psd",
    fileSKU: "EX - 0001",
    colorVariationStatus: false,
    imageOrientation: "Tall",
    backgroundColor: "#220000",
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
        "br_PatchCheckbox",
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

