export function handleProfileCommand(command, message, client) {
  switch (command) {
    case 'perfil':
      return client.sendText(message.from, 'Função perfil não implementada.');
    case 'personalidade':
      return client.sendText(message.from, 'Função personalidade não implementada.');
    default:
      return null;
  }
}
