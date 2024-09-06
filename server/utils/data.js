const titles =[
    'Begining',
    'Scanned for planets in Orion star system',
    'Aries init',
    'Aries Scanned',
    'Aries Proceed w/ Caution',
    'Aries outpost discovered',
    'Aries a close encounter',
    'Aries cloaked',
    'Resolve Act Aries',
    'Hydropolis Init',
    'Hydropolis Evidence Scan',
    'Hydropolis Investigate shimmer',
    'Hydropolis board vessel',
    'Hydropolis Proceed with flashlight',
    'Hydropolis Restrain Infected Crewmember',
    'Crew member breaks restraints',
    'Fight Crewmember',
    'Resolve Act Hydropolis',
    'Elysium init',
    'Talk with Elysium crew',
    'Destroy Cosmic Heart',

]
//===============================event text data====================================
const e1Text=`You and your crew are docked at the Kronos Station, stocking up on provisions and making minor ship repairs and adjustments from your last assignment. You are looking at the navigation interface to plot your next course when you hear:

"Captain, incoming message from Terra Prime."

You tell the computer to patch you through to the transmission. You snap to attention as you realize that this transmission is from the Armada Commander themselves. The Commander confirms information that you had only heard whispers of: Terra Prime had discovered a technology that would allow humanity to terraform planets. However, they lost track of the vessel carrying the device, known as the Elysium, and any attempts to reestablish contact with it have been in vain. The last received transmission came from somewhere within the Orian star system and read only: "Reflect on one's ambitions."

You and your crew have been ordered to locate the source of the transmission and investigate the strange disappearance. The fate of humanity and the universe at large could depend on your success or failure.

How will you proceed?

 `;

const e2Text =`
You direct the computer to scan for planets in the Orian star system that the Elysium might have visited based on their mission details. The results are as follows:

Planet Theta is a barren world orbiting a dying sun. The computer analysis concludes that this planet would not be a suitable candidate for Elysium's terraforming tests due to the conditions of its star.

Planet Aries, named for its similarities to Mars, which orbits the star Sol, has a thin but present atmosphere, a possibility of some form of water, and is within the habitable zone of its star. The computer analysis suggests a high likelihood that Elysium visited this planet for a terraforming attempt.

What would you like to do?`;

const e3Text =`You and your crew make a successful landing on the planet Aries. Although this would be considered routine, you and your crew take a brief moment to praise one another. After the various missions your crew has been on, you have come to realize that nothing is absolute in this profession. You and your crew suit up, open the airlock, and take your first steps onto Aries.

How will you proceed?

`;

const eventTexts=
[
e1Text,
e2Text,
e3Text,
];


//===============================Choice Data======================================

//===============================begining Choice data============================= 
const beginingC1 ='Jump to System';
const beginingC2 ='Scan for planets in Orian system';
const beginingC3 ='resign position this isnt what you signed up for';
const beginingC4 ='Go rogue the allure of the  frontier is too great!';

//==================================Scan planets choice data========================
const planetA = "Travel to planet Theta";
const planetB = "Travel to planet Aries";

//================================= Aries Init Choice Data==========================
const ariesInitC1 ="Scan and Assess your surroundings";
const ariesinitC2 ="Throw caution to the wind Elysium is just a rumor as far as anyone else knows right?";
const ariesinitC3 ="return to orbit you dont notice anything initially.";


//=================================
/*begining

  text: brief of mission from command.......
  last known position of Elysieum is the Orian Star system 
   choices: [ Jump to system, Scan for planets in Orian system, resign post, go rogue
   
   Scanned planets
   
   text: ... upon preforming a scan of the Orian Star system you are given this data: 
        planetA: is a barren planet orbiting a dying sun( not a good canidate for Elysium to test terraforming would be a waste of resources)
    
        Planet Aries: Named so due to its similarities to the planet mars which orbits the star sol,  thin but present atmosphere, possiblilty of some form of water and in the habitable zone
    there is a good chance Elysiem would have visited this planet to attempt terraforming.
    
    there were other celestial bodies in the scan but were not in the habitable zone of thier respective star systems.
    
    choices[jump to planet A, Jump to planet Aries]
    
    */