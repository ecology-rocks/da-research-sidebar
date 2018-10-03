/*// Set a property in each of the three property stores.
var scriptProperties = PropertiesService.getScriptProperties();
var userProperties = PropertiesService.getUserProperties();
var documentProperties = PropertiesService.getDocumentProperties();

scriptProperties.setProperty('SERVER_URL', 'http://www.example.com/');
userProperties.setProperty('DISPLAY_UNITS', 'metric');
documentProperties.setProperty('SOURCE_DATA_ID', '1234567890abcdefghijklmnopqrstuvwxyz');*/

function getActivePage(){
  var userProperties = PropertiesService.getUserProperties();
  return userProperties.getProperty('ActivePage');
}


function setActivePage(myId){
   var userProperties = PropertiesService.getUserProperties();
   return userProperties.setProperty('ActivePage', myId);
}

function getPageData(){
   var userProperties = PropertiesService.getUserProperties();
   var activePage =  userProperties.getProperty('ActivePage');
  
  //high level texts
       if(activePage == "ES"){ return getData(esText); } 
  else if(activePage == "FC"){ return getData(fcText); }
  
  // dev fxns
  
  //else if(activePage == "Home"){ return getData(esText); }
  //states

  else if(activePage == "AL"){ return getData(alText); }
  else if(activePage == "AR"){ return getData(arText); }  
  else if(activePage == "FL"){ return getData(flText); } 
  else if(activePage == "GA"){ return getData(gaText); } 
  else if(activePage == "KY"){ return getData(kyText); } 
  else if(activePage == "LA"){ return getData(laText); } 
  else if(activePage == "MO"){ return getData(moText); } 
  else if(activePage == "MS"){ return getData(msText); } 
  else if(activePage == "NC"){ return getData(ncText); } 
  else if(activePage == "OK"){ return getData(okText); } 
  else if(activePage == "SC"){ return getData(scText); } 
  else if(activePage == "TN"){ return getData(tnText); } 
  else if(activePage == "TX"){ return getData(txText); } 
  else if(activePage == "VA"){ return getData(vaText); }
  //reports
  else if(activePage == "DAR"){ return getData(daReports); }
  else                       { return "no data"; }  
}
