const dbd = require("dbd.js");

const bot = new dbd.Bot({
  token: "ODI0MzM4NTk0MTc1OTA5OTcx.YFt7JA.HBNJjcdBWC-WPsYNuMLofPptOCs",
  prefix: "$getServerVar[prefix]"
});

bot.onMessage();

bot.command({
  name: "ping",
  code: `Pong! \`$ping\` ms`
});

bot.status({
  text: "$serverCount Server And $allMembersCount Members !",

  type: "PLAYING",

  time: 12
});

bot.status({
  text: "sh.help For All Commands !",

  type: "LISTENING",

  time: 12
});

bot.status({
  text: "Summer Holidays V 1.0.1 | Beta Release",

  type: "PLAYING",

  time: 12
});

bot.command({
 name: "boobs",
 code: `$title[🔞 Boobs]
$image[$jsonRequest[https://nekos.life/api/v2/img/boobs;url]]
$footer[Be Careful Man]
$color[RANDOM]
$addTimestamp
$onlyNSFW[You Need Turn On \`NSFW\` Permission Channel]`
});

bot.command({
  name: "blowjob",
  code: `$title[🔞 BlowJob]
  $image[$jsonRequest[https://nekos.life/api/v2/img/blowjob;url]]
  $footer[Be Careful Man]
  $addTimestamp
  $color[RANDOM]
  $onlyNSFW[You Need Turn On \`NSFW\` Permission Channel]`
});

bot.command({
  name: "neko",
  code: `$title[Neko Lewd Image :cat:]
  $image[$randomText[https://cdn.nekos.life/lewd/lewd_neko012.jpg;https://cdn.nekos.life/lewd/lewd_neko503.jpeg;https://cdn.nekos.life/lewd/lewd_neko028.png;https://cdn.nekos.life/lewd/lewd_neko029.png;https://cdn.nekos.life/lewd/lewd_neko510.jpeg;https://cdn.nekos.life/lewd/lewd_neko_301.jpg;https://cdn.nekos.life/lewd/lewd_neko$random[01;600].png]]
  $footer[SWAT Home Coming XD]
  $addTimestamp
  $color[RANDOM]
  $onlyNSFW[You Need Turn On \`NSFW\` Permission Channel]`
});

bot.command({
  name: "nsfw-avatar",
  code: `$title[🔞 Nsfw Avatar]
  $image[$jsonRequest[https://nekos.life/api/v2/img/nsfw_avatar;url]]
  $footer[FBI Home Coming XD]
  $addTimestamp
  $color[RANDOM]
  $onlyNSFW[You Need Turn On \`NSFW\` Permission Channel]`
});

bot.command({
  name: "kiss",
  code: `$title[:kissing_heart: **Kiss**]
  $image[$jsonRequest[https://nekos.life/api/kiss;url]]
  $argsCheck[>1;⛔ **Please Mentioned The User**]
  $color[RANDOM]`
});

bot.command({
  name: "hug",
  code: `$title[:hugging: **Hug**]
  $image[$jsonRequest[https://nekos.life/api/hug;url]]
  $argsCheck[>1;⛔ **Please Mentioned The User**]
  $color[RANDOM]`
});

bot.command({
  name: "slap",
  code: `$title[:slight_smile: **Slap**]
  $image[$jsonRequest[https://nekos.life/api/v2/img/slap;url]]
  $argsCheck[>1;⛔ **Please Mentioned The User**]
  $color[RANDOM]`
});

bot.command({
  name: "mute",
  code: `
 muteID: $mentioned[1]
 mutedRole: $roleID[Muted]]
 $giveRole[$mentioned[1];$roleID[Muted]]
 $findUser[$message[1]]] has been muted!
 $onlyIf[$mentioned[1]!=$clientID;{description:I can't mute myself!}]
 $onlyIf[$mentioned[1]!=$authorID;{description:You can't mute yourself!}]
 $onlyBotPerms[manageroles;{description:I don't have permissions to do that! | Missing permissions: \`MANAGE_ROLES\`}]
 $onlyIf[$roleExists[$findRole[Muted]]==true;$createRole[Muted]]
 $onlyIf[$hasRoles[$mentioned[1];$roleID[Muted]]==false;{description:User is already muted!}]
 $onlyIf[$mentioned[1]!=;{description: You need to provide a user to mute!}]
 $onlyPerms[manageroles;{description:To use this you require the \`MANAGE_ROLES\` permission!}]
 $suppressErrors[Something went wrong...]
 $if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Mute}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
});

bot.command({
  name: "set-mute",
  code: `
$setServerVar[mute;$mentionedRoles[1]] 
$description[Set Mute Role to <@&$mentionedRoles[1]>]
$color[RANDOM]
$argsCheck[>1;Please mention a role muted] 
$onlyPerms[manageserver;You need \`MANAGE_SERVER\` permission!]`
});

bot.command({
  name: "tempmute",
  aliases: "tm",
  code: `
$sendDM[$mentioned[1];{description:Your mute time has finished in $serverName[$guildID]}{color:BLUE}]
$takeRoles[$mentioned[1];$getServerVar[mute]]
$wait[$message[2]]
$channelSendMessage[$channelID;
Muted: <@$mentioned[1]> 
For: $message[2]]
Reason: $message[<2]]
$giveRoles[$mentioned[1];$getServerVar[mute]]
$agrsCheck[<2;Please Type The Reason!]
$agrsCheck[2;Please Enter The time!]
$agrsCheck[1;Please Mention The User!]
$onlyPerms[manageroles;You need \`MANAGE_ROLES\` permission!]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Temp-Mute}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{field:Time:$message[2]}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
});

bot.command({
  name: "userinfo",
  aliases: "whois",
  code: `
 $thumbnail[$userAvatar[$findUser[$message]]]
 $title[User Info]
 $addField[**Permissions**;$userPerms[$findUser[$message]];yes]
 $addField[**Roles**;$userRoles[$findUser[$message];mentions];yes]
 $addField[**Highest Role**;<@&$highestRole[$findUser[$message]]>;yes]
 $addField[**Account Created**;$creationDate[$findUser[$message];date] ($creationDate[$findUser[$message];time]);yes]
 $addField[**Joined**;$memberJoinedDate[$findUser[$message];time] ago;yes]
 $addField[**Badges**;$getUserBadges[$findUser[$message]];yes]
 $addField[**Custom Status**;$getCustomStatus[$findUser[$message]];yes]
 $addField[**Status**;$customEmoji[$status[$findUser[$message]]] $status[$mentioned[1;yes]];yes]
 $addField[**Platform**;$customEmoji[$platform[$findUser[$message]]] $platform[$mentioned[1;yes]];yes]
 $addField[**Avatar**;[User Avatar\\]($userAvatar[$findUser[$message];2048;yes]);yes]
 $addField[**ID**;$mentioned[1;yes];yes]
 $addField[**Name**;$username[$findUser[$message]]#$discriminator[$findUser[$message]];yes]
 `
});

bot.command({
  name: "work",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[45;100]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[5;10]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Work]
$description[
$username, $randomText[it looks like you'd do anything for money 😳.;you were employed as a construction worker today!;you're a discord workaholic!;nice music dude! Here, you earned it!;you were employed as a hair stylist today;hacking can make you a good deal of money if you know what you're doing! From your last hack job, you made;your bitcoin miner scraped up some cash for you!;were you not satisfied with your past employers? Well I counted the tips from your pole dancing gig and you didn't do too bad 😳]
]
$footer[💵 +$$random[45;100] | 🗡 +$random[5;10]xp]
$globalCooldown[60s;Try again in %time%]`
});

bot.command({
  name: "beg",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[0;25]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[0;5]];$authorID]
$title[Beg]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$username, $randomText[Begging is for the weak so here;Here, take this and go;Here, don't let this be a habit;I take you for a well put together human being, why are you begging?;Why can't you just get a job?]
]
$footer[💵 +$$random[0;25] | 🗡 +$random[0;5]xp]
$globalCooldown[30s;Quit being a begger and try again in %time%]`
});

bot.command({
  name: "bal",
  code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;Discord bots dont have a balance]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[RANDOM]
$title[$username[$mentioned[1;yes]]'s Balance]
$description[
$addField[🗡 Experience;
$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]]xp
]
$addField[💵 Wallet;
$$numberSeparator[$getGlobalUserVar[Wallet;$mentioned[1;yes]]]
]
$addField[🏦 Bank;
$$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]
]
$addField[📊 Net Worth;
$$numberSeparator[$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]
]]`
});

