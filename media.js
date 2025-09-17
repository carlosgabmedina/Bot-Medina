export function handleMediaCommand(command, message, client) {
  switch (command) {
    case 'play':
      return client.sendText(message.from, 'Função play não implementada.');
    case 'ouvir':
      return client.sendText(message.from, 'Função ouvir não implementada.');
    case 's':
      return client.sendText(message.from, 'Função sticker não implementada.');
    case 'stickerfoto':
      return client.sendText(message.from, 'Função stickerfoto não implementada.');
    case 'stickervideo':
      return client.sendText(message.from, 'Função stickervideo não implementada.');
    case 'stickertexto':
      return client.sendText(message.from, 'Função stickertexto não implementada.');
    default:
      return null;
  }
}
