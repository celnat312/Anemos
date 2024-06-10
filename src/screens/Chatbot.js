import React, { useState } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import { Text } from "react-native-paper";
import Button from "../components/Button";
import { theme } from "../core/theme";
import axios from 'axios'


export default function Chatbot({ navigation }) {
    const [response, setResponse] = useState('')
    const fetchAIResponse = async () => {
        const apiKey = "";
        const prompt = 'Once upon a time'
        try {
            const result = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    prompt: prompt,
                    max_tokens: 50,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${apiKey}`,
                    },
                },
            )
            setResponse(result.data.choices[0].text)
        } catch (error) {
            console.error('Error fetching AI response:', error)
        }
    }
    return (
        <Background>
            <Logo />
            <Header>Welcome user to chatbot page💫</Header>
            <Paragraph>Congratulations you are logged in.</Paragraph>
            <Button mode="outlined" title="Generate AI Text" onPress={fetchAIResponse}>
                Generate AI Text
            </Button>
            <Text>{response}</Text>

            <Button
                mode="outlined"
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "StartScreen" }],
                    })
                }
            >
                Sign out
            </Button>
        </Background>
    );
}

