const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, reactor, messageReaction) {
    let approved =  new Discord.MessageEmbed()
    .setTimestamp()
    .setColor("#2F3136")
    .setAuthor({name: "Entrée confirmée!", iconURL: "https://i.imgur.com/Lf1IHlA.png"})    
    .setDescription(
      `Votre entrée dans **${giveaway.prize}** sur [ce serveur](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) a été approuvé !\n\n [Invite](https://discord.com/api/oauth2/authorize?client_id=994237796199964732&permissions=406881561681&scope=bot%20applications.commands) | [Support](https://discord.gg/ax5hy3qazV))`
    )
    .setFooter({ text: "Giveaway" })
    .setTimestamp()
   let denied =  new Discord.MessageEmbed()
    .setTimestamp()
    .setColor("#2F3136")
    .setAuthor({name: "Entry Denied!", iconURL: "https://i.imgur.com/Jjo00oT.png"})    
    .setDescription(
      `Votre entrée dans **${giveaway.prize}** sur [ce serveur](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}) a été refusé \nVeuillez prendre connaissance des conditions requises pour participer correctement au concours. \n\n [Invite](https://discord.com/api/oauth2/authorize?client_id=994237796199964732&permissions=406881561681&scope=bot%20applications.commands) | [Support](https://discord.gg/ax5hy3qazV))`
    )
    .setFooter({ text: "Giveaway" })

    let client = messageReaction.message.client
    if (reactor.user.bot) return;
    if(giveaway.extraData) {
      if (giveaway.extraData.server !== "null") {
        try { 
        await client.guilds.cache.get(giveaway.extraData.server).members.fetch(reactor.id)
        return reactor.send({
          embeds: [approved]
        });
        } catch(e) {
          messageReaction.users.remove(reactor.user);
          return reactor.send({
            embeds: [denied]
          }).catch(e => {})
        }
      }
      if (giveaway.extraData.role !== "null" && !reactor.roles.cache.get(giveaway.extraData.role)){ 
        messageReaction.users.remove(reactor.user);
        return reactor.send({
          embeds: [denied]
        }).catch(e => {})
      }

      return reactor.send({
        embeds: [approved]
      }).catch(e => {})
    } else {
        return reactor.send({
          embeds: [approved]
        }).catch(e => {})
    }
    }
  }
