const Discord = require("discord.js");
const naqeb = new Discord.Client();
const invites = {};
const wait = require("util").promisify(setTimeout);
const moment = require("moment");
const fs = require("fs");
var prefix = "N/";

naqeb.on("ready", () => {
  console.log(`Logged in as ${naqeb.user.tag}!`);
  console.log("");
  console.log("");
  console.log(
    "╔[═════════════════════════════════════════════════════════════════]╗"
  );
  console.log(`[Start] ${new Date()}`);
  console.log(
    "╚[═════════════════════════════════════════════════════════════════]╝"
  );
  console.log("");
  console.log("╔[════════════════════════════════════]╗");
  console.log(`Logged in as * [ " ${naqeb.user.username} " ]`);
  console.log("");
  console.log("information:");
  console.log("");
  console.log(`servers! [ " ${naqeb.guilds.size} " ]`);
  console.log(`Users! [ " ${naqeb.users.size} " ]`);
  console.log(`channels! [ " ${naqeb.channels.size} " ]`);
  console.log("╚[════════════════════════════════════]╝");
  console.log("");
  console.log("╔[════════════]╗");
  console.log(" Bot Is Online");
  console.log("╚[════════════]╝");
  console.log("");
  console.log("");
});

naqeb.on("guildMemberAdd", member => {
  let welcomer = member.guild.channels.find(
    channel => channel.name === "welcome" /// naqeb | hama
  );
  if (!welcomer) return;
  if (welcomer) {
    moment.locale("en-ly");
    var h = member.user;
    let norelden = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(h.avatarURL)
      .setAuthor(h.username, h.avatarURL)
      .setTitle("🔹WELCOME🔹")
      .setDescription("🔸بەخێریبێی بۆ سێرڤەرەکەم بەهیوای کاتێکی خۆش🔸")
      .addField(" تۆ کەسی ژمارە :-", member.guild.memberCount + "ی")
      .addField(
        ":🔻کاتی دانانی ئەکاونتی دیسکۆرد🔻",
        `${moment(member.user.createdAt).format(
          "D/M/YYYY h:mm a"
        )} **\n** \`${moment(member.user.createdAt).fromNow()}\``,
        true
      )
      .addField(
        ": 🔻کاتی هاتنە ناوەوەی سێرڤەر🔻",
        `${moment(member.joinedAt).format("D/M/YYYY h:mm a")} \n\`\`${moment(
          member.joinedAt
        )
          .startOf(" ")
          .fromNow()}\`\``,
        true
      )
      .setImage("")//lera rasmek dane ba kayfexot
      .setFooter(`${h.tag}`, ""); //////rsme sar server lera dane

    welcomer.send({ embed: norelden });
  }
});

naqeb.on("guildMemberRemove", member => {
  let channel = member.guild.channels.find(
    "name",
    "left"//nawe channelaka lera dane
  );
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField("ناوی مێمبەر:", `${member}`)
    .addField("لێفتی کرد لە سێرڤەر")
    .addField("رۆشت لە سیرڤەر")
    .addField("ژمارەی مێمبەری سێرڤەر", `${member.guild.memberCount}` + " کەس")
    .setImage("")//wenay left lera dane naqeb | hama
    .setFooter(`==== **${member.guild.name}====`, "")
    .setTimestamp();

  channel.sendEmbed(embed);
});

naqeb.on("message", zaid => {
  if (zaid.content === prefix + "bot") {
    const bot = new Discord.RichEmbed()
      .setAuthor(naqeb.user.username, naqeb.user.avatarURL)
      .setColor("#00000")
      .addField(
        "**____خێرای بۆتەکە____**: ",
        ` ${Date.now() - zaid.createdTimestamp}` + "__ __ ",
        true
      )
      .addField("**__سێرڤەرەکان__** : ", `→ ${naqeb.guilds.size}`, true)
      .addField("**__چەناڵەکەن__** : ", `→ ${naqeb.channels.size} `, true)
      .addField("**__میمبەرەکان__** : ", `→ ${naqeb.users.size} `, true)
      .addField("**__ناوی بۆتەکە__** : ", `→ ${naqeb.user.tag} `, true)
      .addField("**دروست کەری بۆتەکە** : ", `→ nawe xot lera dane `)

      .setImage("")//rmek ba fle xot
      .setFooter(zaid.author.username, zaid.author.avatarURL);
    zaid.channel.send(bot);
  }
});


naqeb.on("message", async message => {
  if (message.content === prefix + "unbansall") {
    var user = message.mentions.users.first();
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("❌|**`ADMINISTRATOR`ببورە تۆ ناتوانی `**");
    if (!message.guild.member(naqeb.user).hasPermission("BAN_MEMBERS"))
      return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

    message.guild.fetchBans().then(ba => {
      ba.forEach(ns => {
        message.guild.unban(ns);
        const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`**:white_check_mark: هەموو باندەكان لادرا**`)
          .setFooter(
            "داواكرا لە لایەن" + message.author.username,
            message.author.avatarURL
          );
        message.channel.sendEmbed(embed);
        guild.owner.send(`Server : ${guild.name}
‎  **هەموو باندەكان لادرا لەلایەن** : <@${message.author.id}>`);
      });
    });
  }
});

naqeb.on("message", message => {
  if (message.content.startsWith(prefix + "muvall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("x You Dont Have Perms MOVE_MEMBERS");
    if (!message.guild.member(naqeb.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("x I Dont Have Perms MOVE_MEMBERS");
    if (message.member.voiceChannel == null)
      return message.channel.send("تۆ پێویستە لە ڤۆیسێكا بیت");
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel.send("white_check_mark: Success Moved All To Your Channel");
  }
});

naqeb.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}?bg=default.png`
          }
        ]
      })
    );
  }
});

naqeb.on("ready", () => {
  naqeb.user.setActivity("N/help ", { type: "Playing" });
  naqeb.user.setStatus("idle");
});
naqeb.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
    message.channel.send(` ***Help Comand***
‎          ***__بۆیارمەتی__***
 
┏◣ craete channel welcome ◢┓

┏◣craete channel left ◢┓

┏◣ N/lock◢┓

┏◣ N/unlock◢┓

┏◣N/user◢┓
 
┏◣N/unbansall ◢┓

┏◣ N/muvall  ◢┓

┏◣ N/profile  ◢┓
                               
 ┏◣N/invitebot◢┓
                                      
 ┏◣N/support◢┓ `);
  }
});

naqeb.on("message", async message => {
  if (message.content.startsWith(prefix + "invbot")) {
    let invite = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setTitle(
        "**__کلیک لێرە بکە بۆ ئەوەی بۆت ئەکە ئینڤاتی سێرڤەری خۆت بکەی💖__**"
      )
      .setURL(``);//linke botaka lera dane
    message.channel.sendEmbed(invite);
  }
});
naqeb.on("message", message => {
  if (message.content === prefix + "support") {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("RANDOM")
      .addField(" سەپۆرتی سیرڤەر بەکەن", " linke server ");

    message.channel.sendEmbed(embed);
  }
});
naqeb.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.channel.guild)
      return message.reply(" This command only for servers");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply(" تۆناتوانی ئەم کارە بکەی");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply(":white_check_mark::lock: بە سەرکەوتوی داخرا ");
      });
  }
  //FIRE BOT
  if (message.content === prefix + "unlock") {
    if (!message.channel.guild)
      return message.reply(" This command only for servers");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("تۆناتوانی ئەم کارە بکەی");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply(":white_check_mark::unlock: بە سەرکەوتوی کرایەوە ");
      });
  }
});

naqeb.login("");
