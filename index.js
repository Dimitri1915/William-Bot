const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");

const config = require("./config.json");
const {loadEvents} = require("./Functions/loadEvents");
const {loadCommands} = require("./Functions/loadCommands");

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});

client.commands = new Collection();
client.events = new Collection();
client.setMaxListeners(0);

client.login(config.token).then(async () => {
    await loadEvents(client)
    await loadCommands(client)
  }).catch((e) => {
    console.log(e);
  });
