const { RichEmbed } = require("discord.js")
const {
  Permissions: { FLAGS },
} = require("discord.js")

module.exports = {
  name: "clear",
  description: "Clear number of messages in specific channel.",
  args: true,
  usage: "<amount>",
  botPermissions: [FLAGS.MANAGE_MESSAGES],
  userPermissions: [FLAGS.ADMINISTRATOR],

  run(msg, args) {
    const { channel, guild, member, author } = msg

    const amountArg = parseInt(args[0])

    if (!Number.isInteger(amountArg)) {
      return channel.send(`${author} Musisz określić liczbę wiadomości do usunięcia!`)
    }

    if (amountArg < 2 || amountArg >= 100) {
      return channel.send(
        "Ilość usuwanych wiadomości musi być większa niż 1 i mniejsza niż 100.",
      )
    }

    channel.bulkDelete(amountArg) 
    return channel.send(`Admin *${author}* wyczyścił ${amountArg} wiadomości!`)
    
}
}
