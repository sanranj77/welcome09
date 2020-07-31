const Discord = require('discord.js');
const client = new Discord.Client();
const invites = {};
const wait = require("util").promisify(setTimeout);
const moment = require("moment"); 
const fs = require("fs");
var prefix = "=";




client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log('')
console.log('')
console.log('╔[═════════════════════════════════════════════════════════════════]╗')
console.log(`[Start] ${new Date()}`);
console.log('╚[═════════════════════════════════════════════════════════════════]╝')
console.log('')
console.log('╔[════════════════════════════════════]╗');
console.log(`Logged in as * [ " ${client.user.username} " ]`);
console.log('')
console.log('information:')
console.log('')
console.log(`servers! [ " ${client.guilds.size} " ]`);
console.log(`Users! [ " ${client.users.size} " ]`);
console.log(`channels! [ " ${client.channels.size} " ]`);
console.log('╚[════════════════════════════════════]╝')
console.log('')
console.log('╔[════════════]╗')
console.log(' Bot Is Online')
console.log('╚[════════════]╝')
console.log('')
console.log('')
});



client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find(
channel => channel.id === "722082389928574986"/////// id chanali welcom lera dani.ok dlm
);
if (!welcomer) return;
if (welcomer) {
moment.locale('en-ly');
var h = member.user;
let norelden = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(h.avatarURL)
.setAuthor(h.username, h.avatarURL)
.setTitle('🔹WELCOME🔹')
.setDescription('🔸بەخێریبێی بۆ سێرڤەرەکەم بەهیوای کاتێکی خۆش🔸')
.addField(" تۆ کەسی ژمارە :-", member.guild.memberCount + "ی")
.addField(':🔻کاتی دانانی ئەکاونتی دیسکۆرد🔻', `${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``, true)
.addField(': 🔻کاتی هاتنە ناوەوەی سێرڤەر🔻', `${moment(member.joinedAt).format('D/M/YYYY h:mm a')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)
.setImage("https://media.discordapp.net/attachments/547147462318620672/687508796330999814/image0-2.gif")////lera rasmek ba dle xot dani
.setFooter(`${h.tag}`, "https://cdn.discordapp.com/attachments/721451303976304711/734862838929031168/PicsArt_06-14-09.05.36.png")//////lera rasmi sar server dani

welcomer.send({ embed: norelden });


}
});


