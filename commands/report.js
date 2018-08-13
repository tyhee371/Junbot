const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!rUser) return message.channel.send(" Couldn't find user!");
            let reason = args.join(" ").slice(22);
    
            let reportEmbed = new Discord.RichEmbed()
            .setDescription("Reports")
            .setColor("#ffa3d8")
            .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
            .addField("Reported By", `${message.author} with ID:${message.author.id}`)
            .addField("Channel", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", reason);
    
            let reportChannel = message.guild.channels.find(`name`, "reports");
            if(!reportChannel) return message.channel.send("Can't find reports channel.");
            
            
             message.channel.send(reportEmbed);

}

module.exports.help = {
    name: "report"
}