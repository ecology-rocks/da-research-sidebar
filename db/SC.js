
var scText = {
      title: ' How much are South Carolina wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Florida-State-Fact-Sheet.pdf',
  
      facts: ['South Carolina’s Wetland Forests Are Worth $39.6 Billion',
              'Worth could increase up to $5.1 billion ',
              'Wetland Forest Gem: Congaree National Park, the largest tract of old growth bottomland hardwood forest',
              'Just over three million acres of wetland forest, including five hundred named swamps and over three thousand named streams in the state 1',
              'Only five percent of wetland forests in South Carolina are permanently protected',
              'Protection From Extreme Events: South Carolina’s Wetland Forests Provide $11.9 Billion',
              'Value in protection from extreme events and water flow regulation could increase up to $1.5 billion ',
              'Two flood events cost over a billion dollars in damages each since 1980 2',
              'Between 1851 and 2004, 31 hurricanes and 6 major hurricanes (categories 3-5) made landfall on the North Carolina coastline 3 ',
              'Aesthetics, Tourism, and Recreation: South Carolina’s Wetland Forests Provide $9.8 billion',
              'Value in aesthetics and recreation could increase up to $1.4 billion',
              'South Carolina had thirty million visitors in 2015, which contributed $20.2 billion in visitor spending and supported around two hundred thousand tourism jobs 4',
              'Nearly half of residents participated in wildlife-related recreation, spending $2 billion in 2011 5',
              'Water Supply and Waste Treatment: South Carolina’s Wetland Forests Provide $9 Billion',
              'Value in water supply and waste treatment could increase up to $1.2 billion ',
              'Over half of residents rely on public sewer systems',
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment 6',
              'Over twenty percent of residents rely on private water sources like wells',
              'Residents rely on forests to naturally filter pollutants from their water supply 6',
              'Food and Pollination: South Carolina’s Wetland Forests Provide $5.7 Billion',
              'Value in food and pollination could increase up to $760 million',
              'Wetland forests provide habitat for pollinators of agricultural crops',
              'Over six hundred thousand residents in the state hunt or fish 5',
              'In 2016, hunters purchased nearly a hundred and fifty thousand deer hunting licenses 7',
              'In 2016, hunters harvested over a hundred and fifty thousand ducks and geese within the state 8',
              'Regulating Services: South Carolina’s Wetland Forests Provide $3.2 Billion',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $180 million',
              'There are an estimated 187 million megagrams of carbon stored in the state’s wetland forests',
              'Continual carbon storage reduces the worst impacts of climate change.',
              'Raw Materials: South Carolina’s Wetland Forests Provide $180 Million',
              'In 2011, there were seventy forest product mills (e.g., pulp and timber) employing over eight thousand people in the state 9 ',
              'Value in raw materials could increase by up to $26 million',
             ], 
             
      cFxn: 'scESRc',
      lFxn: 'scESRl', 
      sFxn: 'scESRs', 
              
      fxns: [
              'sc00','sc01','sc02','sc03','sc04','sc05','sc06','sc07',
              'sc08','sc09','sc10','sc11','sc12','sc13','sc14','sc15',
              'sc16','sc17','sc18','sc19','sc20','sc21','sc22','sc23',
              'sc24','sc25','sc26','sc27','sc28','sc29','sc30','sc31',
             ],

};

function scESRc(){ insertLinkAtCursor(scText.cLink, 'Report Link.'); 
                   insertTextAtCursor(scText.cite);
                   }  

function scESRl(){ insertLinkAtCursor(scText.cLink, scText.cTitle); }
function scESRs(){ insertLinkAtCursor(scText.stateLink, scText.title); } 

function sc00(){ insertTextAtCursor([scText.facts[0]]); }
function sc01(){ insertTextAtCursor([scText.facts[1]]); }
function sc02(){ insertTextAtCursor([scText.facts[2]]); }
function sc03(){ insertTextAtCursor([scText.facts[3]]); }
function sc04(){ insertTextAtCursor([scText.facts[4]]); }
function sc05(){ insertTextAtCursor([scText.facts[5]]); }
function sc06(){ insertTextAtCursor([scText.facts[6]]); }
function sc07(){ insertTextAtCursor([scText.facts[7]]); }
function sc08(){ insertTextAtCursor([scText.facts[8]]); }
function sc09(){ insertTextAtCursor([scText.facts[9]]); }
function sc10(){ insertTextAtCursor([scText.facts[10]]); }
function sc11(){ insertTextAtCursor([scText.facts[11]]); }
function sc12(){ insertTextAtCursor([scText.facts[12]]); }
function sc13(){ insertTextAtCursor([scText.facts[13]]); }
function sc14(){ insertTextAtCursor([scText.facts[14]]); }
function sc15(){ insertTextAtCursor([scText.facts[15]]); }
function sc16(){ insertTextAtCursor([scText.facts[16]]); }
function sc17(){ insertTextAtCursor([scText.facts[17]]); }
function sc18(){ insertTextAtCursor([scText.facts[18]]); }
function sc19(){ insertTextAtCursor([scText.facts[19]]); }
function sc20(){ insertTextAtCursor([scText.facts[20]]); }
function sc21(){ insertTextAtCursor([scText.facts[21]]); }
function sc22(){ insertTextAtCursor([scText.facts[22]]); }
function sc23(){ insertTextAtCursor([scText.facts[23]]); }
function sc24(){ insertTextAtCursor([scText.facts[24]]); }
function sc25(){ insertTextAtCursor([scText.facts[25]]); }
function sc26(){ insertTextAtCursor([scText.facts[26]]); }
function sc27(){ insertTextAtCursor([scText.facts[27]]); }
function sc28(){ insertTextAtCursor([scText.facts[28]]); }
function sc29(){ insertTextAtCursor([scText.facts[29]]); }
function sc30(){ insertTextAtCursor([scText.facts[30]]); }
function sc31(){ insertTextAtCursor([scText.facts[31]]); }
