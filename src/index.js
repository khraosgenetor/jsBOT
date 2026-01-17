const { Client, Events, GatewayIntentBits } = require('discord.js');
require("dotenv").config();


const jsBOT = new Client({ intents: [GatewayIntentBits.Guilds] });

jsBOT.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

jsBOT.login(process.env.DISC_TOKEN);