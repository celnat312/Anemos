import React, { useState, useEffect, useCallback } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import { Text } from "react-native-paper";
import Button from "../components/Button";
import { theme } from "../core/theme";
import axios from 'axios'
import { GiftedChat } from "react-native-gifted-chat";
import { View } from "react-native-web";

export default function Chatbot({ navigation }) {
    const [response, setResponse] = useState('')
    const apiKey = "";
    
    const [messages, setMessages] = useState([]);
    const fetchAIResponse = async (newMessage = []) => {

        try {
            const userMessage = newMessage[0];
            const formattedMessage = { role: "user", content: userMessage.text };
            setMessages(previousMessages => GiftedChat.append(previousMessages, userMessage));
            
            const result = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: "gpt-3.5-turbo",
                    messages: [...messages.map(msg => ({ role: "user", content: msg.text })), formattedMessage],
                    max_tokens: 50,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${apiKey}`,
                    },
                },
            );

            const botMessage = {
                _id: new Date().getTime() + 1,
                text: result.data.choices[0].message.content,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: "Air Con Bot",
                    avatar: "https://placeimg.com/140/140/any",
                },
            };
            setMessages(previousMessages => GiftedChat.append(previousMessages, botMessage));
        } catch (error) {
            console.error('Error fetching AI response:', error);
        }
    };

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Hello User, please ask any enquiries you have on air conditioning optimisation",
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
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        );
        fetchAIResponse(messages);
    }, []);

    return (
        <GiftedChat
            messages={messages}
            onSend={newMessage => fetchAIResponse(newMessage)}
            user={{
                _id: 1,
            }}
        />
    );
}

