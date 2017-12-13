const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
const bot = new Discord.Client({
  token: auth.token,
  autorun: true
});

// Discord bot ready up
bot.on('ready', function (evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});

// Discord
bot.on('message', function (user, userID, channelID, message, evt) {
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message.substring(0, 1) == '!') {
    var args = message.substring(1).split(' ');
    var cmd = args[0];
    
    args = args.splice(1);
    switch(cmd) {
      // case 'ping':
      //   bot.sendMessage({
      //     to: channelID,
      //     message: 'Pong!'
      //   });
      // break;
      case 'chase':
        bot.sendMessage({
          to: channelID,
          message: 'Chase has too big a bum to not be a bit fruity'
        });
      break;
      case 'log':
        bot.sendMessage({
          to: channelID,
          message: JSON.stringify(evt)
        });
      break;
      default:
        bot.sendMessage({
          to: channelID,
          message: 'You didn\'tsay anything fool'
        });
      break;
      // Just add any case commands if you want to..
    }
  }
});