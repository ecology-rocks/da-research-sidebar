
var tnText = {
      title: ' How much are Tennessee wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Florida-State-Fact-Sheet.pdf',
  
      facts: ['Tennessee’s Wetland Forests Are Worth $7.8 Billion',
              'Worth could increase up to $924 million',
              'Wetland Forest Gem: Chickasaw National Wildlife Refuge',
              'Over six hundred thousand acres of wetland forest, including forty one named swamps and almost ten thousand named streams in the state 1',
              'Seventeen percent of wetland forests in Tennessee are permanently protected',
              'Protection From Extreme Events: Tennessee’s Wetland Forests Provide $2.3 Billion',
              'Value in protection from extreme events and water flow regulation could increase up to $270 million',
              'Since 1851, there have been fourteen major Mississippi river floods, impacting states along the river like Tennessee 2',
              'Three flood events cost over a billion dollars of damages each since 1980 3',
              'Aesthetics, Tourism, and Recreation: Tennessee’s Wetland Forests Provide $1.9 Million',
              'Value in aesthetics and recreation could increase up to $254 million ',
              'Tennessee had over a hundred million visitors in 2014, which contributed $18.4 billion in visitor spending and supported over one hundred and fifty thousand tourism jobs 4',
              'Over half of residents participated in wildlife-related recreation, spending $2.9 billion in 2011 5',
              'Water Supply and Waste Treatment: Tennessee’s Wetland Forests Provide $1.8 Billion',
              'Value in water supply and waste treatment could increase up to $223 million',
              'Over three-fourths of residents rely on public sewer systems',
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment 6',
              'Over ten percent of residents rely on private water sources like wells',
              'Residents rely on forests to naturally filter pollutants from their water supply 6',
              'Food and Pollination: Tennessee’s Wetland Forests Provide $1.1 Billion',
              'Value in food and pollination could increase up to $141 million',
              'Wetland forests provide habitat for pollinators of agricultural crops',
              'Over nine hundred thousand residents in the state hunt or fish 5',
              'In 2016, hunters purchased two hundred and fifty thousand deer hunting licenses 7',
              'In 2016, hunters harvested over two hundred thousand ducks and geese within the state 8',
              'Regulating Services: Tennessee’s Wetland Forests Provide $629 Million',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $32 million ',
              'There are an estimated twenty four million megagrams of carbon stored in the state’s wetland forests',
              'Continual carbon storage reduces the worst impacts of climate change',
              'Raw Materials: Tennessee’s Wetland Forests Provide $36 Million',
              'In 2011, there were 254 forest product mills (e.g., pulp and timber) employing nearly five thousand people in the state 9 ',
              'Value in raw materials could increase up to $4 million',
             ], 
             
             
      cFxn: 'tnESRc',
      lFxn: 'tnESRl', 
      sFxn: 'tnESRs', 
              
      fxns: [
              'tn00','tn01','tn02','tn03','tn04','tn05','tn06','tn07',
              'tn08','tn09','tn10','tn11','tn12','tn13','tn14','tn15',
              'tn16','tn17','tn18','tn19','tn20','tn21','tn22','tn23',
              'tn24','tn25','tn26','tn27','tn28','tn29','tn30','tn31',
             ],

};

function tnESRc(){ insertLinkAtCursor(tnText.cLink, 'Report Link.'); 
                   insertTextAtCursor(tnText.cite);
                   }  

function tnESRl(){ insertLinkAtCursor(tnText.cLink, tnText.cTitle); }
function tnESRs(){ insertLinkAtCursor(tnText.stateLink, tnText.title); } 

function tn00(){ insertTextAtCursor([tnText.facts[0]]); }
function tn01(){ insertTextAtCursor([tnText.facts[1]]); }
function tn02(){ insertTextAtCursor([tnText.facts[2]]); }
function tn03(){ insertTextAtCursor([tnText.facts[3]]); }
function tn04(){ insertTextAtCursor([tnText.facts[4]]); }
function tn05(){ insertTextAtCursor([tnText.facts[5]]); }
function tn06(){ insertTextAtCursor([tnText.facts[6]]); }
function tn07(){ insertTextAtCursor([tnText.facts[7]]); }
function tn08(){ insertTextAtCursor([tnText.facts[8]]); }
function tn09(){ insertTextAtCursor([tnText.facts[9]]); }
function tn10(){ insertTextAtCursor([tnText.facts[10]]); }
function tn11(){ insertTextAtCursor([tnText.facts[11]]); }
function tn12(){ insertTextAtCursor([tnText.facts[12]]); }
function tn13(){ insertTextAtCursor([tnText.facts[13]]); }
function tn14(){ insertTextAtCursor([tnText.facts[14]]); }
function tn15(){ insertTextAtCursor([tnText.facts[15]]); }
function tn16(){ insertTextAtCursor([tnText.facts[16]]); }
function tn17(){ insertTextAtCursor([tnText.facts[17]]); }
function tn18(){ insertTextAtCursor([tnText.facts[18]]); }
function tn19(){ insertTextAtCursor([tnText.facts[19]]); }
function tn20(){ insertTextAtCursor([tnText.facts[20]]); }
function tn21(){ insertTextAtCursor([tnText.facts[21]]); }
function tn22(){ insertTextAtCursor([tnText.facts[22]]); }
function tn23(){ insertTextAtCursor([tnText.facts[23]]); }
function tn24(){ insertTextAtCursor([tnText.facts[24]]); }
function tn25(){ insertTextAtCursor([tnText.facts[25]]); }
function tn26(){ insertTextAtCursor([tnText.facts[26]]); }
function tn27(){ insertTextAtCursor([tnText.facts[27]]); }
function tn28(){ insertTextAtCursor([tnText.facts[28]]); }
function tn29(){ insertTextAtCursor([tnText.facts[29]]); }
function tn30(){ insertTextAtCursor([tnText.facts[30]]); }
function tn31(){ insertTextAtCursor([tnText.facts[31]]); }
