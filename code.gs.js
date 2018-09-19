/********************************************************************************************************************************************************************************
* This Add-on contains the following:                                                                                                                                           
*                                                                                                                                                                                
*    1. function onOpen()      - This fucntion adds a custom menu - 'Data Tools Menu' - to the Google Sheets ribbon and two custom Items within the menu once the sheet is opened 
*          custom item 1: 'Sidebar Data Tools'                                                                                                                                  
*          custom item 2: 'Say Hello there'                                     
*
*    2. function onInstall()   - This function runs the 'onOpen()' function once the add-on is installed by the user
*
*    3. function openSidebar() - This function adds a custom html sidebar -'Sidebar.html' - with 4 buttons:
*          button 1: 'Apps-script CSS'      - Opens a website using an anchor tag <a></a> / link
*          button 2: 'Apps-script Triggers' - Opens a website using JavaScript
*          button 3: 'Display Data'         - Display's a message from a script cotained in the html file 
*          button 4: 'Say Hello'            - Calls the 'sayHello()' function from the Code.gs file
*
*    4. function sayHello()    - Opens a message box with the message 'Hello there'
*
********************************************************************************************************************************************************************************/

//Adds a custom menu called 'Data Tools Menu' to the Google Sheets ribbon once the sheet is opened
function onOpen(){
  //Call the Ui class   
  DocumentApp.getUi()
    //If you don't include a name for your menu below, it will be added under the 'Add-on' tab in the ribbon and the default name will be the name of your project
    .createMenu('Research Menu')
    //Adds an item to the 'Research Menu' - addItem('Item name','Item function')
    //This item will run the 'openSidebar' function (lower down on this page) and open a sidebar menu in your spreadsheet
    .addItem('Ecosystem Services Information', 'openESbar')
    .addItem('Forests & Climate Information', 'openFCbar')
    //Adds a seperator line between the two menu items - optional
    .addSeparator()
    //This items will run the 'sayHello' function lower down on this page
    .addItem('Pellets To Acres Calculator', 'calculateAcres')
    //Inserts the 'Data Tools Menue' into the instance of the editor's user interface
    .addToUi();
  
  //All the code above can be entered as a single line of code:
  //SpreadsheetApp.getUi().createMenu('Data Tools Menu').addItem('Sidebar Data Tools', 'openSidebar')..addSeparator().addItem('Say Hello there', 'sayHello').addToUi();
}

//Runs the 'onOpen' function above when the user installs the add-on 
//'onOpen()' below can be replaced with the code above, but less code is better
function onInstall() {
  onOpen();
}

//The Function below displays an HTML Sidebar (with custom HtmlService content')  called 'Sidebar.html' with the heading 'Data Tools'
function openESbar(){
  var template = HtmlService.createTemplateFromFile('Ecosystem Services')
      .evaluate()
      .setTitle('Ecosystem Services Information')
 DocumentApp.getUi().showSidebar(template);
}

function openFCbar(){
  var template = HtmlService.createTemplateFromFile('Forests & Climate')
      .evaluate()
      .setTitle('Forests & Climate Information')
 DocumentApp.getUi().showSidebar(template);
}

//This function will display a message box with the text 'Hello there'
function sayHello(){
  //In this example we use 'Browser.msgBox' to display a message but in JavaScript we use 'window.alert'
  //You can also use 'window.alert' in App Script, but you will have to call the Ui class first - SpreadsheetApp.getUi().alert('Hello there');;
  Browser.msgBox('Hello there');
}

function appAbout() {
  DocumentApp.getUi().alert('This app is a collection of mostly text-insert functions to help you with developing materials. The text is inserted at your cursor. There is also an acreage calculator. ');
}


function include(filename) {
 return HtmlService.createHtmlOutputFromFile(filename)
  .getContent();
}


function openSidebar(){
  var template = HtmlService.createTemplateFromFile('Ecosystem Services')
      .evaluate()
      .setTitle('Ecosystem Services Repeatable')
 DocumentApp.getUi().showSidebar(template);
}

/**
 * Get the URL for the Google Apps Script running as a WebApp.
 */
function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}


 function insertTextAtCursor(myArr){     
      var cursor = DocumentApp.getActiveDocument().getCursor(); 
   
      if (cursor) {
        var element = cursor.insertText(myArr.join('\n\n'));
        if (!element) {
          DocumentApp.getUi().alert('Cannot insert text here, sorry!');
        }
      } else {
        DocumentApp.getUi().alert('Cannot find a cursor, sorry! You can\'t have text highlighted while trying to insert.');
      }        
    }

function askAboutInsert(myArr){
  var ui = DocumentApp.getUi();
  var response = ui.alert('Would you like to insert this text into the document?', myArr.join('\n\n'), ui.ButtonSet.YES_NO);
  if(response == ui.Button.YES){
    insertTextAtCursor(myArr);
  } else if(response == ui.Button.NO){
    
  } else{
    
  }
}

function numberWithCommas(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateAcres(){
  var ui = DocumentApp.getUi();
  var response = ui.prompt('How many tons of pellets do you want to convert to acres?', '(If you put in American tons, click yes. If you put in metric tonnes, click no)', ui.ButtonSet.YES_NO);

  // Process the user's response.
  if (response.getSelectedButton() == ui.Button.YES) {
       var responseString = numberWithCommas(Number(response.getResponseText())) + ' tons of pellets is equal to ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.024)) + ' acres per year, or ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.024/365)) + ' acres per day. ';
       askAboutInsert([responseString]);

 //start if NO
     } else if (response.getSelectedButton() == ui.Button.NO) {
       
       var responseString = numberWithCommas(Number(response.getResponseText())) + ' tons of pellets is equal to ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.0265)) + ' acres per year, or ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.0265/365)) + ' acres per day. ';           
       askAboutInsert([responseString]);
       
       
       //closed out of dialogue completely
     } else {
       
   //if you need to tell the user they're dumb.
       
       
    }
  
}

function getDataKeys(e) {
  return Object.keys(e);
}

function getData(e) {
  return e;
}
