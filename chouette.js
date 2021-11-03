const Discord = require("discord.js")
const { token } = require("./config.json")
const jarvis = require('./jarvis')

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
})


jarvis.test();

Client.on("ready", () => {

    console.log("Link Start")
})

Client.login(token);


Client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    jarvis.ecrit(message, "fly", "Décolage de la chouette ...")

    jarvis.ecrit(message, "fais moi rire", "non")

    jarvis.ecrit(message, "il fait beau ?", "je sais pas sort ta tete pour voir")
    
})


