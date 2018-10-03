
var okText = {
      title: ' How much are Oklahoma wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Florida-State-Fact-Sheet.pdf',
  
      facts: ['Oklahoma’s Wetland Forests Are Worth $1.7 Billion',
              'Worth could increase up to $118 million',
              'Wetland Forest Gem: Little River National Wildlife Refuge',
              'One hundred and sixty thousand acres of wetland forest, including seven named swamps and over three thousand named streams in the state 1',
              'Nineteen percent of wetland forests in Oklahoma are permanently protected',
              'Protection From Extreme Events: Oklahoma’s Wetland Forests Provide $517 Million',
              'Value in protection from extreme events and water flow regulation could increase up to $34 million',
              'Eighteen major flood events hit four gulf states, including Oklahoma, between March of 2015 and August of 2016 2',
              'Four flood events cost over a billion dollars of damages each since 1980 3',
              'Aesthetics, Tourism, and Recreation: Oklahoma’s Wetland Forests Provide $420 Million',
              'Value in aesthetics and recreation could increase up to $32 million ',
              'Oklahoma had over twenty five million visitors in 2010, who spent $6.2 billion in and supported over seventy thousand tourism jobs 4',
              'Over two-thirds of residents participated in wildlife-related recreation, spending $1.8 billion in 2011 5',
              'Water Supply and Waste Treatment: Oklahoma’s Wetland Forests Provide $385 Million',
              'Value in water supply and waste treatment could increase up to $29 million',
              'Over half of residents rely on public sewer systems',
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment 6',
              'Over ten percent of residents rely on private water sources like wells ',
              'Residents rely on forests to naturally filter pollutants from their water supply 6',
              'Food and Pollination: Oklahoma’s Wetland Forests Provide $243 Million',
              'Value in food and pollination could increase up to $17 million',
              'Wetland forests provide habitat for pollinators of agricultural crops',
              'Nearly eight hundred thousand residents in the state hunt or fish 5',
              'In 2016, hunters purchased two hundred thousand deer hunting licenses 7',
              'In 2016, hunters harvested over three hundred thousand ducks and geese within the state 8',
              'Regulating Services: Oklahoma’s Wetland Forests Provide $149 Million',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $5 million ',
              'There are an estimated four million megagrams of carbon stored in the state’s wetland forests',
              'Continual carbon storage reduces the worst impacts of climate change',
              'Raw Materials: Oklahoma’s  Wetland Forests Provide $11 Million',
              'In 2011, there were thirteen forest product mills (e.g., pulp and timber) employing almost a thousand people in the state 9 ',
              'Value in raw materials could increase by up to $1 million',
             ], 
              
      cFxn: 'okESRc',
      lFxn: 'okESRl', 
      sFxn: 'okESRs', 
              
      fxns: [
              'ok00','ok01','ok02','ok03','ok04','ok05','ok06','ok07',
              'ok08','ok09','ok10','ok11','ok12','ok13','ok14','ok15',
              'ok16','ok17','ok18','ok19','ok20','ok21','ok22','ok23',
              'ok24','ok25','ok26','ok27','ok28','ok29','ok30','ok31',
             ],

};

function okESRc(){ insertLinkAtCursor(okText.cLink, 'Report Link.'); 
                   insertTextAtCursor(okText.cite);
                   }  

function okESRl(){ insertLinkAtCursor(okText.cLink, okText.cTitle); }
function okESRs(){ insertLinkAtCursor(okText.stateLink, okText.title); } 

function ok00(){ insertTextAtCursor([okText.facts[0]]); }
function ok01(){ insertTextAtCursor([okText.facts[1]]); }
function ok02(){ insertTextAtCursor([okText.facts[2]]); }
function ok03(){ insertTextAtCursor([okText.facts[3]]); }
function ok04(){ insertTextAtCursor([okText.facts[4]]); }
function ok05(){ insertTextAtCursor([okText.facts[5]]); }
function ok06(){ insertTextAtCursor([okText.facts[6]]); }
function ok07(){ insertTextAtCursor([okText.facts[7]]); }
function ok08(){ insertTextAtCursor([okText.facts[8]]); }
function ok09(){ insertTextAtCursor([okText.facts[9]]); }
function ok10(){ insertTextAtCursor([okText.facts[10]]); }
function ok11(){ insertTextAtCursor([okText.facts[11]]); }
function ok12(){ insertTextAtCursor([okText.facts[12]]); }
function ok13(){ insertTextAtCursor([okText.facts[13]]); }
function ok14(){ insertTextAtCursor([okText.facts[14]]); }
function ok15(){ insertTextAtCursor([okText.facts[15]]); }
function ok16(){ insertTextAtCursor([okText.facts[16]]); }
function ok17(){ insertTextAtCursor([okText.facts[17]]); }
function ok18(){ insertTextAtCursor([okText.facts[18]]); }
function ok19(){ insertTextAtCursor([okText.facts[19]]); }
function ok20(){ insertTextAtCursor([okText.facts[20]]); }
function ok21(){ insertTextAtCursor([okText.facts[21]]); }
function ok22(){ insertTextAtCursor([okText.facts[22]]); }
function ok23(){ insertTextAtCursor([okText.facts[23]]); }
function ok24(){ insertTextAtCursor([okText.facts[24]]); }
function ok25(){ insertTextAtCursor([okText.facts[25]]); }
function ok26(){ insertTextAtCursor([okText.facts[26]]); }
function ok27(){ insertTextAtCursor([okText.facts[27]]); }
function ok28(){ insertTextAtCursor([okText.facts[28]]); }
function ok29(){ insertTextAtCursor([okText.facts[29]]); }
function ok30(){ insertTextAtCursor([okText.facts[30]]); }
function ok31(){ insertTextAtCursor([okText.facts[31]]); }
