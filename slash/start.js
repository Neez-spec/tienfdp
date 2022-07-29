const Discord = require("discord.js")
const messages = require("../utils/message");
const ms = require("ms")
module.exports = {
  name: 'start',
  description: '🎉 Lancer un giveaway',

  options: [
    {
      name: 'durée',
      description: 'La durée du Giveaway. Exemples de valeurs: 1m, 1h, 1d',
      type: 'STRING',
      required: true
    },
    {
      name: 'gagnants',
      description: 'Combien de gagnants le Giveaway devrait-il avoir',
      type: 'INTEGER',
      required: true
    },
    {
      name: 'prix',
      description: 'Quel devrait être le prix du Giveaway ?',
      type: 'STRING',
      required: true
    },
    {
      name: 'salon',
      description: 'Le salon dans lequel le Giveaway doit être lancé',
      type: 'CHANNEL',
      required: true
    },
    {
      name: 'bonusrole',
      description: 'Rôle qui donnerait droit à des entrées supplémentaires',
      type: 'ROLE',
      required: false
    },
    {
      name: 'bonusamount',
      description: 'Le nombre d\'entrées de bonus que le rôle recevra.',
      type: 'INTEGER',
      required: false
    },
    {
      name: 'invite',
      description: 'Invitation du serveur que vous voulez ajouter comme condition d\'adhésion pour le Giveaway',
      type: 'STRING',
      required: false
    },
    {
      name: 'role',
      description: 'Rôle que vous voulez ajouter comme condition d\'adhésion au Giveaway',
      type: 'ROLE',
      required: false
    },
  ],

  run: async (client, interaction) => {

    // If the member doesn't have enough permissions
    if (!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")) {
      return interaction.reply({
        content: '❌ | Vous devez disposer des permissions pour lancer des Giveaway.',
        ephemeral: true
      });
    }

    const giveawayChannel = interaction.options.getChannel('salon');
    const giveawayDuration = interaction.options.getString('durée');
    const giveawayWinnerCount = interaction.options.getInteger('gagnants');
    const giveawayPrize = interaction.options.getString('prix');

    if (!giveawayChannel.isText()) {
      return interaction.reply({
        content: '❌ | Veuillez sélectionner un salon !',
        ephemeral: true
      });
    }
   if(isNaN(ms(giveawayDuration))) {
    return interaction.reply({
      content: '❌ | Veuillez sélectionner une durée valide !',
      ephemeral: true
    });
  }
    if (giveawayWinnerCount < 1) {
      return interaction.reply({
        content: '❌ | Veuillez sélectionner un nombre de gagnants valide ! supérieur ou égal à un .',
      })
    }

    const bonusRole = interaction.options.getRole('bonusrole')
    const bonusEntries = interaction.options.getInteger('bonusamount')
    let rolereq = interaction.options.getRole('role')
    let invite = interaction.options.getString('invite')

    if (bonusRole) {
      if (!bonusEntries) {
        return interaction.reply({
          content: `❌ | Vous devez préciser le nombre d'entrées bonus ${bonusRole} recevoir!`,
          ephemeral: true
        });
      }
    }


    await interaction.deferReply({ ephemeral: true })
    let reqinvite;
    if (invite) {
      let invitex = await client.fetchInvite(invite)
      let client_is_in_server = client.guilds.cache.get(
        invitex.guild.id
      )
      reqinvite = invitex
      if (!client_is_in_server) {
        return interaction.editReply({
          embeds: [{
            color: "#2F3136",
            author: {
              name: client.user.username,
              iconURL: client.user.displayAvatarURL() 
            },
            title: "Server Check!",
            description:
              "Oups ! Nouveau serveur détecté ! Vous êtes sûr que j'y suis ? Vous devez m'y inviter pour que cela devienne une exigence !",
            timestamp: new Date(),
            footer: {
              iconURL: client.user.displayAvatarURL(),
              text: "Server Check"
            }
          }]
        })
      }
    }

    if (rolereq && !invite) {
      messages.inviteToParticipate = `**Réagir avec 🎉 pour participer !**\n>>> - Seuls les membres ayant ${rolereq} sont autorisés à participer à ce concours!`
    }
    if (rolereq && invite) {
      messages.inviteToParticipate = `**Réagir avec 🎉 pour participer !**\n>>> - Seuls les membres ayant ${rolereq} sont autorisés à participer à ce concours!\n- Les membres doivent rejoindre [ce serveur] (${invite}) pour participer à ce concours !`
    }
    if (!rolereq && invite) {
      messages.inviteToParticipate = `**Réagir avec 🎉 pour participer !**\n>>> - Les membres doivent rejoindre [ce serveur] (${invite}) pour participer à ce concours !`
    }


    // start giveaway
    client.giveawaysManager.start(giveawayChannel, {
      // The giveaway duration
      duration: ms(giveawayDuration),
      // The giveaway prize
      prize: giveawayPrize,
      // The giveaway winner count
      winnerCount: parseInt(giveawayWinnerCount),
      // BonusEntries If Provided
      bonusEntries: [
        {
          // Members who have the role which is assigned to "rolename" get the amount of bonus entries which are assigned to "BonusEntries"
          bonus: new Function('member', `return member.roles.cache.some((r) => r.name === \'${bonusRole ?.name}\') ? ${bonusEntries} : null`),
          cumulative: false
        }
      ],
      // Messages
      messages,
      extraData: {
        server: reqinvite == null ? "null" : reqinvite.guild.id,
        role: rolereq == null ? "null" : rolereq.id,
      }
    });
    interaction.editReply({
      content:
        `Le Giveaway a commencé dans ${giveawayChannel}!`,
      ephemeral: true
    })

    if (bonusRole) {
      let giveaway = new Discord.MessageEmbed()
        .setAuthor({ name: `Alerte aux inscriptions en prime !` })
        .setDescription(
          `**${bonusRole}** A **${bonusEntries}** Entrées supplémentaires dans ce concours!`
        )
        .setColor("#2F3136")
        .setTimestamp();
      giveawayChannel.send({ embeds: [giveaway] });
    }

  }

};
