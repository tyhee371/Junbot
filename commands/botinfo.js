const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Name", bot.user.username)
    .addField("Info", "Hi I'm 歓迎 | Kangei feels free to join my server!")
    .addField("Disocrd Server", "https://discord.gg/cdj8GHR")
    .addField("Created By", ".Jun#0613")
    .addField("Created On", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
