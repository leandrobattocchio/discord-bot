const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const gifs = ['carpincho', 'leo', 'mateca', 'tea-mate']

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mate')
    .setDescription('Pedis un mate')
    .addUserOption(option =>
      option.setName('user')
        .setDescription('A quien le queres dar un mate pa')
        .setRequired(false)
    ),
  async execute (interaction) {
    const gif = gifs[Math.floor(Math.random() * gifs.length)]

    const embed = new EmbedBuilder().setTitle('Toma un matecito pa 🧉').setColor(0x8FE746)
      .setImage(`attachment://${gif}.gif`).setTimestamp()
    const user = interaction.options.getUser('user')

    if (user) {
      await interaction.reply(`<@${user.id}>`)
      interaction.channel.send({ embeds: [embed], files: [`./gifs/${gif}.gif`] })
    } else {
      await interaction.reply({ embeds: [embed], files: [`./gifs/${gif}.gif`] })
    }
  }
}