bot.command({
  name: "profile",
  code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ Discord bots dont have profiles**]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$title[Economy profile]
$color[RANDOM]
$description[
**__User/ID__**:
<@$mentioned[1;yes]>
$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]
(\`$mentioned[1;yes]\`)
 
**__Chests__**:
**$getGlobalUserVar[DailyChest;$mentioned[1;yes]]** | Daily
**$getGlobalUserVar[lucky;$mentioned[1;yes]]** | Lucky
**$getGlobalUserVar[spiteful;$mentioned[1;yes]]** | Spiteful
 
**__Flow__**:
\`💵\` **$$numberSeparator[$getGlobalUserVar[Wallet;$mentioned[1;yes]]]**
\`🏦\` **$$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]**
\`📊\` **$$numberSeparator[$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]**
\`🗡\` **$numberSeparator[$getGlobalUserVar[XP;$mentioned[1;yes]]]**xp
 
**__Assets__**:
\`💼\` ($getGlobalUserVar[duffle;$mentioned[1;yes]]) Bags
\`📺\` ($getGlobalUserVar[tv;$mentioned[1;yes]]) TVs
\`📱\` ($getGlobalUserVar[smartphone;$mentioned[1;yes]]) Smartphones
\`💻\` ($getGlobalUserVar[laptop;$mentioned[1;yes]]) Laptops
\`🚗\` ($getGlobalUserVar[car;$mentioned[1;yes]]) Cars
\`🚚\` ($getGlobalUserVar[truck;$mentioned[1;yes]]) Trucks
\`🚁\` ($getGlobalUserVar[helicopter;$mentioned[1;yes]]) Helicopters
\`🏫\` ($getGlobalUserVar[apartment;$mentioned[1;yes]]) Apartments
\`🏡\` ($getGlobalUserVar[house;$mentioned[1;yes]]) Houses
\`🏰\` ($getGlobalUserVar[mansion;$mentioned[1;yes]]) Mansions
]`
});

bot.command({
  name: "deposit",
  aliases: "dep",
  code: `$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank;$authorID];$message];$authorID]
$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];$message];$authorID]
$title[Deposited]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, you deposited $$numberSeparator[$message] into your bank!]
$footer[💵 $$numberSeparator[$sub[$getGlobalUserVar[Wallet;$authorID];$message]] | 🏦 $$numberSeparator[$sum[$getGlobalUserVar[Bank;$authorID];$message]] | 📊 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$getGlobalUserVar[Bank;$authorID]]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[Wallet;$authorID];Cannot deposit more than what's in your wallet!]
$argsCheck[>1;How much are you depositing? Try this: \`$getServerVar[prefix]dep <amount>\`]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>0;There's nothing to deposit!]`
});

bot.command({
  name: "withdraw",
  aliases: "with",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$message];$authorID]
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank;$authorID];$message];$authorID]
$title[Withdrew]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, you withdrew $$numberSeparator[$message] from your bank!]
$footer[💵 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$message]] | 🏦 $$numberSeparator[$sub[$getGlobalUserVar[Bank;$authorID];$message]] | 📊 $$numberSeparator[$sum[$getGlobalUserVar[Wallet;$authorID];$getGlobalUserVar[Bank;$authorID]]]]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[Bank;$authorID];Cannot withdraw more than what's in your bank!]
$argsCheck[>1;How much are you withdrawing?]
$onlyIf[$getGlobalUserVar[Bank;$authorID]>0;There's nothing to withdraw!]`
});

bot.command({
  name: "daily",
  code: `$setGlobalUserVar[DailyChest;$sum[$getGlobalUserVar[DailyChest;$authorID];1];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Daily Chest]
$description[
Congrats $username! You received 1 daily chest!
This action can be done once every 12 hours.
]
$footer[To open use, $getServerVar[prefix]open-daily]
$onlyIf[$getGlobalUserVar[DailyChest;$authorID]<1;**You still have an unopened daily chest in your inventory. Open it for room to receive another chest.** \`$getServerVar[prefix]open-daily\`]
$globalCooldown[12h;**⛔ Please wait %time% before you can claim another daily chest!**]`
});

bot.command({
  name: "open-daily",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];250];$authorID]
$setGlobalUserVar[DailyChest;$sub[$getGlobalUserVar[DailyChest;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];15];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Daily Chest]
$description[$username, you opened your Daily Chest!
]
$footer[💵 +$250 | 🗡 +15xp]
$onlyIf[$getGlobalUserVar[DailyChest;$authorID]==1;**⛔ You dont have a Daily Chest yet! Try using \`$getServerVar[prefix]daily\` to receive your Daily Chest and then run this command to open it**]`
});

bot.command({
  name: "heist",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[4800;7600]];$authorID]
$setGlobalUserVar[laptop;$sub[$getGlobalUserVar[laptop;$authorID];1];$authorID]
$setGlobalUserVar[smartphone;$sub[$getGlobalUserVar[smartphone;$authorID];1];$authorID]
$setGlobalUserVar[duffle;$sub[$getGlobalUserVar[duffle;$authorID];1];$authorID]
$setGlobalUserVar[tv;$sub[$getGlobalUserVar[tv;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[20;42]];$authorID]
$color[00ff00]
$thumbnail[$userAvatar[$authorID]]
$title[Heist]
$description[$username, you used a \`Laptop\` to hack the security system in your favor, a rooted \`Smartphone\` to shut down the cameras and used the \`TV\` screen to monitor surveillance while you fill your \`Bag\` with a buttload of cash and then tossed the contraband $randomText[in a lake!;over a bridge!;down a storm drain!;in separate dumpsters around town!;in the bed of a random truck!;on a roof!;in a ditch!]
]
$footer[💵 +$$numberSeparator[$random[4800;7600]] | 🗡 +$random[20;42]]
$onlyIf[$getGlobalUserVar[laptop;$authorID]>=1;Missing laptop. Try working for it and buying one first.]
$onlyIf[$getGlobalUserVar[smartphone;$authorID]>=1;Missing smartphone. Try working for it and buying one first.]
$onlyIf[$getGlobalUserVar[duffle;$authorID]>=1;Missing bag. Try working for it and buying one first.]
$onlyIf[$getGlobalUserVar[tv;$authorID]>=1;Missing TV. Try working for it and buying one first.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=300;You need at least 300 XP to commit a heist! \`XP will not be deducted and is only needed as a requirement!\`]
$globalCooldown[3h;Wait %time% until you can launch another heist!]`
});

bot.command({
  name: "givemoney",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]
$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];$noMentionMessage];$authorID]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username gave $username[$mentioned[1]] money]
$description[
$username gave $username[$mentioned[1]] **$noMentionMessage** :dollar:!
$username[$mentioned[1]] is now holding **$sum[$getGlobalUserVar[Wallet;$mentioned[1]];$noMentionMessage]** :dollar: in his wallet!
]
$onlyIf[$noMentionMessage<=$getGlobalUserVar[Wallet;$authorID];**⛔ You don't have enough in your wallet**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't give money to yourself**]
$onlyIf[$mentioned[1]!=;**⛔ Mention someone to give money to and then the amount, try using this format**: \`$getServerVar[prefix]givemoney <@user> <amount>\`]
$onlyIf[$isBot[$mentioned[1]]!=true;**⛔ You can't give money to a Discord bot**]
$onlyIf[$isNumber[$noMentionMessage]==true;**⛔ That is not a number, try using this format**: \`$getServerVar[prefix]givemoney <@user> <amount>\`]
$suppressErrors[Usage: **$getServerVar[prefix]givemoney <@user> <amount>**]`
});

