const {SlashCommandBuilder, EmbedBuilder, Client, ChatInputCommandInteraction} = require("discord.js");
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
        return interaction.reply({content:`¿Hola ${interaction.user}, sabes donde esta Sam?`, ephemeral:true})
    }
};