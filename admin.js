export function handleAdminCommand(command, message, client) {
  switch (command) {
    case 'mutar':
      return client.sendText(message.from, '*Grupo mutado!*');
    case 'fechar':
      return client.setGroupToAdminsOnly(message.chatId, true).then(() => client.sendText(message.from, '*Grupo fechado!*'));
    case 'abrir':
      return client.setGroupToAdminsOnly(message.chatId, false).then(() => client.sendText(message.from, '*Grupo aberto!*'));
    case 'todos':
      return client.getGroupMembers(message.chatId).then(members => {
        const mentions = members.map(m => `@${m.id.user}`).join(' ');
        return client.sendTextWithMentions(message.from, `Mencionar todos: ${mentions}`);
      });
    default:
      return null;
  }
}
