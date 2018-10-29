function daMission() {
  askAboutInsert(['Dogwood Alliance mobilizes diverse voices to protect southern forests and communities from destructive industrial logging.']);
}

function insertHeader() {
  var header =  '<!DOCTYPE html><html>' + 
    '<head><base target="_top">' + 
      '<link rel="stylesheet" href="https://ssl.gstatic.com/docs/script/css/add-ons1.css">'+
        '<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">' +      
          '<link href="https://fonts.googleapis.com/css?family=Lobster+Two" rel="stylesheet">' + 
          '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">' +
            '</head><body>' + 
              ' <div class="m-2 p-2 text-center"><span style="font-family: \'Lobster Two\', cursive;"><img src="https://i.imgur.com/9WeUrTo.png"><b>Sam\'s Research Menu</b> &nbsp; &nbsp; </span>';
   header += '<button class="bg-primary text-dark rounded " onClick="google.script.run.serveNewPage(0)">Go Home</button>';
  //header += insertNav();
  header += '</div></div>';
  return header;
}

function insertFooter() { 
  var footer = '<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>' +
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>' +
      '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>' + 
        '</body></html>';
  return footer;
}




function insertNav(){
  var navlist = '<button class="action btn-sm" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Navigation</button>' +
    '<div class="collapse p-2 m-2" id="collapseExample">';
  var amDataKeys = getDataKeys(appMap);
  
  for(var i = 0; i < amDataKeys.length; i++){
    
    var title = appMap[amDataKeys[i]].title;
    
    navlist += '<small><b>' + title + '</b></small>: ';
    //for the j loop
    var items = appMap[amDataKeys[i]].items;
    var itemDataKeys = getDataKeys(items);
    
    
    for(var j = 0; j < itemDataKeys.length; j++){
      navlist += '<small><a href="#" onClick="google.script.run.' + itemDataKeys[j] + '();return false;">' + items[itemDataKeys[j]] + ' ' + '</a></small>';
      if(j < itemDataKeys.length - 1){
        navlist += " - ";
      }
    } // end j loop
    navlist += '<br />';
    
    
  }//end i loop
  navlist += '';
  
  return navlist;
}
