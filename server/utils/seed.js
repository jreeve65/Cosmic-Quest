const {User,Event}= require('../models');
const event1= {
    title:'event1',
    text:`You and your crew are docked at the Kronos Station, stocking up on provisions and making minor ship repairs and adjustments from your last assignment. You are looking at the navigation interface to plot your next course when you hear:
"Captain, incoming message from Terra Prime."
You tell the computer to patch you through to the transmission. You snap to attention as you realize that this transmission is from the Armada Commander themselves. The Commander confirms information that you had only heard whispers of: Terra Prime had discovered a technology that would allow humanity to terraform planets. However, they lost track of the vessel carrying the device, known as the Elysium, and any attempts to reestablish contact with it have been in vain. The last received transmission came from somewhere within the Orian star system and read only: "Reflect on one's ambitions."
You and your crew have been ordered to locate the source of the transmission and investigate the strange disappearance. The fate of humanity and the universe at large could depend on your success or failure.

How will you proceed?

 `,
    choices:[],
}

const user1 = {
    username:"testUser",
    email:"test@test.com",
    password:"testtest",
    gameState:"",
}

const seedData = async ()=>{
    try{
    await Event.create(event1);
    await User.create(user1);
    }
    catch(err){
        console.log(err);
    }
};

seedData();