
var flText = {
      title: ' How much are Florida wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Florida-State-Fact-Sheet.pdf',
  
      cFxn: 'flESRc',
      lFxn: 'flESRl', 
      sFxn: 'flESRs', 
  
      facts: ['Florida’s Wetland Forests Are Worth $80.8 Billion',
              'Worth could increase up to $7.5 billion ',
              'Wetland Forest Gem: Okefenokee Swamp, a swamp that straddles the Georgia-Florida line',
              'Over five million acres of wetland forest, including over a thousand named swamps and nearly three thousand named streams in the state 1',
              'Twelve percent of wetland forests in Florida are in permanent protection',
              'Protection From Extreme Events: Florida’s Wetland Forests Provide $24.2 Billion',
              'Value in protection from extreme events and water flow regulation could increase up to $2.1 billion ',
              'One flood event caused over four billion dollars of damages in 1982 2',
              'Between 1851 and 2004, thirty five major hurricanes (categories 3-5) made landfall on the Florida coastline 3',
              'Aesthetics, Tourism, and Recreation: Florida’s Wetland Forests Provide $20.2 Billion',
              'Value in aesthetics and recreation could increase up to $2.1 billion',
              'Florida had 112 million visitors in 2016, who spent $108.8 billion in and supported 1.4 million tourism jobs 4',
              'Nearly forty percent of Florida residents participated in wildlife-related recreation, spending $9 billion in 2011 5',
              'Water Supply and Waste Treatment: Florida’s Wetland Forests Provide $18.6 Billion',
              'Value in water supply and waste treatment could increase up to $1.8 billion ',
              'More than seventy percent of Florida residents rely on public sewer systems',
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment 6',
              'Over ten percent of Florida residents rely on private water sources like wells',
              'Residents rely on forests to naturally filter pollutants from their water supply 6',
              'Food and Pollination: Florida’s Wetland Forests Provide $11.7 Billion',
              'Value in food and pollination could increase up to $1.1 billion',
              'Florida wetland forests provide habitat for pollinators of agricultural crops',
              'Over two million residents in Florida hunt or fish 5',
              'In 2016, hunters purchased over a hundred thousand deer hunting licenses 7',
              'In 2016, hunters harvested nearly two hundred thousand ducks and geese within Florida 8',
              'Regulating Services: Florida’s Wetland Forests Provide $5.9 Billion',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $265 million',
              'There are an estimated 291 million megagrams of carbon stored in Florida wetland forests',
              'Continual carbon storage reduces the worst impacts of climate change',
              'Raw Materials: Florida’s Wetland Forests Provide $167 Million',
              'In 2011, there were fifty two forest product mills (e.g., pulp and timber) employing over six thousand people in Florida 9 ',
              'Value in raw materials could increase up to $108 million',
             ], 
              
      fxns: [
              'fl00','fl01','fl02','fl03','fl04','fl05','fl06','fl07',
              'fl08','fl09','fl10','fl11','fl12','fl13','fl14','fl15',
              'fl16','fl17','fl18','fl19','fl20','fl21','fl22','fl23',
              'fl24','fl25','fl26','fl27','fl28','fl29','fl30','fl31',
             ],

};

function flESRc(){ insertLinkAtCursor(flText.cLink, 'Report Link.'); 
                   insertTextAtCursor(flText.cite);
                   }  

function flESRl(){ insertLinkAtCursor(flText.cLink, flText.cTitle); }
function flESRs(){ insertLinkAtCursor(flText.stateLink, flText.title); } 

function fl00(){ insertTextAtCursor([flText.facts[0]]); }
function fl01(){ insertTextAtCursor([flText.facts[1]]); }
function fl02(){ insertTextAtCursor([flText.facts[2]]); }
function fl03(){ insertTextAtCursor([flText.facts[3]]); }
function fl04(){ insertTextAtCursor([flText.facts[4]]); }
function fl05(){ insertTextAtCursor([flText.facts[5]]); }
function fl06(){ insertTextAtCursor([flText.facts[6]]); }
function fl07(){ insertTextAtCursor([flText.facts[7]]); }
function fl08(){ insertTextAtCursor([flText.facts[8]]); }
function fl09(){ insertTextAtCursor([flText.facts[9]]); }
function fl10(){ insertTextAtCursor([flText.facts[10]]); }
function fl11(){ insertTextAtCursor([flText.facts[11]]); }
function fl12(){ insertTextAtCursor([flText.facts[12]]); }
function fl13(){ insertTextAtCursor([flText.facts[13]]); }
function fl14(){ insertTextAtCursor([flText.facts[14]]); }
function fl15(){ insertTextAtCursor([flText.facts[15]]); }
function fl16(){ insertTextAtCursor([flText.facts[16]]); }
function fl17(){ insertTextAtCursor([flText.facts[17]]); }
function fl18(){ insertTextAtCursor([flText.facts[18]]); }
function fl19(){ insertTextAtCursor([flText.facts[19]]); }
function fl20(){ insertTextAtCursor([flText.facts[20]]); }
function fl21(){ insertTextAtCursor([flText.facts[21]]); }
function fl22(){ insertTextAtCursor([flText.facts[22]]); }
function fl23(){ insertTextAtCursor([flText.facts[23]]); }
function fl24(){ insertTextAtCursor([flText.facts[24]]); }
function fl25(){ insertTextAtCursor([flText.facts[25]]); }
function fl26(){ insertTextAtCursor([flText.facts[26]]); }
function fl27(){ insertTextAtCursor([flText.facts[27]]); }
function fl28(){ insertTextAtCursor([flText.facts[28]]); }
function fl29(){ insertTextAtCursor([flText.facts[29]]); }
function fl30(){ insertTextAtCursor([flText.facts[30]]); }
function fl31(){ insertTextAtCursor([flText.facts[31]]); }
