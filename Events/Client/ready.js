const {Client} = require("discord.js");
const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");
const config = require('../../config.json');
require('colors');
module.exports = {
    name:'ready',
    once:true,
    /**
     * 
     * @param {Client} client 
     */
    async execute(client){
        mongoose.set('strictQuery', true);
        await mongoose.connect(config.database, {
            keepAlive:true,
        }).then(() => {
            console.log('[MongoDB] Esta conectado correctamente'.green);
        }).catch((e) => {
            console.log(`No se pudo contectar a la base de datos ${e}`.red);
        });
        console.log(`El ${client.user.username} esta online!`);
    }
};