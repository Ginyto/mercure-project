const Discord = require('discord.js')
const token = "OTAxODgzMDkxOTU2NjkwOTc1.YXWWFQ.-MRIWawlur8I4_CXvDtIokzkAVE";

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
})

const prefix = "§"

Client.on("ready", () => {
    console.log("Link Start")
})

Client.login(token);


Client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    ecrit(message, "fly", "Décolage de la chouette ...")

    ecrit(message, "fais moi rire", "non")

    ecrit(message, "il fait beau ?", "je sais pas sort ta tete pour voir")
    
})

function ecrit(message, mot, response) {
    if (message.content === prefix + mot) {
        message.channel.send(response);
    }
}

