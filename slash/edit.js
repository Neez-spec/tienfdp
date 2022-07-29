module.exports = {
    name: 'edit',
    description: '🎉 Modifier un concours',

    options: [
        {
            name: 'giveaway',
            description: 'Le Giveaway à terminer (ID du message)',
            type: 'STRING',
            required: true
        },
        {
            name: 'duree',
            description: 'Réglage de la durée du cadeau mentionné.',
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
        }
    ],

    run: async (client, interaction) => {

        // If the member doesn't have enough permissions
        if (!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")) {
            return interaction.reply({
                content: '❌ | Vous devez avoir les permissions modifier les Giveaway.',
                ephemeral: true
            });
        }
        const gid = interaction.options.getString('giveaway');
        const time = interaction.options.getString('duree');
        const winnersCount = interaction.options.getInteger('gagnants');
        const prize = interaction.options.getString('prix');
        
        await interaction.deferReply({
         ephemeral: true
        })
        // Edit the giveaway
        try {
        await client.giveawaysManager.edit(gid, {
            newWinnersCount: winnersCount,
            newPrize: prize,
            addTime: time
        })
        } catch(e) {
return interaction.editReply({
            content:
                `Aucun Giveaway trouvé avec l'ID de message donné: \`${gid}\``,
            ephemeral: true
        });
        }
        interaction.editReply({
            content:
                `Ce Giveaway a été modifié !`,
            ephemeral: true
        });
    }

};
