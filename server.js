const express = require('express');
const app = express();
const PORT = 8000;

const legends = {
    "ash": {
        "realName": "Dr. Ashleigh Reid",
        "age": 122,
        "class": "Assault",
        "tacticalAbility": "Arc Snare",
        "passiveAbility": "Marked For Death",
        "ultimateAbility": "Phase Breach"
    },
    "ballistic": {
        "realName": "August Montgomery Brinkman",
        "age": 63,
        "class": "Assault",
        "tacticalAbility": "Whistler",
        "passiveAbility": "Sling",
        "ultimateAbility": "Tempest"
    },
    "bangalore": {
        "realName": "Anita Williams",
        "age": 40,
        "class": "Assault",
        "tacticalAbility": "Smoke Launcher",
        "passiveAbility": "Double Time",
        "ultimateAbility": "Rolling Thunder"
    },
    "bloodhound": {
        "realName": "Blódhundr",
        "age": 40,
        "class": "Recon",
        "tacticalAbility": "Eye of the Allfather",
        "passiveAbility": "Tracker",
        "ultimateAbility": "Beast of the Hunt"
    },
    "catalyst": {
        "realName": "Tressa Crystal Smith",
        "age": 30,
        "class": "Controller",
        "tacticalAbility": "Piercing Spikes",
        "passiveAbility": "Barricade",
        "ultimateAbility": "Dark Veil"
    },
    "caustic": {
        "realName": "Alexander Nox",
        "age": 50,
        "class": "Controller",
        "tacticalAbility": "Nox Gas Trap",
        "passiveAbility": "Nox Vision",
        "ultimateAbility": "Nox Gas Grenade"
    },
    "crypto": {
        "realName": "Tae Joon Park",
        "age": 24,
        "class": "Recon",
        "tacticalAbility": "Surveillance Drone",
        "passiveAbility": "Neurolink",
        "ultimateAbility": "Drone EMP"
    },
    "fuse": {
        "realName": "Walter Fitzroy Jr.",
        "age": 55,
        "class": "Assault",
        "tacticalAbility": "Knuckle Cluster",
        "passiveAbility": "Grenadier",
        "ultimateAbility": "The Motherlode"
    },
    "gibraltar": {
        "realName": "Makoa Gibraltar",
        "age": 32,
        "class": "Support",
        "tacticalAbility": "Dome of Protection",
        "passiveAbility": "Gun Shield",
        "ultimateAbility": "Defensive Bombardment"
    },
    "horizon": {
        "realName": "Dr. Mary Somers",
        "age": 39,
        "class": "Skirmisher",
        "tacticalAbility": "Gravity Lift",
        "passiveAbility": "Spacewalk",
        "ultimateAbility": "Black Hole"
    },
    "lifeline": {
        "realName": "Ajay Che",
        "age": 26,
        "class": "Support",
        "tacticalAbility": "D.O.C. Heal Drone",
        "passiveAbility": "Combat Medic",
        "ultimateAbility": "Care Package"
    },
    "loba": {
        "realName": "Loba Andrade",
        "age": 36,
        "class": "Support",
        "tacticalAbility": "Burglar’s Best Friend",
        "passiveAbility": "Eye for Quality",
        "ultimateAbility": "Black Market Boutique"
    },
    "mad maggie": {
        "realName": "Margaret Kōhere",
        "age": 56,
        "class": "Assault",
        "tacticalAbility": "RIOT DRILL",
        "passiveAbility": "WARLORD’S IRE",
        "ultimateAbility": "WRECKING BALL"
    },
    "mirage": {
        "realName": "Elliott Witt",
        "age": 32,
        "class": "Support",
        "tacticalAbility": "Psyche Out",
        "passiveAbility": "Now You See Me...",
        "ultimateAbility": "Life of the Party"
    },
    "newcastle": {
        "realName": "Jackson Williams",
        "age": 41,
        "class": "Support",
        "tacticalAbility": "Mobile Shield",
        "passiveAbility": "Retrieve the Wounded",
        "ultimateAbility": "Castle Wall"
    },
    "octane": {
        "realName": "Octavio Silva",
        "age": 26,
        "class": "Skirmisher",
        "tacticalAbility": "Stim",
        "passiveAbility": "Swift Mend",
        "ultimateAbility": "Launch Pad"
    },
    "pathfinder": {
        "realName": "Pathfinder",
        "age": 77,
        "class": "Skirmisher",
        "tacticalAbility": "Grappling Hook",
        "passiveAbility": "Insider Knowledge",
        "ultimateAbility": "Zipline Gun"
    },
    "rampart": {
        "realName": "Ramya Parekh",
        "age": 23,
        "class": "Controller",
        "tacticalAbility": "Amped Cover",
        "passiveAbility": "Modded Loader",
        "ultimateAbility": "Emplaced Minigun “Sheila”"
    },
    "revenant": {
        "realName": "Kaleb Cross",
        "age": 359,
        "class": "Skirmisher",
        "tacticalAbility": "Shadow Pounce",
        "passiveAbility": "Assassin’s Instinct",
        "ultimateAbility": "Forged Shadows"
    },
    "seer": {
        "realName": "Obi Edolasim",
        "age": 27,
        "class": "Recon",
        "tacticalAbility": "Focus of Attention",
        "passiveAbility": "Heart Seeker",
        "ultimateAbility": "Exhibit"
    },
    "valkyrie": {
        "realName": "Kairi Imahara",
        "age": 31,
        "class": "Skirmisher",
        "tacticalAbility": "Missile Swarm",
        "passiveAbility": "VTOL Jets",
        "ultimateAbility": "Skyward Dive"
    },
    "vantage": {
        "realName": "Xiomara “Mara” Contreras",
        "age": 19,
        "class": "Recon",
        "tacticalAbility": "Echo Relocation",
        "passiveAbility": "Spotter's Lens",
        "ultimateAbility": "Sniper's Mark"
    },
    "wattson": {
        "realName": "Xiomara “Mara” Contreras",
        "age": 24,
        "class": "Controller",
        "tacticalAbility": "Perimeter Security",
        "passiveAbility": "Spark of Genius",
        "ultimateAbility": "Interception Pylon"
    },
    "wraith": {
        "realName": "Renee Hope Blasey",
        "age": 34,
        "class": "Skirmisher",
        "tacticalAbility": "Into the Void",
        "passiveAbility": "Voices from the Void",
        "ultimateAbility": "Dimensional Rift"
    },
    "conduit": {
        "realName": "Rowenna Valentina Coffey Divina",
        "age": 27,
        "class": "Support",
        "tacticalAbility": "Radiant Transfer",
        "passiveAbility": "Savior's Speed",
        "ultimateAbility": "Energy Barricade"
    },
    "not found": {
        "realName": "Not Found",
        "age": 0,
        "class": "Not Found",
        "tacticalAbility": "Not Found",
        "passiveAbility": "Not Found",
        "ultimateAbility": "Not Found"
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:legendName', (req, res) => {
    const legendName = req.params.legendName.toLowerCase();

    if(legends[legendName]){
        res.json(legends[legendName]);
    }else{
        res.json(legends["not found"]);
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is runnig on port ${PORT}`);
})