// all imported to srm

var esText = {
    esBasics: {
    title: 'What are ecosystem services?',
    text: ['Ecosystem services are benefits derived from natural areas. Ecosystem services into four broad categories: provisioning, such as the production of food and water; regulating, such as the control of climate and disease; supporting, such as nutrient cycles and crop pollination; and cultural, such as spiritual and recreational benefits. '],
      citeKeys: ['mea2005'],
  },
  
  esClimateChange: {
    title: 'Ecosystem services protect us from climate change',
    text: ['We need ecosystem services to help protect us from the worst effects of climate change. As the frequency of extreme weather events increases (due to climate change), we need our forests to buffer the effects. Healthy forests protect us from flooding events, absorb carbon (to slow climate change), and even cool the planet.'],
    citeKeys: ['bright2017', 'narayan2016', 'depro2008'], 
  },
  
  esCleanAir: {
    title: 'Ecosystem services give us clean air and clean water',
    text: ['Ecosystem services give us clean air and clean water. In addition to protecting us from climate change, the ecosystem services that forests provide help us lead healthier lives. Forests remove pollutants from the air that we breathe and clean the water that we drink.'],
           citeKeys: ['caldwell2014', 'wear2002', 'nowak2014'],
           },
  
  esSpecies: {
    title: 'Conserving species helps protect all ecosystem services',
    text: ['Conserving species helps protect all ecosystem services. We are currently suffering through the world’s fifth great extinction. Conservation is challenging because of how humans interact with each other and with the natural world. But, forests with high biodiversity (number of species) also provide many more benefits to us than those without.'],
    citeKeys: ['newbold2016', 
               'li2016', 
               'liang2016', 
               'vanderplas2016'],
  },
  
  esEconBen: {
    title: 'Standing forests benefit our economic systems',
    text: ['Standing forests benefit our economic systems. Forests are not only valuable for their timber. In the US South, tourism, hunting, and recreation generate billions of dollars for the economy each year. Investing in forests also creates jobs in restoration and forest management. In some cases, it is even more cost effective to invest in natural solutions (e.g., mangroves for coastal erosion) than it is to invest in high-tech solutions.'],
    citeKeys: ['wear2002', 
               'bendor2015', 
               'barrett2016',
               'tnc2016'],
  },
  
  esQualLife: {
    title: 'Forests improve our quality of life',
    text: ['Forests improve our quality of life. People who spend time in natural places experience less anxiety and reduce their stress levels. Additionally, viewing natural landscapes like urban trees can improve recovery time for surgery patients and lower the incidence of heart disease and respiratory illness in a region.'],
    citeKeys: ['bratman2015', 'donovan2013', 'ulrich1984'],
  },

};



var fcText = {
    fcOldForests: {
      title: 'What did forests used to look like?',
      text: ['Forests used to cover much of the terrestrial landscape, but Earth has \'lost more than half its trees\' since humans first started cutting them down. Current estimates put primary (uncut) forest at about 32% of its original extent. In the US, only about 5% of coastal redwoods, 4% of longleaf pine, and 20% of bottomland hardwood ecosystems remain from their historical extent.'],
      citeKeys: ['crowther2015', 'fao2010', 'reuters1997', 'strl2017', 'nrdc2015', 'westerhold2014'],
    },
  
  fcForestsClimChange: {
      title: 'Why do forests matter to climate change?',
      text: ['Forests are an integral part of the climate solution. Despite the primary focus on energy efficiency and reducing the dependency on fossil fuel emissions, land-use change (where forests are counted) represents a significant portion of the global carbon budget. Global forests are said to offset about 40% of manmade CO2, and southern US forests store about a third of the carbon attributed to land-use change.',
             'As a result of this impact, what we do to our forests matters. Wiping out an entire forest can have significant effects on global climate patterns and alter vegetation on the other side of the world. We have to prioritize older, intact forests because they are the best at sequestering carbon for long periods of time. It takes decades for cutover forests to offset the carbon lost, before they can begin to store additional carbon.'],    citeKeys: ['pan2011', 'wear2002', 'garcia2016', 'harmon1990', 'luyssaert2008', 'mcgarvey2015'],  
    citeKeys: ['pan2011', 'wear2002', 'garcia2016', 'harmon1990', 'luyssaert2008', 'mcgarvey2015'],
  },
  
  fcFixClimate: {
    title: 'How do we fix the climate crisis?',
    text: ['Unfortunately, our forests are currently very young and fragmented. This means that there is great opportunity for restoration and afforestation. Several studies have found that allowing trees to mature could put billions of metric tons of carbon into the earth instead of into the atmosphere.'],
    citeKeys: ['heilman2002', 'houghton2015', 'depro2008'],
  },
  
  fcGlobalPolicy: {
    title: 'What are global policies on forests and climate?',
    text: ['Although policies initially focused on fossil fuel reductions, in recent years there has been interest in using forests for their carbon benefits. The UN Paris Agreement, which calls for limiting warming to only 1.5 degrees C, explicitly recognizes forests as a climate solution. However, most forest-based solutions are focused on the role that tropical forests in developing countries play in sequestering carbon, at the cost of ignoring temperate forests in developed countries. This is a double standard that needs to change.'],
    citeKeys: ['unfccc2017'],
  },
  
};


