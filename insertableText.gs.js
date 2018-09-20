//put informative text in here:

var fcText = {
    fcOldForests: {
      title: 'What did forests used to look like?',
      text: ['Forests used to cover much of the terrestrial landscape, but Earth has \'lost more than half its trees\' since humans first started cutting them down. Current estimates put primary (uncut) forest at about 32% of its original extent. In the US, only about 5% of coastal redwoods, 4% of longleaf pine, and 20% of bottomland hardwood ecosystems remain from their historical extent.'],
      cite: ['Crowther, T. W. et al. Mapping tree density at a global scale. Nature 525, 201–205 (2015).',
             'Food and Agricultural Organization. Global forest resources assessment 2010. (United Nations, 2010).',
             'Reuters. Twenty percent of virgin forests left. Stabroek News - Google News Archive Search (1997). Available at: https://news.google.com/newspapers?id=R005AAAAIBAJ&sjid=4yYMAAAAIBAJ&pg=448,128771. (Accessed: 14th March 2017)',
             'Save the Redwoods League. Coast Redwoods | Save the Redwoods League. Save the Redwoods League Available at: https://www.savetheredwoods.org/redwoods/coast-redwoods/. (Accessed: 14th March 2017)',
             'NRDC. In the U.S. southeast, natural forests are being felled to send fuel overseas. (Natural Resources Defense Council, 2015).',
             'Westerhold, J. The Long Road to Recovery for the Longleaf Pine - American Forests. American Forests (2014). Available at: http://www.americanforests.org/magazine/article/the-long-road-to-recovery-for-the-longleaf-pine/. (Accessed: 31st March 2017)'],
      tFxn: 'fcOldForests',
      cFxn: 'fcOldForestsCite',
    },
  
  fcForestsClimChange: {
      title: 'Why do forests matter to climate change?',
      text: ['Forests are an integral part of the climate solution. Despite the primary focus on energy efficiency and reducing the dependency on fossil fuel emissions, land-use change (where forests are counted) represents a significant portion of the global carbon budget. Global forests are said to offset about 40% of manmade CO2, and southern US forests store about a third of the carbon attributed to land-use change.',
             'As a result of this impact, what we do to our forests matters. Wiping out an entire forest can have significant effects on global climate patterns and alter vegetation on the other side of the world. We have to prioritize older, intact forests because they are the best at sequestering carbon for long periods of time. It takes decades for cutover forests to offset the carbon lost, before they can begin to store additional carbon.'],
      cite: ['Pan, Y. et al. A large and persistent carbon sink in the world’s forests. Science 333, 988–993 (2011).',
             'Wear, D. N. & Greis, J. G. Southern forest resource assessment-technical report. Gen. Tech. Rep. SRS-53. Asheville, NC: US Department of Agriculture, Forest Service, Southern Research Station. 635 p. 53, (2002).',
             'Garcia, E. S. et al. Synergistic Ecoclimate Teleconnections from Forest Loss in Different Regions Structure Global Ecological Responses. PLoS One 11, e0165042 (2016).',
             'Harmon, M. E., Ferrell, W. K. & Franklin, J. F. Effects on carbon storage of conversion of old-growth forests to young forests. Science 247, 699–702 (1990).',
             'Luyssaert, S. et al. Old-growth forests as global carbon sinks. Nature 455, 213–215 (2008).',
             'McGarvey, J. C., Thompson, J. R., Epstein, H. E. & Shugart, H. H., Jr. Carbon storage in old-growth forests of the Mid-Atlantic: toward better understanding the eastern forest carbon sink. Ecology 96, 311–317 (2015).'],
      tFxn: 'fcForestsClimChange',
      cFxn: 'fcForestsClimChangeCite',
  },
  
  fcFixClimate: {
    title: 'How do we fix the climate crisis?',
    text: ['Unfortunately, our forests are currently very young and fragmented. This means that there is great opportunity for restoration and afforestation. Several studies have found that allowing trees to mature could put billions of metric tons of carbon into the earth instead of into the atmosphere.'],
    cite: ['Heilman, G. E., Strittholt, J. R., Slosser, N. C. & Dellasala, D. A. Forest Fragmentation of the Conterminous United States: Assessing Forest Intactness through Road Density and Spatial Characteristics Forest fragmentation can be measured and monitored in a powerful new way by combining remote sensing, geographic information systems, and analytical software. Bioscience 52, 411–422 (2002).',
           'Houghton, R. A., Byers, B. & Nassikas, A. A. A role for tropical forests in stabilizing atmospheric CO2. Nat. Clim. Chang. 5, 1022–1023 (2015).',
           'Depro, B. M., Murray, B. C., Alig, R. J. & Shanks, A. Public land, timber harvests, and climate mitigation: Quantifying carbon sequestration potential on U.S. public timberlands. For. Ecol. Manage. 255, 1122–1134 (2008).'],
    tFxn: 'fcFixClimate',
    cFxn: 'fcFixClimateCite',
  },
  
  fcGlobalPolicy: {
    title: 'What are global policies on forests and climate?',
    text: ['Although policies initially focused on fossil fuel reductions, in recent years there has been interest in using forests for their carbon benefits. The UN Paris Agreement, which calls for limiting warming to only 1.5 degrees C, explicitly recognizes forests as a climate solution. However, most forest-based solutions are focused on the role that tropical forests in developing countries play in sequestering carbon, at the cost of ignoring temperate forests in developed countries. This is a double standard that needs to change.'],
    cite: ['United Nations Framework Convention on Climate Change. The Paris Agreement - main page. United Nations Framework Convention on Climate Change Available at: http://unfccc.int/paris_agreement/items/9485.php. (Accessed: 14th March 2017)'],
    tFxn: 'fcGlobalPolicy',
    cFxn: 'fcGlobalPolicyCite',
  },
  
};