bot.command({
  name: "shop",
  code: `$thumbnail[$authorAvatar]
$title[Economy Shop]
$color[RANDOM]
$description[
$addField[__Items:__;
\`💼\` **$250 | bag**
\`📺\` **$400 | tv**
\`📱\` **$500 | phone**
\`💻\` **$1,000 | laptop**
\`🚗\` **$10,000 | car**
\`🚚\` **$15,000 | truck**
\`🚁\` **$20,000 | helicopter**
\`🏫\` **$50,000 | apartment**
\`🏡\` **$100,000 | house**
\`🏰\` **$500,000 | mansion**
]
$addField[__Purchasable chests:__;
**$250 | lucky**
**$1,000 | spiteful**
\`Lucky\` - **Press your luck. Nobody loses!**
\`Spiteful\` - **Possibility of winning $10,000 but be warned, it could be spiteful! Goodluck!**
]]`
});

bot.command({
  name: "buy-car",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];10000];$authorID]
$setGlobalUserVar[car;$sum[$getGlobalUserVar[car;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];250];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=10000;Need $10,000 in your wallet, try withrawing it first.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=250;You need 250 XP, in which will be deducted after purchase.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🚗 $username]
$description[
Nice! You bought a Car for $10,000!
**250xp has been deducted!**
You can strip it for parts to scrap for more money and XP.
]
$footer[Usage: $getServerVar[prefix]scrap-car]`
});

bot.command({
  name: "buy-phone",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];500];$authorID]
$setGlobalUserVar[smartphone;$sum[$getGlobalUserVar[smartphone;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>499;Need $500 in your wallet, try withrawing it first]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[📱 $username]
$description[
Nice! You bought a smartphone for $500!
]
$footer[This item is used to commit a heist]`
});

bot.command({
  name: "buy-tv",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];400];$authorID]
$setGlobalUserVar[tv;$sum[$getGlobalUserVar[tv;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>399;Need $400 in your wallet, try withrawing first]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[📺 $username]
$description[
Nice! You bought a TV for $400!
]
$footer[This item is used to commit a heist]`
});

bot.command({
  name: "buy-truck",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];15000];$authorID]
$setGlobalUserVar[truck;$sum[$getGlobalUserVar[truck;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];300];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=15000;Need $15,000 in your wallet, try withrawing it first]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=300;You need 300 XP, in which will be deducted after purchase]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🚚 $username]
$description[
Nice! You bought a Truck for $15,000!
**300xp has been deducted!**
You can strip it for parts to scrap for more money and XP.
]
$footer[Usage: $getServerVar[prefix]scrap-truck]`
});

bot.command({
  name: "buy-laptop",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];1000];$authorID]
$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>999;Need $1,000 in your wallet, try withrawing it first.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[💻 $username]
$description[
Nice! You bought a laptop for $1,000!
]
$footer[This item is used to commit a heist]`
});

bot.command({
  name: "buy-helicopter",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];20000];$authorID]
$setGlobalUserVar[helicopter;$sum[$getGlobalUserVar[helicopter;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];350];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=20000;Need $20,000 in your wallet, try withrawing it first]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=350;You need 350 XP, in which will be deducted after purchase.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🚁 $username]
$description[
Nice! You bought a Helicopter for $20,000!
**350xp has been deducted!**
You can strip it for parts to scrap for more money and XP.
]
$footer[Usage: $getServerVar[prefix]scrap-helicopter]`
});

bot.command({
  name: "buy-house",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];100000];$authorID]
$setGlobalUserVar[house;$sum[$getGlobalUserVar[house;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];500];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=100000;Need $100,000 in your wallet, try withrawing it first.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=500;You need 500 XP, in which will be deducted after purchase.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🏡 $username]
$description[
Nice! Stepping up! You bought a House for $100,000!
**500 XP has been deducted!**
Coming up in the world I see! The real estate business is in high demand and you can make a difference! Try flipping the house to make a profit and earn more XP.
]
$footer[Usage: $getServerVar[prefix]flip-house]`
});

bot.command({
  name: "buy-apartment",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];50000];$authorID]
$setGlobalUserVar[apartment;$sum[$getGlobalUserVar[apartment;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];400];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=50000;Need $50,000 in your wallet, try withrawing it first.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=400;You need 400 XP, in which will be deducted after purchase.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[🏫 $username]
$description[
Nice! Stepping up! You bought an Apartment for $50,000!
**400xp has been deducted!**
The real estate business is in high demand and you can make a difference! Try flipping the apartment to make a profit and earn more XP.
]
$footer[Usage: $getServerVar[prefix]flip-apartment]`
});

bot.command({
  name: "buy-mansion",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];500000];$authorID]
$setGlobalUserVar[mansion;$sum[$getGlobalUserVar[mansion;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$authorID];750];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=500000;Need $500,000 in your wallet, try withrawing it first]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=750;You need 750 XP, in which will be deducted after purchase]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🏰 $username]
$description[
Nice! You bought a Mansion for $500,000!
**750 XP has been deducted!**
Now you're just showing off and living it up lol! Try flipping the mansion to make a profit and earn more XP.
]
$footer[Usage: $getServerVar[prefix]flip-mansion]`
});

bot.command({
  name: "buy-bag",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];250];$authorID]
$setGlobalUserVar[duffle;$sum[$getGlobalUserVar[duffle;$authorID];1];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[💼 $username]
$description[
Nice! You bought a dufflebag for $250!
]
$footer[This item is used to commit a heist]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>249;Need $250 in your wallet, try withdrawing it first]`
});

bot.command({
  name: "buy-spiteful",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];1000];$authorID]
$setGlobalUserVar[spiteful;$sum[$getGlobalUserVar[spiteful;$authorID];1];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Spiteful Chest]
$description[You bought a Spiteful chest for $1,000!
**Open it and see what you find!
Just be warned! It could be spiteful, Goodluck!**
]
$footer[Usage: $getServerVar[prefix]open-spiteful]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>999;Need $1,000 in your wallet, try withrawing it first]`
});

bot.command({
  name: "open-spiteful",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$randomText[1;850;860;900;950;1000;1000;1000;1100;1150;1175;1200;1250;1500;5000;10000]];$authorID]
$setGlobalUserVar[spiteful;$sub[$getGlobalUserVar[spiteful;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[10;20]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Spiteful Chest]
$description[You opened a spiteful Chest!
]
$footer[💵 +$$numberSeparator[$randomText[1;850;860;900;950;1000;1000;1000;1100;1150;1175;1200;1250;1500;5000;10000]] | 🗡 +$random[10;20]xp]
$onlyIf[$getGlobalUserVar[spiteful;$authorID]>=1;You cant open a chest you don't have! Try purchasing one from the shop.]
$globalCooldown[20m;To prevent exploitations, a cooldown is in effect for opening all purchasable chests! Try again in \`%time%\`]`
});

bot.command({
  name: "buy-lucky",
  code: `$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$authorID];250];$authorID]
$setGlobalUserVar[lucky;$sum[$getGlobalUserVar[lucky;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>249;Need $250 in your wallet, try withrawing it first.]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Lucky Chest]
$description[You bought a lucky chest for $250!
Open it and press your luck for a chance to get the $5,000 lucky pot! Goodluck!
]
$footer[Usage: $getServerVar[prefix]open-lucky]`
});

bot.command({
  name: "open-lucky",
  code: `
$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$randomText[300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;500;1000;5000]];$authorID]
$setGlobalUserVar[lucky;$sub[$getGlobalUserVar[lucky;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[3;7]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[Lucky Chest]
$description[You opened a lucky Chest!
]
$footer[💵 +$$numberSeparator[$randomText[300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;500;1000;5000]] | 🗡 +$random[3;7]xp]
$onlyIf[$getGlobalUserVar[lucky;$authorID]>=1;You cant open a chest you don't have! Try purchasing one from the shop.]
$globalCooldown[3m;To prevent exploitations, a cooldown is in effect for opening all purchasable chests! Try again in \`%time%\`]`
});

