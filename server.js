const Discord = require('discord.js');
const client = new Discord.Client();
client.login("NzIwMzAxMTM3MDEzNjM3MTgw.XxQx9Q.vQq3IGUZzZWZOMBPyytNjSzykqw")
const prefix = "-"

client.on("ready", () => {
console.log(".......HULK.......")
}
)


client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`OWNER BOT |❗HAMA`,"http://twitch.tv/S-F")
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


const moment = require('moment');

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
