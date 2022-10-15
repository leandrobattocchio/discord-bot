const { SlashCommandBuilder } = require('discord.js')
const gifs = ['https://tenor.com/view/tea-mate-gif-12753621',
  'https://media.tenor.com/0F1IPiIH2IAAAAAM/chimavara-capivara.gif',
  'https://media.tenor.com/9dcZbORyqKcAAAAC/dicapio-mate-great-gatsby-mate.gif',
  'https://i.pinimg.com/originals/97/67/01/976701e0ec872990cea93b1c44aaa3cf.gif']

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mate')
    .setDescription('Pedis un mate'),
  async execute (interaction) {
    setTimeout(() => {
      interaction.channel.send(gifs[Math.floor(Math.random() * gifs.length)])
    }, 1000)
    await interaction.reply('Toma un matecito pa 🧉   ')
  }
}
