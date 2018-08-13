const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .setTitle("User Infomation")
    .setTitle(`${user.username}#${user.discriminator}`)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Created At:", `${moment.utc(member.joinedAt).format("dddd, MMMM do YYYY, HH:mm:ss")}`, true)
    .addField("Am I a BOT?", `${user.bot}`, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("Game Playing:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
    message.channel.send({embed})
}

module.exports.help = {
    name: "userinfo",
    description: "Displays a user's info"
}