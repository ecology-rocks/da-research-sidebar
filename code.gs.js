/********************************************************************************************************************************************************************************
* This is the Sam's Research Menu codebase. It will get large.
* This particular codebase file should only contain onIstall and onOpen type functions. 
********************************************************************************************************************************************************************************/

//This function installs the menu properly.
function onInstall(e){
  onOpen();
}

//Adds the menu to our Add-Ons menu
function onOpen(){  
  createMyMenu();
}