var esText = {
    esBasics: {
    title: 'What are ecosystem services?',
    text: ['Ecosystem services are benefits derived from natural areas. Ecosystem services into four broad categories: provisioning, such as the production of food and water; regulating, such as the control of climate and disease; supporting, such as nutrient cycles and crop pollination; and cultural, such as spiritual and recreational benefits. '],
    cite: ['Millennium Ecosystem Assessment (2005). Available at: http://www.millenniumassessment.org/en/index.html. (Accessed: 7th March 2017)'],
    tFxn: 'esBasics',
    cFxn: 'esBasicsCite'
  },
  
  esClimateChange: {
    title: 'Ecosystem services protect us from climate change',
    text: ['rawr', 'We need ecosystem services to help protect us from the worst effects of climate change. As the frequency of extreme weather events increases (due to climate change), we need our forests to buffer the effects. Healthy forests protect us from flooding events, absorb carbon (to slow climate change), and even cool the planet.'],
    cite: ['Bright, R. M. et al. Local temperature response to land cover and management change driven by non-radiative processes. Nat. Clim. Chang. (2017). doi:10.1038/nclimate3250',
           'Narayan, S. et al. COASTAL WETLANDS AND FLOOD DAMAGE REDUCTION: Using Risk Industry -based Models to Assess Natural Defenses in the Northeastern USA. ( Lloyd’s Tercentenary Research Foundation, 2016).',
           'Depro, B. M., Murray, B. C., Alig, R. J. & Shanks, A. Public land, timber harvests, and climate mitigation: Quantifying carbon sequestration potential on U.S. public timberlands. For. Ecol. Manage. 255, 1122–1134 (2008).'],
     tFxn: 'esClimateChange',
     cFxn: 'esClimateChangeCite'
  },
  
  esCleanAir: {
    title: 'Ecosystem services give us clean air and clean water',
    text: ['Ecosystem services give us clean air and clean water. In addition to protecting us from climate change, the ecosystem services that forests provide help us lead healthier lives. Forests remove pollutants from the air that we breathe and clean the water that we drink.'],
    cite: ['Caldwell, P. et al. Quantifying the Role of National Forest System Lands in Providing Surface Drinking Water Supply for the Southern United States. General Technical Report SRS-197, 135',
           'Wear, D. N. & Greis, J. G. Southern forest resource assessment-technical report. Gen. Tech. Rep. SRS-53. Asheville, NC: US Department of Agriculture, Forest Service, Southern Research Station. 635 p. 53, (2002).',
           'Nowak, D. J., Hirabayashi, S., Bodine, A. & Greenfield, E. Tree and forest effects on air quality and human health in the United States. Environ. Pollut. 193, 119–129 (2014).',],
    tFxn: 'esCleanAir',
    cFxn: 'esCleanAirCite',
           },
  
  esSpecies: {
    title: 'Conserving species helps protect all ecosystem services',
    text: ['Conserving species helps protect all ecosystem services. We are currently suffering through the world’s fifth great extinction. Conservation is challenging because of how humans interact with each other and with the natural world. But, forests with high biodiversity (number of species) also provide many more benefits to us than those without.'],
    cite: ['Newbold, T. et al. Has land use pushed terrestrial biodiversity beyond the planetary boundary? A global assessment. Science 353, 288–291 (2016).',
           'Li, H. et al. Large numbers of vertebrates began rapid population decline in the late 19th century. Proc. Natl. Acad. Sci. U. S. A. 113, 14079–14084 (2016).',
           'Liang, J. et al. Positive biodiversity-productivity relationship predominant in global forests. Science 354, (2016).',
           'van der Plas, F. et al. Biotic homogenization can decrease landscape-scale forest multifunctionality. Proc. Natl. Acad. Sci. U. S. A. 113, 3557–3562 (2016).'],
    tFxn: 'esSpecies',
    cFxn: 'esSpeciesCite',
  },
  
  esEconBen: {
    title: 'Standing forests benefit our economic systems',
    text: ['Standing forests benefit our economic systems. Forests are not only valuable for their timber. In the US South, tourism, hunting, and recreation generate billions of dollars for the economy each year. Investing in forests also creates jobs in restoration and forest management. In some cases, it is even more cost effective to invest in natural solutions (e.g., mangroves for coastal erosion) than it is to invest in high-tech solutions.'],
    cite: ['Wear, D. N. & Greis, J. G. Southern forest resource assessment-technical report. Gen. Tech. Rep. SRS-53. Asheville, NC: US Department of Agriculture, Forest Service, Southern Research Station. 635 p. 53, (2002).',
           'BenDor, T., Lester, T. W., Livengood, A., Davis, A. & Yonavjak, L. Estimating the Size and Impact of the Ecological Restoration Economy. PLoS One 10, e0128339 (2015).',
           'Barrett, K. New California Law Recognizes Meadows, Streams As ‘Green Infrastructure’, Eligible For Public Works Funding - Ecosystem Marketplace. Ecosystem Marketplace (2016). Available at: http://www.ecosystemmarketplace.com/articles/california-peru-part-global-trend-recognizing-forests-rivers-infrastructure/. (Accessed: 7th March 2017)',
           'World Bank Partnership Releases New Guidelines for Better Valuing Natural Solutions for Coastal Protection | The Nature Conservancy. The Nature Conservancy (2016). Available at: https://www.nature.org/newsfeatures/pressreleases/world-bank-partnership-releases-new-guidelines-for-better-valuing-natural-so.xml?redirect=https-301. (Accessed: 30th March 2017)'],
    tFxn: 'esEconBen',
    cFxn: 'esEconBenCite',
  },
  
  esQualLife: {
    title: 'Forests improve our quality of life',
    text: ['Forests improve our quality of life. People who spend time in natural places experience less anxiety and reduce their stress levels. Additionally, viewing natural landscapes like urban trees can improve recovery time for surgery patients and lower the incidence of heart disease and respiratory illness in a region.'],
    cite: ['Bratman, G. N., Hamilton, J. P., Hahn, K. S., Daily, G. C. & Gross, J. J. Nature experience reduces rumination and subgenual prefrontal cortex activation. Proc. Natl. Acad. Sci. U. S. A. 112, 8567–8572 (2015).',
           'Donovan, G. H. et al. The relationship between trees and human health: evidence from the spread of the emerald ash borer. Am. J. Prev. Med. 44, 139–145 (2013).',
           'Ulrich, R. S. View through a window may influence recovery from surgery. Science 224, 420–421 (1984).'],
    tFxn: 'esQualLife',
    cFxn: 'esQualLifeCite',
  },

};


