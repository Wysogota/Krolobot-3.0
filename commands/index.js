const gpt = require('./gpt');

module.exports = {
  ping: {
    execute: (message, args) => {
      message.reply('Pong!');
    }
  },
  gpt: gpt.search,
}