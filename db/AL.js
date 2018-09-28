
var al2Text = {
      title: ' How much are Alabama wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Alabama-State-Fact-Sheet.pdf',
  
      cFxn: 'alESRc',
      lFxn: 'alESRl', 
      sFxn: 'alESRs', 
  
      facts: ['According to the Treasures of the South report, Alabama’s wetland forests are worth $34.4 billion and could increase in value to $36.7 billion by investing in conservation and better management practices. Protection from extreme events alone is worth $10.3 billion to the state. Recreation, tourism, and aesthetics alone is worth $8.7 billion to the state. Water and waste treatment alone is worth $7.9 billion to the state. Food and pollination alone is worth $5 billion to the state. Regulating services alone is worth $2.4 billion to the state. Raw materials alone is worth $59 million to the state. ',
              'Alabama’s Wetland Forests Are Worth $34.3 Billion',
              'Worth could increase up to $2.3 billion',
              'Wetland Forest Gem: Beaverdam Creek Swamp in the Wheeler National Wildlife Refuge',
              'Over two million acres of wetland forest, including ninety six swamps and over six thousand streams',
              'Only four percent of wetland forests in Alabama are permanently protected',
              'Regulating Services: Alabama’s Wetland Forests Provide $2.4 Billion',
              'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $78 million',
              'There are an estimated ninety three million megagrams of carbon stored in Alabama wetland forests',
              'Raw Materials: Alabama’s Wetland Forests Provide $58 Million', 
              'In 2011, there were 115 forest product mills (e.g., pulp and timber) employing over thirteen thousand people in Alabama',  
              'Value in raw materials could increase by up to $58 million',
              'Food and Pollination: Alabama’s Wetland Forests Provide $5 Billion', 
              'Value in food and pollination could increase up to $340 million', 
              'Alabama wetland forests provide habitat for pollinators of agricultural crops', 
              'Nearly seven hundred and fifty thousand residents in Alabama hunt or fish', 
              'In 2016, hunters purchased two hundred thousand deer hunting licenses', 
              'In 2016, hunters harvested over a hundred thousand ducks and geese within Alabama',
              'Protection From Extreme Events: Alabama’s Wetland Forests Provide $10.3 Billion', 
              'Value in protection from extreme events and water flow regulation could increase up to $660 million', 
              'Three flood events caused over a billion each in damages since 1980', 
              'Six major hurricanes (larger than category two) and sixteen minor hurricanes made landfall on the Alabama coastline between 1851-2004',
              'Water Supply and Waste Treatment: Alabama’s Wetland Forests Provide $7.9 Billion', 
              'Value in water supply and waste treatment could increase up to $540 million', 
              'More than half of Alabama residents rely on public sewer systems', 
              'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment', 
              'Over ten percent of Alabama residents rely on private water sources like wells', 
              'Residents rely on forests to naturally filter pollutants from their water supply',
              'Aesthetics, Tourism, and Recreation: Alabama’s Wetland Forests Provide $8.7 Billion',
              'Value in aesthetics and recreation could increase up to $610 million ',
              'Alabama had nearly twenty six million visitors in 2016, who spent $13.3 billion and supported one hundred and eighty thousand tourism jobs',
              'Roughly half of Alabama residents participate in wildlife-related recreation, and they spent $2.7 billion in 2011 alone'], 
  
      fxns: ['al00','al01','al02','al03','al04','al05','al06','al07',
             'al08','al09','al10','al11','al12','al13','al14','al15',
             'al16','al17','al18','al19','al20','al21','al22','al23',
             'al24','al25','al26','al27','al28','al29','al30','al31'],

};

function alESRc(){ insertLinkAtCursor(al2Text.cLink, 'Report Link.'); 
                   insertTextAtCursor(al2Text.cite);
                   }  

function alESRl(){ insertLinkAtCursor(al2Text.cLink, al2Text.cTitle); }
function alESRs(){ insertLinkAtCursor(al2Text.stateLink, al2Text.title); } 

function al00(){ insertTextAtCursor([al2Text.facts[0]]); }
function al01(){ insertTextAtCursor([al2Text.facts[1]]); }
function al02(){ insertTextAtCursor([al2Text.facts[2]]); }
function al03(){ insertTextAtCursor([al2Text.facts[3]]); }
function al04(){ insertTextAtCursor([al2Text.facts[4]]); }
function al05(){ insertTextAtCursor([al2Text.facts[5]]); }
function al06(){ insertTextAtCursor([al2Text.facts[6]]); }
function al07(){ insertTextAtCursor([al2Text.facts[7]]); }
function al08(){ insertTextAtCursor([al2Text.facts[8]]); }
function al09(){ insertTextAtCursor([al2Text.facts[9]]); }
function al10(){ insertTextAtCursor([al2Text.facts[10]]); }
function al11(){ insertTextAtCursor([al2Text.facts[11]]); }
function al12(){ insertTextAtCursor([al2Text.facts[12]]); }
function al13(){ insertTextAtCursor([al2Text.facts[13]]); }
function al14(){ insertTextAtCursor([al2Text.facts[14]]); }
function al15(){ insertTextAtCursor([al2Text.facts[15]]); }
function al16(){ insertTextAtCursor([al2Text.facts[16]]); }
function al17(){ insertTextAtCursor([al2Text.facts[17]]); }
function al18(){ insertTextAtCursor([al2Text.facts[18]]); }
function al19(){ insertTextAtCursor([al2Text.facts[19]]); }
function al20(){ insertTextAtCursor([al2Text.facts[20]]); }
function al21(){ insertTextAtCursor([al2Text.facts[21]]); }
function al22(){ insertTextAtCursor([al2Text.facts[22]]); }
function al23(){ insertTextAtCursor([al2Text.facts[23]]); }
function al24(){ insertTextAtCursor([al2Text.facts[24]]); }
function al25(){ insertTextAtCursor([al2Text.facts[25]]); }
function al26(){ insertTextAtCursor([al2Text.facts[26]]); }
function al27(){ insertTextAtCursor([al2Text.facts[27]]); }
function al28(){ insertTextAtCursor([al2Text.facts[28]]); }
function al29(){ insertTextAtCursor([al2Text.facts[29]]); }
function al30(){ insertTextAtCursor([al2Text.facts[30]]); }
function al31(){ insertTextAtCursor([al2Text.facts[31]]); }

