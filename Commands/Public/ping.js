const {SlashCommandBuilder, EmbedBuilder, Client, ChatInputCommandInteraction} = require("discord.js");
const ms = require("ms");
module.exports = {
    Cooldown: ms("10s"),
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('William te dara su latencia'),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client){
        return interaction.reply({content:`Mi ping es: ${client.ws.ping} ms`, ephemeral:false})
    }
};