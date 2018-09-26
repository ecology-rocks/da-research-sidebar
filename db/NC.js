
var ncText = {
      title: ' How much are North Carolina wetland forests worth? ',
  
      cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
      cTitle: ' Treasures of the South. ',
      cLink: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
      stateLink: 'https://www.dogwoodalliance.org/esr/Florida-State-Fact-Sheet.pdf',
  
      facts: [
        'North Carolina’s Wetland Forests Are Worth $27 Billion',
        'Worth could increase up to $5.1 billion',
        'Wetland Forest Gem: Green Swamp in southeastern North Carolina',
        'Over two million acres of wetland forest, including over five hundred named swamps and over nine thousand named streams in the state 1',
        'Just seven percent of wetland forests in North Carolina are permanently protected',
        'Protection From Extreme Events: North Carolina’s Wetland Forests Provide $8 Billion',
        'Value in protection from extreme events and water flow regulation could increase up to $1.5 billion',
        'One flood event cost over a billion dollars of damages since 1980 2',
        'Between 1851 and 2004, twelve major hurricanes (categories 3-5) made landfall on the North Carolina coastline 3 ',
        'Aesthetics, Tourism, and Recreation: North Carolina’s Wetland Forests Provide $6.6 billion',
        'Value in aesthetics and recreation could increase up to $1.4 billion ',
        'North Carolina had over fifty million visitors in 2015, who spent $21.9 billion and supported over two hundred thousand tourism jobs 4',
        'Nearly half of residents participated in wildlife-related recreation, spending $3.3 billion in 2011 5',
        'Water Supply and Waste Treatment: North Carolina’s Wetland Forests Provide $6 Billion',
        'Value in water supply and waste treatment could increase up to $1.2 billion',
        'Half of residents rely on public sewer systems',
        'Many public facilities rely on natural infrastructure to reduce costs of waste and water treatment 6',
        'Over a third of residents rely on private water sources like wells',
        'Residents rely on forests to naturally filter pollutants from their water supply 6',
        'Food and Pollination: North Carolina’s Wetland Forests Provide $3.8 Billion',
        'Value in food and pollination could increase up to $780 million ',
        'Wetland forests provide habitat for pollinators of agricultural crops ',
        'Over a million residents in the state hunt or fish 5',
        'In 2016, hunters purchased two hundred and fifty thousand deer hunting licenses 7',
        'In 2016, hunters harvested over five hundred thousand ducks and geese within the state 8',
        'Regulating Services: North Carolina’s Wetland Forests Provide $2.3 Billion',
        'Value in climate regulation, air quality, soil formation, and erosion control could increase up to $178 million',
        'There are an estimated 134 million megagrams of carbon stored in the state’s wetland forests',
        'Continual carbon storage reduces the worst impacts of climate change ',
        'Raw Materials: North Carolina’s Wetland Forests Provide $171 Million',
        'In 2011, there were 135 forest product mills (e.g., pulp and timber) employing over nine thousand people in the state 9 ',
        'Value in raw materials  could increase up to $6 million',
             ], 
              
              
      cFxn: 'ncESRc',
      lFxn: 'ncESRl', 
      sFxn: 'ncESRs', 
              
      fxns: [
              'nc00','nc01','nc02','nc03','nc04','nc05','nc06','nc07',
              'nc08','nc09','nc10','nc11','nc12','nc13','nc14','nc15',
              'nc16','nc17','nc18','nc19','nc20','nc21','nc22','nc23',
              'nc24','nc25','nc26','nc27','nc28','nc29','nc30','nc31',
             ],

};

function ncESRc(){ insertLinkAtCursor(ncText.cLink, 'Report Link.'); 
                   insertTextAtCursor(ncText.cite);
                   }  

function ncESRl(){ insertLinkAtCursor(ncText.cLink, ncText.cTitle); }
function ncESRs(){ insertLinkAtCursor(ncText.stateLink, ncText.title); } 

function nc00(){ insertTextAtCursor([ncText.facts[0]]); }
function nc01(){ insertTextAtCursor([ncText.facts[1]]); }
function nc02(){ insertTextAtCursor([ncText.facts[2]]); }
function nc03(){ insertTextAtCursor([ncText.facts[3]]); }
function nc04(){ insertTextAtCursor([ncText.facts[4]]); }
function nc05(){ insertTextAtCursor([ncText.facts[5]]); }
function nc06(){ insertTextAtCursor([ncText.facts[6]]); }
function nc07(){ insertTextAtCursor([ncText.facts[7]]); }
function nc08(){ insertTextAtCursor([ncText.facts[8]]); }
function nc09(){ insertTextAtCursor([ncText.facts[9]]); }
function nc10(){ insertTextAtCursor([ncText.facts[10]]); }
function nc11(){ insertTextAtCursor([ncText.facts[11]]); }
function nc12(){ insertTextAtCursor([ncText.facts[12]]); }
function nc13(){ insertTextAtCursor([ncText.facts[13]]); }
function nc14(){ insertTextAtCursor([ncText.facts[14]]); }
function nc15(){ insertTextAtCursor([ncText.facts[15]]); }
function nc16(){ insertTextAtCursor([ncText.facts[16]]); }
function nc17(){ insertTextAtCursor([ncText.facts[17]]); }
function nc18(){ insertTextAtCursor([ncText.facts[18]]); }
function nc19(){ insertTextAtCursor([ncText.facts[19]]); }
function nc20(){ insertTextAtCursor([ncText.facts[20]]); }
function nc21(){ insertTextAtCursor([ncText.facts[21]]); }
function nc22(){ insertTextAtCursor([ncText.facts[22]]); }
function nc23(){ insertTextAtCursor([ncText.facts[23]]); }
function nc24(){ insertTextAtCursor([ncText.facts[24]]); }
function nc25(){ insertTextAtCursor([ncText.facts[25]]); }
function nc26(){ insertTextAtCursor([ncText.facts[26]]); }
function nc27(){ insertTextAtCursor([ncText.facts[27]]); }
function nc28(){ insertTextAtCursor([ncText.facts[28]]); }
function nc29(){ insertTextAtCursor([ncText.facts[29]]); }
function nc30(){ insertTextAtCursor([ncText.facts[30]]); }
function nc31(){ insertTextAtCursor([ncText.facts[31]]); }
