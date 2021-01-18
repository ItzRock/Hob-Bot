const Discord = require('discord.js')
const command = require('../command')
const config = require('../config.json')

module.exports = client => {
    command(client, 'config', message => {
        //const content = message.content.replace(`${config.prefix}config`, ` `)
        const Perm = 'MANAGE_SERVER'
        const { member } = message

        if (member.hasPermission(Perm)) {
            const embed = new Discord.MessageEmbed()

            embed.setTitle('**Bot Configuration**')
            .setAuthor('InFamousDino#7871')
            .setFooter('Hob Bot')
            .setColor('#00AAFF')
            //.setImage('https://cdn.discordapp.com/attachments/799539037332439041/799826560424869898/GFX-Style.jpg')
            .setThumbnail('https://cdn.discordapp.com/attachments/799539037332439041/799826560424869898/GFX-Style.jpg')

            .addFields({
                name: '**Prefix:**',
                value: `${config.prefix}`,
                inline: true
            },

            {
                name: '**Logs:**',
                value: `${config.logschannel}`,
                inline: true
            },

            {
                name: '**Muted Role:**',
                value: `${config.mutedrole}`,
                inline: true
            },

            {
                name: '**Mod Role:**',
                value: `${config.modrole}`,
                inline: true
            },

            {
                name: '**Admin Role:**',
                value: `${config.adminrole}`,
                inline: true
            }
        )
        message.channel.send(embed)
        
        } else {
            message.channel.send('You do not have the required permission to use this command ' + Perm + '.')
        }
    })
}