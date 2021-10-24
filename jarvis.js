const Discord = require('discord.js')
const Client = new Discord.Client({ intents: [] })

Client.on("ready", () => {
    console.log("Link Start")
})

Client.login("OTAxODgzMDkxOTU2NjkwOTc1.YXWWFQ.dkufo8MZS13o6wBonj461yEap90");