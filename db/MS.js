
var msText = {
      title: ' How much are Mississippi wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Florida-State-Fact-Sheet.pdf',
  
      facts: ['Mississippi’s Wetland Forests Are Worth $51 Billion',
              'Worth could increase up to $4.2 billion, but only five percent of wetland forests in Mississippi are permanently protected',
              'Wetland Forest Gem: Noxubee National Wildlife Refuge',
              'Three and a half million acres of wetland forest, including over one hundred named swamps and over four thousand named streams in the state 1',
              'Protection From Extreme Events: Mississippi’s Wetland Forests Provide $15.3 Billion',
              'Value in protection from extreme events and water flow regulation could increase up to $1.2 billion',
              'Five flood events amassing over a billion dollars in damages each since 1980 2',
              'Since 1851, there have been fourteen major Mississippi river floods, impacting states along the river like Mississippi 3 ',
              'Between 1851 and 2004, eight major hurricanes (categories 3-5) made landfall on the Mississippi coastline 4 ',
              'Aesthetics, Tourism, and Recreation: Mississippi’s Wetland Forests Provide $12.8 billion',
              'Value in aesthetics and recreation could increase up to $1.1 billion',
              'Mississippi had twenty three million visitors in 2016, which contributed $6.3 billion in visitor spending and supported over eighty thousand tourism jobs 5',
              'Nearly sixty percent of residents participated in wildlife-related recreation, spending $2.6 billion in 2011 6',
              'Water Supply and Waste Treatment: Mississippi’s Wetland Forests Provide $11.7 Billion',
              'Value in water supply and waste treatment could increase up to $1 billion',
              'Almost sixty percent of residents rely on public sewer systems',
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment 7',
              'Over ten percent of residents rely on private water sources like wells',
              'Residents rely on forests to naturally filter pollutants from their water supply 7',
              'Food and Pollination: Mississippi’s Wetland Forests Provide $7.4 Billion',
              'Value in food and pollination could increase up to $630 million',
              'Wetland forests provide habitat for pollinators of agricultural crops',
              'Approximately seven hundred thousand residents in the state hunt or fish 6',
              'In 2016, hunters purchased nearly two hundred thousand deer hunting licenses 8',
              'In 2016, hunters harvested nearly two hundred and fifty thousand ducks and geese within the state 9',
              'Regulating Services: Mississippi’s Wetland Forests Provide $3.8 Billion',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $143 million',
              'There are an estimated 140 million megagrams of carbon stored in the state’s wetland forests',
              'Continual carbon storage reduces the worst impacts of climate change',
              'Raw Materials: Mississippi’s Wetland Forests Provide $129 Million',
              'In 2011, there were sixty three forest product mills (e.g., pulp and timber) employing over seven thousand people in the state 10 ',
              'Value in raw materials could increase up to $78 million',
             ], 
              
                  
      cFxn: 'msESRc',
      lFxn: 'msESRl', 
      sFxn: 'msESRs', 
              
      fxns: [
              'ms00','ms01','ms02','ms03','ms04','ms05','ms06','ms07',
              'ms08','ms09','ms10','ms11','ms12','ms13','ms14','ms15',
              'ms16','ms17','ms18','ms19','ms20','ms21','ms22','ms23',
              'ms24','ms25','ms26','ms27','ms28','ms29','ms30','ms31',
             ],

};

function msESRc(){ insertLinkAtCursor(msText.cLink, 'Report Link.'); 
                   insertTextAtCursor(msText.cite);
                   }  

function msESRl(){ insertLinkAtCursor(msText.cLink, msText.cTitle); }
function msESRs(){ insertLinkAtCursor(msText.stateLink, msText.title); } 

function ms00(){ insertTextAtCursor([msText.facts[0]]); }
function ms01(){ insertTextAtCursor([msText.facts[1]]); }
function ms02(){ insertTextAtCursor([msText.facts[2]]); }
function ms03(){ insertTextAtCursor([msText.facts[3]]); }
function ms04(){ insertTextAtCursor([msText.facts[4]]); }
function ms05(){ insertTextAtCursor([msText.facts[5]]); }
function ms06(){ insertTextAtCursor([msText.facts[6]]); }
function ms07(){ insertTextAtCursor([msText.facts[7]]); }
function ms08(){ insertTextAtCursor([msText.facts[8]]); }
function ms09(){ insertTextAtCursor([msText.facts[9]]); }
function ms10(){ insertTextAtCursor([msText.facts[10]]); }
function ms11(){ insertTextAtCursor([msText.facts[11]]); }
function ms12(){ insertTextAtCursor([msText.facts[12]]); }
function ms13(){ insertTextAtCursor([msText.facts[13]]); }
function ms14(){ insertTextAtCursor([msText.facts[14]]); }
function ms15(){ insertTextAtCursor([msText.facts[15]]); }
function ms16(){ insertTextAtCursor([msText.facts[16]]); }
function ms17(){ insertTextAtCursor([msText.facts[17]]); }
function ms18(){ insertTextAtCursor([msText.facts[18]]); }
function ms19(){ insertTextAtCursor([msText.facts[19]]); }
function ms20(){ insertTextAtCursor([msText.facts[20]]); }
function ms21(){ insertTextAtCursor([msText.facts[21]]); }
function ms22(){ insertTextAtCursor([msText.facts[22]]); }
function ms23(){ insertTextAtCursor([msText.facts[23]]); }
function ms24(){ insertTextAtCursor([msText.facts[24]]); }
function ms25(){ insertTextAtCursor([msText.facts[25]]); }
function ms26(){ insertTextAtCursor([msText.facts[26]]); }
function ms27(){ insertTextAtCursor([msText.facts[27]]); }
function ms28(){ insertTextAtCursor([msText.facts[28]]); }
function ms29(){ insertTextAtCursor([msText.facts[29]]); }
function ms30(){ insertTextAtCursor([msText.facts[30]]); }
function ms31(){ insertTextAtCursor([msText.facts[31]]); }
