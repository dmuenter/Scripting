/*=====================================================*/

//Adding a New Product - "Product Scripter UI.jsx"

//Code to add: 
    { type: Types.TYPE, department: Departments.DEPARTMENT, key: "department_ProductNameCheckbox", label: "Product" },

/*-----------------------------------------------------*/

//Example and Explanation

//Available options for Types.TYPE:
//  COLOR
//  ENGRAVING

//Available optiosn for Departments.DEPARTMENT
//  DTS
//  DS
//  BR
//  VINYL
//  EP

    { type: Types.ENGRAVING, department: Departments.EP, key: "ep_CeramicMugCheckbox", label: "Ceramic Mug" },

//For an engraved ceramic mug, we want Engraving type, the EP department,
//and then have to create our checkbox name and what shows up in the UI

/*=====================================================*/

/*=====================================================*/

//Adding a New Product - ProuductScripts.jsx - Part 1    

//Code to add:

    {
        key: "department_ProductNameCheckbox",
        functionToRun: process_DEPARTMENT_ProductName
    },

/*-----------------------------------------------------*/

//Example and Explanation

    {                                           //this begins a new object in our list
        key: "ep_CeramicMugCheckbox",           //this line you tell the program what product checkbox from the UI it is reading (copy from what you added in the "Product Scripter UI.jsx")
        functionToRun: process_EP_CeramicMug    //this line names your function that you will create with the information and steps for the product
    },                                          //this ends the new object in our list. Make sure to include the comma because this object is one of a series of items in our list

/*=====================================================*/

/*=====================================================*/

//Adding a New Product - ProuductScripts.jsx - Part 2

//Code to add:

function process_DEPARTMENT_ProductName(data) {
    var printTemplatePath = "full file path of print template";
    var listingTemplatePath = "full file path of listing template";
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DEPARTMENT - ITEM - " + data.fileSKU;
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DEPARTMENT - Item - " + data.fileSKU;

//Generate Print File
    openTemplate(File(printTemplatePath));
    processFile(data);
    //STEPS HERE VARY
    savePSD(activeDocument, File(savePrintDestination));
    closeDocument();

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    //STEPS HERE VARY
    saveJPG(activeDocument, File(saveListingDestination), false);
    closeDocument();
}

/*-----------------------------------------------------*/

//Explanation

function process_DEPARTMENT_ProductName(data) {     //Declare our new function, and establish that it will take and use our data variable
    var printTemplatePath = "full file path of print template";     //the file path for our print template Photoshop file
    var listingTemplatePath = "full file path of listing template";     //the file path for our listing template Photoshop file
    var savePrintDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Print Files/DEPARTMENT - ITEM - " + data.fileSKU;     //create the file path for the print file to be saved to
    var saveListingDestination = "C:/Scripting/Outputs/" + data.fileSKU + "/Listing Files/DEPARTMENT - Item - " + data.fileSKU;     //create the file path for the listing file to be saved to

//Generate Print File
    openTemplate(File(printTemplatePath));                  //this opens the template located at our print template file path
    processFile(data);                                      //this step handles all of the swapping out of the artwork for the 
    //this line you need to decide which layers you want to keep. It will handle deleting the rest.
                                                            //options are keepColor, keepEP, keepEPInverted, or keepBothEP. Whichever one you pick, if it's a print file put "print" in as a paremeter.
    //this line and others will be various actions that Photoshop needs to do to edit your file
                                                            //try to look at other products to see how they're built and use the steps that they use to create the new product
    savePSD(activeDocument, File(savePrintDestination));    //this line saves your current document to the print destination file path we created
    closeDocument();                                        //this line closes the document

// Generate Listing File
    openTemplate(File(listingTemplatePath));
    processFile(data);
    //STEPS HERE VARY, similar to the Print file steps above
    saveJPG(activeDocument, File(saveListingDestination), false);
    closeDocument();
}

/*=====================================================*/