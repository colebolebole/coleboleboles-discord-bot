const Discord = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

const { ActionRowBuilder, ButtonBuilder } = require('discord.js');

const { clientId } = require('../conf/clientId.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('List of all commands')
		.setIntegrationTypes(1)
		.setContexts(0, 1, 2),
	async execute(interaction) {

		try {
			const newEmbed = new Discord.EmbedBuilder()
				.setColor('#304281')
				.setTitle('| China Bot Help |')
				.setDescription('How to use & more information.')
				.addFields(
					{ name: 'View Commands: ', value: 'Run `/` in the message bar and scroll to China Bot for all commands.' },
				      { name: 'GitHub Repository', value: 'View and fork the source code for China Bot and help improve the project by reporting bugs!' }
				);

			const invite = new ActionRowBuilder()
				.addComponents(
					new ButtonBuilder()
						.setLabel('Add us!')
						.setStyle('Link')
						.setEmoji('1311842271360057415')
						.setURL(`https://discordapp.com/oauth2/authorize?client_id=${clientId}`),
				);

			const github = new ActionRowBuilder()
				.addComponents(
					new ButtonBuilder()
						.setLabel('View source on GitHub!')
						.setStyle('Link')
						.setEmoji('1041437586331271208')
						.setURL('https://github.com/colebolebole/coleboleboles-discord-bot'),
				);

			await interaction.reply({ ephemeral: true, components: [invite, github], embeds: [newEmbed] });
		}
		catch (err) {
			console.warn(err)
			await interaction.reply({ephemeral: true, content: "There was an error during the command!"})
		};

	},
};