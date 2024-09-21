const apiUrl = 'https://api.thingai.xyz/process-request';
const data = {
    model: 'ThingAI 2.0 Pro',
    process_draw_command: "yes",
    messages: [{"role": "user", "content": "Hello ThingAI!"}],
    database: {"Best AI": "ThingAI", "Favourite color": "purple"},
    memories: {"26-08-2024 12:12:39": "The user said that they like the color purple really much"},
    ip: "auto",
    dmmu_enabled: "auto"
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
