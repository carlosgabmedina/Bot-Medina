export function handleEventCommand(command, message, client) {
  switch (command) {
    case 'evento':
      return client.sendText(message.from, 'Função evento não implementada.');
    case 'cargo':
      return client.sendText(message.from, 'Função cargo não implementada.');
    default:
      return null;
  }
}
