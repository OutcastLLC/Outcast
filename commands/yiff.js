const { MessageEmbed } = require("discord.js");
const { owner, version, picture } = require("../OutcastAssets/config.json");
module.exports = {
	name: "yiff",
	description: "Furry porn.",
	cooldown: 5,
	aliases: ["furryporn"],
	async execute(message, args) {
		if(!message.channel.nsfw && !owner.includes(message.author.id)) {
			const NotNSFWEmbed = new MessageEmbed()
				.setTitle("Error: Channel Is Not NSFW")
				.addFields({name: "Error Code:", value: "403: Forbidden"}, {name: "Error Description:", value: "You cannot run NSFW commands in non-NSFW channels."})
				.setFooter(version, picture)
				.setTimestamp()
				.setColor("#FF0000")
			return message.channel.send(NotNSFWEmbed);
			
		};
		if(message.channel.nsfw || owner.includes(message.author.id)) {
			let required = args[0];
			let yiff = require("yiff");
			let config = { 
			  creator: "Ash.#7028", 
			  name: "Outcast",
			  version: "Outcast v4.0.0"
			};
			if (!required) {
				const ErrorEmbed = new MessageEmbed()
					.setTitle("Error")
					.setDescription("You must define tags eg \`\`gay\`\`, \`\`lesbian\`\`, or \`\`straight\`\`. Keep in mind though that these are not the only tags!")
					.addField("Error Code:", "404: Not Found")
					.setFooter(version, picture)
					.setTimestamp()
					.setColor("#FF0000")
				return message.channel.send(ErrorEmbed);
				
			};
			let e6 = new yiff.e621(config);
			await e6.request(required).then(res => {
				const YiffEmbed = new MessageEmbed()
					.setColor("#FF0000")
					.setTitle("Yiff")
					.setDescription(`**Image Link:**\n${res.page}`)
					.setImage(res.image)
					.setFooter(version, picture)
					.setTimestamp()
				message.channel.send(YiffEmbed);
			});
		}
	}
};
