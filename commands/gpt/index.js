import { ApplicationCommandType, ApplicationCommandOptionType } from 'discord.js';
import { ChatGPTAPI } from 'chatgpt';

import dotenv from 'dotenv';
dotenv.config();

const gptClient = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY
})

export const search = {
  name: 'gpt',
  description: 'Search in chatGPT',
  type: ApplicationCommandType.ChatInput,
  options: [{
    name: 'option',
    description: 'A sample option',
    type: ApplicationCommandOptionType.String,
  }],
  execute: (message, args) => {
    const requestMsg = args.join(' ');
    gptClient.sendMessage(requestMsg)
      .then((res) => {
        message.reply(res.text);
      })
      .catch((error) => {
        console.error('error', error);
      });
  }
}