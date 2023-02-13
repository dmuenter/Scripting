
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Dialog","preferredSize":[400,600],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"File Set Up Info","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-2":{"id":2,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-3":{"id":3,"type":"EditText","parentId":2,"style":{"enabled":true,"varName":"filePathInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"paste file path here","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-4":{"id":4,"type":"StaticText","parentId":2,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"File to be scripted:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Button","parentId":2,"style":{"enabled":true,"varName":"fileBrowseButtonInput","text":"Browse","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-7":{"id":7,"type":"StaticText","parentId":6,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"File SKU:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"EditText","parentId":6,"style":{"enabled":true,"varName":"fileSKUInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"e.g. \"EX - 0001\"","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-11":{"id":11,"type":"Checkbox","parentId":9,"style":{"enabled":true,"varName":"colorVariationStatusInput","text":"Are variations color only changes?","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-13":{"id":13,"type":"StaticText","parentId":12,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Image orientation:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"DropDownList","parentId":12,"style":{"enabled":true,"varName":"imageOrientationInput","text":"DropDownList","listItems":",Square,Tall,Wide","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-15":{"id":15,"type":"StaticText","parentId":16,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Background Color: ","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"Group","parentId":1,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-17":{"id":17,"type":"EditText","parentId":16,"style":{"enabled":true,"varName":"bgColorHexInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"#ffffff","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-18":{"id":18,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-19":{"id":19,"type":"TabbedPanel","parentId":18,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":10,"alignment":null,"selection":20}},"item-20":{"id":20,"type":"Tab","parentId":19,"style":{"enabled":true,"varName":null,"text":"Color","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-21":{"id":21,"type":"Tab","parentId":19,"style":{"enabled":true,"varName":null,"text":"Engraving","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-31":{"id":31,"type":"Panel","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"DCS","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-32":{"id":32,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":null,"text":"Scotch Glass","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-33":{"id":33,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":null,"text":"Beer Can Glass","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-34":{"id":34,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":null,"text":"Water Bottle","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-35":{"id":35,"type":"Panel","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Vinyl","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-36":{"id":36,"type":"Group","parentId":20,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-37":{"id":37,"type":"Panel","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Dye Sub","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-38":{"id":38,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":null,"text":"Die Cut Sticker","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-39":{"id":39,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":null,"text":"Vinyl Poster","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-40":{"id":40,"type":"Checkbox","parentId":35,"style":{"enabled":true,"varName":null,"text":"Square Sticker","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-41":{"id":41,"type":"Checkbox","parentId":37,"style":{"enabled":true,"varName":null,"text":"Mug","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-42":{"id":42,"type":"Checkbox","parentId":37,"style":{"enabled":true,"varName":null,"text":"Sequin Pillowcase Square","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-43":{"id":43,"type":"Checkbox","parentId":37,"style":{"enabled":true,"varName":null,"text":"Sequin Pillowcase Heart","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-44":{"id":44,"type":"Panel","parentId":36,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Brother","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-45":{"id":45,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Beanie","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-46":{"id":46,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Black Cap","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-47":{"id":47,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Patch","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-48":{"id":48,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Pillowcase","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-49":{"id":49,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Scarf","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-50":{"id":50,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":null,"text":"Vector Lighter","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-51":{"id":51,"type":"Checkbox","parentId":31,"style":{"enabled":true,"varName":null,"text":"Ornament Sheet","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,1,2,4,3,5,6,7,8,9,11,12,13,14,16,15,17,18,19,20,36,31,32,33,34,50,51,35,38,40,39,37,41,42,43,44,45,46,47,48,49,21],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":20}
*/ 

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

// PANEL1
// ======
var panel1 = dialog.add("panel", undefined, undefined, {name: "panel1"}); 
    panel1.text = "File Set Up Info"; 
    panel1.orientation = "column"; 
    panel1.alignChildren = ["left","top"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 

// GROUP1
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

// GROUP2
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

// GROUP3
// ======
var group3 = panel1.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["left","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var colorVariationStatusInput = group3.add("checkbox", undefined, undefined, {name: "colorVariationStatusInput"}); 
    colorVariationStatusInput.text = "Are variations color only changes?"; 

// GROUP4
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

// GROUP5
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

// GROUP6
// ======
var group6 = dialog.add("group", undefined, {name: "group6"}); 
    group6.orientation = "row"; 
    group6.alignChildren = ["left","center"]; 
    group6.spacing = 10; 
    group6.margins = 0; 

// TPANEL1
// =======
var tpanel1 = group6.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
    tpanel1.alignChildren = "fill"; 
    tpanel1.preferredSize.width = 612.562; 
    tpanel1.margins = 0; 

// TAB1
// ====
var tab1 = tpanel1.add("tab", undefined, undefined, {name: "tab1"}); 
    tab1.text = "Color"; 
    tab1.orientation = "column"; 
    tab1.alignChildren = ["left","top"]; 
    tab1.spacing = 10; 
    tab1.margins = 10; 

// GROUP7
// ======
var group7 = tab1.add("group", undefined, {name: "group7"}); 
    group7.orientation = "row"; 
    group7.alignChildren = ["left","center"]; 
    group7.spacing = 10; 
    group7.margins = 0; 

// PANEL2
// ======
var panel2 = group7.add("panel", undefined, undefined, {name: "panel2"}); 
    panel2.text = "DCS"; 
    panel2.orientation = "column"; 
    panel2.alignChildren = ["left","top"]; 
    panel2.spacing = 10; 
    panel2.margins = 10; 
    panel2.alignment = ["left","fill"]; 

var checkbox1 = panel2.add("checkbox", undefined, undefined, {name: "checkbox1"}); 
    checkbox1.text = "Scotch Glass"; 

var checkbox2 = panel2.add("checkbox", undefined, undefined, {name: "checkbox2"}); 
    checkbox2.text = "Beer Can Glass"; 

var checkbox3 = panel2.add("checkbox", undefined, undefined, {name: "checkbox3"}); 
    checkbox3.text = "Water Bottle"; 

var checkbox4 = panel2.add("checkbox", undefined, undefined, {name: "checkbox4"}); 
    checkbox4.text = "Vector Lighter"; 

var checkbox5 = panel2.add("checkbox", undefined, undefined, {name: "checkbox5"}); 
    checkbox5.text = "Ornament Sheet"; 

// PANEL3
// ======
var panel3 = group7.add("panel", undefined, undefined, {name: "panel3"}); 
    panel3.text = "Vinyl"; 
    panel3.orientation = "column"; 
    panel3.alignChildren = ["left","top"]; 
    panel3.spacing = 10; 
    panel3.margins = 10; 
    panel3.alignment = ["left","fill"]; 

var checkbox6 = panel3.add("checkbox", undefined, undefined, {name: "checkbox6"}); 
    checkbox6.text = "Die Cut Sticker"; 

var checkbox7 = panel3.add("checkbox", undefined, undefined, {name: "checkbox7"}); 
    checkbox7.text = "Square Sticker"; 

var checkbox8 = panel3.add("checkbox", undefined, undefined, {name: "checkbox8"}); 
    checkbox8.text = "Vinyl Poster"; 

// PANEL4
// ======
var panel4 = group7.add("panel", undefined, undefined, {name: "panel4"}); 
    panel4.text = "Dye Sub"; 
    panel4.orientation = "column"; 
    panel4.alignChildren = ["left","top"]; 
    panel4.spacing = 10; 
    panel4.margins = 10; 

var checkbox9 = panel4.add("checkbox", undefined, undefined, {name: "checkbox9"}); 
    checkbox9.text = "Mug"; 

var checkbox10 = panel4.add("checkbox", undefined, undefined, {name: "checkbox10"}); 
    checkbox10.text = "Sequin Pillowcase Square"; 

var checkbox11 = panel4.add("checkbox", undefined, undefined, {name: "checkbox11"}); 
    checkbox11.text = "Sequin Pillowcase Heart"; 

// PANEL5
// ======
var panel5 = group7.add("panel", undefined, undefined, {name: "panel5"}); 
    panel5.text = "Brother"; 
    panel5.orientation = "column"; 
    panel5.alignChildren = ["left","top"]; 
    panel5.spacing = 10; 
    panel5.margins = 10; 

var checkbox12 = panel5.add("checkbox", undefined, undefined, {name: "checkbox12"}); 
    checkbox12.text = "Beanie"; 

var checkbox13 = panel5.add("checkbox", undefined, undefined, {name: "checkbox13"}); 
    checkbox13.text = "Black Cap"; 

var checkbox14 = panel5.add("checkbox", undefined, undefined, {name: "checkbox14"}); 
    checkbox14.text = "Patch"; 

var checkbox15 = panel5.add("checkbox", undefined, undefined, {name: "checkbox15"}); 
    checkbox15.text = "Pillowcase"; 

var checkbox16 = panel5.add("checkbox", undefined, undefined, {name: "checkbox16"}); 
    checkbox16.text = "Scarf"; 

// TAB2
// ====
var tab2 = tpanel1.add("tab", undefined, undefined, {name: "tab2"}); 
    tab2.text = "Engraving"; 
    tab2.orientation = "column"; 
    tab2.alignChildren = ["left","top"]; 
    tab2.spacing = 10; 
    tab2.margins = 10; 

// TPANEL1
// =======
tpanel1.selection = tab1; 

dialog.show();