var esrText = {
  
  PROPERTIES: {
    citeKey: 'davis2018',
  },
  
  whereWF: {
    title: 'Where Are Wetland Forests?', 
    text: ['Stretching from the historic Chesapeake Bay, along the coastline of the Atlantic; across the Gulf into the mysterious bayou swamps of Louisiana; to eastern Texas and up the Mississippi, wetland forests are a valuable, yet vulnerable national treasure. Up to 80% of wetland forests in the South have disappeared. '],
  },
  whyWF: {
    title: 'Why Are Wetland Forests Important?',
    text: ['35 million acres of wetland forests (an area the size of New York) provide valuable ecosystem services for people living in the U.S. South, including: ', 
           'Protection from extreme weather events', 
           'Recreation, tourism, and aesthetics',
           'Water filtration and waste treatment',
           'Food and pollination',
           'Regulating services, including regional climate regulation',
           'Raw materials, like timber',],
           },
  worthWF: {
    title: 'How Much Are Wetland Forests Worth?', 
    text: ['Wetland forest ecosystem services are worth more than $500 billion. But wetland forests are under threat from logging and development. If we protected an additional 13 million acres of wetland forests and logged in a more ecologically friendly way, we could increase their ecosystem service value to almost $550 billion. '],
    image: 'https://i.imgur.com/24gV0IK.jpg',
  },
  logWF: {
    title: 'Logging Wetland Forests Is A Waste', 
    text: ['The ecosystem service value of an intensively managed wetland forest is just $1,200 per acre. But wetland forests left alone are worth over $18,600 per acre. By shifting the focus of management from timber production to native ecosystem health, wetland forests increase in value over fifteen times. '],
    image: 'https://i.imgur.com/ROE3VK4.jpg', 
  },
  natdisWF: {
    title: 'Wetland Forests Reduce The Impacts Of Natural Disasters',
    text: ['Each year, hurricanes ravage the U.S. South. By the time recovery efforts are complete for 2017’s hurricanes Harvey and Irma, each are expected to cost over $100 billion in damages. Luckily, scientists have found that wetland forests quickly absorb and slow more water than pavement or lawns during floods.'],
  },
  coolWF: {
    title: 'Wetland Forests Cool The Region',
    text: ['Southern wetland forests are some of the most carbon rich ecosystems in the U.S.. Without this carbon storage, the impacts of climate change would be even more severe. Wetland forests also improve regional climate, because forests maintain a cooler temperature than non-forested landscapes. '],
  },
  nativeWF: {
    title: 'Wetland Forests Support Native Species',
    text: ['Fewer than 10% of wetland forests in the U.S. South are currently protected from logging, agriculture, and development. Wetland forests house many rare species, including the Louisiana black bear, hellbenders, and swallow-tailed kites. Some of the region was even designated a global biodiversity hotspot in 2016.'],
  },
  playWF: {
    title: 'Wetland Forests: Where People Go To Play', 
    text: ['In 2011, 25 million people in the U.S. South went out to observe nature and wildlife.  Fifteen million people hunted or fished. These activities contributed $48 billion to the states’ economies. Wetland forests are an important ecosystem for hunters, fishers, boaters, and photographers to enjoy the outdoors.'],
           },
  restoreWF: {
    title: 'Wetland Forests Are Part Of The Restoration Economy', 
    text: ['The forest products industry is sensitive to booms and busts of the global economy. In just five years (2004-2009), the South lost 20% of forest product industry jobs, mostly due to automation. As the industry continues to decline, states could redirect those skilled workers to restoration, management, and ecotourism jobs.'],
  },
    globalWF: {
      title: 'Southern Wetland Forests On The Global Stage', 
      text: ['The U.S. South is among the most biodiverse areas on the planet. This immense biodiversity brings international visitors to our national parks. With dedicated conservation efforts, Southern wetland forests have the potential to draw more visitors and improve the economy. ',
             'Standing forests are the only proven terrestrial system that can store vast amounts of carbon at the scale necessary to keep global temperature rise below 1.5 oC. Protecting wetland forests ensures that carbon remains safely stored in the forest while removing more from the atmosphere each year. '],
    },
  
  
};



