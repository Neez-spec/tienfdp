const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name: 'info',
    description: '📚 informations système !',
    run: async (client, interaction) => {      
      let ccount = client.channels.cache.size;
      let mcount = 0; 
client.guilds.cache.forEach((guild) => {
    mcount += guild.memberCount 
})

    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel(`Invite ${client.user.username}`)
    .setStyle("LINK")
    .setURL("https://discord.com/api/oauth2/authorize?client_id=994237796199964732&permissions=406881561681&scope=bot%20applications.commands")
    .setEmoji('1002352896081403984'),
       
      )
  
  let info = new MessageEmbed()
    .setAuthor({name: "Giveaway", iconURL: "https://media.discordapp.net/attachments/1002265442867495113/1002275214723391628/OIP_10.jpg" })
    .setTitle('Information')
    .setColor('#2F3136')
    .setThumbnail(process.env.THUMBNAIL)
    .setTimestamp()
    .addField("\Server", `\`\`\`ini\n[ ${client.guilds.cache.size} ]\n\`\`\``, true)
    .addField("Users", `\`\`\`ini\n[ ${mcount} ]\n\`\`\``, true)
    .addField("Channels", `\`\`\`ini\n[ ${ccount} ]\n\`\`\``, true)
    .setDescription("")
    .setFooter({
        text: `Giveaway`, 
        iconURL: (process.env.FOOTERIMG)
    })
    interaction.reply({ embeds: [info], components: [row]});

    },
};