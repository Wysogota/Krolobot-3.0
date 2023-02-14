const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');
const axios = require('axios');

module.exports.search = {
  name: 'gpt',
  description: 'Search in chatGPT',
  type: ApplicationCommandType.ChatInput,
  options: [{
    name: 'option',
    description: 'A sample option',
    type: ApplicationCommandOptionType.String,
  }],
  execute: (message, args) => {
    axios
      .post('https://api.openai.com/v1/completions', {
        prompt: args.join(' '),
        max_tokens: 100,
        n: 1,
        temperature: 0.5,
        model: 'text-davinci-003',
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      })
      .then(function (response) {
        const reply = response.data.choices[0].text;
        message.reply(reply);
      })
      .catch(function (error) {
        console.error('error', error.code);
      });
  }
}