export default function ChannelsSidebar({ channels, currentChannelId, onSelectChannel }) {
  return (
    <aside className="chat-sidebar" aria-label="Каналы">
      <h2>Каналы</h2>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id}>
            <button
              type="button"
              aria-pressed={channel.id === currentChannelId}
              onClick={() => onSelectChannel(channel.id)}
            >
              # {channel.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
