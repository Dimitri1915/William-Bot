const {SlashCommandBuilder, EmbedBuilder, Client, ChatInputCommandInteraction, InteractionResponse} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
    .setName('saludo')
    .setDescription('William te saluda'),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client){
        if(interaction.user.id === '691776765923688519'){
            return interaction.reply({content:`Sam hasta que te encontre, ¿Quieres salir un rato conmigo?`,ephemeral:false});
        } else {
            return interaction.reply({content:`Hola ${interaction.user}, sabes donde está Sam?`,ephemeral:false});
        }
    }
};