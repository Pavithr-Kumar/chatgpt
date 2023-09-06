export async function sendRequest(msg) {
  let result;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: msg }],
      temperature: 0.7,
    }),
  };

  try {
    const res = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    console.log(process.env.API_KEY);
    const data = await res.json();
    console.log(data);
    result = data.choices[0].message.content;
  } catch (error) {}

  return result;
}
