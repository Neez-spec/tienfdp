const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

const embed = new MessageEmbed()

.setTitle("Giveaway")
.setURL("https://discord.gg/ax5hy3qazV")
.setThumbnail("https://discord.com/channels/1002265189015629824/1002265442867495113/1002275214748549121")
.setTimestamp()
.setDescription(`:gift: Giveaways commands
<:warn:1002285732183945336> ` + "`Permissions requises: Gérer le serveur OU 'Giveaways' role`" +`

<:online:1002290283096055888>  **/start** `+ "`#Salon` `<Durée>` `<Nombre de gagnants>` `<Prix>` `<Facultatif: Role>` - *Lancer un giveaway*"+`
<:online:1002290283096055888>  **/end** - *Fin du giveaway*
<:online:1002290283096055888>  **/reroll** - *Choisir le(s) nouveau(x) gagnant(s) du giveaway*
<:online:1002290283096055888>  **/pause** - *Mettre en pause un giveaway*
<:online:1002290283096055888>  **/resume** - *Reprendre le giveaway*
<:online:1002290283096055888>  **/edit** ` + "`<gagnants|Prix>` - *Modifier un giveaway* " + `
<:online:1002290283096055888>  **/list** - *Afficher tous les giveaways*
​
:bulb: Informations commands
<:online:1002290283096055888>  **/info** - *Informations sur le bot*
<:online:1002290283096055888>  **/help** - *Afficher ce message*
<:online:1002290283096055888>  **/serverinfo** - *Afficher les statistiques du serveur*
<:online:1002290283096055888>  **/ping** - *Montrer le ping du bot*
<:online:1002290283096055888>  **/invite** - *Obtenez le lien d'invitation du bot*`)
.setFooter({
    text: `Giveaway`, 
    iconURL: (process.env.FOOTERIMG)
});
message.reply({ content: " ", embeds: [embed] })
}
