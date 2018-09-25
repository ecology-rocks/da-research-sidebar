
/*********************************************************************************
* This function turns a number into a number with commas.
**********************************************************************************/
function numberWithCommas(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



/*********************************************************************************
* This is the entire calculate acres function. 
* Could be broken into smaller chunks if we wanted.
**********************************************************************************/

function calculateAcres(){
  var ui = DocumentApp.getUi();
  var response = ui.prompt('How many tons of pellets do you want to convert to acres?', '(If you put in American tons, click yes. If you put in metric tonnes, click no)', ui.ButtonSet.YES_NO);

  // Process the user's response.
  if (response.getSelectedButton() == ui.Button.YES) {
       var responseString = numberWithCommas(Number(response.getResponseText())) + ' tons of pellets is equal to ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.024)) + ' acres per year, or ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.024/365)) + ' acres per day. ';
       askAboutInsert([responseString]);

 //start if NO
     } else if (response.getSelectedButton() == ui.Button.NO) {
       
       var responseString = numberWithCommas(Number(response.getResponseText())) + ' tons of pellets is equal to ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.0265)) + ' acres per year, or ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.0265/365)) + ' acres per day. ';           
       askAboutInsert([responseString]);
       
       
       //closed out of dialogue completely
     } else {
       
   //if you need to tell the user they're dumb.
       
       
    }
  
}


function tonsToAcres(){
  var ui = DocumentApp.getUi();
  var response = ui.prompt('How many tons of pellets do you want to convert to acres?');

  // Process the user's response.
  if (response.getSelectedButton() == ui.Button.OK) {
       var responseString = numberWithCommas(Number(response.getResponseText())) + ' tons of pellets is equal to ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.024)) + ' acres per year, or ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.024/365)) + ' acres per day. ';
       askAboutInsert([responseString]);
       
     }
  
}

function tonnesToAcres(){
  var ui = DocumentApp.getUi();
  var response = ui.prompt('How many (metric) tonnes of pellets do you want to convert to acres?');

  // Process the user's response.
  if (response.getSelectedButton() == ui.Button.OK) {
       var responseString = numberWithCommas(Number(response.getResponseText())) + ' tonnes of pellets is equal to ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.0265)) + ' acres per year, or ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.0265/365)) + ' acres per day. ';
       askAboutInsert([responseString]);
       
     }
  
}

function acToSqMi(){
  var ui = DocumentApp.getUi();
  var response = ui.prompt('How many acres do you want to convert to square miles?');

  // Process the user's response.
  if (response.getSelectedButton() == ui.Button.OK) {
    
      var userinput = response.getResponseText();
      var answer = Math.round(Number(userinput)*0.0015625);
      var context = '';
    
    
    //switch for comparisons
    if(answer < 65){ context = ''; }
    else if(answer < 103) { context = 'This is roughly the size of Washington, DC. '; }
    else if(answer < 770 ){ context = 'This is roughly ' + Math.floor(answer/68.25) + ' times the size of Washington, DC. '; }
    else if(answer < 1158) { context = 'This is roughly half the size of Rhode Island. '; }
    else if(answer < 1500) { context = 'This is roughly three-quarters the size of Rhode Island. '; }
    else if(answer < 1931) { context = 'This is about the size of Rhode Island. '; }
    else if(answer < 2703) { context = 'This is about 1.5x the size of Rhode Island. '; }
    else if(answer < 12000) { context = 'This is about ' + Math.floor(answer/1545) + ' times the size of Rhode Island. '; }
    else if(answer < 15508) { context = 'This is about the size of Maryland. '; }
    else if(answer < 21712) { context = 'This is about 1.5x the size of Maryland. ';}
    else if(answer < 30287) { context = 'This is about the size of West Virginia. ';}
    else if(answer < 42402) { context = 'This is about 1.5x the size of West Virginia. ';}
    else if(answer < 64800) { context = 'This is about the size of Louisiana. '; }
    else if(answer < 90720) { context = 'This is about 1.5x the size of Louisiana. '; }
    else if(answer < 201435) { context = 'This is about ' + Math.floor(answer/51840) + ' times the size of Louisiana. '; }
    else if(answer < 335725) { context = 'This is about the size of Texas. ';}
    else if(answer < 470015) { context = 'This is about 1.5x the size of Texas. ';}                         
    else { context = 'This is about ' + Math.floor(answer/268580) + ' times the size of Texas. '; }
      
    var responseString = numberWithCommas(userinput) + ' acres are equal to ' + 
                            numberWithCommas(answer) + ' square miles. ' + context;
       askAboutInsert([responseString]);
       
     }
  
}

function sqMiToAc(){
  var ui = DocumentApp.getUi();
  var response = ui.prompt('How many square miles do you want to convert to acres?');

  // Process the user's response.
  if (response.getSelectedButton() == ui.Button.OK) {
       var responseString = numberWithCommas(Number(response.getResponseText())) + ' square miles are equal to ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*640)) + ' acres. ';
       askAboutInsert([responseString]);
       
     }
  
}