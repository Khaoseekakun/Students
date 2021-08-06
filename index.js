const { Collection, Client, Discord, MessageEmbed, ReactionEmoji } = require('discord.js');
const client = new Client({
    disableEveryone: true,
    partials : ["MESSAGE", "CHANNEL", "REACTION"],
    disableMentions: 'everyone'
})
const path = require('path')
const config = require('./config.json');
const db = require('quick.db');
client.login(config.token);

/*client.on("GuildMemberRoleManager",() => {
    console.log(GuildMemberRoleManager)
})*/

client.on('ready', () => {
    let Numberset = new Intl.NumberFormat("en-US")
    console.log(`${client.user.tag} is now online!`);
})

client.on(`message`, async(message) => {
    if (message.author.bot) return;
    if (!message.guild) return;  
    if (message.guild) {
        if(message.channel.id == "872320110080184380" && message.content.includes("เข้าเรียน")){
            var d_time = new Date();
            let time = d_time.getHours();
            let mTime = time + 7
            console.log("Real Time ", time)
            console.log("My Time ", mTime)
            if(mTime < 7){
                const checkerror = {
                    author: {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL()
                    },
                    description: '<a:8657_agooglebell:871871818447859812> **ยังไม่ถึงเวลาค่ะ**',
                    color: '#6dcef8',
                }
                message.channel.send({embed:checkerror})
            }
            else if(mTime > 9){
                const checkerrors = {
                    author: {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL()
                    },
                    description: '<a:8657_agooglebell:871871818447859812> **หมดเวลาเช็คชื่อแล้วนะคะ**',
                    color: '#6dcef8',
                }
                message.channel.send({embed:checkerrors})
            }else{
                const checksuccess = {
                    author: {
                        name: message.author.username,
                        icon_url: message.author.displayAvatarURL()
                    },
                    description: '<a:8657_agooglebell:871871818447859812> **ทำการเช็คชื่อแล้ว และได้รับ 1 คะแนน**',
                    color: '#6dcef8',
                }
                db.add(`m_count_${message.author.id}`, 1)
                message.channel.send({embed:checksuccess})
            }
        }
    }
})
