import { FormEvent } from "react";
import { Message } from "../App";
import { MessageList } from "./MessageList";
import { AddMessageForm } from "./AddMessageForm";

interface ChatRoomProps {
  username: string;
  messages: Message[];
  messageInputValue: string;
  onMessageInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendMessage: (e: FormEvent) => void;
  isTyping:boolean;
  typingUsername:string;
}

export function ChatRoom({
  username,
  messages,
  messageInputValue,
  onMessageInputChange,
  sendMessage,
  isTyping,
  typingUsername
}: ChatRoomProps) {
  return (
    <div>
      <div className="text-xl font-bold border-b-2 pb-2 mb-4 flex justify-between">
        <h1>Chat Room</h1>
        <span>{username}</span>
      </div>

      <MessageList
        messages={messages}
        username={username}

      />
      {isTyping ? `${typingUsername} is typing...` : null}
      <AddMessageForm
        messageInputValue={messageInputValue}
        onMessageInputChange={onMessageInputChange}
        sendMessage={sendMessage}
      />
    </div>
  );
}