bot.command({
  name: "rob",
  code: `
$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[0;750]];$authorID]
$setGlobalUserVar[Wallet;$sub[$getGlobalUserVar[Wallet;$mentioned[1]];$random[0;750]];$mentioned[1]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[50;75];$authorID]]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$mentioned[1]];$random[50;75]];$mentioned[1]]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username robbed $username[$mentioned[1]]]
$description[
$addField[$username;
💵 +$$random[0;750]
🗡 +$random[50;75]xp
Total: $$sum[$getGlobalUserVar[Wallet;$authorID];$random[0;750]] | $sum[$getGlobalUserVar[XP;$authorID];$random[50;75]]xp
]
$addField[$username[$mentioned[1]];
Total: $$sub[$getGlobalUserVar[Wallet;$mentioned[1]];$random[0;750]] | $sub[$getGlobalUserVar[XP;$mentioned[1]];$random[50;75]]xp
]]
$footer[💵 -$$random[0;750] | 🗡 -$random[50;75]xp]
$globalCooldown[15m;You can rob someone again in %time%]
$onlyIf[$getGlobalUserVar[Wallet;$authorID]>=750;Your wallet needs to contain at least $750 to rob someone.]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=75;You need at least 75xp to rob someone.]
$onlyIf[$getGlobalUserVar[XP;$mentioned[1]]>=25;They need at least 25xp]
$onlyIf[$getGlobalUserVar[Wallet;$mentioned[1]]>=750;Their wallet needs to contain at least $750]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't rob discord bots**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't rob yourself**]
$onlyIf[$mentioned[1]!=;**⛔ Mention someone to rob**]`
});

bot.command({
  name: "steal",
  code: `
$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[250;2500]];$authorID]
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank;$mentioned[1]];$random[250;2500]];$mentioned[1]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[75;150]];$authorID]
$setGlobalUserVar[XP;$sub[$getGlobalUserVar[XP;$mentioned[1]];$random[75;150]];$mentioned[1]]
$color[RANDOM]
$thumbnail[$userAvatar[$authorID]]
$title[$username stole from $username[$mentioned[1]]'s bank]
$description[
$addField[$username;
💵 +$$random[1000;2500]
🗡 +$random[75;150]xp
Total: $$sum[$getGlobalUserVar[Wallet;$authorID];$random[1000;2500]] | $sum[$getGlobalUserVar[XP;$authorID];$random[75;150]]xp
]
$addField[$username[$mentioned[1]];
Total: $$sub[$getGlobalUserVar[Wallet;$mentioned[1]];$random[1000;2500]] | $sub[$getGlobalUserVar[XP;$mentioned[1]];$random[75;150]]xp
]]
$footer[💵 -$$random[1000;2500] | 🗡 -$random[75;150]xp]
$globalCooldown[30m;You can steal from someone's bank account again in %time%]
$onlyIf[$getGlobalUserVar[XP;$authorID]>=1000;You need at least 1,000 XP to steal from someone's bank account]
$onlyIf[$getGlobalUserVar[XP;$mentioned[1]]>=500;They need at least 500 XP to be sapped from!]
$onlyIf[$getGlobalUserVar[Bank;$mentioned[1]]>=7500;Their bank needs to contain at least $7,500 to be stolen from.]
$onlyIf[$isBot[$mentioned[1]]!=true;You can't steal from discord bots]
$onlyIf[$mentioned[1]!=$authorID;You can't rob yourself lol]
$onlyIf[$mentioned[1]!=;Mention someone to steal from thier bank account. Try this: \`$getServerVar[prefix]steal @user\`]`
});

bot.command({
  name: "search",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[20;60]];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[1;5]];$authorID]
$title[Search]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[$username, $randomText[you looked under the welcome mat.;you went searching thru your mom's purse while she was asleep.;you're hungry so you decided to search thru the dumpster behind the Subway.;you searched your dads truck very thoroughly.;your friends came over and when one of them went to the bathroom, you searched thru his coat pockets.]
]
$footer[💵 +$$random[20;60] | 🗡 +$random[1;5]xp]
$globalCooldown[35s;Looking for a little loose change? You're going to have to try again in %time%]`
});

bot.command({
  name: "scrap-car",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[11000;16000]];$authorID]
