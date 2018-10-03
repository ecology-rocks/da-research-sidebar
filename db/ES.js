//included citeKeys but haven't written the functionality yet.

var esText = {
    esBasics: {
    title: 'What are ecosystem services?',
    text: ['Ecosystem services are benefits derived from natural areas. Ecosystem services into four broad categories: provisioning, such as the production of food and water; regulating, such as the control of climate and disease; supporting, such as nutrient cycles and crop pollination; and cultural, such as spiritual and recreational benefits. '],
    cite: ['Millennium Ecosystem Assessment (2005). Available at: http://www.millenniumassessment.org/en/index.html. (Accessed: 7th March 2017)'],
      citeKeys: ['mea2005'],
      tFxn: 'esBasics',
    cFxn: 'esBasicsCite'
  },
  
  esClimateChange: {
    title: 'Ecosystem services protect us from climate change',
    text: ['We need ecosystem services to help protect us from the worst effects of climate change. As the frequency of extreme weather events increases (due to climate change), we need our forests to buffer the effects. Healthy forests protect us from flooding events, absorb carbon (to slow climate change), and even cool the planet.'],
    cite: ['Bright, R. M. et al. Local temperature response to land cover and management change driven by non-radiative processes. Nat. Clim. Chang. (2017). doi:10.1038/nclimate3250',
           'Narayan, S. et al. COASTAL WETLANDS AND FLOOD DAMAGE REDUCTION: Using Risk Industry -based Models to Assess Natural Defenses in the Northeastern USA. ( Lloyd’s Tercentenary Research Foundation, 2016).',
           'Depro, B. M., Murray, B. C., Alig, R. J. & Shanks, A. Public land, timber harvests, and climate mitigation: Quantifying carbon sequestration potential on U.S. public timberlands. For. Ecol. Manage. 255, 1122–1134 (2008).'],
    citeKeys: ['bright2017', 'narayan2016', 'depro2008'], 
    tFxn: 'esClimateChange',
     cFxn: 'esClimateChangeCite'
  },
  
  esCleanAir: {
    title: 'Ecosystem services give us clean air and clean water',
    text: ['Ecosystem services give us clean air and clean water. In addition to protecting us from climate change, the ecosystem services that forests provide help us lead healthier lives. Forests remove pollutants from the air that we breathe and clean the water that we drink.'],
    cite: ['Caldwell, P. et al. Quantifying the Role of National Forest System Lands in Providing Surface Drinking Water Supply for the Southern United States. General Technical Report SRS-197, 135',
           'Wear, D. N. & Greis, J. G. Southern forest resource assessment-technical report. Gen. Tech. Rep. SRS-53. Asheville, NC: US Department of Agriculture, Forest Service, Southern Research Station. 635 p. 53, (2002).',
           'Nowak, D. J., Hirabayashi, S., Bodine, A. & Greenfield, E. Tree and forest effects on air quality and human health in the United States. Environ. Pollut. 193, 119–129 (2014).',],
           citeKeys: ['caldwell2014', 'wear2002', 'nowak2014'],
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
    citeKeys: ['newbold2016', 
               'li2016', 
               'liang2016', 
               'vanderplas2016'],
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
    citeKeys: ['wear2002', 
               'bendor2015', 
               'barrett2016',
               'tnc2016'],
    tFxn: 'esEconBen',
    cFxn: 'esEconBenCite',
  },
  
  esQualLife: {
    title: 'Forests improve our quality of life',
    text: ['Forests improve our quality of life. People who spend time in natural places experience less anxiety and reduce their stress levels. Additionally, viewing natural landscapes like urban trees can improve recovery time for surgery patients and lower the incidence of heart disease and respiratory illness in a region.'],
    cite: ['Bratman, G. N., Hamilton, J. P., Hahn, K. S., Daily, G. C. & Gross, J. J. Nature experience reduces rumination and subgenual prefrontal cortex activation. Proc. Natl. Acad. Sci. U. S. A. 112, 8567–8572 (2015).',
           'Donovan, G. H. et al. The relationship between trees and human health: evidence from the spread of the emerald ash borer. Am. J. Prev. Med. 44, 139–145 (2013).',
           'Ulrich, R. S. View through a window may influence recovery from surgery. Science 224, 420–421 (1984).'],
    citeKeys: ['bratman2015', 'donovan2013', 'ulrich1984'],
    tFxn: 'esQualLife',
    cFxn: 'esQualLifeCite',
  },

};


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

