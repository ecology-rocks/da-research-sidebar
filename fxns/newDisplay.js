
function pullDB(rangeName) {
  var spreadsheetId = '1BZVy-NBCc8iDNQdrfmueBsuW68K9Zyqhw2Oo3C3Q0yE';
   var values = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;
  return values;
}   

function Citations(){
  return pullDB('citations');
}
 


//returns a single id / first result
function getItem(id, data){
  return data.filter(function(value, index, array) {
   return value[0] == id; 
  })[0];
};

//returns multiple ids
function getItems (arr, data){
//test if arr is array
if(!Array.isArray(arr)){ arr = [arr]; }

var finalData = [];
for(var i = 0; i < arr.length; i++){
  finalData.push(getItem(arr[i], data));
};
return finalData;
};


function setCollectionUP(id){
  if(!id){ id = '0'; }
  var userProperties = PropertiesService.getUserProperties();
  return userProperties.setProperty('collectionid', id);
}

function getCollectionUP(){
  var userProperties = PropertiesService.getUserProperties();
  var activePage =  userProperties.getProperty('collectionid');
  Logger.log("Your active collectionid is: " + activePage);
  return activePage;
}



function getCollectionData(){
  
   var collectionid = getCollectionUP();
   //Logger.log("Your current collection id is: " + collectionid);
   
   var myData = collectionsArr[collectionid];
   //Logger.log("Your returned collection is: " + myData.title);
   
   return myData;
  };


function insertNewCite(id){
var myData = getItem(id, Citations());
 insertCiteAtCursor(myData[2], myData[3], myData[1])
};


                     
/********************
TESTING
*********************/

function testCitations(){
  var citationsdb = Citations();
  //test a single
  Logger.log("Testing A Single Citation, id #7: ");
  var myCitation = getItem(7, citationsdb)
  Logger.log(myCitation);
  
  Logger.log("Testing Multiple Citations, ids 7,8,9: ");
  var myCitations = getItems([7,8,9], citationsdb);
  Logger.log(myCitations);
  Logger.log("Result 1, id 0: " + myCitations[0]);
};