const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'ping',
    description: '🏓Vérifiez mon ping !',
    run: async (client, interaction) => {
      let pembed = new MessageEmbed()
		  .setTitle("Pong!")
      .setColor('#2F3136')
      .setThumbnail(process.env.THUMBNAIL)
		  .addField('**Latence**', `\`\`\`ini\n[ ${Date.now() - interaction.createdTimestamp}ms ]\n\`\`\``)
		  .addField('**API Latence**', `\`\`\`ini\n[ ${Math.round(client.ws.ping)}ms ]\n\`\`\``)
		  .setTimestamp()
                  .setFooter({
        text: `Giveaway`, 
        iconURL: (process.env.FOOTERIMG)
    })
        interaction.reply({
          embeds: [pembed]
        });
    },
};
