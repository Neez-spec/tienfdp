const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'serverinfo',
  description: '📱 Information sur le serveur',
  run: async (client, interaction) => {

    let embed = new Discord.MessageEmbed()
    .setTitle("**Serveur Information**")
        .setColor('#2F3136')
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
      .setDescription(`[Invite](https://discord.com/api/oauth2/authorize?client_id=994237796199964732&permissions=406881561681&scope=bot%20applications.commands) | [Support](https://discord.gg/ax5hy3qazV)`)
        .setAuthor(interaction.guild.name, interaction.guild.iconURL)
        .addField("Nom", interaction.guild.name, true)
        .addField("Serveur ID", interaction.guild.id, true)
        .addField("Propriétaire", `${(await interaction.client.users.fetch(interaction.guild.ownerId)).tag}`, true)
        .addField('Propriétaire ID:', `${(await interaction.guild.ownerId)}`, true)
        .addField(`Membres`, interaction.guild.memberCount.toString(), true)
        .addField(`Bots:`, interaction.guild.members.cache.filter(member => member.user.bot).size.toString(), true)
        .addField(`Non-Animé Emojis:`, interaction.guild.emojis.cache.size.toString(), true)
        .addField(`Animé Emojis:`,interaction.guild.emojis.cache.filter(emoji => emoji.animated).size.toString(),true )
        .addField(`Salon:`,interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size.toString(),true )
        .addField(`Salon vocaux:`,interaction.guild.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size.toString(),true )
        .addField(`Roles:`, interaction.guild.roles.cache.size.toString(), true)
        .addField(`Créé à`, `${moment(interaction.guild.createdTimestamp).format('LLL')} | \`${moment(interaction.guild.createdTimestamp).fromNow()}\``, true)
        .addField(`Boost Level`, interaction.guild.premiumTier.toString(), true)
        .addField(`Total Boosts`, interaction.guild.premiumSubscriptionCount.toString(), true)
        .setFooter({
        text: `Giveaway`, 
        iconURL: (process.env.FOOTERIMG)
    })
    interaction.reply({embeds: [embed]});
  }
}