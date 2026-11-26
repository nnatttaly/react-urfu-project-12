import { useState } from "react";

export default function MessageForm({ onSendMessage, disabled }) {
  const [messageText, setMessageText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const text = messageText.trim();
    if (!text || isSubmitting || disabled) return;

    setIsSubmitting(true);
    setError("");

    try {
      await onSendMessage(text);
      setMessageText("");
    } catch {
      setError("Не удалось отправить сообщение. Попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="message-form"
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
    >
      <div className="message-input">
        <input
          aria-label="Новое сообщение"
          placeholder="Введите сообщение…"
          value={messageText}
          onChange={(event) => setMessageText(event.target.value)}
          readOnly={isSubmitting}
          disabled={disabled}
        />
        <button
          type="submit"
          aria-label="Отправить сообщение"
          disabled={disabled || isSubmitting || !messageText.trim()}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
      {error && (
        <p className="message-error" role="alert">{error}</p>
      )}
    </form>
  );
}
