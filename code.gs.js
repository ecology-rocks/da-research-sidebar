/********************************************************************************************************************************************************************************
* This is the Sam's Research Menu codebase. It will get large.
* This particular codebase file should only contain menu item functions and functions that are very general.
********************************************************************************************************************************************************************************/

//This function installs the menu properly.
function onInstall(e){
  onOpen();
}


//Adds the menu to our Add-Ons menu
function onOpen(){  
  
  var ui = DocumentApp.getUi();
  
    ui.createMenu('Research Menu')
    
    /*.addSubMenu(ui.createMenu('Biomass Stats')
                 .addItem('All Facility Stats', 'stillDev') //sidebar with inserts
                 .addItem('Enviva Facility Stats', 'stillDev') //sidebar with inserts
                 .addSeparator()
                 .addItem('Environmental Justice Resources', 'stillDev') //sidebar with inserts
                 .addSeparator()
                 .addItem('Biomass Exports: Growth and Demand', 'stillDev')
                 .addItem('Biomass Contracts', 'stillDev')
                 )*/
    .addSubMenu(ui.createMenu('Calculators')
                .addItem('Tons of Pellets to Acres', 'tonsToAcres')
                .addItem('Tonnes of Pellets to Acres', 'tonnesToAcres')
                .addSeparator()
                .addItem('Acres to Square Miles', 'acToSqMi')
                .addItem('Square Miles to Acres', 'sqMiToAc')
               )
    .addSubMenu(ui.createMenu('Dogwood Resources')
               .addItem('Dogwood Mission', 'daMission')
               //.addItem('Fact Sheets (In Development)', 'stillDev')
               .addItem('Reports', 'openDLbar')
               //.addItem('Top Photography', 'stillDev')
               //.addItem('Top Infographics', 'stillDev')
               )
    .addSubMenu(ui.createMenu('High Level Text')
               .addItem('Ecosystem Services', 'openESbar')
               .addItem('Forests & Climate', 'openFCbar')
               )
    .addSubMenu(ui.createMenu('State Specific Facts (In Development)')
                .addItem('Alabama', 'openALbar')
                /*.addItem('Arkansas', 'stillDev')
                .addItem('Florida', 'stillDev')
                .addItem('Georgia', 'stillDev')
                .addItem('Kentucky', 'stillDev')
                .addItem('Louisiana', 'stillDev')
                .addItem('Mississippi', 'stillDev')
                .addItem('Missouri', 'stillDev')
                .addItem('North Carolina', 'stillDev')
                .addItem('Oklahoma', 'stillDev')
                .addItem('South Carolina', 'stillDev')
                .addItem('Tennessee', 'stillDev')
                .addItem('Texas', 'stillDev')
                .addItem('Virginia', 'stillDev')*/
                )
    /*.addSubMenu(ui.createMenu('Templates (In Development)')
                .addItem('Project Plan', 'stillDev')
                .addItem('Marketing Plan', 'stillDev')
                       )*/
    /*.addSubMenu(ui.createMenu('Wetland Forest Initiative')
                .addItem('Coalition Vision', 'stillDev')
                .addItem('Coalition Mission', 'stillDev')
                .addItem('Coalition Platform', 'stillDev')
                .addItem('Visit Program Folder', 'stillDev')
                )*/
    .addSeparator()
    .addToUi();
}

//Runs the 'onOpen' function above when the user installs the add-on 
//'onOpen()' below can be replaced with the code above, but less code is better
function onInstall() {
  onOpen();
}


//The Function below displays an HTML Sidebar (with custom HtmlService content')  called 'Sidebar.html' with the heading 'Data Tools'
function openESbar(){
  var template = HtmlService.createTemplateFromFile('pages/ES').evaluate().setTitle('Ecosystem Services Information');
  DocumentApp.getUi().showSidebar(template);
}

function openFCbar(){
  var template = HtmlService.createTemplateFromFile('pages/FC').evaluate().setTitle('Forests & Climate Information');
  DocumentApp.getUi().showSidebar(template);
}

function openDLbar(){
  var template = HtmlService.createTemplateFromFile('pages/DAR').evaluate().setTitle('Dogwood Alliance Report Links');
  DocumentApp.getUi().showSidebar(template);
}


function openALbar(){
  var template = HtmlService.createTemplateFromFile('pages/AL').evaluate().setTitle('Alabama Facts');
  DocumentApp.getUi().showSidebar(template);  
}
function stillDev(){
  var ui = DocumentApp.getUi();
   var response = ui.alert('Sorry, this feature is still in development. Please try again later!');
  
}

/* If you're just serving static HTML (unlikely) you can use this type of function instead.
function include(filename) {
 return HtmlService.createHtmlOutputFromFile(filename)
  .getContent();
}
*/