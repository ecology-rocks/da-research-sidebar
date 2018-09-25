

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


function fcOldForests(){ insertTextAtCursor(fcText.fcOldForests.text); }
function fcOldForestsCite(){ insertTextAtCursor(fcText.fcOldForests.cite); }  

function fcForestsClimChange(){ insertTextAtCursor(fcText.fcForestsClimChange.text); }
function fcForestsClimChangeCite(){ insertTextAtCursor(fcText.fcForestsClimChange.cite); }  

function fcFixClimate(){ insertTextAtCursor(fcText.fcFixClimate.text); }
function fcFixClimateCite(){ insertTextAtCursor(fcText.fcFixClimate.cite); }  

function fcGlobalPolicy(){ insertTextAtCursor(fcText.fcGlobalPolicy.text); }
function fcGlobalPolicyCite(){ insertTextAtCursor(fcText.fcGlobalPolicy.cite); }  
