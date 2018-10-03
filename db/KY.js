
var kyText = {
      title: ' How much are Kentucky wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Florida-State-Fact-Sheet.pdf',
  
      cFxn: 'kyESRc',
      lFxn: 'kyESRl', 
      sFxn: 'kyESRs', 
  
      facts: ['Kentucky’s Wetland Forests Are Worth $1.9 Billion',
              'Worth could increase up to $500 million ',
              'Wetland Forest Gem: Cypress Creek Swamp, one of the best remaining examples of a bottomland hardwood forest',
              'Kentucky has one hundred and eighty thousand acres of wetland forest, including twenty seven named swamps and over eleven thousand named streams in the state',
              'Nine percent of Kentucky wetland forests are permanently protected',
              'Protection From Extreme Events: Kentucky’s Wetland Forests Provide $570 Million',
              'Value in protection from extreme events and water flow regulation could increase up to $140 million ',
              'Two flood events caused over a billion dollars each of damages since 1980',
              'Since 1851, there have been fourteen major Mississippi river floods, impacting states along the river like Kentucky ',
              'Aesthetics, Tourism, and Recreation: Kentucky’s Wetland Forests Provide $460 Million',
              'Value in aesthetics and recreation could increase up to $130 million ',
              'Kentucky had sixty million visitors in 2011, who spent $9.2 billion and supported nearly two hundred thousand tourism jobs.',
              'Almost sixty percent of residents participated in wildlife-related recreation, spending $2.9 billion in 2011',
              'Water Supply and Waste Treatment: Kentucky’s Wetland Forests Provide $430 Million',
              'Value in water supply and waste treatment could increase up to $120 million ',
              'Almost sixty percent of Kentucky residents rely on public sewer systems',
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment',
              'Nearly twenty percent of Kentucky residents rely on private water sources like wells',
              'Residents rely on forests to naturally filter pollutants from their water supply',
              'Food and Pollination: Kentucky’s Wetland Forests Provide $270 Million',
              'Value in food and pollination could increase up to $80 million ',
              'Kentucky wetland forests provide habitat for pollinators of agricultural crops',
              'Over six hundred thousand residents in the state hunt or fish ',
              'In 2016, hunters purchased nearly two hundred thousand deer hunting licenses',
              'In 2016, hunters harvested over one hundred and fifty thousand ducks and geese within the state',
              'Regulating Services: Kentucky’s Wetland Forests Provide $169 Million',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $16 million',
              'There are an estimated six million megagrams of carbon stored in the state’s wetland forests',
              'Continual carbon storage reduces the worst impacts of climate change',
              'Raw Materials: Kentucky’s Wetland Forests Provide $14 Million',
              'In 2011, there were 225 forest product mills (e.g., pulp and timber) employing over four thousand people in the state',
             ], 
             
      fxns: [
              'ky00','ky01','ky02','ky03','ky04','ky05','ky06','ky07',
              'ky08','ky09','ky10','ky11','ky12','ky13','ky14','ky15',
              'ky16','ky17','ky18','ky19','ky20','ky21','ky22','ky23',
              'ky24','ky25','ky26','ky27','ky28','ky29','ky30','ky31',
             ],

};

function kyESRc(){ insertLinkAtCursor(kyText.cLink, 'Report Link.'); 
                   insertTextAtCursor(kyText.cite);
                   }  

function kyESRl(){ insertLinkAtCursor(kyText.cLink, kyText.cTitle); }
function kyESRs(){ insertLinkAtCursor(kyText.stateLink, kyText.title); } 

function ky00(){ insertTextAtCursor([kyText.facts[0]]); }
function ky01(){ insertTextAtCursor([kyText.facts[1]]); }
function ky02(){ insertTextAtCursor([kyText.facts[2]]); }
function ky03(){ insertTextAtCursor([kyText.facts[3]]); }
function ky04(){ insertTextAtCursor([kyText.facts[4]]); }
function ky05(){ insertTextAtCursor([kyText.facts[5]]); }
function ky06(){ insertTextAtCursor([kyText.facts[6]]); }
function ky07(){ insertTextAtCursor([kyText.facts[7]]); }
function ky08(){ insertTextAtCursor([kyText.facts[8]]); }
function ky09(){ insertTextAtCursor([kyText.facts[9]]); }
function ky10(){ insertTextAtCursor([kyText.facts[10]]); }
function ky11(){ insertTextAtCursor([kyText.facts[11]]); }
function ky12(){ insertTextAtCursor([kyText.facts[12]]); }
function ky13(){ insertTextAtCursor([kyText.facts[13]]); }
function ky14(){ insertTextAtCursor([kyText.facts[14]]); }
function ky15(){ insertTextAtCursor([kyText.facts[15]]); }
function ky16(){ insertTextAtCursor([kyText.facts[16]]); }
function ky17(){ insertTextAtCursor([kyText.facts[17]]); }
function ky18(){ insertTextAtCursor([kyText.facts[18]]); }
function ky19(){ insertTextAtCursor([kyText.facts[19]]); }
function ky20(){ insertTextAtCursor([kyText.facts[20]]); }
function ky21(){ insertTextAtCursor([kyText.facts[21]]); }
function ky22(){ insertTextAtCursor([kyText.facts[22]]); }
function ky23(){ insertTextAtCursor([kyText.facts[23]]); }
function ky24(){ insertTextAtCursor([kyText.facts[24]]); }
function ky25(){ insertTextAtCursor([kyText.facts[25]]); }
function ky26(){ insertTextAtCursor([kyText.facts[26]]); }
function ky27(){ insertTextAtCursor([kyText.facts[27]]); }
function ky28(){ insertTextAtCursor([kyText.facts[28]]); }
function ky29(){ insertTextAtCursor([kyText.facts[29]]); }
function ky30(){ insertTextAtCursor([kyText.facts[30]]); }
function ky31(){ insertTextAtCursor([kyText.facts[31]]); }
