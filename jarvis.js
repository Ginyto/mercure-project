const Discord = require('discord.js')
const Client = new Discord.Client({ intents: [] })
const token = "OTAxODgzMDkxOTU2NjkwOTc1.YXWWFQ.-MRIWawlur8I4_CXvDtIokzkAVE";

Client.on("ready", () => {
    console.log("Link Start")
})

Client.login(token);