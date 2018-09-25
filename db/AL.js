
var alText = {
    alESR: {
      title: ' How much are Alabama wetland forests worth? ',
      text: [' According to the Treasures of the South report, Alabama’s wetland forests are worth $34.4 billion and could increase in value to $36.7 billion by investing in conservation and better management practices. Protection from extreme events alone is worth $10.3 billion to the state. Recreation, tourism, and aesthetics alone is worth $8.7 billion to the state. Water and waste treatment alone is worth $7.9 billion to the state. Food and pollination alone is worth $5 billion to the state. Regulating services alone is worth $2.4 billion to the state. Raw materials alone is worth $59 million to the state. '],
      cite: [' Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018). '],
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Alabama-State-Fact-Sheet.pdf',
      tFxn: 'alESRt', //insert text
      cFxn: 'alESRc', //insert citation
      lFxn: 'alESRl', //insert link
      sFxn: 'alESRs' //insert state report link
    },
  
  alSw: {
      title: ' Alabama Swamp Facts ',
      text: ['Alabama has 96 named swamps and 6,543 named streams in the state.',
             'Alabama has 42 billion metric tons of carbon dioxide equivalent stored in its wetland forests.'],
      cite: [' Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018). '],
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Alabama-State-Fact-Sheet.pdf',
      tFxn: 'alSwt', //insert text
      cFxn: 'alESRc', //insert citation
      lFxn: 'alESRl', //insert link
      sFxn: 'alESRs' //insert state report link    
  },
  
  alInd: {
      title: ' Alabama Forest Industry Facts ',
      text: ['In 2016, OES reported that only 220 foresters were employed in Alabama.', 
             'In 2011, there were 115 forest product mills (e.g., pulp and timber) employing 13,517 people in Alabama.'],
      cite: [' Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018). '],
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Alabama-State-Fact-Sheet.pdf',
      tFxn: 'alIndt', //insert text
      cFxn: 'alESRc', //insert citation
      lFxn: 'alESRl', //insert link
      sFxn: 'alESRs' //insert state report link    
  },  
  
    alDis: {
      title: ' Alabama Natural Disaster Facts ',
      text: ['There were 3 billion dollar flood events between 1980 and 2017 in Alabama.', 
             'Between 1851 and 2004, 22 hurricanes and 6 major hurricanes (categories 3-5) made landfall on the Alabama coastline.'],
      cite: [' Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018). '],
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Alabama-State-Fact-Sheet.pdf',
      tFxn: 'alDist', //insert text
      cFxn: 'alESRc', //insert citation
      lFxn: 'alESRl', //insert link
      sFxn: 'alESRs' //insert state report link    
  }, 
  
     alWW: {
      title: ' Alabama Water and Well Facts ',
      text: ['In 1990, 45.5 percent of people in Alabama relied on septic tanks or other private sewage disposal options.',
             'In 1990, 12.9 percent of people in Alabama relied on wells or other private water.'],
      cite: [' Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018). '],
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Alabama-State-Fact-Sheet.pdf',
      tFxn: 'alWWt', //insert text
      cFxn: 'alESRc', //insert citation
      lFxn: 'alESRl', //insert link
      sFxn: 'alESRs' //insert state report link    
  },  
  
       alRec: {
      title: ' Alabama Recreation Facts ',
      text: ['Alabama had 25.8 million visitors in 2016, which contributed $13.3 billion in USD visitor spending and supported 179,644 tourism jobs.',
             'In 2016, hunters purchased 200,000 deer hunting licenses and harvested 101,070 ducks and geese in Alabama.',
             'Approximately 49.8 percent of Alabama residents participated in hunting or wildlife watching.',
             'Roughly 744 thousand residents in Alabama hunt or fish.',
             'Nearly 1.1 million residents in Alabama actively participate in wildlife watching.',
             'Approximately $2.7 billion USD was spent in Alabama on wildlife-related recreation in 2011.'],
      cite: [' Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018). '],
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Alabama-State-Fact-Sheet.pdf',
      tFxn: 'alRect', //insert text
      cFxn: 'alESRc', //insert citation
      lFxn: 'alESRl', //insert link
      sFxn: 'alESRs' //insert state report link    
  },  
  
};

function alESRc(){ insertLinkAtCursor(alText.alESR.cLink, 'Report Link. '); 
                   insertTextAtCursor(alText.alESR.cite);
                   }  
function alESRl(){ insertLinkAtCursor(alText.alESR.cLink, alText.alESR.cTitle); }
function alESRs(){ insertLinkAtCursor(alText.alESR.stateLink, alText.alESR.title); } 

function alESRt(){ insertTextAtCursor(alText.alESR.text); }
function alSwt(){  insertTextAtCursor(alText.alSw.text); }
function alIndt(){ insertTextAtCursor(alText.alInd.text); }
function alDist(){ insertTextAtCursor(alText.alDis.text); }
function alWWt(){  insertTextAtCursor(alText.alWW.text); }
function alRect(){ insertTextAtCursor(alText.alRec.text); }

