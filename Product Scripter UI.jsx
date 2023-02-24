#include "C:/Scripting/SupportScripts/extendscript-es5-shim.jsxinc";
#include "C:/Scripting/main.jsx";

const Types = {
    COLOR: "Color",
    ENGRAVING: "Engraving",
};

const Departments = {
    DTS: "DTS",
    VINYL: "Vinyl",
    EP: "EP",
    BR: "Brother",
    DS: "Dye Sub"
};

var productsListColor =
    [
        { type: Types.COLOR, department: Departments.DTS, key: "dts_AluminumWalletCheckbox", label: "Aluminum Wallet" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_BeerCanGlassCheckbox", label: "Beer Can Glass" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_CandleCheckbox", label: "Candle (6 in)" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_CeramicCoasterCheckbox", label: "Ceramic Round Coaster" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_FlaskCheckbox", label: "Flask" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_GlassCoasterCheckbox", label: "Glass Square Coaster" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_MagnetCheckbox", label: "Magnet" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_MasonCheckbox", label: "Mason" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_OrnamentDangleCheckbox", label: "Ornament/Dangle" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_PilsnerGlassCheckbox", label: "Pilsner Glass" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_PintGlassCheckbox", label: "Pint Glass" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_PolarMugCheckbox", label: "Polar Mug" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_ScotchCGlassCheckbox", label: "Scotch Glass (Capitol)" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_ScotchMGlassCheckbox", label: "Scotch Glass (Manhatan)" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_SCBCheckbox", label: "Small Cutting Board" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_StemlessWineCheckbox", label: "Stemless Wine Glass" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_WineGlassCheckbox", label: "Wine Glass" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_VectorCheckbox", label: "Vector" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_WaterBottleCheckbox", label: "Water Bottle" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_WoodMagnetCheckbox", label: "Wood Magnet" },
        { type: Types.COLOR, department: Departments.DTS, key: "dts_WoodPrintCheckbox", label: "Wood Print" },

        { type: Types.COLOR, department: Departments.BR, key: "br_ApronCheckbox", label: "Apron" },
        { type: Types.COLOR, department: Departments.BR, key: "br_BaseballCapCheckbox", label: "Hat" },
        { type: Types.COLOR, department: Departments.BR, key: "br_BeanieCheckbox", label: "Beanie" },
        { type: Types.COLOR, department: Departments.BR, key: "br_CrewSocksCheckbox", label: "Crew Socks" },
        { type: Types.COLOR, department: Departments.BR, key: "br_PatchCheckbox", label: "Patch (4x4 in)" },
        { type: Types.COLOR, department: Departments.BR, key: "br_PillowcaseCheckbox", label: "Pillowcase" },
        
        { type: Types.COLOR, department: Departments.DS, key: "ds_MugCheckbox", label: "Coffee Mug" },
        { type: Types.COLOR, department: Departments.DS, key: "ds_DogTagCheckbox", label: "Dog Tag" },
        { type: Types.COLOR, department: Departments.DS, key: "ds_KeyChainCheckbox", label: "Key Chain" },
        { type: Types.COLOR, department: Departments.DS, key: "ds_MousePadCheckbox", label: "Mouse Pad" },
        { type: Types.COLOR, department: Departments.DS, key: "ds_SequinHeartCheckbox", label: "Sequin Heart Case" },
        { type: Types.COLOR, department: Departments.DS, key: "ds_SequinSquareCheckbox", label: "Sequin Square Case" },

        { type: Types.COLOR, department: Departments.VINYL, key: "vinyl_StickerCheckbox", label: "Die Cut Sticker" },
    ];

var productsListEngraving =
    [  
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_BeerCanGlassCheckbox", label: "Beer Can Glass" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_BeerMugCheckbox", label: "Beer Mug" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_DogTagCheckbox", label: "Dog Tag" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_KeyChainCheckbox", label: "Key Chain" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_FlaskCheckbox", label: "Flask" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_PilsnerGlassCheckbox", label: "Pilsner Glass" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_PintGlassCheckbox", label: "Pint Glass" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_PolarMugCheckbox", label: "Polar Mug" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_ScotchCGlassCheckbox", label: "Scotch Glass (Capitol)" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_ScotchMGlassCheckbox", label: "Scotch Glass (Manhatan)" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_SCBCheckbox", label: "Small Cutting Board" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_StemlessWineCheckbox", label: "Stemless Wine Glass" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_WineGlassCheckbox", label: "Wine Glass" },
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_VectorCheckbox", label: "Vector" },


    ]

    var allProducts = productsListColor.concat(productsListEngraving);

// Dialog Window
// ======
var dialog = new Window("dialog"); 
    dialog.text = "Dialog"; 
    //dialog.preferredSize.width = 400; 
    //dialog.preferredSize.height = 600;
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

var inputGroup = dialog.add("group", undefined, {name: "inputGroup"});
    inputGroup.orientation = "row";
    inputGroup.alignChildren = ["left", "center"];

// Create Panel for File Setup (Panel 1)
// ======
var panel1 = inputGroup.add("panel", undefined, undefined, {name: "panel1"}); 
    panel1.text = "File Set Up Info"; 
    panel1.orientation = "column"; 
    panel1.alignChildren = ["left","top"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 

// Create Group to Hold Target File Path (filePathGroup)
// ======
var filePathGroup = panel1.add("group", undefined, {name: "filePathGroup"}); 
    filePathGroup.orientation = "row"; 
    filePathGroup.alignChildren = ["left","center"]; 
    filePathGroup.spacing = 10; 
    filePathGroup.margins = 0; 

var filePathFieldText = filePathGroup.add("statictext", undefined, undefined, {name: "filePathFieldText"}); 
    filePathFieldText.text = "File to be scripted:"; 

var filePathInput = filePathGroup.add('edittext {properties: {name: "filePathInput"}}'); 
    filePathInput.text = "paste file path here"; 

var fileBrowseButtonInput = filePathGroup.add("button", undefined, undefined, {name: "fileBrowseButtonInput"}); 
    fileBrowseButtonInput.text = "Browse for PSD"; 
    fileBrowseButtonInput.onClick = browsePSDButtonOnClick; 

var folderBrowseButtonInput = filePathGroup.add("button", undefined, undefined, {name: "folderBrowseButtonInput"}); 
    folderBrowseButtonInput.text = "Browse for Folder"; 
    folderBrowseButtonInput.onClick = browseFolderButtonOnClick; 

// Create Group to Hold File SKU Input (SKUGroup)
// ======
var SKUGroup = panel1.add("group", undefined, {name: "SKUGroup"}); 
    SKUGroup.orientation = "row"; 
    SKUGroup.alignChildren = ["left","center"]; 
    SKUGroup.spacing = 10; 
    SKUGroup.margins = 0; 

var SKUFieldText = SKUGroup.add("statictext", undefined, undefined, {name: "SKUFieldText"}); 
    SKUFieldText.text = "File SKU:"; 

var fileSKUInput = SKUGroup.add('edittext {properties: {name: "fileSKUInput"}}'); 
    fileSKUInput.text = "e.g. \u0022EX - 0001\u0022";

var SKUTip = SKUGroup.add("statictext", undefined, undefined, {name: "SKUTip"}); 
    SKUTip.text = "Hover for advice on SKU."; 
    SKUTip.helpTip = "If SKU is filled out when processing a folder the SKU will be at the beginning of the file names. \nBest use case: fill in SKU for single files and variations, leave blank for running a folder of unrelated files."

// Create Group to Hold PSP Status (PSPGroup)
// ======
var PSPGroup = panel1.add("group", undefined, {name: "PSPGroup"}); 
    PSPGroup.orientation = "row"; 
    PSPGroup.alignChildren = ["left","center"]; 
    PSPGroup.spacing = 10; 
    PSPGroup.margins = 0; 
 
var PSPStatusInput = PSPGroup.add("checkbox", undefined, undefined, {name: "PSPStatusInput"}); 
    PSPStatusInput.text = "Is this a Pot Smoking Pals design?"; 

// Create Group to Hold Image Orientation (orientationGroup)
// ======
var orientationGroup = panel1.add("group", undefined, {name: "orientationGroup"}); 
    orientationGroup.orientation = "row"; 
    orientationGroup.alignChildren = ["left","center"]; 
    orientationGroup.spacing = 10; 
    orientationGroup.margins = 0; 

var orientationFieldText = orientationGroup.add("statictext", undefined, undefined, {name: "orientationFieldText"}); 
    orientationFieldText.text = "Image orientation:"; 

var imageOrientationInput_array = ["","Square","Tall","Wide"]; 
var imageOrientationInput = orientationGroup.add("dropdownlist", undefined, undefined, {name: "imageOrientationInput", items: imageOrientationInput_array}); 
    imageOrientationInput.selection = 0; 

var orientationTip = orientationGroup.add("statictext", undefined, undefined, {name: "orientationTip"}); 
    orientationTip.text = "Hover for advice on Orientation."; 
    orientationTip.helpTip = "When running a folder of files, you can only set one orientation! \nFor best results, arrange unrelated files that you want to run as a batch in a folder for each orientation."


// Create Group to Hold BG Color Hexcode (bgColorGroup)
// ======
var bgColorGroup = panel1.add("group", undefined, {name: "bgColorGroup"}); 
    bgColorGroup.orientation = "row"; 
    bgColorGroup.alignChildren = ["left","center"]; 
    bgColorGroup.spacing = 10; 
    bgColorGroup.margins = 0; 

var bgColorFieldText = bgColorGroup.add("statictext", undefined, undefined, {name: "bgColorFieldText"}); 
    bgColorFieldText.text = "Background Color: "; 

var bgColorHexInput = bgColorGroup.add('edittext {properties: {name: "bgColorHexInput"}}'); 
    bgColorHexInput.text = "#ffffff"; 

// Create Group to Hold Products (productsGroup)
// ======
var productsGroup = inputGroup.add("group", undefined, {name: "productsGroup"}); 
    productsGroup.orientation = "row"; 
    productsGroup.alignChildren = ["left","center"]; 
    productsGroup.spacing = 10; 
    productsGroup.margins = 0; 

// Create Tabbed Panel 1
// =======
var tpanel1 = productsGroup.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
    tpanel1.alignChildren = "fill"; 
    tpanel1.preferredSize.width = 612.562; 
    tpanel1.margins = 0; 


// Create Tabs (colorTab and engraveTab inside of tpanel1)
//====
var colorTab = tpanel1.add("tab", undefined, undefined, {name: "ColorTab"}); 
    colorTab.text = "Color"; 
    colorTab.orientation = "column"; 
    colorTab.alignChildren = ["left","top"]; 
    colorTab.spacing = 10; 
    colorTab.margins = 10; 

var groupColorDepartments = colorTab.add("group", undefined, {name: "ColorDepartments"}); 
    groupColorDepartments.orientation = "row"; 
    groupColorDepartments.alignChildren = ["left","center"]; 
    groupColorDepartments.spacing = 10; 

var engraveTab = tpanel1.add("tab", undefined, undefined, {name: "EngravingTab"}); 
    engraveTab.text = "Engraving"; 
    engraveTab.orientation = "column"; 
    engraveTab.alignChildren = ["left","top"]; 
    engraveTab.spacing = 10; 
    engraveTab.margins = 10; 

var groupEngravingDepartments = engraveTab.add("group", undefined, {name: "EngravingDepartments"}); 
    groupEngravingDepartments.orientation = "row"; 
    groupEngravingDepartments.alignChildren = ["left","center"]; 
    groupEngravingDepartments.spacing = 10;

tpanel1.selection = colorTab; //default selected tab

//Populate tabs
//====
function populateTabs(group, productsList){

productsList.forEach(function(product){
    var targetDepartmentPanel = dialog.findElement(product.department + "Panel");
    if (targetDepartmentPanel === null) {
    var targetDepartmentPanel = group.add("panel", undefined, undefined, {name: product.department + "Panel"}); 
    targetDepartmentPanel.text = product.department; 
    targetDepartmentPanel.orientation = "column"; 
    targetDepartmentPanel.alignChildren = ["left","top"]; 
    targetDepartmentPanel.spacing = 10; 
    targetDepartmentPanel.margins = 10; 
    targetDepartmentPanel.alignment = ["left","fill"]; 
    }
    var checkbox = targetDepartmentPanel.add("checkbox", undefined, undefined, {name: product.key}); 
        checkbox.text = product.label; 
    }) 
}

populateTabs(groupColorDepartments, productsListColor);
populateTabs(groupEngravingDepartments, productsListEngraving);
 

// Selection option group (selectionGroup)
var selectionGroup = dialog.add("group", undefined, {name: "selectionGroup"});
    selectionGroup.orientation = "row";
    selectionGroup.alignChildren = ["left","center"];
    selectionGroup.spacing = 10;
    selectionGroup.margins = 0;

var uiRunButton = selectionGroup.add("button", undefined, undefined, {name: "selectAllButton"});
    uiRunButton.text = "Select All";
    uiRunButton.onClick = selectAllButtonOnClick;

var uiRunButton = selectionGroup.add("button", undefined, undefined, {name: "selectNoneButton"});
    uiRunButton.text = "Select None";
    uiRunButton.onClick = selectNoneButtonOnClick;

var uiRunButton = selectionGroup.add("button", undefined, undefined, {name: "invertSelectionButton"});
    uiRunButton.text = "Invert Selection";
    uiRunButton.onClick = invertSelectionButtonOnClick;


// Run/Cancel Button Group
// ======
var runGroup = dialog.add("group", undefined, {name: "runGroup"}); 
    runGroup.orientation = "row"; 
    runGroup.alignChildren = ["left","center"]; 
    runGroup.spacing = 10; 
    runGroup.margins = 0; 

var uiRunButton = runGroup.add("button", undefined, undefined, {name: "uiRunButton"}); 
    uiRunButton.text = "Run Script"; 
    uiRunButton.onClick = uiRunButtonOnClick; 

var uiCancelButton = runGroup.add("button", undefined, undefined, {name: "cancelButton"}); 
    uiCancelButton.text = "Cancel"; 
    uiCancelButton.onClick = cancelButtonOnClick;  

dialog.show();


//Functionality

function selectAllButtonOnClick() {    //set all checkbox values to true
    var checkboxNames = allProducts.map(function(product) {
        return product.key;
    })
    checkboxNames.forEach(function(name) {
        dialog.findElement(name).value = true;
    })
}

function selectNoneButtonOnClick() {    //set all checkbox values to false
    var checkboxNames = allProducts.map(function(product) {
        return product.key;
    })
    checkboxNames.forEach(function(name) {
        dialog.findElement(name).value = false;
    })
}

function invertSelectionButtonOnClick() {    //goes down list of checkboxes and sets false to true and true to false as it goes
    var checkboxNames = allProducts.map(function(product) {
        return product.key;
    })
    checkboxNames.forEach(function(name) {
        if (dialog.findElement(name).value === true) {
            dialog.findElement(name).value = false;
        } else {
            dialog.findElement(name).value = true;
        }
    })
}

function browsePSDButtonOnClick() { //opens Browse window that can only see/select PSD files
    var fileName = File.openDialog("Select your set up file.", "*.psd");
    if (fileName != null) {
        filePathInput.text = fileName;
    }
}

function browseFolderButtonOnClick() { //opens Browse window that can see/select folders
    var folderName = Folder.selectDialog("Select your folder containing set up files.");
    if (folderName != null) {
        filePathInput.text = folderName;
    }
}

function uiRunButtonOnClick() { //logic to do when clicking run
    $.writeln("Starting Script.");

    var data = {
        inputFilePath: filePathInput.text,
        fileSKU: fileSKUInput.text,
        PSPStatus: PSPStatusInput.value,
        imageOrientation: imageOrientationInput.selection.text,
        backgroundColor: bgColorHexInput.text,
        products: []
    };

    data.products = getCheckboxes();
    
    var isValid = validateInput(data);
    if (isValid) {
        var variationData = processFiles(data);
        if (variationData.length > 0) {
            dialog.close();
            main(variationData);
        } else {
            alert("Couldn't find files to process.")
        }
    }
}

function processFiles(data) { //folder processing logic
    var folder = Folder(data.inputFilePath);
    var isFolder = folder.constructor === Folder;
    if (isFolder) {
        var files = folder.getFiles("*.psd");
        var variationData = files.map(function(file) {
            var finalSKU;
            if (data.fileSKU.length > 0) {
                finalSKU = data.fileSKU + " - " + file.name.toUpperCase().replace(".PSD", "");
            } else {
                finalSKU = file.name.toUpperCase().replace(".PSD", "");
            }
            return {
                inputFilePath: file.fullName,
                fileSKU: finalSKU,
                PSPStatus: data.PSPStatus,
                imageOrientation: data.imageOrientation,
                backgroundColor: data.backgroundColor,
                products: data.products
            }
        })
        return variationData;
    } else {
        if (data.inputFilePath.indexOf(".psd") < 0 && data.inputFilePath.indexOf(".PSD") < 0) {
    alert("File selected is not a .PSD.");
    return [];
        }
//validate SKU input for single file
    if (data.fileSKU.length === 0) {
        alert("SKU field cannot be blank when inputting a single PSD.")
        return [];
    }
    if (data.fileSKU === "e.g. \u0022EX - 0001\u0022") {
        alert("Please input a SKU to save as.");
        return [];
    }
        return [data];
    }
}

function getCheckboxes(){ //collects which checkboxes are true
    var checkboxNames = allProducts.map(function(product) {
        return product.key;
    })
    var selectedCheckboxes = [];
    checkboxNames.forEach(function(name) {
        if (dialog.findElement(name).value) {
            selectedCheckboxes.push(name);
        }
    })
    return selectedCheckboxes;
}

function cancelButtonOnClick() { //cancel
    dialog.close();
}

//other validation

function validateInput(data) { //validate File path
    data.inputFilePath = data.inputFilePath.replace("\"", "").replace("\"", ""); //strip double quotes if copy file path used (have to do replace x2 because Photoshop is dumb)
    
    var inputFile = new File(data.inputFilePath); //check if file exists
    if (! inputFile.exists) {
        alert("Invalid file path or file does not exist.");
        return false;
    }

    if (data.imageOrientation.length === 0) { //validate orientation
        alert("Please set an orientation.");
        return false;
    }

    if (data.backgroundColor.indexOf("#") !== 0) { //validate hex code input
        data.backgroundColor = "#" + data.backgroundColor;
    }

    if (data.products.length < 1) { //check if products selected
        alert("No items selected.");
        return false;
    }
    return true;
}