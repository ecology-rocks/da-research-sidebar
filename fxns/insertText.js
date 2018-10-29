/************************************
*        INSERTION FUNCTIONS        *
************************************/

/*************************************************************************
* This function takes an array and inserts it at the cursor, breaking
* by paragraph (\n\n) at each item. 
**************************************************************************/
function askAboutInsert(myArr){
  var ui = DocumentApp.getUi();
  var response = ui.alert('Would you like to insert this text into the document?', myArr.join('\n\n'), ui.ButtonSet.YES_NO);
  if(response == ui.Button.YES){
    insertTextAtCursor(myArr);
  } else if(response == ui.Button.NO){
    
  } else{
    
  }
}

/*************************************************************************
* This function takes a string and prompts the user to insert it
* at the cursor. 
**************************************************************************/
function askAboutInsertSolo(myString){
   var ui = DocumentApp.getUi();
  var response = ui.alert('Would you like to insert this text into the document?', myArr.join('\n\n'), ui.ButtonSet.YES_NO);
  if(response == ui.Button.YES){
    insertTextAtCursor(myArr);
  } else{
    
  } 
  
  
}

/*************************************************************************
* This function takes an array and inserts it
* at the cursor. 
**************************************************************************/
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


/************************************
*        CITATION FUNCTIONS         *
************************************/

/**********************************
* This function takes three strings
* and inserts those three strings as
* Cite. LINK. at the cursor.
***********************************/
function insertCiteAtCursor(citeText, citeLink, linkText){

  //if the link text is blank, set it to the link URL.
  //later on, if the link is not blank, it will insert as a link.
     if(linkText.length == 0){
       linkText = citeLink;
     }
  
    var cursor = DocumentApp.getActiveDocument().getCursor(); 
      if (cursor) {

         if(citeLink.length > 0){
           var element = cursor.insertText('\n');
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

/**********************************
* This function takes a citation key,
* looks it up in our public spreadsheet, 
* and returns the data as an object: 
* data: { cite: '', url: '', linkText: '' }
***********************************/
function findCiteFromLib(citeKey){
  //loading the spreadsheet
   var spreadsheetId = '14M5jm7oFJHFDQ9Xgf9PqchUaZIJ2DJWl6Pjb0rp2SDc';
   var rangeName = 'citations!A2:F';
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
       linkText: values[row][3],
          image: values[row][4],
          diveFxn: values[row][5],
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
  
  return data;
  
};




/**********************************
* This function takes a citation key,
* looks it up in our public spreadsheet, 
* and inserts it at the cursor using
* insertCiteAtCursor (Cite. LINK.)
***********************************/
function insertCiteFromLib(citeKey){
  
  var data = findCiteFromLib(citeKey);
  //insert text as citation
  insertCiteAtCursor(data.cite, data.url, data.linkText);
};



/**********************************
* This function takes an array of citation keys,
* looks them up in our public spreadsheet, 
* and inserts them at the cursor using
* insertCiteAtCursor (Cite. LINK.)
* It counts down backwards because of the way
* that inserts happen in Google Docs.
***********************************/
function insertCitesFromLib(citeKeys){
  for(var i = citeKeys.length; i > 0; i--){
    Logger.log(citeKeys[i]);
    insertCiteFromLib(citeKeys[i-1]);
    
  }
  
};

/**********************************
* This function takes a citation key,
* looks it up in our public spreadsheet, 
* and returns a HTML string, according to "style"
* if it is li, will return an unformatted list
* if anything else, just line breaks
***********************************/
function insertCiteHTMLFromLib(citeKeys, style){
  //check if Array
  if(!Array.isArray(citeKeys)){ citeKeys = [citeKeys]; };
  
  var finalString = '';
  var tempData = {};
  
  if(style == 'li'){
    finalString = '<ul>'; 
  }
 
  //loop through citeKeys
  for(var i = 0; i < citeKeys.length; i++){
    tempData = findCiteFromLib(citeKeys[i]);
    if(tempData.cite != 'This citation does not exist'){
      
      if(style == 'li'){  finalString += '<li>'; };
      
      finalString += tempData.cite + ' <a href="' + tempData.url + '">' + tempData.linkText + '</a>';
      
      if(style == 'li'){  finalString += '</li>'; } else { finalString += '<br />'; }
      
    }
  }
  if(style == 'li'){  finalString += '</ul>'; };
  return finalString;
  
};


/***********************************
*        OTHER MEDIA TYPES         * 
***********************************/


/**********************************
* This function takes two strings,
* inserts it at the cursor as a link.
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

/**********************************
* This function takes an image url,
* land inserts it as a full width image.
***********************************/
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


//orphan for inserting image from drive
//https://stackoverflow.com/questions/18848144/inserting-a-google-drive-image-into-a-document-using-google-apps-script
function ORPHANinsertImageFromDrive(){
 var fileId = '0B_dyIOzoasdfasdfPVTMxdTVXWDg';
 var img = DriveApp.getFileById(fileId).getBlob();
 DocumentApp.getActiveDocument().getBody().insertImage(0, img); 
}

/**********************************
* This function takes a document id
* and inserts the entire document
* at the cursor. 
***********************************/

function importInDoc(documentid) {
  
  
  //source URLS: //https://stackoverflow.com/questions/19987101/how-to-copy-content-and-formatting-between-google-docs
//https://stackoverflow.com/questions/19894885/how-to-copy-one-or-more-existing-pages-of-a-document-using-google-apps-script/19907943#19907943
  
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









