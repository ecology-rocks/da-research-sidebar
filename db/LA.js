
var laText = {
      title: ' How much are Louisiana wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Florida-State-Fact-Sheet.pdf',
  
      facts: ['Louisiana’s Wetland Forests Are Worth $79 Billion',
              'Worth could increase up to $6.5 billion ',
              'Wetland Forest Gem: Atchafalaya Swamp, the largest wetland and swamp in the United States',
              'Over five million acres of wetland forest, including nearly three hundred named swamps and over four thousand named streams in the state',
              'Only five percent of Louisiana wetland forests are permanently protected',
              'Protection From Extreme Events: Louisiana’s Wetland Forests Provide $23.8 Billion',
              'Value in protection from extreme events and water flow regulation could increase up to $1.9 billion ',
              'Eight flood events amassed over a billion dollars of damages each since 1980',
              'Since 1851, there have been fourteen major Mississippi river floods, impacting states along the river like Louisiana ',
              'Between 1851 and 2004, eighteen major hurricanes (categories 3-5) made landfall on the Louisiana coastline ',
              'Aesthetics, Tourism, and Recreation: Louisiana’s Wetland Forests Provide $20 billion',
              'Value in aesthetics and recreation could increase up to $1.7 million',
              'Louisiana had nearly thirty million visitors in 2015, who spent $11.5 billion and supported over one hundred and seventy thousand tourism jobs',
              'Almost half of residents participated in wildlife-related recreation, spending $2.2 billion in 2011 ',
              'Water Supply and Waste Treatment: Louisiana’s Wetland Forests Provide $18.3 Billion',
              'Value in water supply and waste treatment could increase up to $1.6 billion ',
              'More than seventy percent of residents rely on public sewer systems',
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment ',
              'Over ten percent of residents rely on private water sources like wells',
              'Residents rely on forests to naturally filter pollutants from their water supply ',
              'Food and Pollination: Louisiana’s Wetland Forests Provide $11.5 Billion',
              'Value in food and pollination could increase up to $1 billion',
              'Wetland forests provide habitat for pollinators of agricultural crops',
              'Over eight hundred thousand residents in the state hunt or fish ',
              'In 2016, hunters purchased nearly two hundred thousand deer hunting licenses ',
              'In 2016, hunters harvested almost a million ducks and geese within the state ',
              'Regulating Services: Louisiana’s Wetland Forests Provide $5.73 Billion',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $218 million',
              'There are an estimated 214 million megagrams of carbon stored in the state’s wetland forests',
              'Continual carbon storage reduces the worst impacts of climate change',
              'Raw Materials: Louisiana’s Wetland Forests Provide $170 Million',
              'In 2011, there were forty forest product mills (e.g., pulp and timber) employing over seven thousand people in the state  ',
              'Value in raw materials could increase up to $129 million',
             ], 
              
              
      cFxn: 'laESRc',
      lFxn: 'laESRl', 
      sFxn: 'laESRs', 
              
      fxns: [
              'la00','la01','la02','la03','la04','la05','la06','la07',
              'la08','la09','la10','la11','la12','la13','la14','la15',
              'la16','la17','la18','la19','la20','la21','la22','la23',
              'la24','la25','la26','la27','la28','la29','la30','la31',
             ],

};

function laESRc(){ insertLinkAtCursor(laText.cLink, 'Report Link.'); 
                   insertTextAtCursor(laText.cite);
                   }  

function laESRl(){ insertLinkAtCursor(laText.cLink, laText.cTitle); }
function laESRs(){ insertLinkAtCursor(laText.stateLink, laText.title); } 

function la00(){ insertTextAtCursor([laText.facts[0]]); }
function la01(){ insertTextAtCursor([laText.facts[1]]); }
function la02(){ insertTextAtCursor([laText.facts[2]]); }
function la03(){ insertTextAtCursor([laText.facts[3]]); }
function la04(){ insertTextAtCursor([laText.facts[4]]); }
function la05(){ insertTextAtCursor([laText.facts[5]]); }
function la06(){ insertTextAtCursor([laText.facts[6]]); }
function la07(){ insertTextAtCursor([laText.facts[7]]); }
function la08(){ insertTextAtCursor([laText.facts[8]]); }
function la09(){ insertTextAtCursor([laText.facts[9]]); }
function la10(){ insertTextAtCursor([laText.facts[10]]); }
function la11(){ insertTextAtCursor([laText.facts[11]]); }
function la12(){ insertTextAtCursor([laText.facts[12]]); }
function la13(){ insertTextAtCursor([laText.facts[13]]); }
function la14(){ insertTextAtCursor([laText.facts[14]]); }
function la15(){ insertTextAtCursor([laText.facts[15]]); }
function la16(){ insertTextAtCursor([laText.facts[16]]); }
function la17(){ insertTextAtCursor([laText.facts[17]]); }
function la18(){ insertTextAtCursor([laText.facts[18]]); }
function la19(){ insertTextAtCursor([laText.facts[19]]); }
function la20(){ insertTextAtCursor([laText.facts[20]]); }
function la21(){ insertTextAtCursor([laText.facts[21]]); }
function la22(){ insertTextAtCursor([laText.facts[22]]); }
function la23(){ insertTextAtCursor([laText.facts[23]]); }
function la24(){ insertTextAtCursor([laText.facts[24]]); }
function la25(){ insertTextAtCursor([laText.facts[25]]); }
function la26(){ insertTextAtCursor([laText.facts[26]]); }
function la27(){ insertTextAtCursor([laText.facts[27]]); }
function la28(){ insertTextAtCursor([laText.facts[28]]); }
function la29(){ insertTextAtCursor([laText.facts[29]]); }
function la30(){ insertTextAtCursor([laText.facts[30]]); }
function la31(){ insertTextAtCursor([laText.facts[31]]); }
