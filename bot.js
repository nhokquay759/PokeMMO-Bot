const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const activities_list = ["with Rakkuen","with Albedox","with Claris","with Ngoc"]; 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index]);
    }, 10000);
});

client.on('message', message => {
    if (message.content.toLowerCase() === '?random') {
    	message.channel.send(Math.floor(Math.random() * 100) + 1);
  	}
    if (message.content.toLowerCase() === '?avatar') {
    const embed = new MessageEmbed()
	.setColor('#c500ff')
	.setImage(message.author.displayAvatarURL())
    message.channel.send(embed);
        }
    if (message.content.toLowerCase() === '?kien') {
    message.channel.send('Kiên thật sự ngu ngốc\nBảo vệ Clar cũng không xong');	    
        }
    if (message.content.toLowerCase() === '?123') {
var facts = ["1", "2", "3"];
var fact = Math.floor(Math.random() * facts.length);
message.channel.send(facts[fact]);
        }


});
client.login(process.env.BOT_TOKEN);
