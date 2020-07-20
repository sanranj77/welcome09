const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", async () => {
console.log(`${client.user.tag}!`);
console.log(`Hay ${client.users.silze} usuarios.`);
client.user.setGame(`BY HAMA`);
});


client.on("guildMemberAdd", member => {
let memberavatar = member.user.avatarURL;
let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(memberavatar)
.addField(":bust_in_silhouette: | name : ", `${member}`)
.addField(":microphone2: | Welcome!", `Welcome to the server, ${member}`)
.addField(":id: | User :", "**[" + `${member.id}` + "]**")
.addField(
":family_mwgb: | Your are the member",
`${member.guild.memberCount}`
)
.addField("Name", `<@` + `${member.id}` + `>`, true)
.addField("Server", `${member.guild.name}`, true)
.setFooter(`**${member.guild.name}**`)
.setTimestamp();

member.send(embed);
});



client.on("guildMemberAdd", member => {
let channel = member.guild.channels.find("name", "🤚🏻│𝚆𝙴𝙻𝙲𝙾𝙼𝙴");
let memberavatar = member.user.avatarURL;
if (!channel) return;
let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(memberavatar)
.addField("> :bust_in_silhouette: | ناوی مێمبەر : ", `${member}`)
.addField("> ::wave::hibiscus:|یەخوا بەخێر بێی دڵ دڵ", `, `)
.addField("> :id:| بەکارھێنەر :", "**[" + `${member.id}` + "]**")
.addField("> :family_mwgb:| تۆ کەسی ژمارە", `${member.guild.memberCount}`)
.addField("ناوی سێرڤەر:rainbow:⚡️", `${member.guild.name}`, true)
.addField("ژماری میمبەرەکان", `${member.guild.memberCount}` + "کەس")
.setTimestamp("کاتی دروست کردنی ئەکاونتی دیسکۆرد", member.guild.createdAt)
.setImage(
"https://cdn.discordapp.com/attachments/697877187877142728/698103369579102238/PicsArt_04-10-11.05.18.png"
)
.setFooter(`**${member.guild.name}**`)
.setTimestamp();

channel.sendEmbed(embed);
});

client.on("guildMemberRemove", member => {
let channel = member.guild.channels.find("name", "🚶🏻│𝐋𝐄𝐅𝐓𝐒");
let memberavatar = member.user.avatarURL;
if (!channel) return;
let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(memberavatar)
.addField("ناوی مێمبەر:", `${member}`)
.addField("لێفتی کرد لە سێرڤەر")
.addField("هاهاهاهاهاه ملی خۆی شکاند😂")
.addField("ژمارەی مێمبەری سێرڤەر", `${member.guild.memberCount}` + " کەس")
.setImage(
"https://cdn.discordapp.com/attachments/696012672180813894/696074057812017202/2d694399-224b-4648-b034-03f3920c878b.png"
)
.setFooter(
`==== **${member.guild.name}====`,
""
)
.setTimestamp();

channel.sendEmbed(embed);
});

client.login("NzIwMzAxMTM3MDEzNjM3MTgw.XxX2RA.Dk_z4jYeGgK5OeVHL9HS5fC2rkY");
