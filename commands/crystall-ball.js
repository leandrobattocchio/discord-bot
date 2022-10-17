const { SlashCommandBuilder } = require('discord.js')
const respuestas = ['Si', 'No', 'Tal vez', 'Me mataste pa, no soy de aca']

module.exports = {
  data: new SlashCommandBuilder()
    .setName('question')
    .setDescription('Replies u question with a really cool answer!')
    .addStringOption(option =>
      option.setName('input')
        .setDescription('Enter your question here')
        .setRequired(true)),
  async execute (interaction) {
    const pregunta = interaction.options.getString('input')
    await interaction.reply(` Pregunta: ${pregunta}\nRespuesta: ${respuestas[Math.floor(Math.random() * respuestas.length)]}`)
  }
}
