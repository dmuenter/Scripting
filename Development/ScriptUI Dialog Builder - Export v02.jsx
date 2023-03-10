
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Dialog","preferredSize":[400,600],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"File Set Up Info","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-2":{"id":2,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-3":{"id":3,"type":"EditText","parentId":2,"style":{"enabled":true,"varName":"filePathInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"paste file path here","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"StaticText","parentId":2,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"File to be scripted:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Button","parentId":2,"style":{"enabled":true,"varName":"fileBrowseButtonInput","text":"Browse","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-7":{"id":7,"type":"StaticText","parentId":6,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"File SKU:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"EditText","parentId":6,"style":{"enabled":true,"varName":"fileSKUInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"e.g. \"EX - 0001\"","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-11":{"id":11,"type":"Checkbox","parentId":9,"style":{"enabled":true,"varName":"colorVariationStatusInput","text":"Are variations color only changes?","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-13":{"id":13,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Image orientation:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"DropDownList","parentId":12,"style":{"enabled":true,"varName":"imageOrientationInput","text":"DropDownList","listItems":",Square,Tall,Wide","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-15":{"id":15,"type":"StaticText","parentId":16,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Background Color: ","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-17":{"id":17,"type":"EditText","parentId":16,"style":{"enabled":true,"varName":"bgColorHexInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"#ffffff","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-18":{"id":18,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-19":{"id":19,"type":"TabbedPanel","parentId":18,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":10,"alignment":null,"selection":20}},"item-20":{"id":20,"type":"Tab","parentId":19,"style":{"enabled":true,"varName":null,"text":"Color","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-21":{"id":21,"type":"Tab","parentId":19,"style":{"enabled":true,"varName":null,"text":"Engraving","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-31":{"id":31,"type":"Panel","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"DCS","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-32":{"id":32,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":"dcs_ScotchGlassCheckbox","text":"Scotch Glass","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-33":{"id":33,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":"dcs_BeerCanGlassCheckbox","text":"Beer Can Glass","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-34":{"id":34,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":"dcs_WaterBottleCheckbox","text":"Water Bottle","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-35":{"id":35,"type":"Panel","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Vinyl","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-36":{"id":36,"type":"Group","parentId":20,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-37":{"id":37,"type":"Panel","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Dye Sub","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-38":{"id":38,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":"vinyl_DCSticker","text":"Die Cut Sticker","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-39":{"id":39,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":null,"text":"Vinyl Poster","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-40":{"id":40,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":null,"text":"Square Sticker","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-41":{"id":41,"type":"Checkbox","parentId":37,"style":{"enabled":true,"varName":null,"text":"Mug","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-42":{"id":42,"type":"Checkbox","parentId":37,"style":{"enabled":true,"varName":null,"text":"Sequin Pillowcase Square","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-43":{"id":43,"type":"Checkbox","parentId":37,"style":{"enabled":true,"varName":null,"text":"Sequin Pillowcase Heart","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-44":{"id":44,"type":"Panel","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Brother","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-45":{"id":45,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Beanie","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-46":{"id":46,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Black Cap","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-47":{"id":47,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Patch","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-48":{"id":48,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Pillowcase","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-49":{"id":49,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Scarf","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-50":{"id":50,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":null,"text":"Vector Lighter","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-51":{"id":51,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":null,"text":"Ornament Sheet","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-52":{"id":52,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-53":{"id":53,"type":"Button","parentId":52,"style":{"enabled":true,"varName":"uiRunButton","text":"Run Script","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,1,2,4,3,5,6,7,8,9,11,12,13,14,16,15,17,18,19,20,36,31,32,33,34,50,51,35,38,40,39,37,41,42,43,44,45,46,47,48,49,21,52,53],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":53}
*/ 

#include "./SupportScripts/extendscript-es5-shim.jsxinc";

const Types = {
    COLOR: "Color",
    ENGRAVING: "Engraving",
};

const Departments = {
    DCS: "DCS",
    VINYL: "Vinyl",
    EP: "EP"
};

var productsListColor =
    [
        { type: Types.COLOR, department: Departments.DCS, key: "dcs_ScotchGlassCheckbox", label: "Scotch Glass" },
        { type: Types.COLOR, department: Departments.DCS, key: "dcs_BeerCanGlassCheckbox", label: "Beer Can Glass" },
        { type: Types.COLOR, department: Departments.DCS, key: "dcs_WaterBottleCheckbox", label: "Water Bottle" },
        { type: Types.COLOR, department: Departments.VINYL, key: "vinyl_DieCutStickerCheckbox", label: "Die Cut Sticker" },
        { type: Types.COLOR, department: Departments.VINYL, key: "vinyl_SquareStickerCheckbox", label: "Square Sticker" },
    ];

var productsListEngraving =
    [  
        { type: Types.ENGRAVING, department: Departments.EP, key: "ep_ScotchGlassCheckbox", label: "Scotch Glass" },

    ]


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
    fileBrowseButtonInput.text = "Browse"; 

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

// Create Group to Hold Variation Color Change Info (group 3)
// ======
var group3 = panel1.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["left","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var colorVariationStatusInput = group3.add("checkbox", undefined, undefined, {name: "colorVariationStatusInput"}); 
    colorVariationStatusInput.text = "Are variations color only changes?"; 

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

function uiRunButtonOnClick() {
    $.writeln("Starting Script.");

    var data = {
        inputFilePath: filePathInput.text,
        fileSKU: fileSKUInput.text,
        colorVariationStatus: colorVariationStatusInput.value,
        imageOrientation: imageOrientationInput.selection,
        backgroundColor: bgColorHexInput.text
    };
}

function cancelButtonOnClick() {
    dialog.close();
}