require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder, Partials } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel]
});

const prefix = '!';

client.on('ready', () => {
  console.log(`Bot aktif sebagai ${client.user.tag}`);
});

client.on('messageCreate', (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  
  const command = msg.content.slice(prefix.length).trim().toLowerCase();
  
  if (command === 'menu') {
    const embed = new EmbedBuilder()
      .setTitle('Halo saya Rezzy')
      .setDescription('Saya adalah bot dari yopandelreyz developer dan owner di server ini.')
      .setImage('https://files.catbox.moe/3i01dq.jpg')
      .addFields(
        { name: 'WhatsApp Developer', value: '[Klik di sini](https://wa.me/6281239977516)' },
        { name: 'Telegram Developer', value: '[Klik di sini](https://t.me/yopandelreyz)' },
        { name: 'TikTok', value: '@yopandelrey1' },
        { name: 'Email', value: 'cahyaadi679@gmail.com' }
      )
      .setColor('Random');
    
    msg.channel.send({ embeds: [embed] });
  }
});

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.systemChannel;
  if (channel) {
    channel.send(`Hore ada member baru <@${member.id}> semoga betah ya!`);
  }
});

client.on('guildMemberRemove', (member) => {
  const channel = member.guild.systemChannel;
  if (channel) {
    channel.send(`Yahh si <@${member.id}> keluar jir, bete gw.`);
  }
});

client.login(process.env.TOKEN);