const jarvis = {

	config: require('./config.json'),
	

	ecrit(message, mot, response){
		if (message.content === this.config.prefix + mot) {
			message.channel.send(response);
		}
	},
	
	test() {
		console.log(this.config.prefix)
	}

}

module.exports = jarvis
