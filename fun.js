export function handleFunCommand(command, message, client) {
  switch (command) {
    case 'bafometro':
      const percent = Math.floor(Math.random() * 101);
      return client.sendText(message.from, `🍺 Bafômetro: ${percent}%`);
    case 'ppp':
      const size = Math.floor(Math.random() * 30) + 1;
      return client.sendText(message.from, `Seu PPP mede: ${'='.repeat(size)}D`);
    default:
      return null;
  }
}
