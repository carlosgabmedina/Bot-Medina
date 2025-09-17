import { create } from '@open-wa/wa-automate';
import { handleAdminCommand } from './admin.js';
import { handleFunCommand } from './fun.js';
import { handleMediaCommand } from './media.js';
import { handleProfileCommand } from './profile.js';
import { handleEventCommand } from './events.js';
import { handleBlacklistCommand } from './blacklist.js';

create().then((client) => start(client));

function start(client) {
  client.onMessage(async (message) => {
    if (!message.body.startsWith('!')) return;
    const [cmd, ...args] = message.body.slice(1).split(' ');
    // Admin
    if (["mutar","fechar","abrir","todos"].includes(cmd)) {
      await handleAdminCommand(cmd, message, client);
      return;
    }
    // Fun
    if (["bafometro","ppp"].includes(cmd)) {
      await handleFunCommand(cmd, message, client);
      return;
    }
    // Media
    if (["play","ouvir","s","stickerfoto","stickervideo","stickertexto"].includes(cmd)) {
      await handleMediaCommand(cmd, message, client);
      return;
    }
    // Profile
    if (["perfil","personalidade"].includes(cmd)) {
      await handleProfileCommand(cmd, message, client);
      return;
    }
    // Events
    if (["evento","cargo"].includes(cmd)) {
      await handleEventCommand(cmd, message, client);
      return;
    }
    // Blacklist
    if (["blacklist"].includes(cmd)) {
      await handleBlacklistCommand(cmd, message, client);
      return;
    }
    // Default
    if (cmd === 'ping') {
      await client.sendText(message.from, 'pong!');
      return;
    }
    await client.sendText(message.from, `Comando não reconhecido: ${cmd}`);
  });
}
