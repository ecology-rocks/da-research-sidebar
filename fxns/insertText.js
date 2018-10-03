

/******************************************************
* This function takes an array and inserts it, breaking
* by paragraph (\n\n) at each item. 
*******************************************************/
function askAboutInsert(myArr){
  var ui = DocumentApp.getUi();
  var response = ui.alert('Would you like to insert this text into the document?', myArr.join('\n\n'), ui.ButtonSet.YES_NO);
  if(response == ui.Button.YES){
    insertTextAtCursor(myArr);
  } else if(response == ui.Button.NO){
    
  } else{
    
  }
}

function askAboutInsertSolo(myString){
   var ui = DocumentApp.getUi();
  var response = ui.alert('Would you like to insert this text into the document?', myArr.join('\n\n'), ui.ButtonSet.YES_NO);
  if(response == ui.Button.YES){
    insertTextAtCursor(myArr);
  } else{
    
  } 
  
  
}


 function insertTextAtCursor(myArr){     
      var cursor = DocumentApp.getActiveDocument().getCursor(); 
   
    if(!Array.isArray(myArr)){ myArr = [myArr]; };
   
      if (cursor) {
        var element = cursor.insertText('\n' + myArr.join('\n\n') + '\n');
        if (!element) {
          DocumentApp.getUi().alert('Cannot insert text here, sorry!');
        }
      } else {
        DocumentApp.getUi().alert('Cannot find a cursor, sorry! You can\'t have text highlighted while trying to insert.');
      }        
    }


/***********************
   CITATION FUNCTIONS
************************/
function insertCiteAtCursor(citeText, citeLink, linkText){

  //if the link text is blank, set it to the link URL.
  //later on, if the link is not blank, it will insert as a link.
     if(linkText.length == 0){
       linkText = citeLink;
     }
  
    var cursor = DocumentApp.getActiveDocument().getCursor(); 
      if (cursor) {

         if(citeLink.length > 0){
           cursor.insertText('\n');
           cursor.insertText(linkText).setLinkUrl(citeLink);
         }
       cursor.insertText('\n'  + citeText + ' ');

        if (!element) {
          DocumentApp.getUi().alert('Cannot insert text here, sorry!');
        }
      } else {
        DocumentApp.getUi().alert('Cannot find a cursor, sorry! You can\'t have text highlighted while trying to insert.');
      }
};

function insertCiteFromLib(citeKey){
  
  //loading the spreadsheet
   var spreadsheetId = '14M5jm7oFJHFDQ9Xgf9PqchUaZIJ2DJWl6Pjb0rp2SDc';
   var rangeName = 'citations!A2:D';
   var values = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;
  
  //blank data
   var data = {};
  
  //loop through citations spreadsheet
    for (var row = 0; row < values.length; row++) {      
//if we have a hit, put it in data
     if(values[row][0] == citeKey){
        data = {
           cite: values[row][1],
            url: values[row][2], 
       linkText: values[row][3]
     };
    }//end if
  }//end for
  
  //if there were no hits, send error message instead
    if(!data.hasOwnProperty('cite')){
        var data = {
            cite: 'This citation does not exist',
            url: '', 
            linkText: ''
     };
       };
  //insert text as citation
  insertCiteAtCursor(data.cite, data.url, data.linkText);
  
};



/***********************************
  INSERTING OTHER MEDIA TYPES
***********************************/


 function insertLinkAtCursor(link, title){     
      var cursor = DocumentApp.getActiveDocument().getCursor(); 
   
   if(title == ''){
    title = link; 
   }
   
      if (cursor) {
        var beginning = cursor.insertText('\n');
        var element = cursor.insertText(title);
        var end = cursor.insertText('\n');
        element.setLinkUrl(link);
        if (!element) {
          DocumentApp.getUi().alert('Cannot insert text here, sorry!');
        }
      } else {
        DocumentApp.getUi().alert('Cannot find a cursor, sorry! You can\'t have text highlighted while trying to insert.');
      }        
    }


function insertImage(img) {

  // Insert a web image  
  //var img = "https://img.labnol.org/logo.png";
  var blob = UrlFetchApp.fetch(img).getBlob();
  
  // Insert an image from Google Drive
  //var img  = "https://drive.google.com/open?id=xyz";
 // var fileID = img.match(/[\w\_\-]{25,}/).toString();
 // var blob   = DriveApp.getFileById(fileID).getBlob();
  
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  
  if (cursor) {    
    var myImage = cursor.insertInlineImage(blob);
  } else {
    var myImage = doc.getBody().insertImage(0, image);
  }
  
var width = myImage.getWidth();
var newW = width;
var height = myImage.getHeight();
var newH = height;
var ratio = width/height

if(width>640){
newW = 640;
newH = parseInt(newW/ratio);
}
myImage.setWidth(newW).setHeight(newH)

}

//https://stackoverflow.com/questions/19987101/how-to-copy-content-and-formatting-between-google-docs
//https://stackoverflow.com/questions/19894885/how-to-copy-one-or-more-existing-pages-of-a-document-using-google-apps-script/19907943#19907943
//insert document function to play with
function importInDoc(documentid) {

  //source document for copying
  var sourceDoc = DocumentApp.openById(documentid).getBody();
  
  //get this document
  var targetDoc = DocumentApp.getActiveDocument();

  var totalElements = sourceDoc.getNumChildren();

  for( var j = 0; j < totalElements; ++j ) {
    var body = targetDoc.getBody()
    var element = sourceDoc.getChild(j).copy();
    var type = element.getType();
    if( type == DocumentApp.ElementType.PARAGRAPH ){
      body.appendParagraph(element);
    }
    else if( type == DocumentApp.ElementType.TABLE){
      body.appendTable(element);
      }
    else if( type == DocumentApp.ElementType.LIST_ITEM){
      body.appendListItem(element);
      }
//    ...add other conditions (headers, footers...
    }
  targetDoc.saveAndClose();
}


/**************************
Specific Insertion Functions
***************************/

function getFact(recordNum){
//data is coming from UserProperty
 var data = getPageData();
 var insertMe = data.facts[recordNum];
  //wrapped in array, be sure to just send string.
  if(!Array.isArray(insertMe)){ insertMe = [insertMe]; };
  insertTextAtCursor(insertMe);
  
}







