const Discord = require('discord.js');
const client = new Discord.Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent']
});

const token = '027f9d0bc45565d70bcc5a339aabbbc36e7371a89d44bb2b19d92b5f16471466';  // Ganti dengan token bot Anda

client.once('ready', () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (channel) {
    channel.send(`hore ada member baru ${member} semoga betah ya`);
  }
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (channel) {
    channel.send(`yahh si ${member.user.tag} keluar jir bete gw`);
  }
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith('!')) return;

  const args = message.content.slice(1).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'menu') {
    const embed = new Discord.EmbedBuilder()
      .setTitle('Menu Bot Rezzy')
      .setDescription('halo saya rezzy saya adalah bot dari yopandelreyz developer dan owner di server ini')
      .setImage('https://files.catbox.moe/3i01dq.jpg')
      .setColor('BLUE');

    const row = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setLabel('WhatsApp Developer')
          .setURL('https://wa.me/6281239977516')
          .setStyle(Discord.ButtonStyle.Link),
        
        new Discord.ButtonBuilder()
          .setLabel('Telegram Developer')
          .setURL('https://t.me/yopandelreyz')
          .setStyle(Discord.ButtonStyle.Link),
        
        new Discord.ButtonBuilder()
          .setLabel('TikTok')
          .setURL('https://tiktok.com/@yopandelrey1')
          .setStyle(Discord.ButtonStyle.Link),
        
        new Discord.ButtonBuilder()
          .setLabel('Website')
          .setURL('https://yopandelreyz.com')  // Ganti dengan link website Anda
          .setStyle(Discord.ButtonStyle.Link)
      );

    message.channel.send({ embeds: [embed], components: [row] });
  }
});

client.login(token);
