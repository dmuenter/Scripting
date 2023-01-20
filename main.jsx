#include "./SupportScripts/extendscript-es5-shim.jsxinc";
#include "./ProductScripts.jsx";

var data = {
    inputFilePath: "C:/Scripting/sampleSquare.psd",
    fileSKU: "RF - 0003",
    colorVariationStatus: false,
    imageOrientation: "Square",
    backgroundColor: "#ffffff",
    products: [
    "dts_WaterBottleCheckbox",
    "ep_BeerCanGlassCheckbox",
    "dts_BeerCanGlassCheckbox",
    "dts_ScotchCGlassCheckbox",
    "ep_ScotchCGlassCheckbox",
    "dts_ScotchMGlassCheckbox",
    "ep_ScotchMGlassCheckbox",
    "ep_PolarMugCheckbox",
    "br_BaseballCapCheckbox",
    "ds_MugCheckbox",
    "br_PatchCheckbox",
    "br_BeanieCheckbox",
    "br_PillowcaseCheckbox",
    "ep_DogTagCheckbox",
    "ep_KeyChainCheckbox",
    "ds_DogTagCheckbox",
    "ds_KeyChainCheckbox",
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

