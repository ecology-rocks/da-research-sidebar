

var daReports = {  
  
  gas: {
    title: 'The Great American Stand',
    cite: 'Moomaw, B. & Smith, D. The Great American Stand - US Forests and the Climate Emergency. (Dogwood Alliance, 2017).',
    link: 'https://www.dogwoodalliance.org/wp-content/uploads/2017/03/The-Great-American-Stand-Report.pdf',
    tFxn: 'tgas',
    cFxn: 'cgas',
    lFxn: 'lgas',
    image: 'https://www.dogwoodalliance.org/wp-content/uploads/2017/03/Forests-Climate-Report-Cover-232x300.png',
  },
  gasHistory: {
    title: 'A History Of Forests In The US South',
    cite: 'Davis, S.L. A History of Forests in the US South - The Great American Stand Series. (Dogwood Alliance 2018).',
    link: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/04/A-History-of-Forests.pdf',  
    tFxn: 'tgasHistory',
    cFxn: 'cgasHistory',
    lFxn: 'lgasHistory',
    image: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/04/A-History-of-Forests-Cover-232x300.png',
  },
  gasIndustry: {
    title: 'Industry Impacts on US Forests',
    cite: 'Davis, S.L. Industry Impacts on US Forests - The Great American Stand Series. (Dogwood Alliance 2018).',
    link: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/08/Industry-Impacts-on-US-Forests.pdf',   
    tFxn: 'tgasIndustry',
    cFxn: 'cgasIndustry',
    lFxn: 'lgasIndustry',
    image: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/08/Industry-Impacts-on-US-Forests-Cover-232x300.png',
  },
  gasClimatePlan: {
    title: 'Seeing The Forest: Nature\'s Solution To Climate Change',
    cite: 'Davis, S.L. Seeing The Forest: Nature\'s Solution To Climate Change. (Dogwood Alliance 2018).',
    link: 'https://stand4forests.org/wp-content/uploads/2018/09/The-Climate-Plan.pdf',
    tFxn: 'tgasClimatePlan',
    cFxn: 'cgasClimatePlan',
    lFxn: 'lgasClimatePlan',
    image: 'https://stand4forests.org/wp-content/uploads/2018/09/The_Climate_Plan_Final_R1-1.jpg',
  },
  treasuresSouth: {
    title: 'Treasures of the South: The True Value of Wetland Forests',
    cite: 'Davis, S.L. Treasures of the South: The True Value of Wetland Forests. (Dogwood Alliance 2018).',
    link: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/01/Treasures-of-the-South-Web-Report.pdf',
    tFxn: 'ttreasuresSouth',
    cFxn: 'ctreasuresSouth',
    lFxn: 'ltreasuresSouth',
    image: 'https://www.dogwoodalliance.org/wp-content/uploads/2018/02/Treasures-of-the-South-Report-Cover-232x300.jpg',
  },
  vanishingTreasures: {
    title: 'Vanishing Treasures',
    cite: 'Vanishing Treasures. (Dogwood Alliance 2016).',
    link: 'https://www.dogwoodalliance.org/wp-content/uploads/2016/02/Vanishing-Treasures-Brief-Wetland-Forests-Initiative.pdf',
    tFxn: 'tvanishingTreasures',
    cFxn: 'cvanishingTreasures',
    lFxn: 'lvanishingTreasures',
    image: 'https://www.dogwoodalliance.org/wp-content/uploads/2016/02/Vanishing-Treasures-Wetland-Forests-550-300x290.jpg',
  },
  
  
  
};


function tgas(){ insertTextAtCursor([daReports.gas.title]); }
function cgas(){ insertTextAtCursor([daReports.gas.cite]); }
function lgas(){ insertLinkAtCursor(daReports.gas.link, daReports.gas.title); }

function tgasHistory(){ insertTextAtCursor([daReports.gasHistory.title]); }
function cgasHistory(){ insertTextAtCursor([daReports.gasHistory.cite]); }
function lgasHistory(){ insertLinkAtCursor(daReports.gasHistory.link, daReports.gasHistory.title); }

function tgasIndustry(){ insertTextAtCursor([daReports.gasIndustry.title]); }
function cgasIndustry(){ insertTextAtCursor([daReports.gasIndustry.cite]); }
function lgasIndustry(){ insertLinkAtCursor(daReports.gasIndustry.link, daReports.gasIndustry.title); }

function tgasClimatePlan(){ insertTextAtCursor([daReports.gasClimatePlan.title]); }
function cgasClimatePlan(){ insertTextAtCursor([daReports.gasClimatePlan.cite]); }
function lgasClimatePlan(){ insertLinkAtCursor(daReports.gasClimatePlan.link, daReports.gasClimatePlan.title); }

function ttreasuresSouth(){ insertTextAtCursor([daReports.treasuresSouth.title]); }
function ctreasuresSouth(){ insertTextAtCursor([daReports.treasuresSouth.cite]); }
function ltreasuresSouth(){ insertLinkAtCursor(daReports.treasuresSouth.link, daReports.treasuresSouth.title); }

function tvanishingTreasures(){ insertTextAtCursor([daReports.vanishingTreasures.title]); }
function cvanishingTreasures(){ insertTextAtCursor([daReports.vanishingTreasures.cite]); }
function lvanishingTreasures(){ insertLinkAtCursor(daReports.vanishingTreasures.link, daReports.vanishingTreasures.title); }