var daLinks = {
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

//START ADDING TEXT FUNCTIONS - be sure to change the function name and what's after the dot.



function esBasics(){ insertTextAtCursor(esText.esBasics.text);  }
function esBasicsCite(){ insertTextAtCursor(esText.esBasics.cite); }

function esClimateChange(){ insertTextAtCursor(esText.esClimateChange.text); }
function esClimateChangeCite(){ insertTextAtCursor(esText.esClimateChange.cite); } 

function esCleanAir(){ insertTextAtCursor(esText.esCleanAir.text); }
function esCleanAirCite(){ insertTextAtCursor(esText.esCleanAir.cite); } 

function esSpecies(){ insertTextAtCursor(esText.esSpecies); }
function esSpeciesCite(){ insertTextAtCursor(esText.esSpeciesCite); }

function esEconBen(){ insertTextAtCursor(esText.esEconBen.text); }
function esEconBenCite(){ insertTextAtCursor(esText.esEconBen.cite); }  

function esQualLife(){ insertTextAtCursor(esText.esQualLife.text); }
function esQualLifeCite(){ insertTextAtCursor(esText.esQualLife.cite); }  

function fcOldForests(){ insertTextAtCursor(fcText.fcOldForests.text); }
function fcOldForestsCite(){ insertTextAtCursor(fcText.fcOldForests.cite); }  

function fcForestsClimChange(){ insertTextAtCursor(fcText.fcForestsClimChange.text); }
function fcForestsClimChangeCite(){ insertTextAtCursor(fcText.fcForestsClimChange.cite); }  

function fcFixClimate(){ insertTextAtCursor(fcText.fcFixClimate.text); }
function fcFixClimateCite(){ insertTextAtCursor(fcText.fcFixClimate.cite); }  

function fcGlobalPolicy(){ insertTextAtCursor(fcText.fcGlobalPolicy.text); }
function fcGlobalPolicyCite(){ insertTextAtCursor(fcText.fcGlobalPolicy.cite); }  

function tgas(){ insertTextAtCursor([daLinks.gas.title]); }
function cgas(){ insertTextAtCursor([daLinks.gas.cite]); }
function lgas(){ insertLinkAtCursor(daLinks.gas.link, daLinks.gas.title); }

function tgasHistory(){ insertTextAtCursor([daLinks.gasHistory.title]); }
function cgasHistory(){ insertTextAtCursor([daLinks.gasHistory.cite]); }
function lgasHistory(){ insertLinkAtCursor(daLinks.gasHistory.link, daLinks.gasHistory.title); }

function tgasIndustry(){ insertTextAtCursor([daLinks.gasIndustry.title]); }
function cgasIndustry(){ insertTextAtCursor([daLinks.gasIndustry.cite]); }
function lgasIndustry(){ insertLinkAtCursor(daLinks.gasIndustry.link, daLinks.gasIndustry.title); }

function tgasClimatePlan(){ insertTextAtCursor([daLinks.gasClimatePlan.title]); }
function cgasClimatePlan(){ insertTextAtCursor([daLinks.gasClimatePlan.cite]); }
function lgasClimatePlan(){ insertLinkAtCursor(daLinks.gasClimatePlan.link, daLinks.gasClimatePlan.title); }

function ttreasuresSouth(){ insertTextAtCursor([daLinks.treasuresSouth.title]); }
function ctreasuresSouth(){ insertTextAtCursor([daLinks.treasuresSouth.cite]); }
function ltreasuresSouth(){ insertLinkAtCursor(daLinks.treasuresSouth.link, daLinks.treasuresSouth.title); }

function tvanishingTreasures(){ insertTextAtCursor([daLinks.vanishingTreasures.title]); }
function cvanishingTreasures(){ insertTextAtCursor([daLinks.vanishingTreasures.cite]); }
function lvanishingTreasures(){ insertLinkAtCursor(daLinks.vanishingTreasures.link, daLinks.vanishingTreasures.title); }

