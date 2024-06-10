// import { View, Text } from "react-native";
// import React,{useState} from "react";
// import { GiftedChat, MessageText } from "react-native-gifted-chat";
// import axios from "axios";

// const Chatbot = () => {
//     const [messages, setMessages] = useState([])

//     const Chatgpt_api_key=''

//     const handleSend = async(newMessages = []) =>{
//         try{
//             const userMessage = newMessages[0]
//             setMessages(previousMessages => GiftedChat.append(previousMessages, userMessage))
//             const messageText = userMessage.text.toLowerCase()
//             const keywords = []
//             // if (!keywords.some(keyword => messageText.includes(keyword))){
//             //     const botMessage = {
//             //         _id:new Date().getTime() + 1,
//             //         text:"Heyyy, I'm your friendly aircon chatbot here to help you optimise your aircon setting",
//             //         createdAt: new Date(),
//             //         user:{
//             //             _id:2,
//             //             name:"Air Con Bot"
//             //         }
//             //     }
//             // };
//             setMessages(previousMessages => GiftedChat.append(previousMessages, botMessage))
//             return;
//         }

//         // const response = await.axios.post()
//     }



// }



