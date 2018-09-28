function createMyMenu(){
  var ui = DocumentApp.getUi();
  var menu = ui.createMenu('Sam\'s Research Menu');
  menu.addItem('Home', 'openHome');
  
  var amDataKeys = getDataKeys(appMap);
  
  for(var i = 0; i < amDataKeys.length; i++){

    var title = appMap[amDataKeys[i]].title;
    
    //for the j loop
    var items = appMap[amDataKeys[i]].items;
    var itemDataKeys = getDataKeys(items);
    var submenu = ui.createMenu(title);

    for(var j = 0; j < itemDataKeys.length; j++){
      Logger.log(j);
      Logger.log(items);
      submenu.addItem(items[itemDataKeys[j]], itemDataKeys[j]);
    } // end j loop
    
    menu.addSubMenu(submenu);
    
  }//end i loop
  
  menu.addToUi();
}



//seve templated HTML with data key, template, and title
function servePage(data, page, title){
    setActivePage(data);
  var template = HtmlService.createTemplateFromFile(page).evaluate().setTitle(title);
  DocumentApp.getUi().showSidebar(template);
}



/*****************
HIGH LEVEL PAGES
*****************/

function openHome(){
  servePage('Home', 'pages/appMap', 'Home');
}

function openESbar(){
  servePage('ES', 'pages/LargeBlocksTemplate', 'Ecosystem Services Information');
}

function openFCbar(){
  servePage('FC','pages/LargeBlocksTemplate','Forests & Climate Information');
}

function openReports(){
  servePage('DAR', 'pages/ReportsTemplate', 'Dogwood Alliance Reports');
  //var template = HtmlService.createTemplateFromFile('pages/DAR').evaluate().setTitle('Dogwood Alliance Report Links');
 // DocumentApp.getUi().showSidebar(template);
}

/***************
   THE STATES
***************/
function openALbar(){
  servePage('AL', 'pages/StateTemplate', 'Alabama Facts'); 
}

function openARbar(){
  servePage('AR', 'pages/StateTemplate', 'Arkansas Facts');  
}

function openFLbar(){
    servePage('FL', 'pages/StateTemplate', 'Florida Facts');
}


function openGAbar(){
    servePage('GA' , 'pages/StateTemplate', 'Georgia Facts');  
}

function openKYbar(){
    servePage('KY' , 'pages/StateTemplate', 'Kentucky Facts');
}

function openLAbar(){
    servePage('LA', 'pages/StateTemplate', 'Louisiana Facts'); 
}

function openMSbar(){
    servePage('MS', 'pages/StateTemplate', 'Mississippi Facts');
}

function openMObar(){
    servePage('MO', 'pages/StateTemplate', 'Missouri Facts');
}

function openNCbar(){
    servePage('NC', 'pages/StateTemplate', 'North Carolina Facts');
}

function openOKbar(){
    servePage('OK', 'pages/StateTemplate', 'Oklahoma Facts');
}

function openSCbar(){
    servePage('SC', 'pages/StateTemplate', 'South Carolina Facts');
}

function openTNbar(){
    servePage('TN', 'pages/StateTemplate', 'Tennessee Facts');
}

function openTXbar(){
    servePage('TX', 'pages/StateTemplate', 'Texas Facts');
}

function openVAbar(){
    servePage('VA', 'pages/StateTemplate', 'Virginia Facts');
}



/*********************
TEMPLATE INSERTIONS
*********************/
function projectTemplate(){
  importInDoc('11zdES1xBa8l765h0vqJtJlRZgM5dshofg1trHUj7eXE');
}

function marketingTemplate(){
  importInDoc('19AiRbivh3AAal5r0Im4_bcJKfLRXwJCKrdMZvCYLtuE');
}

function notesTemplate(){
  importInDoc('10nKPZi1ZCHHRRQApDg-IwI4owpCb2Jx0IBr-Xh3EYOk');
}

function smTemplate(){
  importInDoc('1znif259_Vp-p-kTu6nJ6hSR2tCeMrrcuztgMfJAewk0');
}

/*********************
USER ALERT FUNCTIONS
**********************/
function stillDev(){
  var ui = DocumentApp.getUi();
   var response = ui.alert('Sorry, this feature is still in development. Please try again later!');
  
}

/* If you're just serving static HTML (unlikely) you can use this type of function instead. */
/**********************
INCLUDE FOR HEADER

function include(filename) {
 return HtmlService.createHtmlOutputFromFile(filename)
  .getContent();
}
**********************/
