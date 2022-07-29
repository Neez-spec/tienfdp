const config = require('../config.json');
module.exports = {
  giveaway:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "🎉 **GIVEAWAY** 🎉",
  giveawayEnded:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "❌ **GIVEAWAY ENDED**",
  drawing:  `Fin : **{timestamp}**`,
  color: "#2F3136",
  inviteToParticipate: `Réagir avec 🎉 pour participer!`,
  winMessage: "Félicitations, {winners}! Vous avez gagné **{this.prize}**!",  
  embedFooter: "Giveaways",
  noWinner: "Giveaway annulé, aucune participation valide.",
  hostedBy: "Organisé par : {this.hostedBy}",
  winners: "Gagnant(s)",
  endedAt: "Terminé à"
}