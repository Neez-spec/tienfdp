const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, member) {
    return member.send({
      embeds: [new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle('Tenez bon !! Venez-vous de retirer une réaction d\'un Giveaway ??')
        .setColor("#2F3136")
        .setDescription(
          `Votre participation à **${giveaway.prize}** sur [ce serveur](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) was recorded but you un-reacted, since you don't need **${giveaway.prize}** I would have to choose someone else. \n\n [Invite](https://discord.com/api/oauth2/authorize?client_id=973436715819745290&permissions=406881561681&scope=bot%20applications.commands) | [Twitter](https://twitter.com/razerofficials) | [Patreon](https://www.patreon.com/projectrazer)`
        )
        .setFooter({ text: "Vous pensez que c'était une erreur ? Réagissez à nouveau!" })
      ]
    }).catch(e => {})

  }
}
