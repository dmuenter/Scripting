
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Dialog","preferredSize":[400,600],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"File Set Up Info","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-2":{"id":2,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-3":{"id":3,"type":"EditText","parentId":2,"style":{"enabled":true,"varName":"filePathInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"paste file path here","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"StaticText","parentId":2,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"File to be scripted:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Button","parentId":2,"style":{"enabled":true,"varName":"fileBrowseButtonInput","text":"Browse","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-7":{"id":7,"type":"StaticText","parentId":6,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"File SKU:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"EditText","parentId":6,"style":{"enabled":true,"varName":"fileSKUInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"e.g. \"EX - 0001\"","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-11":{"id":11,"type":"Checkbox","parentId":9,"style":{"enabled":true,"varName":"colorVariationStatusInput","text":"Are variations color only changes?","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-13":{"id":13,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Image orientation:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"DropDownList","parentId":12,"style":{"enabled":true,"varName":"imageOrientationInput","text":"DropDownList","listItems":",Square,Tall,Wide","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-15":{"id":15,"type":"StaticText","parentId":16,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Background Color: ","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-17":{"id":17,"type":"EditText","parentId":16,"style":{"enabled":true,"varName":"bgColorHexInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"#ffffff","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-18":{"id":18,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-19":{"id":19,"type":"TabbedPanel","parentId":18,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":10,"alignment":null,"selection":20}},"item-20":{"id":20,"type":"Tab","parentId":19,"style":{"enabled":true,"varName":null,"text":"Color","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-21":{"id":21,"type":"Tab","parentId":19,"style":{"enabled":true,"varName":null,"text":"Engraving","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-31":{"id":31,"type":"Panel","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"DCS","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-32":{"id":32,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":"dcs_ScotchGlassCheckbox","text":"Scotch Glass","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-33":{"id":33,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":"dcs_BeerCanGlassCheckbox","text":"Beer Can Glass","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-34":{"id":34,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":"dcs_WaterBottleCheckbox","text":"Water Bottle","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-35":{"id":35,"type":"Panel","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Vinyl","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-36":{"id":36,"type":"Group","parentId":20,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-37":{"id":37,"type":"Panel","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Dye Sub","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-38":{"id":38,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":"vinyl_DCSticker","text":"Die Cut Sticker","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-39":{"id":39,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":null,"text":"Vinyl Poster","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-40":{"id":40,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":null,"text":"Square Sticker","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-41":{"id":41,"type":"Checkbox","parentId":37,"style":{"enabled":true,"varName":null,"text":"Mug","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-42":{"id":42,"type":"Checkbox","parentId":37,"style":{"enabled":true,"varName":null,"text":"Sequin Pillowcase Square","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-43":{"id":43,"type":"Checkbox","parentId":37,"style":{"enabled":true,"varName":null,"text":"Sequin Pillowcase Heart","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-44":{"id":44,"type":"Panel","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Brother","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-45":{"id":45,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Beanie","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-46":{"id":46,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Black Cap","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-47":{"id":47,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Patch","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-48":{"id":48,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Pillowcase","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-49":{"id":49,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Scarf","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-50":{"id":50,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":null,"text":"Vector Lighter","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-51":{"id":51,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":null,"text":"Ornament Sheet","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-52":{"id":52,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-53":{"id":53,"type":"Button","parentId":52,"style":{"enabled":true,"varName":"uiRunButton","text":"Run Script","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,1,2,4,3,5,6,7,8,9,11,12,13,14,16,15,17,18,19,20,36,31,32,33,34,50,51,35,38,40,39,37,41,42,43,44,45,46,47,48,49,21,52,53],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":53}
*/ 

#include "./SupportScripts/extendscript-es5-shim.jsxinc";
#include "./main.jsx";

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

// DIALOG
// ======
var dialog = new Window("dialog"); 
    dialog.text = "Dialog"; 
    dialog.preferredSize.width = 400; 
    dialog.preferredSize.height = 600; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

// Create Panel for File Setup (Panel 1)
// ======
var panel1 = dialog.add("panel", undefined, undefined, {name: "panel1"}); 
    panel1.text = "File Set Up Info"; 
    panel1.orientation = "column"; 
    panel1.alignChildren = ["left","top"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 

// Create Group to Hold Target File Path (Group 1)
// ======
var group1 = panel1.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

var statictext1 = group1.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "File to be scripted:"; 

var filePathInput = group1.add('edittext {properties: {name: "filePathInput"}}'); 
    filePathInput.text = "paste file path here"; 

var fileBrowseButtonInput = group1.add("button", undefined, undefined, {name: "fileBrowseButtonInput"}); 
    fileBrowseButtonInput.text = "Browse for PSD"; 
    fileBrowseButtonInput.onClick = browsePSDButtonOnClick; 

var folderBrowseButtonInput = group1.add("button", undefined, undefined, {name: "folderBrowseButtonInput"}); 
    folderBrowseButtonInput.text = "Browse for Folder"; 
    folderBrowseButtonInput.onClick = browseFolderButtonOnClick; 

// Create Group to Hold File SKU Input (group 2)
// ======
var group2 = panel1.add("group", undefined, {name: "group2"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

var statictext2 = group2.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "File SKU:"; 

var fileSKUInput = group2.add('edittext {properties: {name: "fileSKUInput"}}'); 
    fileSKUInput.text = "e.g. \u0022EX - 0001\u0022";

var SKUtip = group2.add("statictext", undefined, undefined, {name: "statictext2"}); 
    SKUtip.text = "Hover for advice on SKU."; 
    SKUtip.helpTip = "If SKU is filled out when processing a folder the SKU will be at the beginning of the file names. \nBest use case: fill in SKU for single files and variations, leave blank for running a folder of unrelated files."

// Create Group to Hold Variation Color Change Info (group 3) and also PSP status
// ======
var group3 = panel1.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["left","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var colorVariationStatusInput = group3.add("checkbox", undefined, undefined, {name: "colorVariationStatusInput"}); 
    colorVariationStatusInput.text = "Are variations color only changes?"; 
var PSPStatusInput = group3.add("checkbox", undefined, undefined, {name: "PSPStatusInput"}); 
    PSPStatusInput.text = "Is this a Pot Smoking Pals design?"; 

// Create Group to Hold Image Orientation (Group 4)
// ======
var group4 = panel1.add("group", undefined, {name: "group4"}); 
    group4.orientation = "row"; 
    group4.alignChildren = ["left","center"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

var statictext3 = group4.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "Image orientation:"; 

var imageOrientationInput_array = ["","Square","Tall","Wide"]; 
var imageOrientationInput = group4.add("dropdownlist", undefined, undefined, {name: "imageOrientationInput", items: imageOrientationInput_array}); 
    imageOrientationInput.selection = 0; 

var OrientationTip = group4.add("statictext", undefined, undefined, {name: "statictext2"}); 
    OrientationTip.text = "Hover for advice on Orientation."; 
    OrientationTip.helpTip = "When running a folder of files, you can only set one orientation! \nFor best results, arrange unrelated files that you want to run as a batch in a folder for each orientation."


// Create Group to Hold BG Color Hexcode (Group 5)
// ======
var group5 = panel1.add("group", undefined, {name: "group5"}); 
    group5.orientation = "row"; 
    group5.alignChildren = ["left","center"]; 
    group5.spacing = 10; 
    group5.margins = 0; 

var statictext4 = group5.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext4.text = "Background Color: "; 

var bgColorHexInput = group5.add('edittext {properties: {name: "bgColorHexInput"}}'); 
    bgColorHexInput.text = "#ffffff"; 

// Create Group to Hold Products (Group6)
// ======
var group6 = dialog.add("group", undefined, {name: "group6"}); 
    group6.orientation = "row"; 
    group6.alignChildren = ["left","center"]; 
    group6.spacing = 10; 
    group6.margins = 0; 

// Create Tabbed Panel 1
// =======
var tpanel1 = group6.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
    tpanel1.alignChildren = "fill"; 
    tpanel1.preferredSize.width = 612.562; 
    tpanel1.margins = 0; 


// Create Tabs
//====
var tab1 = tpanel1.add("tab", undefined, undefined, {name: "ColorTab"}); 
    tab1.text = "Color"; 
    tab1.orientation = "column"; 
    tab1.alignChildren = ["left","top"]; 
    tab1.spacing = 10; 
    tab1.margins = 10; 

var groupColorDepartments = tab1.add("group", undefined, {name: "ColorDepartments"}); 
    groupColorDepartments.orientation = "row"; 
    groupColorDepartments.alignChildren = ["left","center"]; 
    groupColorDepartments.spacing = 10; 

var tab2 = tpanel1.add("tab", undefined, undefined, {name: "EngravingTab"}); 
    tab2.text = "Engraving"; 
    tab2.orientation = "column"; 
    tab2.alignChildren = ["left","top"]; 
    tab2.spacing = 10; 
    tab2.margins = 10; 

var groupEngravingDepartments = tab2.add("group", undefined, {name: "EngravingDepartments"}); 
    groupEngravingDepartments.orientation = "row"; 
    groupEngravingDepartments.alignChildren = ["left","center"]; 
    groupEngravingDepartments.spacing = 10;

tpanel1.selection = tab1;

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
 

//attempting to implement select all/none button or inverse
var group9 = dialog.add("group", undefined, {name: "group9"});
    group9.orientation = "row";
    group9.alignChildren = ["left","center"];
    group9.spacing = 10;
    group9.margins = 0;

var uiRunButton = group9.add("button", undefined, undefined, {name: "selectAllButton"});
    uiRunButton.text = "Select All";
    uiRunButton.onClick = selectAllButtonOnClick;

var uiRunButton = group9.add("button", undefined, undefined, {name: "selectNoneButton"});
    uiRunButton.text = "Select None";
    uiRunButton.onClick = selectNoneButtonOnClick;

var uiRunButton = group9.add("button", undefined, undefined, {name: "invertSelectionButton"});
    uiRunButton.text = "Invert Selection";
    uiRunButton.onClick = invertSelectionButtonOnClick;

//back to normal stuff


// Run/Cancel Button Group
// ======
var group8 = dialog.add("group", undefined, {name: "group8"}); 
    group8.orientation = "row"; 
    group8.alignChildren = ["left","center"]; 
    group8.spacing = 10; 
    group8.margins = 0; 

var uiRunButton = group8.add("button", undefined, undefined, {name: "uiRunButton"}); 
    uiRunButton.text = "Run Script"; 
    uiRunButton.onClick = uiRunButtonOnClick; 

var uiRunButton = group8.add("button", undefined, undefined, {name: "cancelButton"}); 
    uiRunButton.text = "Cancel"; 
    uiRunButton.onClick = cancelButtonOnClick;  

dialog.show();

//also new stuff that I'm trying

function selectAllButtonOnClick() {
    //set all checkbox values to true
    var checkboxNames = allProducts.map(function(product) {
        return product.key;
    })
    checkboxNames.forEach(function(name) {
        dialog.findElement(name).value = true;
    })
}

function selectNoneButtonOnClick() {
    //set all checkbox values to false
    var checkboxNames = allProducts.map(function(product) {
        return product.key;
    })
    checkboxNames.forEach(function(name) {
        dialog.findElement(name).value = false;
    })
}

function invertSelectionButtonOnClick() {
    //set true checkboxes to false, false checkboxes to true, but at thesame time???
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

//back to normal

function browsePSDButtonOnClick() {
    var fileName = File.openDialog("Select your set up file.", "*.psd");
    if (fileName != null) {
        filePathInput.text = fileName;
    }
}

function browseFolderButtonOnClick() {
    var folderName = Folder.selectDialog("Select your folder containing set up files.");
    if (folderName != null) {
        filePathInput.text = folderName;
    }
}

function uiRunButtonOnClick() {
    $.writeln("Starting Script.");

    var data = {
        inputFilePath: filePathInput.text,
        fileSKU: fileSKUInput.text,
        colorVariationStatus: colorVariationStatusInput.value,
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

function processFiles(data) {
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
                colorVariationStatus: data.colorVariationStatus,
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
//check SKU
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

function getCheckboxes(){
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

function cancelButtonOnClick() {
    dialog.close();
}

//validation corner

function validateInput(data) {
//check if file path is gucci
//strip double quotes if copy file path used (have to do replace x2 because Photoshop is dumb)
data.inputFilePath = data.inputFilePath.replace("\"", "").replace("\"", "");

//check if file exists
var inputFile = new File(data.inputFilePath);
if (! inputFile.exists) {
    alert("Invalid file path or file does not exist.");
    return false;
}

//check if correct format
// if (data.inputFilePath.indexOf(".psd") < 0 && data.inputFilePath.indexOf(".PSD") < 0) {
//     alert("File selected is not a .PSD.");
//     return false;
// }



//check orientation
if (data.imageOrientation.length === 0) {
    alert("Please set an orientation.");
    return false;
}

//check hex code
if (data.backgroundColor.indexOf("#") !== 0) {
    data.backgroundColor = "#" + data.backgroundColor;
}

//check if products selected
    if (data.products.length < 1) {
        alert("No items selected.");
        return false;
    }
    return true;
}