import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../api/messages.js";
import { getChannels } from "../api/channels.js";
import { useAuthStore } from "../store/authStore.js";
import { useChatStore } from "../store/chatStore.js";
import ChannelsSidebar from "../components/ChannelsSidebar.jsx";
import ChatContent from "../components/ChatContent.jsx";
import routes from "../routes.js";

export default function MainPage() {
  const token = useAuthStore((state) => state.token);
  const currentChannelId = useChatStore((state) => state.currentChannelId);
  const setCurrentChannelId = useChatStore(
    (state) => state.setCurrentChannelId,
  );

  const {
    data: messages = [],
    isPending: isMessagesPending,
    error: messagesError,
  } = useQuery({
    queryKey: ["messages", token],
    queryFn: () => getMessages({ token }),
    enabled: Boolean(token),
  });

  const {
    data: channels = [],
    isPending: isChannelsPending,
    error: channelsError,
  } = useQuery({
    queryKey: ["channels", token],
    queryFn: () => getChannels({ token }),
    enabled: Boolean(token),
  });

  const currentChannel =
    channels.find((channel) => channel.id === currentChannelId) ?? channels[0];
  const channelMessages = messages.filter(
    (message) => message.channelId === currentChannel?.id,
  );

  useEffect(() => {
    if (currentChannel && currentChannel.id !== currentChannelId) {
      setCurrentChannelId(currentChannel.id);
    }
  }, [currentChannel, currentChannelId, setCurrentChannelId]);

  if (!token) {
    return <Navigate to={routes.login} replace />;
  }

  if (channelsError || messagesError) {
    return <p role="alert">Не удалось загрузить чат</p>;
  }

  if (isChannelsPending || isMessagesPending) {
    return <p role="status">Загрузка чата…</p>;
  }

  return (
    <div className="chat">
      <ChannelsSidebar
        channels={channels}
        currentChannelId={currentChannel?.id}
        onSelectChannel={setCurrentChannelId}
      />
      <ChatContent channel={currentChannel} messages={channelMessages} />
    </div>
  );
}
