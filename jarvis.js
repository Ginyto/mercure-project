const Discord = require('discord.js')
const token = "OTAxODgzMDkxOTU2NjkwOTc1.YXWWFQ.-MRIWawlur8I4_CXvDtIokzkAVE";

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
})

const prefix = "Jarvis "

Client.on("ready", () => {
    console.log("Link Start")
})

Client.login(token);


Client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content === prefix + "start") {
        message.channel.send("Initialing Jarvis ...");
    }
})