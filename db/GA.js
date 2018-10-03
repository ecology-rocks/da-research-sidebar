
var gaText = {
      title: ' How much are Georgia wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Florida-State-Fact-Sheet.pdf',
  
      cFxn: 'gaESRc',
      lFxn: 'gaESRl', 
      sFxn: 'gaESRs', 
  
      facts: ['Georgia’s Wetland Forests Are Worth $67.3 Billion',
              'Worth could increase up to $2.8 billion ',
              'Wetland Forest Gem: Okefenokee Swamp, a swamp that straddles the Georgia-Florida line',
              'Georgia has over four million acres of wetland forest, including nearly five hundred named swamps and over five thousand named streams in the state 1',
              'Nine percent of Georgia wetland forests are permanently protected',
              'Protection From Extreme Events: Georgia’s Wetland Forests Provide $20.1 Billion',
              'Value in protection from extreme events and water flow regulation could increase up to $740 million ',
              'Two flood events with over a billion dollars of damages since 1980 2',
              'Between 1851 and 2004, three major hurricanes (categories 3-5) made landfall on the Georgia coastline 3',
              'Aesthetics, Tourism, and Recreation: Georgia’s Wetland Forests Provide $16.9 Billion',
              'Value in aesthetics and recreation could increase up to $860 million',
              'Georgia had sixty million visitors in 2011, which contributed $61.1 billion in visitor spending and supported 439,000 tourism jobs 4–6',
              'Over forty percent of Georgia residents participated in wildlife-related recreation, spending $4.6 billion in 2011 7',
              'Water Supply and Waste Treatment: Georgia’s Wetland Forests Provide $15.5 Billion',
              'Value in water supply and waste treatment could increase up to $640 million ',
              'More than sixty percent of Georgia residents rely on public sewer systems',
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment 8',
              'Nearly twenty percent of Georgia residents rely on private water sources like wells',
              'Residents rely on forests to naturally filter pollutants from their water supply 8',
              'Food and Pollination: Georgia’s Wetland Forests Provide $9.8 Billion',
              'Value in food and pollination could increase up to $390 million',
              'Georgia wetland forests provide habitat for pollinators of agricultural crops.',
              'Nearly a million residents in Georgia hunt or fish 7',
              'In 2016, hunters purchased  over three hundred thousand deer hunting licenses 9',
              'In 2016, hunters harvested over two hundred thousand ducks and geese within Georgia 10',
              'Regulating Services: Georgia’s Wetland Forests Provide $4.8 Billion',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $107 million',
              'There are an estimated 258 million megagrams of carbon stored in the state’s wetland forests',
              'Continual carbon storage reduces the worst impacts of climate change',
              'Raw Materials: Georgia’s Wetland Forests Provide $122 Million',
              'In 2011, there were 151 forest product mills (e.g., pulp and timber) employing over thirteen thousand people in the state 11 ',
              'Value in raw materials could increase up to $57 million',
             ], 
             
      fxns: [
              'ga00','ga01','ga02','ga03','ga04','ga05','ga06','ga07',
              'ga08','ga09','ga10','ga11','ga12','ga13','ga14','ga15',
              'ga16','ga17','ga18','ga19','ga20','ga21','ga22','ga23',
              'ga24','ga25','ga26','ga27','ga28','ga29','ga30','ga31',
             ],

};

function gaESRc(){ insertLinkAtCursor(gaText.cLink, 'Report Link.'); 
                   insertTextAtCursor(gaText.cite);
                   }  

function gaESRl(){ insertLinkAtCursor(gaText.cLink, gaText.cTitle); }
function gaESRs(){ insertLinkAtCursor(gaText.stateLink, gaText.title); } 

function ga00(){ insertTextAtCursor([gaText.facts[0]]); }
function ga01(){ insertTextAtCursor([gaText.facts[1]]); }
function ga02(){ insertTextAtCursor([gaText.facts[2]]); }
function ga03(){ insertTextAtCursor([gaText.facts[3]]); }
function ga04(){ insertTextAtCursor([gaText.facts[4]]); }
function ga05(){ insertTextAtCursor([gaText.facts[5]]); }
function ga06(){ insertTextAtCursor([gaText.facts[6]]); }
function ga07(){ insertTextAtCursor([gaText.facts[7]]); }
function ga08(){ insertTextAtCursor([gaText.facts[8]]); }
function ga09(){ insertTextAtCursor([gaText.facts[9]]); }
function ga10(){ insertTextAtCursor([gaText.facts[10]]); }
function ga11(){ insertTextAtCursor([gaText.facts[11]]); }
function ga12(){ insertTextAtCursor([gaText.facts[12]]); }
function ga13(){ insertTextAtCursor([gaText.facts[13]]); }
function ga14(){ insertTextAtCursor([gaText.facts[14]]); }
function ga15(){ insertTextAtCursor([gaText.facts[15]]); }
function ga16(){ insertTextAtCursor([gaText.facts[16]]); }
function ga17(){ insertTextAtCursor([gaText.facts[17]]); }
function ga18(){ insertTextAtCursor([gaText.facts[18]]); }
function ga19(){ insertTextAtCursor([gaText.facts[19]]); }
function ga20(){ insertTextAtCursor([gaText.facts[20]]); }
function ga21(){ insertTextAtCursor([gaText.facts[21]]); }
function ga22(){ insertTextAtCursor([gaText.facts[22]]); }
function ga23(){ insertTextAtCursor([gaText.facts[23]]); }
function ga24(){ insertTextAtCursor([gaText.facts[24]]); }
function ga25(){ insertTextAtCursor([gaText.facts[25]]); }
function ga26(){ insertTextAtCursor([gaText.facts[26]]); }
function ga27(){ insertTextAtCursor([gaText.facts[27]]); }
function ga28(){ insertTextAtCursor([gaText.facts[28]]); }
function ga29(){ insertTextAtCursor([gaText.facts[29]]); }
function ga30(){ insertTextAtCursor([gaText.facts[30]]); }
function ga31(){ insertTextAtCursor([gaText.facts[31]]); }
