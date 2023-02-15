import { search } from './gpt/index.js';

export default {
  ping: {
    execute: (message, args) => {
      message.reply('Pong!');
    }
  },
  gpt: search,
}