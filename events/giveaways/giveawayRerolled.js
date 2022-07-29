const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.MessageEmbed()
          .setAuthor({name: "Félicitations!", iconURL: (process.env.THUMBNAIL)})
          .setThumbnail(process.env.THUMBNAIL)
          .setColor("#2F3136")
          .setDescription(`Bonjour ${member.user}\n L'hôte du concours a fait un nouveau Giveaway et vous avez gagné le Giveaway sur **[ce serveur](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})**\n Bon travail pour la victoire **${giveaway.prize}!** \nDirect Message à l'hôte pour réclamer votre prix! \n\n [Invite](https://discord.com/api/oauth2/authorize?client_id=994237796199964732&permissions=406881561681&scope=bot%20applications.commands)`)
          .setTimestamp()
          .setFooter({
            text: "Giveaway", 
            iconURL: (process.env.FOOTERIMG)
          })
        ]
      }).catch(e => {})
    });
  }
}