client.on("guildMemberRemove", member => {
let channel = member.guild.channels.find("name", "🚶🏻│𝙻𝙴𝙵𝚃-𝚂");
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


/////info bot by hama//////
client.on("message", zaid => {
if (zaid.content === "=bot") {
const bot = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setColor("#00000")
.addField(
"**____خێرای بۆتەکە____**: ",
` ${Date.now() - zaid.createdTimestamp}` + "__ __ ",
true
)
.addField("**__سێرڤەرەکان__** : ", `→ ${client.guilds.size}`, true)
.addField("**__چەناڵەکەن__** : ", `→ ${client.channels.size} `, true)
.addField("**__میمبەرەکان__** : ", `→ ${client.users.size} `, true)
.addField("**__ناوی بۆتەکە__** : ", `→ ${client.user.tag} `, true)
.addField("**دروست کەری بۆتەکە** : ", `→ <@607022732626100234>`,)

.setImage(
""
)
.setFooter(zaid.author.username, zaid.author.avatarURL);
zaid.channel.send(bot);
}
});


client.on("message", message => {
if (message.author.bot) return;

let args = message.content.split(" ");

let command = args[0];

let messagecount = args[1];

if (command == prefix + "clear") {
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
message.channel.send("يجب ان تمتلك خاصية `MANAGE_MESSAGES` ");
} else if (!messagecount) {
message.channel.send("**قم بإدراج عدد الرسائل المراد حذفها**");
} else {
message.channel.bulkDelete(messagecount);
message.channel
.send("**رسالة `" + messagecount + "` لقد تم حذف**")
.then(mes => mes.delete(3000));
}
}
});


client.on("message", pixelbot => {
// itzZa1D - Codes Team.
if (pixelbot.content.startsWith(prefix + "user")) {
// itzZa1D - Codes Team.
if (pixelbot.author.bot) return;
if (!pixelbot.guild)
return pixelbot.reply("**:x: - This Command is only done on Servers**");
pixelbot.guild.fetchInvites().then(invites => {
// itzZa1D - Codes Team.
let personalInvites = invites.filter(
i => i.inviter.id === pixelbot.author.id
);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var roles = pixelbot.member.roles
.map(roles => `**__${roles.name}__ |**`)
.join(` `);
let pixeluser = new Discord.RichEmbed() // itzZa1D - Codes Team.
.setColor("#00000")
.setTitle(" :beginner: :heartpulse: | Use r Info") // itzZa1D - Codes Team.
.setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
.addField("**✽ Name :** ", pixelbot.author.username, true)
.addField("**✽ Tag :** ", pixelbot.author.discriminator, true)
.addField("**✽ ID :** ", pixelbot.author.id, true) // itzZa1D - Codes Team.
.addField(
"**✽ Joined At :** ",
moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
true
)
.addField(
"**✽ Created At :** ",
moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
true
)
.addField("**✽ Total invites :** ", inviteCount, true)
.setTimestamp(); // itzZa1D - Codes Team.

pixelbot.channel.sendEmbed(pixeluser).then(c => {}); // itzZa1D - Codes Team.
});
}
}); // itzZa1D - Codes Team.






client.on("message", message => {
if (message.content.startsWith(prefix + "server")) {
if (!message.channel.guild)
return message.channel.send(` | This Command is used only in servers!`);
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
const days = millis / 1000 / 60 / 60 / 24;
var embed = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField(":id:✽** Server ID:**", `» ${message.guild.id} `, true)
.addField(
":calendar:✽** Created On**",
`» ${message.guild.createdAt.toLocaleString()}`,
true
)
.addField(":crown: ✽**Server Owner**", `**${message.guild.owner}**`, true)
.addField(
`✽** Members ** [${message.guild.members.size}]`,
`**${
message.guild.members.filter(c => c.presence.status !== "offline")
.size
}** **Online**`,
true
)
.addField(
":speech_balloon:✽** Channels **",
`» **${message.guild.channels.filter(m => m.type === "text").size}**` +
" TexT | VoicE " +
`**${message.guild.channels.filter(m => m.type === "voice").size}** `,
true
)
.addField(":earth_africa:✽** Region **", ` ${message.guild.region}`, true)
.setImage(
""
)

.setColor("#000000");
message.channel.sendEmbed(embed);
}
});

client.on("message", async msg => {
if (msg.channel.type === "dm") return;
if (msg.author.bot) return;
if (msg.content.startsWith(prefix + "setstats")) {
if (!msg.guild.member(msg.author).hasPermission("MANAGE_CHANNELS"))
return msg.reply("❌ **go play minecraft**");
if (!msg.guild.member(client.user).hasPermission(["MANAGE_CHANNELS"]))
return msg.reply("❌ **البوت لا يمتلك صلاحية**");
var ggg = msg.guild.createChannel("SERVER STATS", "category").then(kk => {
var ccc = msg.guild.createChannel("SERVER STATS", "voice").then(al => {
var aa = msg.guild.createChannel("SERVER STATS", "voice").then(alp => {
var aaa = msg.guild
.createChannel("SERVER STATS", "voice")
.then(alph => {
al.setParent(kk);
alp.setParent(kk);
alph.setParent(kk);

al.overwritePermissions(msg.guild.id, {
CONNECT: false,
SPEAK: false
});
alp.overwritePermissions(msg.guild.id, {
CONNECT: false,
SPEAK: false
});
alph.overwritePermissions(msg.guild.id, {
CONNECT: false,
SPEAK: false
});
setInterval(() => {
var currentTime = new Date(),
hours = currentTime.getHours() + 3,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
al.setName(
`Voice Online :[ ${
msg.guild.members.filter(m => m.voiceChannel).size
} ]`
);
alp.setName(
`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`
);
alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
}, 1000);
});
});
});
});
}
});







client.on("message", message => {
if (message.content.startsWith(prefix + "=send")) {
if (!message.member.hasPermission("ADMINISTRATOR")) return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(" ");
message.guild.members
.filter(m => m.presence.status !== "ofline")
.forEach(m => {
m.send(`${argresult}\n ${m}`);
});
message.channel.send(
`\`${
message.guild.members.filter(m => m.presence.status !== "online").size
}\` : نامەکەت نێردرا`
);
message.delete();
}
});

client.on("ready", () => {
console.log(`----------------`);
console.log(`Desert Bot- Script By : HAMA`);
console.log(`----------------`);
console.log(
`ON ${client.guilds.size} Servers ' Script By : HAMA' `
);
console.log(`----------------`);
console.log(`Logged in as ${client.user.tag}!`);

});





client.login("NzIwMzAxMTM3MDEzNjM3MTgw.XuD-tQ.4Lczff4-hhmHO9CrjWSiSDGMOL4")
