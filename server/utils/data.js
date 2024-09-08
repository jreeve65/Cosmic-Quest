const titles =[
    'event1',
    'event2',
    'event3',
    'event4',
    'event5',
    'event6',
    'event7',
    'event8',
    'event9',
    'event10',
    'event11',
    'event12',
    'event13',
    'event14',
    'event15',
    'event16',
    'event17',
    'event18',
    'event19',
    'event20',
    'event21',
    'event22',
    'event23',
    'ending event',

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
How will you proceed?`;

const e4Text=`You and your crew swiftly initiate a scan of the planet and assess your surroundings. The results reveal unmistakable signs that others have been here before you—disturbed terrain and traces of recent activity indicate that you are not the only ones searching for the Elysium. Moreover, your tracking systems pick up on the presence of another ship in the area, suggesting that there are competing interests at play. With this in mind, you and your crew take precautionary measures, preparing your equipment and bracing yourselves for potential encounters. Navigating the rugged terrain, you eventually reach a hill that offers a strategic view of the surrounding landscape. From this vantage point, you spot a group of individuals in the distance, clearly a species with whom Earth has strained relations. The sight of them raises immediate concerns: a direct confrontation would likely be unwise, given the formidable nature of this species and the unfavorable odds. Faced with this new threat, you must carefully consider your next move, balancing the pursuit of your mission with the necessity of avoiding a potentially disastrous engagement. How will you proceed?`;

const e5Text=`As you crouch behind a cluster of rocks, you carefully observe the camp under the bright midday sun, doing your best to remain out of sight. The other species move about with a sense of urgency, their activities revealing little but the apparent focus of their mission. You wait patiently, hoping to glean useful information. After some time, the main party sets off on a scouting mission, leaving behind only a few guards. Seizing this opportunity, you attempt to edge closer to the camp, each step calculated to avoid detection. However, your careful approach is interrupted when you accidentally step on a twig, the sharp crack echoing across the open terrain. One of the guards immediately turns, their eyes scanning the area for any sign of intruders. With the risk of discovery now palpable, you must swiftly decide what to do next. How do you Proceed?`;

const e6Text=`As the guard’s head swivels in your direction, you remain utterly still, activating your cloaking device in a desperate bid to blend into your surroundings. The device hums softly, and the guard's gaze momentarily falters as the noise of the snapping twig fades from his awareness. He eventually turns away, his attention shifting to another part of the camp. Seizing the moment, you slip into the camp, your movements cautious and precise.
Inside, you discover a stack of documents that appear to have been salvaged from the very ship you are pursuing. The papers are covered in intricate alien script, and it’s clear from the surrounding notes that previous attempts to translate them have been unsuccessful. Relief washes over you as you remember the translator device you have on board. This tool could unlock the critical information hidden in the documents and potentially advance your mission. How do you Proceed?`;
const e7Text=`Without touching the documents, you use your portable camera to take high-resolution pictures of the pages. You then craft a plausible but false translation that suggests the wrong coordinates, intending to mislead the other group and throw them off your trail.
With the fabricated translation set and the documents left undisturbed, you retreat to a safe distance. Back at your ship, you input the captured images into your onboard translator. After processing, the device reveals that the documents contain crucial information pointing to a new location: Planet Hydropolis. Armed with this new intelligence, how do you proceed?`;

const e8Text=`You chart a course for Hydropolis, confident that it will lead you closer to your quarry while ensuring that the competing group remains misled by your deceptive translation. Now that you have arrived at the planet hydropolis what will you do?`;

const e9Text=`You initiate a thorough scan of its surface to assess the environment before making any landing decisions. The results are soon displayed on your console, revealing that the entire planet is covered by a vast expanse of liquid. The scan details show that this liquid has highly corrosive properties, posing a significant risk to both your ship and any equipment you might bring into direct contact with it. The corrosive nature of the liquid suggests that any contact could lead to rapid degradation and potential damage.
You carefully review the scan data, noting the need for extreme caution. The corrosive environment means that landing directly on the planet's surface could jeopardize your mission and equipment. Sending probes would prove risky but you would avoid putting your crews lives at risk.  You present these options to the crew.  What do you decide?`;

const e10Text=`After a thorough discussion with your crew and analyzing the data with the ship’s computer, you reach a unanimous decision: indirect methods, such as deploying probes, will not provide the conclusive results needed to verify whether the Elysium was or is currently on Hydropolis. The corrosive nature of the planet’s liquid makes it clear that you must take the risk of a direct entry to confirm the presence of the Elysium. With this decision made, you turn your attention to preparing for the hazardous venture.
You and your crew work quickly to reinforce the hull of your ship, employing innovative modifications with the equipment available on board. These enhancements are designed to shield the vessel from the corrosive effects of the liquid while ensuring minimal damage during the exploration. With the ship fortified and ready, you begin your descent into the dark, murky depths of Hydropolis. As you penetrate the planet's atmosphere, the visibility is nearly nonexistent, and the darkness is unsettling. You can’t shake the eerie feeling that you’re being watched, as fleeting shadows seem to dart in the periphery of your vision. The oppressive gloom and the sense of unseen movement heighten your crew’s tension as you continue your descent, determined to uncover the truth despite the ominous signs surrounding you.  How do you Proceed?`;

const e11Text=`Steering the ship deeper into the corrosive depths of Hydropolis, you navigate through the oppressive, murky liquid, the vessel’s hull creaking under the relentless pressure. The reinforced structure withstands the strain, though internal alarms persistently flash warnings of minor breaches as the liquid continues its corrosive assault. Every second is fraught with tension as you push forward, determined to uncover what lies beneath the surface.
Suddenly, amidst the inky darkness, a faint shimmer catches your eye. The glimmer intensifies as you approach, revealing a submerged craft that appears to be a shuttle or landing vehicle used by the Elysium’s crew for planetary transport. The shadows in the surrounding liquid seem to pulse and shift menacingly, creating an unsettling spectacle that heightens the sense of danger. The shuttle’s presence confirms that you are in the right place, but the sight of it, combined with the foreboding darkness and the relentless corrosive environment, underscores the perilous nature of your mission. You must now consider your next steps with utmost caution, balancing the urgency of your discovery against the ongoing threats to your vessel and crew. How do you proceed?`;

const e12Text=`With the submerged shuttle now clearly visible and your goal in sight, you prepare for the next critical step of your mission. Carefully maneuvering your ship into position, you align the airlock of your vessel with the door of the submerged craft. The process is painstaking but crucial; any misalignment could compromise the integrity of the airlock seals or expose your crew to the hazardous liquid.
Once the alignment is confirmed, you initiate the airlock sequence, and the door of your ship opens with a slow, deliberate hiss. The airlock connects seamlessly with the shuttle's door, creating a stable bridge between the two crafts. As you push the door open, an unsettling darkness greets you from within. The interior of the shuttle is shrouded in an impenetrable blackness, obscuring any details and making it difficult to gauge the state of the craft or its potential contents. The oppressive silence adds to the tension, amplifying the sense of uncertainty about what—if anything—awaits inside. You brace yourself and your crew for what might lie within this forsaken vessel, hoping to find survivors, crucial artifacts, or perhaps even the cosmic heart that could be salvaged for your mission. What will you do?`;

const e13Text=`Stepping cautiously into the dimly lit airlock, you switch on your flashlight, its beam cutting through the oppressive darkness within the shuttle. The light reveals the interior, where shadows play across the walls and surfaces coated in a thick layer of dust. The initial inspection shows that the main compartment appears to be an empty pod, its seats and controls abandoned and untouched.
Determined to uncover more, you press deeper into the shuttle. Turning to the left, you notice the accumulation of dust and cobwebs, evidence that the vessel has been dormant for an extended period. The layers of grime suggest that no one has been here for a long time, reinforcing the eerie sense of abandonment. As you move forward, your flashlight illuminates various compartments and storage areas, each revealing more signs of neglect. The silence is palpable, and the stale air feels heavy with the weight of years of disuse. Every creak and groan of the shuttle seems amplified, heightening your senses as you continue to search for any signs of life, valuable artifacts, or clues about the Elysium's operations. What will you do?`;

const e14Text=`Determined to uncover more about the abandoned shuttle, you press forward, your flashlight cutting through the persistent darkness. As you delve deeper into the craft, you examine various compartments and storage units, hoping to gather useful information or perhaps find clues about the Elysium. The air is thick with the musty odor of disuse, and the dust settles heavily on every surface.
Suddenly, a movement catches your eye—a figure slumped in one of the seats, partially obscured by shadows and covered in a strange, slimy substance. Startled, you direct your flashlight towards the figure, and as the beam hits his face, the man’s eyes snap open. His expression is one of confusion and distress, and he begins to mumble incoherently, clearly disoriented. As you listen more closely, you notice that his mutterings, though chaotic, include fragmented phrases that seem oddly significant: “hidden depths,” “ancient beacon,” and “cosmic heart.”
Despite his erratic behavior, these cryptic clues suggest he may be referencing the location of the Elysium or the cosmic heart. His wild, desperate swings and the erratic nature of his transformation only add to the urgency of deciphering his ramblings. Each time his mutated hands scrape the metal walls, the sound reverberates with an unsettling rhythm, as if his torment is somehow linked to the puzzle you’re trying to solve. As you carefully consider his cryptic mutterings, you realize they could be a crucial key to locating the Elysium and the cosmic heart, adding a layer of urgency to your mission as you navigate this perilous situation. What will you do?`;

const e15Text=`As you and your crew restrain the man, his frantic mutterings begin to form a clearer picture. His incoherent babbling reveals that the cosmic heart is not on Hydropolis but hidden in a distant star system. He describes how the Elysium was repurposed to protect the heart, which was intended for use as a weapon of mass destruction. His horrifying transformation, he explains, resulted from his failed attempt to weaponize the heart.
Suddenly, in the middle of his ramblings, he notices a lapse in your crew’s grip. With a burst of unexpected energy, he lunges forward and bites one of your crew members, drawing blood. The sudden and painful attack catches both you and the crew member by surprise, causing you to momentarily loosen your hold. Seizing the opportunity, the man uses his newfound strength to push you against the wall, his mutated hands pressing with unnerving force.
Pinned against the wall, you struggle to regain control as the man continues to thrash and murmur cryptic warnings. The chaos escalates as the injured crew member is quickly attended to, their pain adding to the urgency of the situation. How will you proceed?`;
const e16Text=`Pinned against the wall, you muster every ounce of your strength to fight back against the man’s relentless assault. With a surge of adrenaline, you shove him away, and the crew member, despite their injury, joins in the struggle. Together, you manage to overpower the man, and with a combined effort, you knock him unconscious. The eerie silence that follows is a stark contrast to the chaos of moments before.
As you catch your breath and assess the situation, you realize the toll the confrontation has taken on both you and your crew. You’re bruised and battered, but the crew member who was bitten is in worse shape, their wound bleeding and their face pale with pain. You quickly administer first aid, applying pressure to the wound and checking for signs of infection. The man’s unconscious form lies slumped on the floor, a grim reminder of the danger you faced.
Despite the immediate relief of securing the threat, the severity of the encounter underscores the urgency of your mission. The vital information about the Elysium’s new location and the cosmic heart is now more crucial than ever. How will you proceed?`;

const e17Text=`With the man subdued and the immediate danger averted, you carefully make your way back to the ship in the pod. The journey feels longer than usual, weighed down by the gravity of the situation and the worsening condition of your injured crew member. The bite wound, now showing signs of infection, seems to be having a troubling effect on him. His pallor grows more concerning as he drifts in and out of consciousness, and his face starts to resemble the mutated man’s more closely.
Upon returning to your ship and entering back into Orbit, you rush your crew member to the med bay, where the medical team quickly takes over. They work diligently to stabilize him, but the situation remains dire. As the crew member's condition deteriorates, he begins to exhibit strange symptoms, including disturbing visions and a fragmented recollection of events. To your alarm, he starts to talk about memories of the Elysium—a ship he has never been on, yet he describes it with eerie precision.
His disjointed memories offer glimpses into the Elysium’s operations and its secretive journey. He mutters about hidden compartments, clandestine missions, and a specific star system where the ship was last known to be. These fragmented details align with the cryptic clues from the man you encountered earlier. It becomes clear that his rapidly deteriorating state is somehow connecting him to the cosmic heart’s corruptive influence, making his revelations even more valuable.
Despite the grim circumstances, the clues emerging from his condition are crucial for pinpointing the Elysium’s exact location. As the medical team continues to fight to save him How will you proceed?`;
const e18Text=`With the med team taking over care for your injured crew member, you step away to give them the space they need. Seeking solace, you head to the ship’s bridge to gather your thoughts. The recent encounters have left you with crucial, albeit fragmented, information. The mutated man’s cryptic ramblings and your crew member’s unsettling memories suggest that the Elysium, along with the cosmic heart, is hidden in a distant and uncharted star system.
On the bridge, you reflect on the journey so far, considering the dangers you’ve faced and the potential challenges ahead. You review the data and clues, mentally preparing for the next steps. The gravity of your mission and the sacrifices already made weigh heavily on you. As you brief the remaining crew on the updated objectives and reinforce the importance of the mission, you steel yourself for the next phase of the journey, driven by the hope of solving the mystery and recovering the cosmic heart. How will you Proceed?`;
const e19Text=`After leaving the bridge, you head to the ship’s central command room to relay the new information obtained from your encounter on the Elysium shuttle and the troubling details from your injured crew member's memories. You input the fragmented clues and observations into the ship's computer, which begins processing the data with its advanced algorithms.
The computer hums as it analyzes the information. As the data streams through the system, it generates a detailed report. The report confirms that the Elysium, and by extension the cosmic heart, is hidden in a remote and enigmatic region of space. The exact coordinates pinpoint the location to a star system known as "Zyphera Nexus." The report indicates that Zyphera Nexus is a heavily concealed system surrounded by dense nebulae, making it nearly invisible to conventional sensors. This revelation sharpens your focus and intensifies your resolve. Although you now know the location of the Elysium, repairing the damage your ship sustained during the Hydropolis expedition will delay your arrival at Zyphera Nexus. Additionally, opposing interests are also searching for the Elysium. How do you proceed?`;

const e20Text=`The delay from the ship repairs and the crew member’s injury has pushed your timeline back, but you’re determined to reach Zyphera Nexus as quickly as possible. You push the ship’s engines to their limits, racing through the dark expanse of space toward the star system. Every moment counts as you hope to be the first group to reach the Elysium and secure the cosmic heart before anyone else.
As you finally approach Zyphera Nexus, the dense nebulae begin to clear, revealing the distant scene. Your heart races with a mixture of excitement and dread as you spot the Elysium orbiting a small, desolate moon. Its lights flicker sporadically, casting an eerie glow across the void. You quickly initiate a scan of the surrounding area, your anticipation turning to dread as the sensors pick up an alarming sight. The alien species you encountered on planet Aries—an ominous reminder of past threats—has somehow arrived here before you. Their ships are scattered around the system, indicating that they too have been searching for the Elysium.
The realization hits hard. Not only is the race to find the cosmic heart more urgent, but the presence of this hostile species means you’ll have to navigate a potentially perilous confrontation. Your focus sharpens as you strategize your next move, weighing the risks of engaging with the aliens versus the need to secure the Elysium and the cosmic heart. The stakes have never been higher, and every decision now carries monumental consequences. How do you Proceed?`;
const e21Text=`Realizing that the alien species is likely aware of your presence, you understand that time is of the essence. With the element of surprise lost, a direct confrontation could be disastrous. Your only option is to board the Elysium swiftly and secure the cosmic heart before the enemy can target your ship or launch an attack.
You quickly issue orders to your crew, instructing them to prepare for immediate boarding. As you maneuver your ship closer to the Elysium, you keep a wary eye on the alien vessels that drift menacingly around the moon. The tension aboard is palpable as everyone moves with focused urgency, knowing that any delay could be fatal.
The docking procedure is executed with precision, and you align your ship's airlock with the Elysium’s. You gather a small team of the most capable crew members, donning your suits and checking your equipment one last time. The gravity of the situation hangs heavy as you prepare to breach the Elysium.
With a final glance at the approaching alien ships, you activate the docking sequence and open the airlock. The connection is established, and you step onto the Elysium, the cold, dark interior awaiting you. The sound of your boots echoes as you move through the vessel, every creak and groan of the ship amplifying the urgency of your mission. You need to navigate through the Elysium and find the cosmic heart before the aliens can close in and your ship is compromised.  How do you Proceed?`;
const e22Text =`As you and your remaining crew prepare to search the Elysium for the cosmic heart, the sound of approaching hostile alien infantry grows louder, heightening the urgency of your mission. You decide to split up to maximize your chances of success. Two of your most skilled crew members volunteer to act as a diversion, drawing the aliens away from your search area. As they rush down a side corridor, you hold your breath, hoping their efforts will buy you the time you need.
The moment they disappear from view, the distant clash of high-tech weaponry erupts, and the pounding of boots against the ship’s interior becomes unmistakable. The conflict intensifies, creating a heavy backdrop of urgency as you and the rest of your team navigate through the Elysium’s dark, labyrinthine corridors. The ship appears eerily deserted, with most of the crew seemingly missing.
Eventually, you reach the core of the vessel and find a single figure standing guard. The cosmic heart, contrary to expectations, is not a literal heart but a formless mass. The guardian seems determined to protect this enigmatic entity at all costs. As the distant sounds of battle grow louder, you must act quickly to secure the cosmic heart and complete your mission before the alien forces or the guardian can thwart your efforts. How do you proceed?`;
const e23Text =`You confront the lone crew member guarding the formless mass, demanding answers about what happened to the Elysium. The crew member, visibly weary and desperate, begins to explain the dire situation.
The entity, formerly known as the cosmic heart, was intended for two primary uses: terraforming and as a potent biological weapon. Its dual nature made it an invaluable asset but also a dangerous one. The Elysium’s crew, upon discovering Terra Prime’s intent to exploit the heart’s potential for mass destruction, decided to hide it. They were alarmed by the heart’s destructive capabilities and its tendency to induce a severe neurological condition in those it infects, leading to extreme aggression and disorientation. The heart is not merely a passive object but a sentient being, capable of influencing and punishing those who attempt to misuse it.
The crew member reveals that the Elysium’s crew fell victim to the heart’s corruptive influence, leading to their current absence. The heart, sensing malicious intent, infected the crew and wreaked havoc on the ship. Now, it exists as a sentient, formless mass with its own agenda, continuing to guard itself against those it deems unworthy. With this new understanding, you realize that securing the heart is more complicated than initially thought; it’s not just about retrieval but also about handling a sentient entity that has already caused immense suffering and must be kept from falling into the wrong hands. With the potential fate of the universe influenced by your next decision what will you do now the 'Cosmic Heart' is in reach?`

const eEndingText =`As you weigh your options, the moral gravity of the situation becomes increasingly apparent. The cosmic heart, with its immense power and its ability to induce severe neurological conditions, poses a threat that could lead to unprecedented destruction if it falls into the wrong hands. Despite its potential benefits, the heart's dark influence has already caused suffering and chaos. After careful consideration and consultation with your remaining crew, you come to a difficult decision: the heart must be destroyed.
With a heavy heart, you set the ship's self-destruct sequence to target the core of the Elysium where the heart is held. The process is fraught with tension; every step is carefully calculated to ensure that the heart's destruction is complete and that no fragment remains to pose a future threat. As you finalize the sequence, you take one last look at the heart, a sentient entity that could have altered the course of humanity's future. The responsibility of this decision weighs heavily, but the potential risks of allowing such power to persist are too great.
The explosion is controlled and precise, obliterating the heart and ensuring that its influence is eradicated. As the debris of the Elysium drifts away, you and your crew reflect on the consequences of your actions. The destruction of the heart, while morally complex, has prevented a potential catastrophe. You’ve sacrificed the possibility of harnessing its power for terraforming or as a weapon to safeguard countless lives and prevent further conflict.
Back at Terra Prime, the government’s reaction is swift and intense. The decision to destroy the heart, intended to be a weapon of unprecedented power, sparks outrage among officials and military leaders who had envisioned its potential for domination. The loss is met with vehement condemnation, and there are allegations of treason and failure. Public sentiment is divided; while some support the move as a necessary action to prevent catastrophe, others view it as a monumental blunder. The government grapples with the fallout, facing both political and operational repercussions. Within your crew, the decision remains controversial. Some view it as a necessary sacrifice for the greater good, while others struggle with the weight of losing the potential for using the heart’s terraforming capabilities to undo some of the environmental devastation caused by War. Despite the internal conflict, you all share a quiet sense of relief that the immediate threat has been neutralized, and the galaxy remains safe from the heart’s dark potential.
`;

const eventTexts=
[
e1Text,
e2Text,
e3Text,
e4Text,
e5Text,
e6Text,
e7Text,
e8Text,
e9Text,
e10Text,
e11Text,
e12Text,
e13Text,
e14Text,
e15Text,
e16Text,
e17Text,
e18Text,
e19Text,
e20Text,
e21Text,
e22Text,
e23Text,
eEndingText,
];


//===============================Choice Data======================================

//===============================e1 choice data============================= 
const beginingC1 ='Jump to System';
const beginingC2 ='Scan for planets in Orian system';
const beginingC3 ='resign position this isnt what you signed up for';
const beginingC4 ='Go rogue the allure of the  frontier is too great!';

//==================================e2 Choice data========================
const planetA = "Travel to planet Theta";
const planetB = "Travel to planet Aries";

//================================= e3 Choice data==========================
const e3CA ="Scan and Assess your surroundings";
const e3CB ="Throw caution to the wind Elysium is just a rumor as far as anyone else knows right?";
const e3CC ="return to orbit you dont notice anything initially.";
//==================================e4 Choices==================================
const e4CA=`Attack, the odds are stacked against you—outnumbered and outgunned, your crew isn't equipped for what's coming. However if you're ready to risk it all, brace yourself. This is going to be one wild, brutal fight!`;
const e4CB= `Try to find clues without letting them know you’re here. Wait & observe them`;

const e4CC=`Leave the planet`;

//==================================e5 Choices==============================================
const e5CA=`Activate cloaking device and hold very still`;
const e5CB=`Retreat`;
const e5CC=`Get ready to call for backup and Fight`;
const e5CD=`placeholder`;
//=================================e6 Choices===============================================
const e6CA=`Grab the documents & go back to your ship`;
const e6CB=`Take a picture of the documents and write out a false translation to set this group off course`;
const e6CC=`Steal the documents & Sabotage the camp`;
const e6CD=`Take pictures, but destroy the documents.`;
//================================e7 Choices=================================================
const e7CA=`Chart Course for Hydropolis`;
const e7CB=`Placeholder`;
const e7CC=`placeholder`;
const e7CD=`placeholder`;
//=================================e8 Choices================================================
const e8CA=`Scan the planet`;
const e8CB=`Start planetary entry immediately`;
const e8CC=`Placeholder`;
const e8CD=`Give up and leave`;
//=================================e9 Choices===============================================
const e9CA=`Risk the probes (you will lose the ability to perform future planetary scans)`;
const e9CB=`Reinforce the hull,  with some innovative thinking of the equipment you have on board, you should be able to complete the exhibition and mitigate some of the damages.`;
const e9CC=`Report to high command  The Elysium was destroyed and call it a day. Scans showed no evidence of the ship's departure from this planet.`;
const e9CD=`Throw darts at the planetary map to decide where to search next`;

//==================================e10 Choices=============================================
const e10CA=`Go North`;
const e10CB=`Go East`;
const e10CC=`Go West`;
const e10CD=`Go South`;
//==================================e11 Choices============================================
const e11CA=`line your ships airlock with the door of the vessel and prepare to board. Maybe there are survivors or perhaps the cosmic heart is on board and salvageable.`;
const e11CB=`return to orbit and report your findings to command you don’t want to risk further damages and possibly your crew.`;
//==================================e12 Choices=============================================
const e12CA= `Turn on your flashlight and try to make your way through the darkness
`;
const e12CB=`Nope,  this was a bad Idea Leave.
`;
//==================================e13 Choices=============================================
const e13CA=`Press forward through the shuttle to gather more info`;
const e13CB=`search through the contents of the packed cargo`;
const e13CC=` leave there seem to be no signs of the crew or the cosmic heart anywhere.  The possibilities of why they jettisoned this craft fills you with fear.`;

//==================================e14 Choices=============================================
const e14CA=` attempt to restrain him with your crew and see if you can make sense of the mutterings`;
const e14CB=`Place Holder`
const e14CC=`Place Holder`
const e14CD=`Place Holder`
//==================================e15 Choices=============================================
const e15CA=`Fight back!`;
const e15CB=` try to make your way around the creature.`;
//==================================e16 Choices=============================================
const e16CA=`Head Back to your ship and Return to orbit`;
const e16CB=`Continue Searching the ship. There could be valuable Loot after all!`;
//==================================e17 Choices=============================================
const e17CA=`Tell the Medical Team to stop treating the condition you may get mission critical info from your crewmember’s transplanted memories`;
const e17CB=`let the med team do their job your crew has already sacrificed enough.`;
//==================================e18 Choices=============================================
const e18CA=` Relay to the computer the new info obtained from your encounter on the Elysium shuttle and your crewmembers new memories.`;
const e18CB=`Boot up cosmic quest, it’s been a rough day and you need to decompress.`;
//==================================e19 Choices=============================================
const e19CA=` The injury and ship repairs has already delayed you . Get there as fast as possible, maybe you can still be the first group to arrive. `;
const e19CB=` Take extra time to be prepared for a confrontation with opposing interests. The delay was likely too great and you will have to fight for the fate of the universe.`;

//==================================e20 Choices=============================================
const e20CA=`The Hostile Species does not seem to have noticed your presence yet. With the element of surprise and your ships formidable fire power you may be able to find a favorable engagement.`;

const e20CB=`Slow is smooth and smooth is fast: attempt to navigate to the Elysium unseen.`;

const e20CC=`You suspect the alien species is aware of your presence time is of the essence. Race to Board the Elysium`;

const e20CD=`Report to command that the Elysium has already fallen into enemy hands. You are not gonna risk the lives of your crew with such a low chance of success. Personal Concequences be damned.`;
//==================================e21 Choices=============================================
const e21CA=`Divide and conquer some of your crew may be lost but the fate of humanity is at stake.You have to get to the Heart before the enemy!`;
const e21CB=`Stick together and cover each other. Your chances of survival and success will likely be better working as a unit.`;

//==================================e22 Choices=============================================
const e22CA=`Ask the crew member what happened to the Elysium`;
const e22CB=`Attack the last member of the Elysium and Secure the heart for transport.`;
//==================================e23 Choices=============================================
const e23CA =`Destroy the heart, causes too much conflict/holds too much power for anyone to have
`;
const e23CB =`Take the heart to Terra Prime and complete your mission as ordered`;
const e23CC = `Attempt to use the heart to destroy the immediate Threat!`;
const e23CD =`Take it for yourself. The profits of selling such a device will set you up for life!`;
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