
/*************************************************************
* The two functions below are for looping through objects.
* Mostly used in the sidebar pages.
**************************************************************/
function getDataKeys(e) {
  return Object.keys(e);
}

function getData(e) {
  return e;
}



/***********************************
*        RETRIEVING FROM OBJECTS         * 
***********************************/

//retrieve and insert fact according to record number
function getFact(recordNum){
//data is coming from UserProperty
 var data = getPageData();
 var insertMe = data.facts[recordNum];
  //wrapped in array, be sure to just send string.
  if(!Array.isArray(insertMe)){ insertMe = [insertMe]; };
  insertTextAtCursor(insertMe);
  
}

/*******************************************************
* retrieve and insert large blocks text (myType = 't')
* or citation (myText != 't') from record id
********************************************************/
function getStory(recordId, myType){
//data is coming from UserProperty, which is set whenever a page is opened.
 var data = getPageData();
 var insertMe = [];
  

  if(myType == 't'){
    insertMe = data[recordId].text;
    insertTextAtCursor(insertMe);
  } else {
    insertMe = data[recordId].citeKeys;
        insertCitesFromLib(insertMe);
  }
  
}