const { MessageEmbed } = require("discord.js");
const { version, picture } = require("../OutcastAssets/config.json");
module.exports = { 
    name: "ping",
    description: "Check Discord\'s API Ping and my ping.",
    cooldown: 5,
    aliases: ["latency"],
    async execute(message) {
        const m = await message.channel.send("Ping!");
        message.channel.bulkDelete(1, true)
        const PingEmbed = new MessageEmbed()
            .setTitle("Outcast")
            .addFields({name: "Bot Latency:", value: `${Math.round(m.createdTimestamp - message.createdTimestamp)} ms`}, {name: "API Latency:", value: `${Math.round(message.client.ws.ping)} ms`})
            .setFooter(version, picture)
            .setTimestamp()
            .setColor("#FF0000")
        message.channel.send(PingEmbed);
    }
};
