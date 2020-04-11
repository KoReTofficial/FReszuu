const {
  Permissions: { FLAGS },
} = require("discord.js")

module.exports = {
  name: "kick",
  description: "Kick user.",
  args: true,
  usage: "<user> [reason]",
  botPermissions: [FLAGS.KICK_MEMBERS],
  userPermissions: [FLAGS.KICK_MEMBERS],

  run(msg, args) {
    const { channel, guild, mentions, author } = msg

    const userArg = args[0]
    const reasonArg = [...args].slice(1).join(" ")

    const userToKick = mentions.users.first()

    if (!userToKick) {
      return msg.reply("musisz podać prawidłowego użytkownika do wyrzucenia.")
    }

    if (userToKick.id === author.id) {
      return msg.reply("nie możesz się sam wyrzucić!")
    }

    const memberToKick = guild.members.cache.get(userToKick.id)

    if (!memberToKick.kickable) {
      return channel.send("Potrzebuję więcej uprawnień, aby wykonać to polecenie.")
    }

    memberToKick.kick(reasonArg).then((res) => {
      channel.send(
        `User ${res.displayName} has been kicked.\n${
          reasonArg ? `Reason: ${reasonArg}` : ""
        
        }` (msg.author.tag`${author} zostałeś wyrzucony z powodu ${reasonArg}`),
        )
      })
    },
  }
  
