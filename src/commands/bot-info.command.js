const { RichEmbed } = require("discord.js")

module.exports = {
  name: "bot-info",
  description: "Display bot info.",

  run(msg, args) {
    const { channel } = msg

    const botAuthor = "**FReszuu#1768**"
    const botVersion = "v1.0"
    const botName = "Opiekun"
    const botDescription =
      "Bot, który opiekuje się serwerem."

    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle(botName)
      // Set the color of the embed
      .setColor(0xb348ff)
      // Set the main content of the embed
      .setDescription(botDescription)
      .addField("Autor", botAuthor, true)
      .addField("Wersja", botVersion, true)

    channel.send(embed)
  },
}
