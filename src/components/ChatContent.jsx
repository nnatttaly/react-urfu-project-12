export default function ChatContent({ channel, messages }) {
  return (
    <section className="chat-content" aria-label="Чат">
      <header className="chat-heading">
        <h1>{channel ? `# ${channel.name}` : "Нет каналов"}</h1>
        <p>Сообщений: {messages.length}</p>
      </header>
      <div className="chat-messages">
        {messages.map((message) => (
          <p key={message.id}>
            <b>{message.username}</b>: {message.body}
          </p>
        ))}
      </div>
    </section>
  );
}
