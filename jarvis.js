const jarvis = {

	config: require('./config.json'),
	palabra: require('./palabra'),
	

	ecrit(message, mot, response){
		if (message.content === this.config.prefix + mot) {
			message.channel.send(response);
		}
	},

	repond(message, mot, response) {
		if (message.content.includes(mot)) {
			message.channel.send(response);
		}
	},
	
	test() {
		console.log(this.config.prefix)
		console.log(this.palabra.punchline)
	}

}

module.exports = jarvis
