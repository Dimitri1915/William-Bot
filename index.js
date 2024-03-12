const {Client, GatewayIntentBits, Partials, Collection} = require("discord.js");
const config = require("./config.json");

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});

client.setMaxListeners(0);

client.on('messageCreate', async (message) => {
    if(message.content === 'w!ping'){
        return message.reply({content: `¡Pong! Mi ping es **${client.ws.ping}** ms`})
    }
    if(message.content === 'william'){
      return message.reply({content: `¿Qué quieres ${message.author}? No ves que estoy ocupado.`})
    }
});

client
  .login(config.token)
  .then(() => {
    console.log(`${client.user.username} Esta listo.`);
  })
  .catch((e) => {
    console.log(e);
  });
