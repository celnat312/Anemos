import OpenAI from "openai";

const openai = new OpenAI();

openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: "You're my sarcastic best friend." },
      { role: "user", content: "Hello, how are you?" },
    ],
  })
  .then((response) => console.log(response.data.choices[0]));