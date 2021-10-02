module.exports = {
	name: 'help',
  	description: "this is a help command",
  	execute(message, config, commands) {
    	console.log('User ' + message.author.username + ' // ' + message.author.id + ' used the help command.');

    	let help_msg = "👋 Hayo, the commands which I can help you with are:\n";

    	for(const [_, command] of commands) {
      		help_msg += `\n\`${config.prefix}${command.name}\`: ${command.description}`;
    	}

    	help_msg += `\n\nI am still missing some data regarding the schedules, so If you want me to add any, just message "Sokker - Paulo#0001" here on discord! 👀`;

    	message.channel.send(help_msg);
  	}
}