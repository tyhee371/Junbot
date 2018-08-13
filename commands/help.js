const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let helpembed = new Discord.RichEmbed()
    .setTitle("Help Menu")
    .setColor("RANDOM")
    .addField("Member Commands", "help, serverinfo, botinfo, userinfo, say, coins, level, cat, dog, and report.");

    message.channel.send(helpembed);

    if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .setDescription("Mod Help Menu")
    .setColor("RANDOM")
    .addField("Mod Commands", "kick, warn, ban, and clear");

    try{
        await message.author.send(modembed);
        message.react("👌");
    }catch(e){
        message.reply("Your DMs are locked. I cannot send you the mod commands.");
    }
}

}


module.exports.help = {
    name: "help"
}