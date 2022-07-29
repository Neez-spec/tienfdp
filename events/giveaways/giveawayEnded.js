const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.MessageEmbed()
          .setAuthor({name: "Félicitations!", iconURL: "https://media.discordapp.net/attachments/1002265442867495113/1002275214723391628/OIP_10.jpg"})
          .setColor("#2F3136")
          
          .setThumbnail("https://media.discordapp.net/attachments/1002265442867495113/1002356844443996171/unknown.png")
          .setDescription(`Bonjour ${member.user}\n Félicitations !! Vous avez gagné **${giveaway.prize}!** sur **[ce serveur](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})**\nDM l'hôte pour réclamer votre prix! \n\n [Invite](https://discord.com/api/oauth2/authorize?client_id=994237796199964732&permissions=406881561681&scope=bot%20applications.commands) | [Support](https://discord.gg/ax5hy3qazV)`)
          .setImage('https://media.discordapp.net/attachments/1002265442867495113/1002356844443996171/unknown.png')
          .setTimestamp()
                    .setFooter({
            text: `Giveaway`, 
            iconURL: (process.env.FOOTERIMG)
           })
        ]
      }).catch(e => {})
    });

  }
}
