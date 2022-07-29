const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'invite',
    description: '➕ Inviter le bot sur votre serveur !',
    run: async (client, interaction) => {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel(`Invite ${client.user.username}`)
        .setStyle('LINK')
      .setEmoji('1002352896081403984')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=994237796199964732&permissions=406881561681&scope=bot%20applications.commands`),
      new MessageButton()
        .setLabel('Support')
        .setStyle('LINK')
        .setEmoji('971675354555121675')
        .setURL("https://discord.gg/ax5hy3qazV"),
    )
    let invite = new MessageEmbed()
      .setAuthor({ 
          name: `Invite ${client.user.username}`, 
          iconURL: client.user.displayAvatarURL() 
      })    
    .setTitle("Invite & Support Link!")
    .setDescription(`Invitez ${client.user} sur votre serveur dès aujourd'hui et organisez des Giveaways sans faille sur votre serveur !`)
    .setColor('#2F3136')
    .setTimestamp()
    .setThumbnail(process.env.THUMBNAIL)
    .setFooter({
        text: `Giveaway`, 
        iconURL: (process.env.FOOTERIMG)
    })
    
    interaction.reply({ embeds: [invite], components: [row]});
}
}
