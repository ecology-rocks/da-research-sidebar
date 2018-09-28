
var moText = {
      title: ' How much are Missouri wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Florida-State-Fact-Sheet.pdf',
  
      cFxn: 'moESRc',
      lFxn: 'moESRl', 
      sFxn: 'moESRs', 
  
      facts: ['Missouri’s Wetland Forests Are Worth $7.7 Billion',
              'Worth could increase up to $1.3 billion ',
              'Wetland Forest Gem: Mingo National Wildlife Refuge',
              'Nearly seven hundred thousand acres of wetland forest, including twenty four named swamps and over five thousand named streams in the state 1',
              'Fifteen percent of Missouri wetland forests are permanently protected',
              'Protection From Extreme Events: Missouri’s Wetland Forests Provide $2.3 Billion',
              'Value in protection from extreme events and water flow regulation could increase up to $370 million ',
              'Six flood events amassed over a billion dollars of damages each since 1980 2',
              'Since 1851, there have been fourteen major Mississippi river floods, impacting states along the river like Missouri 3 ',
              'Aesthetics, Tourism, and Recreation: Missouri’s Wetland Forests Provide $1.9 billion',
              'Value in aesthetics and recreation could increase up to $340 million  ',
              'Missouri had forty two million visitors in 2016, which contributed $13.1 billion in visitor spending and supported over three hundred thousand tourism jobs 4',
              'Nearly sixty percent of residents participated in wildlife-related recreation, spending $2.7 billion in 2011 5',
              'Water Supply and Waste Treatment: Missouri’s Wetland Forests Provide $1.7 Billion',
              'Value in water supply and waste treatment could increase up to $310 million ',
              'More than seventy percent of residents rely on public sewer systems',
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment 6',
              'Almost twenty percent of residents rely on private water sources like wells',
              'Residents rely on forests to naturally filter pollutants from their water supply 6',
              'Food and Pollination: Missouri’s Wetland Forests Provide $1.1 Billion',
              'Value in food and pollination could increase up to $190 million',
              'Wetland forests provide habitat for pollinators of agricultural crops',
              'Over a million residents in the state hunt or fish 5',
              'In 2016, hunters purchased over five hundred thousand deer hunting licenses 7',
              'In 2016, hunters harvested over five hundred thousand ducks and geese within the state 8',
              'Regulating Services: Missouri’s Wetland Forests Provide $664 Million',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $42 million',
              'There are an estimated seventeen million megagrams of carbon stored in the state’s wetland forests',
              'Continual carbon storage reduces the worst impacts of climate change',
              'Raw Materials: Missouri’s Wetland Forests Provide $49 Million',
              'Value in raw materials could increase up to $1 million',
             ], 
              
      fxns: [
              'mo00','mo01','mo02','mo03','mo04','mo05','mo06','mo07',
              'mo08','mo09','mo10','mo11','mo12','mo13','mo14','mo15',
              'mo16','mo17','mo18','mo19','mo20','mo21','mo22','mo23',
              'mo24','mo25','mo26','mo27','mo28','mo29','mo30',
             ],

};

function moESRc(){ insertLinkAtCursor(moText.cLink, 'Report Link.'); 
                   insertTextAtCursor(moText.cite);
                   }  

function moESRl(){ insertLinkAtCursor(moText.cLink, moText.cTitle); }
function moESRs(){ insertLinkAtCursor(moText.stateLink, moText.title); } 

function mo00(){ insertTextAtCursor([moText.facts[0]]); }
function mo01(){ insertTextAtCursor([moText.facts[1]]); }
function mo02(){ insertTextAtCursor([moText.facts[2]]); }
function mo03(){ insertTextAtCursor([moText.facts[3]]); }
function mo04(){ insertTextAtCursor([moText.facts[4]]); }
function mo05(){ insertTextAtCursor([moText.facts[5]]); }
function mo06(){ insertTextAtCursor([moText.facts[6]]); }
function mo07(){ insertTextAtCursor([moText.facts[7]]); }
function mo08(){ insertTextAtCursor([moText.facts[8]]); }
function mo09(){ insertTextAtCursor([moText.facts[9]]); }
function mo10(){ insertTextAtCursor([moText.facts[10]]); }
function mo11(){ insertTextAtCursor([moText.facts[11]]); }
function mo12(){ insertTextAtCursor([moText.facts[12]]); }
function mo13(){ insertTextAtCursor([moText.facts[13]]); }
function mo14(){ insertTextAtCursor([moText.facts[14]]); }
function mo15(){ insertTextAtCursor([moText.facts[15]]); }
function mo16(){ insertTextAtCursor([moText.facts[16]]); }
function mo17(){ insertTextAtCursor([moText.facts[17]]); }
function mo18(){ insertTextAtCursor([moText.facts[18]]); }
function mo19(){ insertTextAtCursor([moText.facts[19]]); }
function mo20(){ insertTextAtCursor([moText.facts[20]]); }
function mo21(){ insertTextAtCursor([moText.facts[21]]); }
function mo22(){ insertTextAtCursor([moText.facts[22]]); }
function mo23(){ insertTextAtCursor([moText.facts[23]]); }
function mo24(){ insertTextAtCursor([moText.facts[24]]); }
function mo25(){ insertTextAtCursor([moText.facts[25]]); }
function mo26(){ insertTextAtCursor([moText.facts[26]]); }
function mo27(){ insertTextAtCursor([moText.facts[27]]); }
function mo28(){ insertTextAtCursor([moText.facts[28]]); }
function mo29(){ insertTextAtCursor([moText.facts[29]]); }
function mo30(){ insertTextAtCursor([moText.facts[30]]); }