//not in main menu options
var ahofText =  {
  PROPERTIES: {
    citeKey: 'davis2018a',
  },
  intro: {
    title: 'Introduction', 
    text: ['Our Southern forests are some of the most biodiverse in the world. They provide aesthetics, tourism, recreation, water filtration, waste treatment, regional climate regulation, and protection from extreme events. Yet we are rapidly degrading and losing our natural Southern forests, putting untold species and benefits at risk. How did we get here?',
           'Colonization and Forest Destruction: 1630-1920', 
           'In the 1600s, there were more than a billion acres of natural forest in the continental United States, with roughly a third of those acres in the US South. Colonization and settlement, followed by rapid extraction of natural resources, destroyed over a hundred million acres of Southern forests and released massive amounts of carbon into the atmosphere in less than a hundred years. ',
           'Industrializing Our Forests: 1920-1953', 
           'Facing a devastated landscape, the fledgling US Forest Service needed to learn how to grow straight “merchantable” trees quickly. By selecting the fastest growing trees to reproduce, the Forest Service transformed the science of growing trees in the United States in just a few short decades. However, growing trees is very different from growing forests, and continuous demand for forest products has led to growing plantations instead of forests. ',
           'Commercializing Our Forests: 1953-Present',
           'Since 1953, the government has used various programs to pay landowners to plant pine instead of allowing natural forests to grow. We’ve transformed our economy to be reliant on extracting resources from our forests, instead of being reliant on our healthy natural forests to provide clean water, protection from storms, and a safe place to recreate. As a result, we’ve lost over 35 million acres of natural forest and gained over 40 million acres of pine plantation instead. ', 
           'Southern forests have been logged at four times the rate of South American rainforests. Natural forests give us significantly more value in fresh water, clean air, climate regulation, and wildlife habitats than plantations do. We have robbed future generations of healthy, natural forests for the convenience of disposable wood products.'],
    image: 'https://i.imgur.com/Qo4ZPYG.jpg',
  },
  canopyCover: {
    title: 'What Makes A Forest Depends On Who You Ask', 
    text: ['Industry—and the US Forest Service—would have you believe that a forest is "an area at minimum 120 ft wide, 1 acre minimum area, with at least 10% canopy cover" (canopy cover meaning that if you look up at the sky, 10% of it is covered by trees). Does that sound like a forest to you? There\'s a reason that the Forest Service is under the jurisdiction of the US Department of Agriculture: they view forests as a crop, a commodity to harvest. To make it even worse, when a forest is clear-cut, it is still considered “forestland” on paper, because they assume that someday it will grow back.',
      'There is a world of difference between a plantation and a forest. Plantations are composed of only one tree species, and as a result, are often reliant on human intervention (like insecticide) to control pests. The "goal" of a plantation is to grow trees and make money.',
      'In contrast, the "goal" of a forest is to support and sustain life. Forests have many tree species, herbs, insects, animals, and microbes that rely on each other to survive. Forests provide fresh water, clean air, food, climate regulation, and habitat for many species of plants, animals, and microbes. Forests give us a place to rest and experience the wonder of the natural world. Memories are not made in plantations. They are made by bird watching, hunting, and playing in forests.',],
    image: 'https://i.imgur.com/3Q9QwD2.jpg',
      },
      
  naturalForests: {
    title: 'Natural Forest Or Plantation?', 
    text: ['Because anything with trees is considered a forest, the government paid landowners in the 20th century to plant pine instead of allowing natural forests to regrow. We\'ve lost 33 million acres of natural forest, and gained 40 million acres of pine plantations in the US South.  As a result, we have more plantations and less true natural forest than ever before. This has compromised forests\' ability to provide natural air conditioning, flood control, and fresh drinking water.',],
    image: 'https://i.imgur.com/Cltso7o.jpg',
  },
  younger: {
    title: 'Our Forests Are Getting Younger',
    text: ['Healthy, natural forests support biodiversity, store carbon, and clean our air and water. The older our forests are, the more benefits they can provide, but they can also be harvested in just 30-40 years to make lumber, paper, or other wood products. In the US South, more than half of our forests are less than forty years old, and many are degraded as a result of constant logging without proper regeneration. Southern forests are logged at a rate four times that of South American rainforests and face the highest rate of disturbance in the world.',
           'If our forests were just left alone, they could continue storing carbon and removing it from the atmosphere, cleaning air, and providing fresh drinking water. They could house our many native species of plants and wildlife. They could provide recreation opportunities to children and adults alike. We risk all of these benefits by putting forest products before people. '],
    image: 'https://i.imgur.com/BqMyrif.jpg', 
  },
  morethanwood: {
    title: 'Our Forests Are More Than Wood', 
    text: ['The forest product industry and our government would have you believe that forests are flourishing. They frequently mislead the public with graphs that do not show the loss of natural forest, the loss of old growth forest, or the loss of carbon resulting from industrial logging. Nor do they show the conversion of natural forest to pine plantations.',
           'If we continue to excessively log our forests, we will lose out on a vast array of ecosystem services that forests provide, like fresh drinking water, clean air, regional climate control, and habitat for wildlife. ',
           'Standing forests are our best defense against climate change. They are critical for clean water and clean air. Forests support our food system and protect our communities from natural disasters, like flooding. Unfortunately, our current economic system favors forest destruction over forest protection. Together, we can make a change. ',],
           },
};

           
           
           
var iiText = {
  PROPERTIES: {
    citeKey: 'davis2018b',
  },
           
           
  intro: {
    title: 'The Lasting Footprint of Forest Destruction',
    text: [
           'Climate change is happening because we are releasing more and more greenhouse gases, like carbon dioxide, into the atmosphere each year. These emissions are well past a sustainable level that our atmosphere can handle. The carbon pollution comes from burning fossil fuels like oil and gas as well as deforestation and degradation. Every time a tree is chopped down, valuable carbon stocks are lost. We can think of forests, like oceans, as our carbon dioxide banks. When we cut down trees, it is like we are withdrawing from that carbon account. We\'ve been overdrawing that account for quite a while.',
           'In the 1600s, there were over a billion acres of forest in the continental United States, with roughly a third of those acres in the US South. Colonization and settlement, followed by rapid extraction of natural resources, destroyed over a hundred million acres of forests in the US South in less than 100 years. In essence, we were overdrawing our carbon account and emitting carbon into the atmosphere instead of storing it in our forests.',
           'Sometimes, reports and websites will claim that forests are “offsetting” fossil fuel emissions by absorbing carbon every year. Although they are, indeed, sequestering and storing carbon, our forests and our climate are hamstrung by pre-existing carbon debt from the 1700s into the 1900s. We just haven’t made up for all of those emissions! ',
          ],
   },
  
  fcInfo: {
    title: 'Forest Carbon Balance',
    text: ['The graph shows that from just after 1700 to the mid-1900s, our forests were actually emitting carbon into the atmosphere (when the line is above zero), not storing it in our forests (when the line is below zero). We’ve got a long way to go before we make up for all of those emissions!'],
    image: 'https://i.imgur.com/La5In9H.jpg',
  },
  
  turnover: {
    title: 'Forest Turnover in the United States',
    text: [
      'Landowners don\'t plant pine to get healthy, mature forests. They plant pine because it grows quickly and can be harvested in just 20-30 years to make lumber, paper, wood pellets, or other forest products. In the South, over half of our forests are less than 40 years old. Our forests are harvested at a rate four times that of South American rainforests. ',
      'If our forests were left alone, they could continue to house our many native species of plants and animals, and they could provide recreation opportunities to children and adults alike. They could continue to store carbon, clean air, and provide fresh drinking water. Given the implications of climate change, we desperately need to leave our forests standing for carbon sequestration.', 
      ],
    image: 'https://i.imgur.com/45SJkpq.jpg',
  },
  
      carbonStocks: {
      title: 'Short and Long Term Carbon Stocks',
      text: [
      'Forests store carbon by absorbing carbon dioxide from the atmosphere and using the carbon to build trunks, limbs, and roots. When forests are left standing, their “carbon stocks” can go undisturbed for generations, but when forests are cut to make products like lumber, paper, and pellets, they become a “carbon source” -- releasing carbon into the atmosphere. ',
      'Some reports say that carbon stocks are growing in the US. This is because reports like these rely on both long-term carbon stocks (standing forests) and short-term carbon stocks like wood products and tree plantations. The problem with combining short- and long-term carbon stocks is that short-term carbon stocks are released into the atmosphere within 100 years, which could accelerate climate change instead of reduce its impacts.',
      ],
  },
  
  hundredYears: {
    title: 'Carbon Emissions at 100 years', 
    text: [
      'In the beginning, 100% of the forests’ carbon is stored safely in trunks, limbs, leaves, and the soil. Carbon storage in forests helps prevent catastrophic climate change.',
      '100 years after a clearcut, only 13% of the carbon is left in wood/paper products, and 1% is left in landfills. The remaining 86% of carbon previously stored in forest is now in the atmosphere. ', 
      ],
    image: 'https://i.imgur.com/Xb8M3gK.jpg',
      },
      
      emissions: {
      title: 'Emissions from US Forests',
      text: [
      'Countries report carbon dioxide stocks and emissions in several ways. In the US, carbon stocks and sources in forests are reported together (as a net calculation), while other sources of emissions are reported separately.', 
      'As a result, carbon dioxide emissions from logging are not measured or reported the same as other sources of emissions. Instead, all forest emissions are essentially reported as “offset” by annual forest growth, masking critical information necessary to inform climate policy.',
      'When we look closely at the data, logging accounts for 85% of emissions from US forests, more than five times the emissions from conversion, fire, wind, insects, and tree mortality combined. Additionally, logging is diminishing the potential forest carbon sink by at least 35%. ',
      ],
    image: 'https://i.imgur.com/VgruvP0.jpg',
  },
    morethanwood: {
    title: 'Our Forests Are More Than Wood', 
    text: ['The forest product industry and our government would have you believe that forests are flourishing. They frequently mislead the public with graphs that do not show the loss of natural forest, the loss of old growth forest, or the loss of carbon resulting from industrial logging. Nor do they show the conversion of natural forest to pine plantations.',
           'If we continue to excessively log our forests, we will lose out on a vast array of ecosystem services that forests provide, like fresh drinking water, clean air, regional climate control, and habitat for wildlife. ',
           'Standing forests are our best defense against climate change. They are critical for clean water and clean air. Forests support our food system and protect our communities from natural disasters, like flooding. Unfortunately, our current economic system favors forest destruction over forest protection. Together, we can make a change. ',],
           },
         
  };

           var tcpText = {
           
           PROPERTIES: {
           citeKey: 'davis2018c',
           },
           
           intro: {
           title: 'Seeing The Forest: Nature\'s Solution To Climate Change',
           text: ['Climate change is the number one threat facing the world today. To protect our communities and our livelihoods, we need to address the problem before it is too late. Scientists agree that we must reduce the amount of carbon dioxide being emitted into the atmosphere immediately.',
           'If we stop deforestation, protect and restore degraded forests, and expand forests, we could reduce annual emissions by 75% in the next fifty years. If we also phase out fossil fuels, we could easily meet the goals of the Paris Agreement and avoid catastrophic climate change. These goals are lofty, but not unattainable, especially if the world unites for a common vision of keeping climate change at just 1.5 degrees Celsius. ',
           'We cannot solve the climate crisis without our forests. Forests are one of the best ways we have to keep carbon out of the atmosphere because each year, especially older trees, because they absorb carbon and store it in their roots, leaves, and wood. We need to improve, restore, and protect our forests across the planet.'
          ],
    }, 
      mapGraphic: {
        title: 'Climate change will impact the South', 
        text: ['Climate change will impact the US South more than other areas in the country. This map shows the predicted damage, 2080 to 2099, from climate change in the United States, as a percent of county GDP per year. These impacts are already happening today.'],
        image: 'https://i.imgur.com/RRAjaVR.jpg',
      },
      
  degradation: {
    title: 'Dangerous Degradation', 
    text: [
      'Many benefits that healthy, standing forests provide are invisible from day to day. Healthy forests give us clean air, clean water, and protection from storms. Forest degradation occurs across our landscape for development, agriculture, and logging for wood products . This landscape-wide phenomenon results in more carbon emitted into the atmosphere instead of being absorbed by our forests. ',
      'The US South is a hotspot for forest degradation. Although it has just two percent of the world’s forest cover, the US South produces nearly 20% of the world’s pulp and paper and 12% of its other wood products. The constant logging occurs at a rate four times higher than what occurs in South American rainforests.',
      'In contrast, if we were able to halt deforestation and degradation in its tracks, we could prevent those carbon emissions from making their way into the atmosphere. By stopping forest degradation, we could put a significant dent in mitigating impacts of climate change and preventing the worst impacts from occurring in the next thirty years. ',
      ],
      image: 'https://i.imgur.com/jtCXT6u.png',
      },
      emissions: {
      title: 'Emissions from US Forests', 
      text: [
      'When forests are logged, much of the carbon that was stored is released. The US government does not currently report emissions from logging. Scientists that have calculated these emissions have found these emissions to be significant.',
      'When we look closely at the data, logging accounts for 85% of emissions from US forests, more than five times the emissions from conversion, fire, wind, insects, and tree mortality combined. Additionally, logging is diminishing the potential forest carbon sink by at least 35%. ',
      'Though the EPA does not report emissions from logging in its annual greenhouse gases inventory, carbon emissions from logging from 2006 to 2010 averaged 162 +/- 10 Tg/year, an amount greater than fossil fuel emissions from the residential and commercial sectors combined as reported in the latest EPA Greenhouse Gas Inventory Report: 1990-2014.',
      ],
    image: 'https://i.imgur.com/VgruvP0.jpg',
      },
  bigTrees: {
    title: 'Big Trees Matter',
    text: [
      'Forests spend their entire lives absorbing carbon dioxide from the atmosphere and producing oxygen. A single mature tree can sequester up to 48 lbs of carbon per year. As a result, old, natural forests are one of our best defenses against the damaging impacts of climate change. Unfortunately, though trees can live for hundreds, even thousands of years, less than 10% of trees in the US South are older than 80 years.',
      'Recent studies show that old trees have an especially important role to play. When there are more big trees, more carbon is being pulled out of the atmosphere and stored safely in trunks, limbs, and soil. In fact, the largest 1% of trees contribute half of the forest biomass in the world. Given all of these benefits, it is a no-brainer to protect existing forests and allow forests  to mature and soak up excess carbon from the atmosphere. ',
      ],
      image: 'https://i.imgur.com/6OqWVeM.jpg',
        
  },
      solveClimate: {
      title: 'Solving the Climate Change Crisis', 
      text: [
      'The climate crisis is not insurmountable. We already have an accounting system that tells us how much extra carbon is entering the atmosphere. By current calculations, we are releasing about nine billion metric tons of carbon into the atmosphere each year, and our oceans and forests store about five billion metric tons of that carbon each year.',
            ],
    image: 'https://i.imgur.com/bqExS37.jpg',
  },
  gettingZero: {
    title: 'Getting To Zero',
    text: ['There are a few global solutions to reduce our carbon emissions and stop the worst effects of climate change that are already happening. Although we must reduce the world’s reliance on fossil fuels, that alone is not enough to stop climate change. We must also rely on our existing forests, wetlands, and other natural landscapes to combat the worst carbon emissions and perhaps even get them down to zero. Here’s how.',
      'First, we stop degradation and deforestation. This is a worldwide effort, with a potential payoff of just over one billion metric tons of carbon being absorbed out of the atmosphere. Next, we look to the positive, and we restore and reforest our degraded natural areas. By this, of course, we mean natural reforestation -- not planting industrial pine plantations or non-native species such as eucalyptus. Any reforestation that occurs needs to be permanent and focused on replenishing  natural, old-growth . Diverse, old natural forests also provide many times more value in ecosystem services like wildlife habitat, clean water, and clean air. These reasonable restoration and reforestation efforts could bring us nearly two billion metric tons of carbon closer to our net zero goal and need for “negative emissions” to halt climate change.',
          ],
           image: 'https://i.imgur.com/fDT6IVj.jpg', 
           },
           
           combined: {
           title: 'Full Infographic',
           text: ['Use text from above.'],
    image: 'https://i.imgur.com/DdEOM3h.jpg',
  },
          

           };