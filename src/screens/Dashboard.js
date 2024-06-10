import React, { useState, useEffect, useCallback } from "react";
// import Background from "../components/Background";
// import Logo from "../components/Logo";
// import Header from "../components/Header";
// import Paragraph from "../components/Paragraph";
// import Button from "../components/Button";
import { GiftedChat } from "react-native-gifted-chat";

export default function Dashboard({ navigation }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}
