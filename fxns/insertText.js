

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
   
      if (cursor) {
        var element = cursor.insertText('\n' + myArr.join('\n\n') + '\n');
        if (!element) {
          DocumentApp.getUi().alert('Cannot insert text here, sorry!');
        }
      } else {
        DocumentApp.getUi().alert('Cannot find a cursor, sorry! You can\'t have text highlighted while trying to insert.');
      }        
    }



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


//sample function to play with
function insertImage(img) {

  // Insert a web image  
  var img = "https://img.labnol.org/logo.png";
  var blob = UrlFetchApp.fetch(img).getBlob();
  
  // Insert an image from Google Drive
  var img  = "https://drive.google.com/open?id=xyz";
  var fileID = img.match(/[\w\_\-]{25,}/).toString();
  var blob   = DriveApp.getFileById(fileID).getBlob();
  
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  
  if (cursor) {    
    cursor.insertInlineImage(blob);
  } else {
    doc.getBody().insertImage(0, image);
  }
  
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









