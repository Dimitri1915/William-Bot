const {SlashCommandBuilder, EmbedBuilder, Client, ChatInputCommandInteraction, PermissionFlagsBits, UserSelectMenuBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('unban')
    .setDescription('Quitar ban a un usuario')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addStringOption(option=>
        option.setName('usuario')
        .setDescription('Ingresa la ID del usuario')
        .setRequired(true)
    ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction){
        const {channel, options} = interaction
        const userId = options.getString('usuario')
        const unbanEmbed = new EmbedBuilder()
        try {
            await interaction.guild.members.unban(userId)
            unbanEmbed.setTitle('✅ | Usuario libre de ban correctamente')
            .setDescription(`<@${userId}> se libero del ban.\nLiberado del Ban por: ${interaction.user.tag}`)
            .setColor('Green')
            .setTimestamp()

            await interaction.reply({embeds: [unbanEmbed]})
        } catch (e) {
            console.log(e);
            return interaction.reply({content:`Ocurrio un error  al tratar de quitar el ban a ${userId}`})
        }
    }
};