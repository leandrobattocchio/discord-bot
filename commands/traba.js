const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('traba')
    .setDescription('se comio un traba')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('Quien se come un traba?')
        .setRequired(true)
    ),
  async execute (interaction) {
    const embed = new EmbedBuilder().setTitle('Patea o ataja? 🌈').setColor(0x0f40d4).setDescription('Dificil decision...')
      .setImage('attachment://traba.gif').setTimestamp()
    const user = interaction.options.getUser('user')

    interaction.reply({ content: `A <@${user.id}> le gustan los trabas! 👨`, embeds: [embed], files: ['./gifs/traba.gif'] })
  }
}
