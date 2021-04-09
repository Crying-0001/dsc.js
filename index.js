const colors = require("colors")

const dbd = require("dbd.js")
const { token } = require('./config.json');

const bot = new dbd.Bot({ 
  token: token, 
  prefix: "TUPREFIX", //reemplaza el texto TUPREFIX por el prefijo de tu bot ejemplo "!"
  mobile: false,
  fetchInvites: false,
  sharding: false,
  shardAmount: 0,
  disabledFunctions: [],
  })  


bot.loadCommands('./commands/')

bot.onMessage({
   respondToBots: false
})
require('./utils/status')(bot)
require('./utils/callbacks')(bot)///////////////
require('./utils/variables')(bot)
