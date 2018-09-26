
var arText = {
      title: ' How much are Arkansas wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Arkansas-State-Fact-Sheet.pdf',
  
      cFxn: 'arESRc',
      lFxn: 'arESRl', 
      sFxn: 'arESRs', 
  
      facts: ['Arkansas’ Wetland Forests Are Worth $37.4 Billion',
              'Worth could increase up to $2.8 billion ',
              'Wetland Forest Gem: Seven Devils Swamp',
              'Two and a half million acres of wetland forest, including nearly two hundred swamps and over four thousand streams 1',
              'Eighteen percent of wetland forests in Arkansas are in permanent protection',
              'Protection From Extreme Events: Arkansas’ Wetland Forests Provide $11.2 Billion',
              'Value in protection from extreme events and water flow regulation could increase up to $830 million ',
              'Seven flood events caused over a billion each of damages since 1980 2',
              'Since 1851, there have been fourteen major Mississippi river floods, impacting states along the river like Arkansas 3',
              'Aesthetics, Tourism, and Recreation: Arkansas’ Wetland Forests Provide $9.4 Billion',
              'Value in aesthetics and recreation could increase up to $760 million',
              'Arkansas had over twenty nine million visitors in 2016, who spent $7.7 billion and supported over one hundred thousand tourism jobs 4',
              'Over sixty percent of Arkansas residents participated in wildlife-related recreation, spending $1.8 billion in 2011 5',
              'Water Supply and Waste Treatment: Arkansas’ Wetland Forests Provide $8.6 Billion',
              'Value in water supply and waste treatment could increase up to $690 million ',
              'More than sixty percent of Arkansas residents rely on public sewer systems ',
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment 6',
              'Nearly twenty percent of Arkansas residents rely on private water sources like wells. ',
              'Residents rely on forests to naturally filter pollutants from their water supply 6',
              'Food and Pollination: Arkansas’ Wetland Forests Provide $5.4 Billion',
              'Value in food and pollination could increase up to $430 million',
              'Arkansas wetland forests provide habitat for pollinators of agricultural crops.',
              'Over five hundred and fifty thousand residents in Arkansas hunt or fish 5',
              'In 2016, hunters purchased three hundred thousand deer hunting licenses 7',
              'In 2016, hunters harvested over a hundred thousand ducks and geese within Arkansas 8',
              'Regulating Services: Arkansas’ Wetland Forests Provide $2.7 Billion',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $96 million',
              'There are an estimated 105 million megagrams of carbon stored in Arkansas wetland forests',
              'Continual carbon storage reduces the worst impacts of climate change',
              'Raw Materials: Arkansas’ Wetland Forests Provide $86 Million',
              'In 2011, there were ninety five forest product mills (e.g., pulp and timber) employing over nine thousand people in Arkansas 9  ',
              'Value in raw materials could increase by up to $40 million',], 
  
      fxns: [
              'ar00','ar01','ar02','ar03','ar04','ar05','ar06','ar07',
              'ar08','ar09','ar10','ar11','ar12','ar13','ar14','ar15',
              'ar16','ar17','ar18','ar19','ar20','ar21','ar22','ar23',
              'ar24','ar25','ar26','ar27','ar28','ar29','ar30','ar31',
             ],

};

function arESRc(){ insertLinkAtCursor(arText.cLink, 'Report Link.'); 
                   insertTextAtCursor(arText.cite);
                   }  

function arESRl(){ insertLinkAtCursor(arText.cLink, arText.cTitle); }
function arESRs(){ insertLinkAtCursor(arText.stateLink, arText.title); } 

function ar00(){ insertTextAtCursor([arText.facts[0]]); }
function ar01(){ insertTextAtCursor([arText.facts[1]]); }
function ar02(){ insertTextAtCursor([arText.facts[2]]); }
function ar03(){ insertTextAtCursor([arText.facts[3]]); }
function ar04(){ insertTextAtCursor([arText.facts[4]]); }
function ar05(){ insertTextAtCursor([arText.facts[5]]); }
function ar06(){ insertTextAtCursor([arText.facts[6]]); }
function ar07(){ insertTextAtCursor([arText.facts[7]]); }
function ar08(){ insertTextAtCursor([arText.facts[8]]); }
function ar09(){ insertTextAtCursor([arText.facts[9]]); }
function ar10(){ insertTextAtCursor([arText.facts[10]]); }
function ar11(){ insertTextAtCursor([arText.facts[11]]); }
function ar12(){ insertTextAtCursor([arText.facts[12]]); }
function ar13(){ insertTextAtCursor([arText.facts[13]]); }
function ar14(){ insertTextAtCursor([arText.facts[14]]); }
function ar15(){ insertTextAtCursor([arText.facts[15]]); }
function ar16(){ insertTextAtCursor([arText.facts[16]]); }
function ar17(){ insertTextAtCursor([arText.facts[17]]); }
function ar18(){ insertTextAtCursor([arText.facts[18]]); }
function ar19(){ insertTextAtCursor([arText.facts[19]]); }
function ar20(){ insertTextAtCursor([arText.facts[20]]); }
function ar21(){ insertTextAtCursor([arText.facts[21]]); }
function ar22(){ insertTextAtCursor([arText.facts[22]]); }
function ar23(){ insertTextAtCursor([arText.facts[23]]); }
function ar24(){ insertTextAtCursor([arText.facts[24]]); }
function ar25(){ insertTextAtCursor([arText.facts[25]]); }
function ar26(){ insertTextAtCursor([arText.facts[26]]); }
function ar27(){ insertTextAtCursor([arText.facts[27]]); }
function ar28(){ insertTextAtCursor([arText.facts[28]]); }
function ar29(){ insertTextAtCursor([arText.facts[29]]); }
function ar30(){ insertTextAtCursor([arText.facts[30]]); }
function ar31(){ insertTextAtCursor([arText.facts[31]]); }
