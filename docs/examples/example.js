const apiUrl = 'https://thingai-api.vercel.app/process-request';
const data = {
    model: 'ThingAI 2.0 Pro',
    process_draw_command: "yes",
    messages: [{"role": "user", "content": "Hello ThingAI!"}],
    database: {"Best AI": "ThingAI", "Favourite color": "purple"}
};

fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(json => console.log('Response:', json))
.catch(error => console.error('Error:', error));