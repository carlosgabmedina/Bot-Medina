export function handleBlacklistCommand(command, message, client) {
  switch (command) {
    case 'blacklist':
      return client.sendText(message.from, 'Função blacklist não implementada.');
    default:
      return null;
  }
}
