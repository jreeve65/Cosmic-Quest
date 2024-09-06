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

const e1Text="You and your crew are docked at a the kronos station stocking up on provisions and making some minor ship repairs and adjustments from your last assignment. you are looking at the navigation interface to plot your next course when you hear: Captian Incoming message from Terra Prime.  You tell the computer to patch you through to the transmssion.  you snap to attention as you relize that this transmission comes from the Armada Commander themselves. The Commander confirms information that you had only heard whispers of, Terra Prime had discovered a technology that would allow humanity to terraform planets.  However, they lost track of the vessel carrying the device, The Elysium as it was called, and any attempts to reestablish contact with them has been in vain.  The last recieved transmission came from somewhere within the orian star system reading only : reflect on ones ambitions. You and your crew have hereby been ordered to locate the the source of the transmission and investigate the strange disappearence. The fate of the humanity and the universe at large could depend on you success or failure.  How will you proceed? ";

const e2Text ="You decide to direct the computer to scan for planets in Orian star system that may have visited based off of the details of thier assigned mission that you recieved from command and are given these results : Planet Theta is a barren planet orbiting a dying sun computer analysis concludes that this planet would not be a good canidate for Elysium to test terraforming due to conditions relating to its star.  Planet Aries: Named so due to its similarities to the planet mars which orbits the star sol,  thin but present atmosphere, possiblilty of some form of water and in the habitable zone. The computer Analysis shows there is a good chance Elysium would have visited this planet to attempt terraforming.";


const eventTexts=
[
e1Text,
e2Text,
];

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