const Discord = require("discord.js")
const token = "OTAxODgzMDkxOTU2NjkwOTc1.YXWWFQ.-MRIWawlur8I4_CXvDtIokzkAVE";
const { SlashCommandBuilder } = require('@discordjs/builders');

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
})

const prefix = "§"

const data = new SlashCommandBuilder()
    .setName("test")
    .setDescription("Ceci est un test")



Client.on("ready", () => {

    Client.guilds.cache.get("901917468228984884").commands.create(data);

    console.log("Link Start")
})

Client.login(token);


Client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    spell.ecrit(message, "fly", "Décolage de la chouette ...")

    ecrit(message, "fais moi rire", "non")

    ecrit(message, "il fait beau ?", "je sais pas sort ta tete pour voir")

    
})







/**
 * Fonction qui permet d'écrire sur le channel suite a une commande
 * @param {} message récupere le flux du channel
 * @param {*} mot clé pour activer le bot
 * @param {*} response message du bot souhaité
 */
function ecrit(message, mot, response) {
	if (message.content === prefix + mot) {
		message.channel.send(response);
	}
}



