
var vaText = {
      title: ' How much are Virginia wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Florida-State-Fact-Sheet.pdf',
  
      facts: ['Virginia’s Wetland Forests Are Worth $13.9 Billion',
              'Worth could increase up to $1.3 billion',
              'Wetland Forest Gem: The iconic Dismal Swamp that straddles the border between Virginia and North Carolina',
              'Over nine hundred thousand acres of wetland forest, including one hundred and fifty named swamps and over seven thousand named streams in the state 1',
              'Only seven percent of wetland forests in Virginia are permanently protected',
              'Protection From Extreme Events: Virginia’s Wetland Forests Provide $4.2 Billion',
              'Value in protection from extreme events and water flow regulation could increase up to $340 million',
              'Three flood events amassing over a billion dollars in damages each since 1980 2',
              'Between 1851 and 2004, twelve hurricanes made landfall on the Virginia coastline 3',
              'Aesthetics, Tourism, and Recreation: Virginia’s Wetland Forests Provide $3.5 billion',
              'Value in aesthetics and recreation could increase up to $388 million ',
              'Virginia had forty five million visitors in 2016, who spent $23.7 billion and supported over two hundred thousand tourism jobs 4,5',
              'Nearly half of residents participated in wildlife-related recreation, spending $3.5 billion in 2011 6',
              'Water Supply and Waste Treatment: Virginia’s Wetland Forests Provide $3.2 Billion',
              'Value in water supply and waste treatment could increase up to $292 million',
              'More than two thirds of residents rely on public sewer systems',
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment 7',
              'Over twenty percent of residents rely on private water sources like wells',
              'Residents rely on forests to naturally filter pollutants from their water supply 7',
              'Food and Pollination: Virginia’s Wetland Forests Provide $2 Billion',
              'Value in food and pollination could increase up to $178 million ',
              'Wetland forests provide habitat for pollinators of agricultural crops ',
              'Approximately eight hundred and fifty thousand residents in the state hunt or fish 6',
              'In 2016, hunters purchased nearly a hundred thousand deer hunting licenses 8',
              'In 2016, hunters harvested over two hundred thousand ducks and geese within the state 9',
              'Regulating Services: Virginia’s Wetland Forests Provide $1 Billion',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $48 million ',
              'There are an estimated forty seven million megagrams of carbon stored in the state’s wetland forests',
              'Continual carbon storage reduces the worst impacts of climate change ',
              'Raw Materials: Virginia’s Wetland Forests Provide $31 Million',
              'In 2011, there were 123 forest product mills (e.g., pulp and timber) employing over seven thousand people in the state 10 ',
              'Value in raw materials could increase by up to $15 million',
             ], 
             
             
      cFxn: 'vaESRc',
      lFxn: 'vaESRl', 
      sFxn: 'vaESRs', 
              
      fxns: [
              'va00','va01','va02','va03','va04','va05','va06','va07',
              'va08','va09','va10','va11','va12','va13','va14','va15',
              'va16','va17','va18','va19','va20','va21','va22','va23',
              'va24','va25','va26','va27','va28','va29','va30','va31',
             ],

};

function vaESRc(){ insertLinkAtCursor(vaText.cLink, 'Report Link.'); 
                   insertTextAtCursor(vaText.cite);
                   }  

function vaESRl(){ insertLinkAtCursor(vaText.cLink, vaText.cTitle); }
function vaESRs(){ insertLinkAtCursor(vaText.stateLink, vaText.title); } 

function va00(){ insertTextAtCursor([vaText.facts[0]]); }
function va01(){ insertTextAtCursor([vaText.facts[1]]); }
function va02(){ insertTextAtCursor([vaText.facts[2]]); }
function va03(){ insertTextAtCursor([vaText.facts[3]]); }
function va04(){ insertTextAtCursor([vaText.facts[4]]); }
function va05(){ insertTextAtCursor([vaText.facts[5]]); }
function va06(){ insertTextAtCursor([vaText.facts[6]]); }
function va07(){ insertTextAtCursor([vaText.facts[7]]); }
function va08(){ insertTextAtCursor([vaText.facts[8]]); }
function va09(){ insertTextAtCursor([vaText.facts[9]]); }
function va10(){ insertTextAtCursor([vaText.facts[10]]); }
function va11(){ insertTextAtCursor([vaText.facts[11]]); }
function va12(){ insertTextAtCursor([vaText.facts[12]]); }
function va13(){ insertTextAtCursor([vaText.facts[13]]); }
function va14(){ insertTextAtCursor([vaText.facts[14]]); }
function va15(){ insertTextAtCursor([vaText.facts[15]]); }
function va16(){ insertTextAtCursor([vaText.facts[16]]); }
function va17(){ insertTextAtCursor([vaText.facts[17]]); }
function va18(){ insertTextAtCursor([vaText.facts[18]]); }
function va19(){ insertTextAtCursor([vaText.facts[19]]); }
function va20(){ insertTextAtCursor([vaText.facts[20]]); }
function va21(){ insertTextAtCursor([vaText.facts[21]]); }
function va22(){ insertTextAtCursor([vaText.facts[22]]); }
function va23(){ insertTextAtCursor([vaText.facts[23]]); }
function va24(){ insertTextAtCursor([vaText.facts[24]]); }
function va25(){ insertTextAtCursor([vaText.facts[25]]); }
function va26(){ insertTextAtCursor([vaText.facts[26]]); }
function va27(){ insertTextAtCursor([vaText.facts[27]]); }
function va28(){ insertTextAtCursor([vaText.facts[28]]); }
function va29(){ insertTextAtCursor([vaText.facts[29]]); }
function va30(){ insertTextAtCursor([vaText.facts[30]]); }
function va31(){ insertTextAtCursor([vaText.facts[31]]); }