$setGlobalUserVar[car;$sub[$getGlobalUserVar[car;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[260;300]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🚗 Scrapped]
$description[
Nice $username! You scrapped a car for its parts and sold them for a profit!
]
$footer[💵 +$$numberSeparator[$random[11000;16000]] | 🗡 +$random[260;300]xp]
$globalCooldown[2h;Scrap yards only carry so much money! Try again in \`%time%\`]
$onlyIf[$getGlobalUserVar[car;$authorID]>=1;You need at least 1 \`Car\` in your inventory to scrap]`
});

bot.command({
  name: "scrap-helicopter",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[22000;29000]];$authorID]
$setGlobalUserVar[helicopter;$sub[$getGlobalUserVar[helicopter;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[360;435]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🚁 Scrapped]
$description[
Nice $username! You scrapped a helicopter for its parts and sold them for a profit!
]
$footer[💵 +$$numberSeparator[$random[22000;29000]] | 🗡 +$random[360;435]xp]
$globalCooldown[2h;Scrap yards only carry so much money! Try again in \`%time%\`]
$onlyIf[$getGlobalUserVar[helicopter;$authorID]>=1;You need at least 1 \`Helicopter\` in your inventory to scrap]`
});

bot.command({
  name: "scrap-truck",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[16500;22000]];$authorID]
$setGlobalUserVar[truck;$sub[$getGlobalUserVar[truck;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[310;380]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🚚 Scrapped]
$description[
Nice $username! You scrapped a truck for its parts and sold them for a profit!
]
$footer[💵 +$$numberSeparator[$random[16500;22000]] | 🗡 +$random[310;380]xp]
$globalCooldown[2h;Scrap yards only carry so much money! Try again in \`%time%\`]
$onlyIf[$getGlobalUserVar[truck;$authorID]>=1;You need at least 1 \`Truck\` in your inventory to scrap]`
});

bot.command({
  name: "flip-house",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[125000;150000]];$authorID]
$setGlobalUserVar[house;$sub[$getGlobalUserVar[house;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[550;650]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🏡 Flipped]
$description[
Nice job $username! You flipped your house and sold it for a profit!
]
$footer[💵 +$$numberSeparator[$random[125000;150000]] | 🗡 +$random[550;650]xp]
$globalCooldown[12h;Real estate investors aren't made of money and they can only buy your assets once every 12 hours! Try again in \`%time%\`]
$onlyIf[$getGlobalUserVar[house;$authorID]>=1;You need to have bought at least 1 \`House\` to flip]`
});

bot.command({
  name: "flip-apartment",
  code: `$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet;$authorID];$random[70000;95000]];$authorID]
$setGlobalUserVar[apartment;$sub[$getGlobalUserVar[apartment;$authorID];1];$authorID]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP;$authorID];$random[425;525]];$authorID]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$title[🏫 Flipped]
$description[
Nice job $username! You flipped your apartment and sold it for a profit!
]
$footer[💵 +$$numberSeparator[$random[70000;95000]] | 🗡 +$random[425;525]xp]
$globalCooldown[12h;Real estate investors aren't made of money and they can only buy your assets once every 12 hours! Try again in \`%time%\`]
$onlyIf[$getGlobalUserVar[apartment;$authorID]>=1;You need to have bought at least 1 \`Apartment\` to flip]`
});

bot.command({
  name: "fish",
  code: `$color[RANDOM]
$setGlobalUserVar[Wallet;$sum[$getGlobalUserVar[Wallet];$random[50;100]]]
$title[$username is fishing]
$description[You fished a $randomText[🥿;👠;👡;👢;👞;👟;🥾;🦀;🦑;🐙;🦞;🦐;🐠;🐟;🐡;🐬;🦈;🐳;🐋;🐊;🦢;🦆] and you get $$random[50;100]]
$globalCooldown[15m;**⏳ You can fish again in %time%**]`
});

bot.command({
  name: "lb-bank",
  code: `$title[**__🏦 Bank leaderboard__** 
$globalUserLeaderboard[Bank;asc]]
$color[RANDOM]
$footer[You have $$numberSeparator[$getGlobalUserVar[Bank;$authorID]] 💵 in your bank]`
});

bot.command({
  name: "lb-wallet",
  code: `$title[**__👛 Wallet leaderboard__**
$globalUserLeaderboard[Wallet;asc]]
$color[RANDOM]
$footer[You have $$numberSeparator[$getGlobalUserVar[Wallet;$authorID]] 💵 in your wallet]`
});

bot.command({
  name: "reset",
  code: `$resetGlobalUserVar[Wallet]
$resetGlobalUserVar[Bank]
$resetGlobalUserVar[XP]
$title[Reset]
$description[Economy has been reset for all guilds]
$footer[Economy Commands]
$color[RANDOM]
$onlyForIDs[752430931784237126;**⛔ You're not the owner of this bot**]`
});

bot.command({
  name: "removerole",
  code: `$color[RANDOM]
$takeRoles[$mentioned[1];$mentionedRoles[1]]
$title[Removed role to $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has taken <@&$mentionedRoles[1]> **role to** $username[$mentioned[1;yes]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$mentionedRoles[1]!=;⛔ **Mention a role**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGE_ROLES\` perms]
$onlyPerms[manageroles;⛔ **You don't have** \`MANAGE_ROLES\` perms]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:RemoveRole}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
});

bot.command({
  name: "giverole",
  code: `$color[RANDOM]
$giveRoles[$mentioned[1];$mentionedRoles[1]]
$title[Role given to $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has given <@&$mentionedRoles[1]> **role to** $username[$mentioned[1;yes]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$mentionedRoles[1]!=;⛔ **Mention a role**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGE_ROLES\` perms]
$onlyPerms[manageroles;⛔ **You don't have** \`MANAGE_ROLES\` perms]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:GiveRole}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
});

bot.command({
  name: "temprole",
  code: `
$channelSendMessage[$channelID;<@$mentioned[1]>, I removed the $roleName[$findRole[$message[2]]] role, time's up]
$takeRoles[$mentioned[1];$findRole[$message[2]]]
$wait[$replaceText[$replaceText[$checkCondition[$message[3]==];true;24d];false;$message[3]]]
$channelSendMessage[$channelID;{description::white_check_mark: | $username[$mentioned[1]]#$discriminator[$mentioned[1]] has been given the $roleName[$findRole[$message[2]]] role. For \`$replaceText[$replaceText[$checkCondition[$message[3]==];true;undefined time];false;$message[3]]\`}{color:RANDOM}]
$giveRoles[$mentioned[1];$findRole[$message[2]]]
$suppressErrors[{title:An error occured}{description:Looks like I can't find the role}{color:RED}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than me on role position]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];That user is higher than you on role position.]
$argsCheck[>3;Incorrect arguments. Example: temprole @user @role time]
$onlyPerms[manageroles;{title:Missing Permissions}{color:RANDOM}{description:You don't have \`MANAGE_ROLES\` permissions to use this command}]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:TempRole}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
});

bot.command({
  name: "setprefix",
  aliases: ["changeprefix", "prefix"],
  code: `$description[**Done, my new prefix is** \`$message\` $customEmoji[centang_bergerak]]
$color[RANDOM]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`]
$onlyPerms[admin;$customEmoji[Rufy] **You dont have** \`ADMIN\` **perms**]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:SetPrefix}{field:Moderator:$username}{field:New Prefix:$message}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
});

bot.command({
  name: "play",
  aliases: ["p"],
  code: `
$color[RANDOM]
$thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]
$title[**Song Added to Queue**]
$description[**Succesfully added** [$songInfo[title]\\]($songInfo[url]) to the **Queue**]
$addField[:stopwatch:| Duration:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]__**]
$addField[:dvd: | Views:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views]__**]
$addField[:coffee: | Author:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name]__**]
$addField[:clock10: Uploaded:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded]__**]
$playSong[$message;1m;{title:Error}{description:**⛔ There was an error while making the request**}{color:RED}]
$onlyIf[$message!=;{title:Error}{description:**⛔ I need Song name to find a** \`song\`...}]
$onlyIf[$voiceID!=;**⛔ You are Not in a Voice channel! Join a voice channel**]
$cooldown[5s;Wait **%time%** to use this command again]`
});

bot.command({
  name: "pause",
  code: `$pauseSong
**⏸️ Paused**
$onlyIf[$queueLength!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!]`
});

bot.command({
  name: "resume",
  code: `$resumeSong
**▶️ Resumed**
$onlyIf[$queueLength!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!]`
});

bot.command({
  name: "loop",
  code: `$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Loop now **on**];false;Loop now **off**]
$onlyIf[$queueLength!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!]`
});

bot.command({
  name: "nowplaying",
  aliases: "np",
  code: `$author[Now playing;https://cdn.discordapp.com/emojis/729630163750354955.gif?size=1024]
$title[$songInfo[title]]
$description[$addField[Duration;$songInfo[duration]]
$addField[URL;$songInfo[url]]]
$footer[$botPingms to load it.]
$thumbnail[$songInfo[thumbnail]]
$color[a09fff]
$onlyIf[$queueLength!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!]`
});

bot.command({
  name: "stop",
  code: `$stopSong
$sendMessage[⏹️ Stopped.;no]
$onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
$deleteIn[5s]`
});

bot.command({
  name: "skip",
  code: `$skipSong
⏩ Skipped!
$onlyIf[$queueLength>1;Only have **$queueLength song**]
$onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
$onlyIf[$voiceID!=;**⛔ You need to join the voice channel first**]`
});

bot.command({
  name: "clearqueue",
  code: `$clearSongQueue
$stopSong
$editIn[125ms;✅ Cleared queue. from **$queueLength song** to **0**] ⚠️ Clearing...
$onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]`
});

bot.command({
  name: "queue",
  aliases: "q",
  code: `
$author[Song Queue;https://cdn.discordapp.com/emojis/729630163750354955.gif?size=1024]
$description[:dvd: | Now Playing
1) $songInfo[title]

:dvd: | Queue
$queue[1;10]]
$onlyIf[$queueLength!=0;Nothing song was playing.]
$onlyIf[$voiceID!=;You need to join the voice channel first!]`
});

bot.command({
  name: "anime",
  description: "Search anime info via title",
  usage: "anime <anime title>",
  code: `
$author[・ $jsonRequest[https://api.avux.ga/animesearch?search=$message;res.title;];$userAvatar[$clientID];$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.url;]]

$description[$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.synopsis;]]

$addField[Genres;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.genres;];no]
$addField[Popularity;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.popularity;];yes]
$addField[Duration;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.duration;];yes]
$addField[Episodes;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.episodes;];yes]
$addField[Premiered;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.premiered;];yes]
$addField[Status;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.status;];yes]
$addField[Type;$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.type;];yes]

$color[RANDOM]
$image[$jsonRequest[https://api.avux.ga/animesearch?search=$message;res.picture;]]
$footer[Requested By $userTag[$authorID];$authorAvatar]
$addTimestamp

$onlyIf[$message[1]!=;{author:ERROR:$userAvatar[$clientID]}{description:You need to put anime title}{color:FF0000}]
$cooldown[5s;{description:Hey, calm down! Take a breath and try again in **$replaceText[%time%;s;seconds]**.}{color:FF0000}{delete:5s}]
`
});

bot.command({
  name: "volume",
  code: `$volume[$message[1]]
$onlyIf[$message[1]<201;**⛔ Max volume 200%**]
$onlyIf[$charCount[$message[1]]<4;Failed.]
$onlyIf[$isNumber[$message[1]]==true;Must number!]
$onlyIf[$message[1]!=;**⛔ Volume can change 0 - 100**]
$editIn[1s;**✅ Changed to $message[1]%**] **Changing..**
$onlyIf[$queueLength!=0;**⛔ Nothing song was playing**]
$onlyIf[$voiceID!=;**⛔ You need to join the voice channel first**]`
});

bot.command({
  name: "skipTo",
  code: `
    $author[Music Skipped]
    $skipTo[$noMentionMessage]
    $description[<@$authorID> skipped to the next song!]
    $color[GREEN]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:FF0000}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {field:Bot's VC:<#$voiceID[$clientID]>} {field:User VC:<#$voiceID>} {color:FF0000}]`
});

bot.command({
  name: "lyrics",
  code: `$title[Lyrics]
$description[$jsonRequest[https://api.avux.ga/lyrics?search=$message;lyrics;No Lyrics Found for this song.]]
$color[RANDOM]`
});

bot.command({
  name: "songinfo",
  aliases: "sinfo",
  code: `$color[RANDOM]
$title[**__Song Info__**]
$description[**Song Name** [$songInfo[title]\\]($songInfo[url])]
$addField[:stopwatch:| Duration:;**__$songInfo[duration]]__**]
$addField[:dvd: | Added by:;**__$songInfo[userID]__**]
`
});

bot.command({
  name: "help",
  code: `$title[$customEmoji[centang_bergerak] Help !]
$description[Hi $username! My prefix is __$getServerVar[prefix]__

$customEmoji[bot_dev] Developer
eval

$customEmoji[pupupup] Music
lyrics, pause, play, queue, clearqueue, resume, skipTo, nowplaying, songinfo, stop, volume, skip, loop, join, leave

$customEmoji[util] Utility
help, ping, snipe, editsnipe, quote, math, afk, setprefix, invite

$customEmoji[lepelup] Leveling System
setrank, resetrank, setrankmsg, rank, leaderboard

:tickets: Ticket
setup, ticket, close

$customEmoji[pepe_police] Image And NSFW
kiss, hug, slap, nsfw-avatar, boobs, blowjob

$customEmoji[RingingBell] ModLogs System
setup-modlogs

$customEmoji[eco] Economy/Games
daily, open-<item>, buy-<item>, scrap-<vehicle>, flip-<type house>, fish, lb-wallet, lb-bank, shop, bal, steal, rob, heist, profile, deposit, withdraw, work, beg, search, givemoney

$customEmoji[8661_BanHammer] Moderations
kick, ban, unban, purge, warn, unwarn, warnings, giverole, removerole, temprole, mute, set-mute, tempmute

$customEmoji[DancingPatrick] Fun
ejected, howgay, rip, stonks, say

$customEmoji[hmm_membaca] Information
avatar, serverinfo, userinfo, covid, anime]`
});

bot.command({
  name: "warn",
  code: `
$color[RANDOM]
$title[Warned $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has warned **$username[$mentioned[1;yes]]** for \`$noMentionMessage\`
he now has \`$getUserVar[warn;$findUser[$message]]\` Warnings
]
$setUserVar[reason;$getUserVar[reason;$mentioned[1]]/**$date+:$hour:$minute:$second**+> $noMentionMessage+;$mentioned[1]]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$message[2]!=;**⛔ Provide a reason**]
$onlyIf[$mentioned[1]!=;**⛔ Mention the user you want to warn and provide a reason**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't warn yourself**]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't warn a bot**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGE_ROLES\` perms]
$onlyPerms[manageroles;⛔ **You don't have** \`MANAGE_ROLES\` perms]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Warn}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
});

bot.command({
  name: "warnings",
  code: `$color[RANDOM]
$title[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]'s warnings]
$description[
**$username[$mentioned[1;yes]]** has
\`$getUserVar[warn;$findUser[$message]]\` warnings
 
**Warnings User**
<@$mentioned[1;yes]> 
(\`$mentioned[1;yes]\`)]
$onlyIf[$getUserVar[warn;$findUser[$message]]>0;**⛔ The warnings of this user is already at 0**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ You can't warn a bot, so they don't have warnings**]`
});

bot.command({
  name: "unwarn",
  code: `
$color[RANDOM]
$title[Removed Warn from $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** has removed a warn from **$username[$mentioned[1;yes]]** 
he now has \`$getUserVar[warn;$findUser[$message]]\` Warnings]
$setUserVar[warn;$sub[$getUserVar[warn;$findUser[$message]];1];$findUser[$message]]
$removeSplitTextElement[$getTextSplitLength]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher than me on role position**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ That user is higher/equal than you on role position**]
$onlyIf[$getUserVar[warn;$findUser[$message]]>0;**⛔ The Warnings of this User is already at 0**]
$onlyIf[$mentioned[1]!=$authorID;**⛔ You can't unwarn yourself**]
$onlyIf[$mentioned[1]!=;**⛔ You must mention someone**, Correct usage: \`$getServerVar[prefix]unwarn <@user>\`]
$onlyPerms[manageroles;⛔ **I don't have** \`MANAGE_ROLES\` perms**]
$onlyBotPerms[manageroles;⛔ **I don't have** \`MANAGE_ROLES\` perms**]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Unwarn}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
});

bot.deletedCommand({
  channel: "$channelID",
  code: `$setChannelVar[snipe_msg;$message]
 $setChannelVar[snipe_author;$authorID]
 $setChannelVar[snipe_channel;$channelID]
 $setChannelVar[snipe_date;$day $month $year - $hour:$minute]`
});
bot.onMessageDelete();

bot.command({
  name: "snipe",
  code: `$color[RANDOM]
$author[$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]
$description[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]]
$footer[#$channelName[$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]] | $getChannelVar[snipe_date;$mentionedChannels[1;yes]]]
$onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=;Theres nothing to snipe in <#$mentionedChannels[1;yes]>]`
});

bot.command({
  name: "quote",
  code: ` $author[$userTag[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];userID]];$userAvatar[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];userID]]]
$description[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];content]
 
[Jump to message\\]($replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$message];false;https://discord.com/channels/$guildID/$mentionedChannels[1;yes]/$noMentionMessage])]
$textSplit[$message;/]
$color[RANDOM]
$suppressErrors[**⛔ Could not find message**]`
});

bot.updateCommand({
  channel: "$channelID",
  code: `$setChannelVar[msgEditorID;$authorID]
 $setChannelVar[esnipeOldMsg;$oldMessage]`
});
bot.onMessageUpdate();

bot.command({
  name: "editsnipe",
  aliases: ["esnipe"],
  code: `$author[$username[$getChannelVar[msgEditorID]]#$discriminator[$getChannelVar[msgEditorID]];$userAvatar[$getChannelVar[msgEditorID]]]
$description[$getChannelVar[esnipeOldMsg]]
$addTimestamp
$color[RANDOM]
$onlyIf[$getChannelVar[esnipeOldMsg]!=undefinied;{description: there is nothing to snipe}{color: RED}]
$onlyIf[$getChannelVar[msgEditorID]!=undefinied;{description: there is nothing to snipe}{color: RED}]
$suppressErrors[There is nothing to snipe]`
});

bot.command({
  name: "<@824338594175909971>",
  code: `$title[Summer Holidays]
$description[**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more info**]
$color[RANDOM]`,
  nonPrefixed: true
});

bot.command({
  name: "howgay",
  code: `$title[gay r8 machine]
$description[$replaceText[$replaceText[$checkCondition[$message==];true;**You** are];false;**$username** is] $random[1;100]% gay :gay_pride_flag:]
$color[RANDOM]`
});

bot.command({
  name: "ejected",
  code: `$author[$userTag[$findUser[$message]] Has Been Voted Out;$userAvatar[$findUser[$message]]]
$color[RANDOM]
$image[https://vacefron.nl/api/ejected?name=$replaceText[$username[$findUser[$message]]; ;+;-1]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]]
$footer[Request By:$userTag[$authorID]]
$addTimestamp
$argsCheck[>1;Use $getServerVar[prefix]ejected <USER>]`
});

bot.command({
  name: "eval",
  code: `
$djsEval[$message]
$onlyForIDs[752430931784237126;No]`
});

bot.command({
  name: "say",
  code: `$message
$onlyPerms[managenicknames;You Need \`MANAGE_NICKNAME\` Permission]`
});

bot.command({
  name: "rip",
  code: `$addTimestamp
$image[https://dinosaur.ml/overlay/rip/?image=$userAvatar[$mentioned[1;yes]]]
$title[R.I.P]
$color[$random[11111;99999]]`
});

bot.command({
  name: "covid",
  description: "Showing covid cases details",
  code: `
$color[RANDOM]
$description[$title:Covid-19 $message Stats]
$thumbnail[https://media.discordapp.net/attachments/239446877953720321/691020838379716698/unknown.png?width=375&height=375]
$addField[**Today Recovered**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/$message;todayRecovered]]:yes]
$addfield[**Today Deaths**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/$message;todayDeaths]]:yes]
$addfield[**Today Cases**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/$message;todayCases]]:yes]
$addfield[**Recovered**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/$message;recovered]]:yes]
$addfield[**Deaths**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/$message;deaths]]:yes]
$addfield[**Cases**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/$message;cases]]:yes]
$addfield[**Updated**:$replaceText[$parseDate[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/$message;updated];date];GMT+0000 (Coordinated Universal Time);]:yes]
$addfield[**Active Cases**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/$message;active]]:yes]
$addfield[**Affected Country**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/$message;affectedCountries]]:yes]
$footer[Requested By $username[$authorID]:$authorAvatar]
$addTimestamp
$onlyIf[$message[1]!=;
{title:Covid-19 Global Stats}{thumbnail:https://media.discordapp.net/attachments/239446877953720321/691020838379716698/unknown.png?width=375&height=375}
{field:**Today Recovered**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;todayRecovered]]:yes}
{field:**Today Deaths**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;todayDeaths]]:yes}
{field:**Today Cases**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;todayCases]]:yes}
{field:**Recovered**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;recovered]]:yes}
{field:**Deaths**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;deaths]]:yes}
{field:**Cases**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;cases]]:yes}
{field:**Updated**:$replaceText[$parseDate[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;updated];date];GMT+0000 (Coordinated Universal Time);]:yes}
{field:**Active Cases**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;active]]:yes}
{field:**Affected Country**:$numberSeparator[$jsonRequest[https://corona.lmao.ninja/v3/covid-19/all;affectedCountries]]:yes}
{footer:Requested By $username[$authorID]:$authorAvatar}
{timestamp}]
`
});

bot.command({
  name: "stonks",
  code: `$addTimestamp
$image[https://dinosaur.ml/overlay/stonks/?image=$userAvatar[$mentioned[1;yes]]]
$title[Stonks!]
$color[$random[11111;99999]]`
});

bot.command({
  name: "leave",
  aliases: ["disconnect", "dc"],
  code: `
 Leaved the channel :(
$djsEval[message.member.voice.channel.leave();]
$onlyIf[$voiceID!=;⛔ Your not in voice channel, Join now !`
});

bot.command({
  name: "avatar",
  aliases: "av",
  code: `
$if[$toLowerCase[$message]==server]
$author[$serverName;$serverIcon]
$description[[Server Avatar Link\\]($serverIcon[$guildID;2048;yes])]
$image[$serverIcon[$guildID;2048;yes]]
$color[RANDOM]
$footer[$addTimestamp By $username;$authorAvatar]
$else
$title[$author[$username[$findUser[$message]] Avatar;$userAvatar[$findUser[$message]]]]
 $description[[Avatar Link\\]($userAvatar[$findUser[$message]])]
 $color[RANDOM] $image[$userAvatar[$findUser[$message]]]
$endIf`
});

bot.command({
  name: "join",
  code: `
 Joined the channel :)
$djsEval[message.member.voice.channel.join();]
$onlyIf[$voiceID!=;⛔ You not in voice channel, Join now ! `
});

bot.command({
  name: "restart",
  code: `$reboot[server.js] 
$onlyForIDs[752430931784237126;No]
$title[Done]
$color[RANDOM]`
});

bot.command({
  name: "<@!824338594175909971>",
  code: `$title[Summer Holidays]
$description[**Hi $username my prefix is** \`$getServerVar[prefix]\`
**You can type** \`$getServerVar[prefix]help\` **for more info**]
$color[RANDOM]`,
  nonPrefixed: true
});

bot.command({
  name: "afk",
  aliases: "aepka",
  code: `<@$authorID>.. I set your AFK : $message
$setUserVar[afk;1;$authorID]
$setUserVar[afkwhy;$message;$authorID]
$suppressErrors`
});

bot.command({
  name: "$alwaysExecute",
  code: `$username[$mentioned[1]] is AFK: $getUserVar[afkwhy;$mentioned[1]]
$onlyIf[$getUserVar[afk;$mentioned[1]]>=1;]`
});

bot.command({
  name: "$alwaysExecute",
  code: `$setUserVar[afk;0;$authorID]
$setUserVar[afkwhy;;$authorID] 
Hello <@$authorID>, I have removed your AFK
$onlyIf[$getUserVar[afk;$authorID]>=1;]`
});

bot.command({
  name: "invite",
  code: `$title[📩 Summer Holidays Invite 📩]
$color[ff6347]
$description[[Hello, Invite is right here!](https://discord.com/oauth2/authorize?client_id=824338594175909971&scope=bot&permissions=4265455607)`
});

bot.command({
  name: "setrank",
  usage: "setrank <channel>",
  description: "settings the levelup channel",
  code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[01ff00]
$setServerVar[rch;$mentionedChannels[1;yes]]
$setServerVar[rsystem;1]
$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
});

bot.command({
  name: "resetrank",
  usage: "resetrank",
  description: "reset the levelup channel",
  code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[01ff00]
$setServerVar[rch;]
$setServerVar[rmsg;$getVar[rmsg]]
$setServerVar[rsystem;0]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__ on this server}{color:ff2050}]
$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
});

bot.command({
  name: "$alwaysExecute",
  code: `$useChannel[$getServerVar[rch]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyForServers[$guildID;]`
});

bot.command({
  name: "$alwaysExecute",
  code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
});

bot.awaitedCommand({
  name: "errorrank",
  code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
});

bot.command({
  name: "setrankmsg",
  usage: "setrankmsg <message>",
  description: "message for the leveled up",
  code: `$description[You have been setted the message to:
\`$message\`]
$color[01ff00]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;You can also use this teks :
\`\`\`
User : {user.tag}
User Mention : {user.mention}
Level : {level}
Exp : {exp}
\`\`\`
Current msg is:
\`$getServerVar[rmsg]\`]
$onlyBotPerms[mentioneveryone;managemessages;{description:I need permission \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
});

bot.command({
  name: "rank",
  aliases: ["level"],
  usage: "rank (user)",
  description: "see the current level and exp",
  code: `$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/793071150614970388/794565647760752650/20210101_205624.jpg&xpcolor=ffffff&isboosting=true]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__}{color:ff2050}]
$cooldown[5s;]`
});

bot.command({
  name: "leaderboard",
  aliases: "lb",
  code: `$title[Top rank of this server] 
$userLeaderboard[lvl;asc]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__}{color:ff2050}]
$footer[$serverName[$guildID]]`
});

bot.command({
  name: "setup",
  code: `
 $awaitMessages[$authorID;30s;everything;tsp2;Command has been cancelled]
 $sendMessage[**Which Category Do you want to make For Ticket System.
 Provide the Category ID. 
 This Command will be cancelled after** \`30 seconds\`.;no]
 $onlyPerms[admin;Only Users with \`ADMIN\` perms can use this{delete:10s}]
 $suppressErrors[]`
});

bot.awaitedCommand({
  name: "tsp2",
  code: `
**✅ Setup ticket is complete**
 $setServerVar[ticketchannel;$message]
 $onlyIf[$channelExists[$message]==true;Provided Category Doesn't Exist{delete:10s}]
 $onlyIf[$isNumber[$message]==true;Please provide Category ID{delete:10s}]`
});

bot.command({
  name: "ticket",
  code: `
$newTicket[ticket-$username;{title:Ticket opened!}{description:Hello, <@$authorID>. Here is your ticket ! :tickets: Please give the information about your problem or feedback. 
Thanks in advance for being patient}{footer:Use $getServerVar[prefix]close to close your ticket};$getServerVar[ticketchannel];no;<@$authorID>, I failed to create your ticket! Try again]
$sendMessage[Ticket Successfully opened! Hello, <@$authorID>. Go to **$toLowercase[#ticket-$username]** to describe your issue!;Something went wrong]
$onlyIf[$getServerVar[ticketchannel]!=;Please setup category id use $getServerVar[prefix]setup <CATEGORY ID>]`
});

bot.command({
  name: "close",
  code: `
$closeTicket[This is not a ticket]
$onlyIf[$checkContains[$channelName;ticket]==true;This command can only be used in tickets{delete:10s}]
$suppressErrors
$onlyIf[$getServerVar[ticketchannel]!=;Please setup category id use $getServerVar[prefix]setup <CATEGORY ID>]`
});

bot.command({
  name: "kick",
  code: `$title[Succesfully Kicked User]
$footer[Commands Succes]
$kick[$mentioned[1]]
$addTimestamp
$onlyBotPerms[kick;x: I Need \`KICK\` Permission]
$onlyPerms[kick;You Need \`KICK\` Permission To Use This Commands !]
$argsCheck[>1;Use $getServerVar[prefix]kick <USER>]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Kick}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
});

bot.command({
  name: "unban",
  code: `
$unban[$message]
$title[**UNBAN**]
$onlyPerms[You Need  \`BAN\` Pemission]
$onlyBotPerms[I Need \`BAN\` Permission]
$description[Unban User ID: $message
By: <@$authorID>
]
$argsCheck[1;**Use $getServerVar[prefix]unban <ID USER>**]
$color[RANDOM]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Unban}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar}{color:RANDOM}]
$endif`
});

bot.command({
  name: "purge",
  code: `$title[Cleared Messages!]
$description[👍 $message messages has been deleted! ]
$deletecommand
$argsCheck[1;x | Please provide number of messages that you want to delete.]
$clear[$message]
$onlyPerms[managemessages;x: | You don't have permission to run this command.]
$deleteIn[3s]
$suppressErrors
$color[BLUE]
$footer[Requested By $username]
$addTimestamp
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Purge}{field:Moderator:$username}{field:Message Deleted:$message}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
});

bot.command({
  name: "ban",
  code: `$ban[$mentioned[1]]
$title[Succesfully Banned User]
$color[#00ffff]
$footer[Commands Succes]
$addTimestamp
$argsCheck[>1;Use $getServerVar[prefix]ban <USER>]
$description[User : <@$mentioned[1]>
Banned by: <@$authorID>
Reason: $noMentionMessage
$onlyPerms[ban;x: You Need \`BAN\` Permission To Use This Commands]
$onlyBotPerms[ban;I Need \`BAN\` Permission]
$if[$serverChannelExists[$getServerVar[modlogs]]==true]
$channelSendMessage[$getServerVar[modlogs];<@$authorID>{title:Mod Logs}{field:Action:Ban}{field:Moderator:$username}{field:User:$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]\n(\`$findUser[$message[1]]\`)}{thumbnail:$userAvatar[$findUser[$message[1]]]}{color:RANDOM}]
$endif`
});

bot.command({
  name: "math",
  code: `
$djsEval[

 try {

 const m = require('mathjs')

 const ans = m.evaluate('$message')

 d.message.channel.send(' ' + ans)

 } catch {

 d.message.channel.send('Provide valid calculation!')

 }


 ]
$argsCheck[>1;You Should Provide A Number!]
 `
});

bot.command({
  name: "uptime",
  code: `
$title[Summer Holidays]
$description[$uptime]
$footer[Command Executed By $username]
$addTimestamp`
});

bot.command({
  name: "setup-modlogs",
  aliases: ["s-modlogs"],
  code: `
 $if[$message[1]==remove]
  $setServerVar[modlogs;0]
  $color[RANDOM]
  $channelSendMessage[$getServerVar[modlogs];<@$authorID> - Mod Logs Channel was removed by $username #$discriminator[$authorID].]
  $suppressErrors
 $else
  $if[$channelExists[$findServerChannel[$message]]==true]
  $setServerVar[modlogs;$findServerChannel[$message]]
  $description[<#$findServerChannel[$message]> set as Mod Logs Chaanel from <#$channelCategoryID[$findServerChannel[$messag]]> Category.]
  $color[RANDOM]
 $endif
  $endif
  $argsCheck[>1;{title:Missing Arguments}{description:$getServerVar[prefix]s-modlogs <#channel/ID/remove>}{color:RED}]
  $onlyPerms[manageserver;{title:Missing Permissions}{description:Missing Manage Server permission}{color:RED}]`
});

bot.command({
  name: "serverinfo",
  aliases: ["server-info", "senfo"],
  code: `$author[Server Info;https://cdn.discordapp.com/attachments/787377164193628240/823709915390148687/images.jpeg-7.jpg]
$thumbnail[$serverIcon[$guildID]]
$description[** **
**📝 Server Name:** $serverName[$guildID]

**🆔 Server ID:** $guildID

**👑 Owner:** <@$ownerID>

**🌎 Region:** $serverRegion

**💖 Boost:** $serverBoostCount

**⏫ 💖 Boost Level:** $serverBoostLevel

**👮 Verification Level:** $replaceText[$replaceText[$replaceText[$replaceText[$serverVerificationLevel;Very High;Level 4 (Must have a verified phone on their discord account)];High;Level 3 (Must also be a member of this server for longer than 10 minutes)];Medium;Level 2 (Must also be registered on Discord for longer than 5 minutes)];Low;Level 1 (Must have a verified email ln their Discord account)]

**📊 Members:**
All: $membersCount
Users: $sub[$membersCount;$botcount]
Bots: $botCount

**🔥 Channels:**
All: $channelCount
Text: $channelCount[text]
Voice: $channelCount[voice]

**📄 Roles:** $guildRoles

**📅 Creation Date:** $creationDate[$guildID]

**😎 Emojis:**
$serverEmojis
$addTimestamp
$color[RANDOM]`
});

bot.variables({
  prefix: "sh.",
  snipe_msg: "",
  snipe_author: "",
  snipe_channel: "",
  snipe_date: "",
  afk: "0",
  afkwhy: "",
  msgEditorID: "undefined",
  esnipeOldMsg: "undefined",
  rch: "",
  rmsg: "Congrats {user.tag} 🎉 you leveled up to level {level}",
  lvl: "0",
  exp: "140",
  rexp: "200",
  rsystem: "0",
  ticketchannel: "",
  joinmessage: "",
  joinchannel: "",
  leavemessage: "",
  leavechannel: "",
  warn: "0",
  reason: "",
  XP: "0",
  Bank: "0",
  Wallet: "0",
  psuffix: "0",
  tv: "0",
  duffle: "0",
  bag: "0",
  smartphone: "0",
  laptop: "0",
  car: "0",
  truck: "0",
  helicopter: "0",
  apartment: "0",
  house: "0",
  mansion: "0",
  DailyChest: "0",
  lucky: "0",
  modlogs: "0",
  spiteful: "0",
  mute: ""
});
