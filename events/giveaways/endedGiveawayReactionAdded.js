const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, member, reaction){
     reaction.users.remove(member.user);
  member.send(`**Rohh! On dirait que le concours est déjà terminé.!**`).catch(e => {})
  }
}