
var txText = {
      title: ' How much are Texas wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Florida-State-Fact-Sheet.pdf',
  
      facts: ['Texas’ Wetland Forests Are Worth $53.9 Billion',
              'Worth could increase up to $4.9 billion',
              'Wetland Forest Gem: McFaddin National Wildlife Refuge',
              'Nearly four million acres of wetland forest, including two hundred and four named swamps and over eleven thousand named streams in the state 1',
              'Only four percent of Texas wetland forests are permanently protected',
              'Protection From Extreme Events: Texas’ Wetland Forests Provide $16.1 Billion',
              'Value in protection from extreme events and water flow regulation could increase up to $1.4 billion',
              'Seven flood events amassing over a billion dollars in damages each since 1980 2',
              'Eighteen major flood events hit four gulf states, including Texas, between March of 2015 and August of 2016 3',
              'Between 1851 and 2004, nineteen major hurricanes (categories 3-5) made landfall on the Texas coastline 4',
              'Aesthetics, Tourism, and Recreation: Texas’ Wetland Forests Provide $13.5 billion',
              'Value in aesthetics and recreation could increase up to $1.3 billion',
              'Texas had over two hundred million visitors in 2015, who spent $69.1 billion and supported five hundred thousand tourism jobs 5,6',
              'Nearly forty percent of residents participated in wildlife-related recreation, spending $6.2 billion in 2011 7',
              'Water Supply and Waste Treatment: Texas’ Wetland Forests Provide $12.3 Billion',
              'Value in water supply and waste treatment could increase up to $1.2 billion',
              'More than two thirds of residents rely on public sewer systems',
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment 8',
              'Less than ten percent of residents rely on private water sources like wells',
              'Residents rely on forests to naturally filter pollutants from their water supply 8',
              'Food and Pollination: Texas’ Wetland Forests Provide $7.8 Billion',
              'Value in food and pollination could increase up to $739 million ',
              'Wetland forests provide habitat for pollinators of agricultural crops ',
              'Nearly three million residents in the state hunt or fish 7',
              'In 2016, hunters purchased over a million deer hunting licenses 9',
              'In 2016, hunters harvested over one million ducks and geese within the state 10',
              'Regulating Services: Texas’ Wetland Forests Provide $4 Billion',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $165 million',
              'There are an estimated 121 million megagrams of carbon stored in the state’s wetland forests',
              'Continual carbon storage reduces the worst impacts of climate change',
              'Raw Materials: Texas’ Wetland Forests Provide $148 Million',
              'In 2011, there were sixty nine forest product mills (e.g., pulp and timber) employing 4,878 people in the state 11 ',
              'Value in raw materials could increase by up to $79 million',
             ], 
             
             
      cFxn: 'txESRc',
      lFxn: 'txESRl', 
      sFxn: 'txESRs', 
              
      fxns: [
              'tx00','tx01','tx02','tx03','tx04','tx05','tx06','tx07',
              'tx08','tx09','tx10','tx11','tx12','tx13','tx14','tx15',
              'tx16','tx17','tx18','tx19','tx20','tx21','tx22','tx23',
              'tx24','tx25','tx26','tx27','tx28','tx29','tx30','tx31', 'tx32'
             ],

};

function txESRc(){ insertLinkAtCursor(txText.cLink, 'Report Link.'); 
                   insertTextAtCursor(txText.cite);
                   }  

function txESRl(){ insertLinkAtCursor(txText.cLink, txText.cTitle); }
function txESRs(){ insertLinkAtCursor(txText.stateLink, txText.title); } 

function tx00(){ insertTextAtCursor([txText.facts[0]]); }
function tx01(){ insertTextAtCursor([txText.facts[1]]); }
function tx02(){ insertTextAtCursor([txText.facts[2]]); }
function tx03(){ insertTextAtCursor([txText.facts[3]]); }
function tx04(){ insertTextAtCursor([txText.facts[4]]); }
function tx05(){ insertTextAtCursor([txText.facts[5]]); }
function tx06(){ insertTextAtCursor([txText.facts[6]]); }
function tx07(){ insertTextAtCursor([txText.facts[7]]); }
function tx08(){ insertTextAtCursor([txText.facts[8]]); }
function tx09(){ insertTextAtCursor([txText.facts[9]]); }
function tx10(){ insertTextAtCursor([txText.facts[10]]); }
function tx11(){ insertTextAtCursor([txText.facts[11]]); }
function tx12(){ insertTextAtCursor([txText.facts[12]]); }
function tx13(){ insertTextAtCursor([txText.facts[13]]); }
function tx14(){ insertTextAtCursor([txText.facts[14]]); }
function tx15(){ insertTextAtCursor([txText.facts[15]]); }
function tx16(){ insertTextAtCursor([txText.facts[16]]); }
function tx17(){ insertTextAtCursor([txText.facts[17]]); }
function tx18(){ insertTextAtCursor([txText.facts[18]]); }
function tx19(){ insertTextAtCursor([txText.facts[19]]); }
function tx20(){ insertTextAtCursor([txText.facts[20]]); }
function tx21(){ insertTextAtCursor([txText.facts[21]]); }
function tx22(){ insertTextAtCursor([txText.facts[22]]); }
function tx23(){ insertTextAtCursor([txText.facts[23]]); }
function tx24(){ insertTextAtCursor([txText.facts[24]]); }
function tx25(){ insertTextAtCursor([txText.facts[25]]); }
function tx26(){ insertTextAtCursor([txText.facts[26]]); }
function tx27(){ insertTextAtCursor([txText.facts[27]]); }
function tx28(){ insertTextAtCursor([txText.facts[28]]); }
function tx29(){ insertTextAtCursor([txText.facts[29]]); }
function tx30(){ insertTextAtCursor([txText.facts[30]]); }
function tx31(){ insertTextAtCursor([txText.facts[31]]); }
function tx32(){ insertTextAtCursor([txText.facts[32]]); }
