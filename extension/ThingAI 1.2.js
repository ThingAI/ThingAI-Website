// == Harness the power of ThingAI ==
// Made by Wisienki2ie, Original By MubiLop
// Only tested on PenguinMod.

(function(Scratch) {
    'use strict';
    console.log("Loaded ThingAI v1.2 based on PenguinGPT v1.9")
    const gptIcon = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsODYuNTQ3MzQsMjAuMjU1NzYiIGhlaWdodD0iMjAuMjU1NzYiIHdpZHRoPSI4Ni41NDczNCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk2LjcyNjMzLC0xNjkuODcyMTIpIj48ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9Ij48Zz48cGF0aCBkPSJNMTk2LjcyNjMzLDE4MGMwLC01LjU5MzQ3IDQuNTM0NDEsLTEwLjEyNzg4IDEwLjEyNzg4LC0xMC4xMjc4OGM1LjU5MzQ3LDAgMTAuMTI3ODgsNC41MzQ0MSAxMC4xMjc4OCwxMC4xMjc4OGMwLDUuNTkzNDcgLTQuNTM0NDEsMTAuMTI3ODggLTEwLjEyNzg4LDEwLjEyNzg4Yy01LjU5MzQ3LDAgLTEwLjEyNzg4LC00LjUzNDQxIC0xMC4xMjc4OCwtMTAuMTI3ODh6Ij48L3BhdGg+PHBhdGggZD0iTTIzMC42OTA1MywxODBjMCwtNS41OTM0OCA0LjUzNDQsLTEwLjEyNzg4IDEwLjEyNzg4LC0xMC4xMjc4OGM1LjU5MzQ4LDAgMTAuMTI3ODgsNC41MzQ0IDEwLjEyNzg4LDEwLjEyNzg4YzAsNS41OTM0OCAtNC41MzQ0LDEwLjEyNzg4IC0xMC4xMjc4OCwxMC4xMjc4OGMtNS41OTM0OCwwIC0xMC4xMjc4OCwtNC41MzQ0IC0xMC4xMjc4OCwtMTAuMTI3ODh6Ij48L3BhdGg+PHBhdGggZD0iTTI2My4wMTc5MSwxODBjMCwtNS41OTM0OCA0LjUzNDQsLTEwLjEyNzg4IDEwLjEyNzg4LC0xMC4xMjc4OGM1LjU5MzQ4LDAgMTAuMTI3ODgsNC41MzQ0IDEwLjEyNzg4LDEwLjEyNzg4YzAsNS41OTM0OCAtNC41MzQ0LDEwLjEyNzg4IC0xMC4xMjc4OCwxMC4xMjc4OGMtNS41OTM0OCwwIC0xMC4xMjc4OCwtNC41MzQ0IC0xMC4xMjc4OCwtMTAuMTI3ODh6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjQzLjI3MzY3MTI3NTU4NDYzOjEwLjEyNzg4MDQ0Njk5MDEzMy0tPg==";
    const extIcon = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsMTExLjMzMzM0LDExMS4zMzMzNCIgaGVpZ2h0PSIxMTEuMzMzMzQiIHdpZHRoPSIxMTEuMzMzMzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NC4zMzMzNSwtMTI0LjMzMzM1KSI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS13aWR0aD0iMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iPjxwYXRoIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgZmlsbD0iIzAwMDAwMCIgZD0iTTE4NC4zMzMzNiwxODAuMDAwMDNjMCwtMzAuNzQzODUgMjQuOTIyODIsLTU1LjY2NjY3IDU1LjY2NjY3LC01NS42NjY2N2MzMC43NDM4NSwwIDU1LjY2NjY3LDI0LjkyMjgyIDU1LjY2NjY3LDU1LjY2NjY3YzAsMzAuNzQzODUgLTI0LjkyMjgyLDU1LjY2NjY3IC01NS42NjY2Nyw1NS42NjY2N2MtMzAuNzQzODUsMCAtNTUuNjY2NjcsLTI0LjkyMjgyIC01NS42NjY2NywtNTUuNjY2Njd6Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBkPSJNMTk2LjcyNjMzLDE4MGMwLC01LjU5MzQ3IDQuNTM0NDEsLTEwLjEyNzg4IDEwLjEyNzg4LC0xMC4xMjc4OGM1LjU5MzQ3LDAgMTAuMTI3ODgsNC41MzQ0MSAxMC4xMjc4OCwxMC4xMjc4OGMwLDUuNTkzNDcgLTQuNTM0NDEsMTAuMTI3ODggLTEwLjEyNzg4LDEwLjEyNzg4Yy01LjU5MzQ3LDAgLTEwLjEyNzg4LC00LjUzNDQxIC0xMC4xMjc4OCwtMTAuMTI3ODh6Ij48L3BhdGg+PHBhdGggc3Ryb2tlPSJub25lIiBmaWxsPSIjZmZmZmZmIiBkPSJNMjMwLjY5MDUzLDE4MGMwLC01LjU5MzQ4IDQuNTM0NCwtMTAuMTI3ODggMTAuMTI3ODgsLTEwLjEyNzg4YzUuNTkzNDgsMCAxMC4xMjc4OCw0LjUzNDQgMTAuMTI3ODgsMTAuMTI3ODhjMCw1LjU5MzQ4IC00LjUzNDQsMTAuMTI3ODggLTEwLjEyNzg4LDEwLjEyNzg4Yy01LjU5MzQ4LDAgLTEwLjEyNzg4LC00LjUzNDQgLTEwLjEyNzg4LC0xMC4xMjc4OHoiPjwvcGF0aD48cGF0aCBzdHJva2U9Im5vbmUiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yNjMuMDE3OTEsMTgwYzAsLTUuNTkzNDggNC41MzQ0LC0xMC4xMjc4OCAxMC4xMjc4OCwtMTAuMTI3ODhjNS41OTM0OCwwIDEwLjEyNzg4LDQuNTM0NCAxMC4xMjc4OCwxMC4xMjc4OGMwLDUuNTkzNDggLTQuNTM0NCwxMC4xMjc4OCAtMTAuMTI3ODgsMTAuMTI3ODhjLTUuNTkzNDgsMCAtMTAuMTI3ODgsLTQuNTM0NCAtMTAuMTI3ODgsLTEwLjEyNzg4eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjU1LjY2NjY0NDk5OTk5OTk5OjU1LjY2NjY0NTAwMDAwMDAyLS0+";
    let api_url = 'https://thingai-api.vercel.app';
    const vm = Scratch.vm;
    class ThingAI {
        constructor() { 
            this.chatHistories = {};
            this.model = "ThingAI 2.0";
            this.reqModels = [{text:'Currently requesting models please wait!', value: 'ThingAI 2.0'}];
            this.fetchAndGetReqModels().then(models => {
                this.reqModels = models
            });
            this.nextJSON = null;
        }

        getInfo() {
            return {
                id: "NewThingAI",
                name: "ThingAI",
                menuIconURI: extIcon,
                blockIconURI: gptIcon,
                color1: '#000000',
                blocks: [{
                        opcode: "__NOUSEOPCODE",
                        blockType: Scratch.BlockType.LABEL,
                        text: "Reverse Proxy API Blocks",
                    },
                    {
                        opcode: 'setApiUrl',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Set ThingAI API to [api]',
                        arguments: {
                            api: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Production",
                                menu: "ApiVersions"
                            }
                        },
                    },
                    {
                        opcode: 'setModel',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Set Model to [MODEL]',
                        arguments: {
                            MODEL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "(select here)",
                                menu: "reqModels"
                            }
                        },
                    },
                    {
                        opcode: 'getModel',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Get current model'
                    },
                    {
                        opcode: 'checkApiUrl',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'Is reverse proxy working?',
                        disableMonitor: true,
                    },
                    {
                        opcode: "__NOUSEOPCODE",
                        blockType: Scratch.BlockType.LABEL,
                        text: "Message Management",
                    },
                    {
                        opcode: 'advancedPrompt',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Send text [PROMPT] to [chatID] and [DRAW] draw commands',
                        arguments: {
                            PROMPT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello ThingAI!',
                            },
                            chatID: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'ThingAI'
                            },
                            DRAW: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '(select option)',
                                menu: 'drawBackend',
                            }
                        },
                    },
                    {
                        opcode: 'singlePrompt',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Generate with no context and [DRAW] draw commands: [PROMPT]',
                        arguments: {
                            PROMPT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello ThingAI',
                            },
                            DRAW: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '(select option)',
                                menu: 'drawBackend',
                            }
                        },
                    },
                    {
                        opcode: 'addImageToNextRequest',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Attach Image [URL] to next message',
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'datauri or url',
                            },
                        },
                    },
                
                    {
                        opcode: "__NOUSEOPCODE",
                        blockType: Scratch.BlockType.LABEL,
                        text: "Instance Management",
                    },
                    {
                        opcode: 'createChat',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Create instance named [chatID]',
                        arguments: {
                            chatID: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'ThingAI'
                            }
                        },
                    },
                    {
                        opcode: 'removeChat',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Delete instance [chatID]',
                        arguments: {
                            chatID: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'ThingAI'
                            }
                        },
                    },
                    {
                        opcode: 'resetChat',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Reset chat history of [chatID]',
                        arguments: {
                            chatID: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'ThingAI'
                            }
                        },
                    },
                    {
                        opcode: 'exportChat',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Chat history of [chatID] as Array',
                        arguments: {
                            chatID: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'ThingAI',
                                disableMonitor: false
                            }
                        },
                    },
                    {
                        opcode: 'importChat',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Import chat history from [json] as [chatID]',
                        arguments: {
                            json: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Array goes here'
                            },
                            chatID: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'ThingAI'
                            }
                        },
                    },
                    {
                        opcode: 'importAll',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Import chats from [json] and [merge]',
                        arguments: {
                            json: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Array goes here'
                            },
                            merge: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'merge',
                            }
                        },
                    },
                    {
                        opcode: 'exportAll',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'All chats as Arrays',
                    },
                    {
                        opcode: 'listChats',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Currently Active chats'
                    },
                    {
                        opcode: "__NOUSEOPCODE",
                        blockType: Scratch.BlockType.LABEL,
                        text: "Image Generation",
                    },
                    {
                        opcode: 'generateImage',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Generate [PROMPT] from [MODEL] and get Response',
                        arguments: {
                            PROMPT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Abstract art'
                            },
                            MODEL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '(select model)',
                                menu: 'igModels',
                            }
                        }
                    },
                    {
                        opcode: 'generateImageAndImport',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'Generate [PROMPT] from [MODEL] and import as costume with name [NAME]',
                        arguments: {
                            PROMPT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Abstract art'
                            },
                            MODEL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '(select model)',
                                menu: 'igModels',
                            },
                            NAME: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Generated Image'
                            }
                        }
                    }
                ],
                menus: {
                    types: {
                        acceptReporters: true,
                        items: ['Generated Text', 'Request']
                    },
                    merge: {
                        acceptReporters: true,
                        items: ['Merge/Update existing chats', 'Remove all chatbots and import']
                    },
                    igModels: {
                        acceptReporters: true,
                        items: [
                        {
                            text: "DALL-E 3",
                            value: "dalle-3"
                        }, 
                        {
                            text: "I can't believe it's not a photograph",
                            value: "i-cant-believe-its-not-photography-seco"
                        },
                        {
                            text: "Am i Real V4.1",
                            value: "am-i-real-v4.1"
                        },
                        {
                            text: "Pastel Mix Anime",
                            value: "pastel-mix-anime"
                        }],
                    },
                    drawBackend: {
                        acceptReporters: true,
                        items: [
                        {
                            text: "process",
                            value: "yes"
                        }, 
                        {
                            text: "don't process",
                            value: "no"
                        }],
                    },
                    reqModels: {
                        acceptReporters: true,
                        items: 'fetchAndGetReqModelsTemp'
                    },
                    ApiVersions: {
                        acceptReporters: false,
                        items: [
                        {
                            text: "Production",
                            value: "https://thingai-api.vercel.app"
                        }, 
                        {
                            text: "Experimental",
                            value: "https://thingai-api-experimental.vercel.app"
                        },
                        {
                            text: "Production Backup",
                            value: "https://wb.is-a.dev/thingai/production"
                        },
                        {
                            text: "Experimental Backup",
                            value: "https://wb.is-a.dev/thingai/experimental"
                        }],
                    },
                }
            };
        }
        
        addImageToNextRequest(args) {
            this.nextJSON = {
                type: "image_url",
                image_url: {
                   url: args.URL
                }
            };
            return this.nextJSON;
         }

        
        fetchAndGetReqModelsTemp() {
          return this.reqModels;
        }
        
        fetchAndGetReqModels() {
            return fetch(api_url + '/models')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                   let models = [];
                   data.data.forEach(model => {
                       if (model.type != "chat.completions") return;
                       models.push({ text: this.formatModelId(model.id), value: model.id })
                   });
                   return models;
                })
        }

        setModel(args) {
            this.model = args.MODEL
        }
        
        getModel() {
            return this.model;
        }

        setApiUrl(args) {
            const newApiUrl = args.api;
            api_url = newApiUrl;
            this.fetchAndGetReqModels().then(models => {
                this.reqModels = models
            });
        }

        checkApiUrl() {	
            return Scratch.fetch(api_url)
                .then(response => {
                    return response.status >= 200 && response.status < 300;
                })
                .catch(() => {
                    return false;
                });
        }

        singlePrompt(args) {
            const prompt = args.PROMPT;
            const ProcessDraw = args.DRAW;
            
            let content = prompt;
            
            if (this.nextJSON) {
            	const nextJSONArray = Array.isArray(this.nextJSON) ? this.nextJSON : [this.nextJSON];
            	content = [
                    { type: "text", text: prompt },
                    ...nextJSONArray
                ];
                this.nextJSON = null;
            }

            return Scratch.fetch(`${api_url}/process-request`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Origin': 'https://gptcall.net/',
                        'Referer': 'https://gptcall.net/'
                    },
                    body: JSON.stringify({
                        model: this.model,
                        messages: [{
                            role: "user",
                            content: content,
                            process_draw_command: ProcessDraw,
                        }]
                    }),
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
                    }
                    return response.content();
                })
                .then(data => {
                    const botResponse = data.choices[0].message.content;
                    return botResponse;
                })
                .catch(error => {
                    console.error("Error sending prompt to GPT", error.message);
                    return "Error: ", error.message;
                });
        }

        generateImage(args) {
            const prompt = args.PROMPT;
            const requestedModel = args.MODEL

            return Scratch.fetch(`https://reverse.mubi.tech/v1/images/generations`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: requestedModel,
                        prompt: prompt
                    }),
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    let targetUrl = data.data[0].url;
                    return targetUrl;
                })
                .catch(error => {
                    console.error("Error sending prompt to Image Generator", error.message);
                    return "Error: ", error.message;
                });
        }
        generateImageAndImport(args, util) {
            const prompt = args.PROMPT;
            const requestedModel = args.MODEL;
            const Name = args.NAME || `AIGenerated_${prompt}`;
            const targetId = util.target.id;

            return Scratch.fetch(`https://reverse.mubi.tech/v1/images/generations`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: requestedModel,
                        prompt: prompt
                    }),
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    let targetUrl = data.data[0].url;
                    fetch(targetUrl)
                        .then((r) => r.arrayBuffer())
                        .then((arrayBuffer) => {
                            const storage = vm.runtime.storage;
                            const asset = new storage.Asset(
                                storage.AssetType.ImageBitmap,
                                null,
                                storage.DataFormat.PNG,
                                new Uint8Array(arrayBuffer),
                                true
                            );
                            const newCostumeObject = {
                                md5: asset.assetId + '.' + asset.dataFormat,
                                asset: asset,
                                name: Name
                            };
                            vm.addCostume(newCostumeObject.md5, newCostumeObject, targetId);
                        });
                })
                .catch(error => {
                    console.error("Error sending prompt to Image Generator", error.message);
                    return "Error: ", error.message;
                });
        }

        createChat(args) {
            const chatID = args.chatID;
            if (!(chatID in this.chatHistories)) {
                this.chatHistories[chatID] = [{
                    role: "system",
                    content: "Your name is: " + chatID
                }];
            }
        }

        exportChat(args) {
            const chatID = args.chatID;
            if (this.chatHistories[chatID] !== undefined) {
                const chatHistory = this.chatHistories[chatID];
                const json = JSON.stringify(chatHistory);
                return json;
            } else {
                return 'Error: There is no chat history available for that chatbot.';
            }
        }

        listChats() {
            const activeChats = Object.keys(this.chatHistories);
            const json = JSON.stringify(activeChats);
            return json;
        }

        importChat(args) {
            const chatID = args.chatID;
            const json = args.json;
            let chatHistory;

            try {
                chatHistory = JSON.parse(json);
            } catch (error) {
                console.error('Error parsing JSON:', error.message);
                return;
            }

            if (Array.isArray(chatHistory)) {
                this.chatHistories[chatID] = chatHistory;
            } else {
                console.error('Invalid JSON format. Expected an array.');
            }
        }

        resetChat(args) {
            const chatID = args.chatID;
            if (chatID in this.chatHistories) {
                this.chatHistories[chatID] = [{
                    role: "system",
                    content: "Your name is: " + chatID
                }];
            }
        }

        removeChat(args) {
            const chatID = args.chatID;
            if (chatID in this.chatHistories) {
                delete this.chatHistories[chatID];
            } else {
                return "Error: There is no chat history available for that chatbot.";
            }
        }

        advancedPrompt(args) {
            const prompt = args.PROMPT;
            const chatID = args.chatID;
            const ProcessDraw = args.DRAW;
            if (!(chatID in this.chatHistories)) {
                return "Error: That chatbot does not exist.";
            }
            const chatHistory = this.chatHistories[chatID] || [];
            
            let content = prompt;
            
            if (this.nextJSON) {
            	const nextJSONArray = Array.isArray(this.nextJSON) ? this.nextJSON : [this.nextJSON];
            	content = [
                    { type: "text", text: prompt },
                    ...nextJSONArray
                ];
                this.nextJSON = null;
            }
            
            chatHistory.push({ role: "user", content })
            
            return Scratch.fetch(`${api_url}/process-request`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Origin': 'https://gptcall.net/',
                        'Referer': 'https://gptcall.net/'
                    },
                    body: JSON.stringify({
                        model: this.model,
                        messages: chatHistory,
                        process_draw_command: ProcessDraw,
                    }),
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    const botResponse = data.content;
                    chatHistory.push({
                        role: "assistant",
                        content: botResponse
                    });
                    this.chatHistories[chatID] = chatHistory;
                    
                    return botResponse;
                })
                .catch(error => {
                    console.error("Error sending prompt to GPT", error.message);
                    return "Error: ", error.message;
                });
        }

        exportAll() {
            const allChats = {};
            const chatIDs = Object.keys(this.chatHistories);
            for (const chatID of chatIDs) {
                allChats[chatID] = this.chatHistories[chatID];
            }
            const json = JSON.stringify(allChats);
            return json;
        }

        importAll(args) {
            const json = args.json;
            const mergeOption = args.merge.toLowerCase();
            let importedChats;
            try {
                importedChats = JSON.parse(json);
            } catch (error) {
                console.error('Error parsing JSON:', error.message);
                return;
            }
            if (typeof importedChats === 'object' && importedChats !== null) {
                if (mergeOption === 'remove all and import') {
                    this.chatHistories = importedChats;
                } else if (mergeOption === 'merge with existing chats') {
                    const importedChatIDs = Object.keys(importedChats);
                    for (const chatID of importedChatIDs) {
                        this.chatHistories[chatID] = importedChats[chatID];
                    }
                } else {
                    console.error('Invalid merge option. Expected "remove all and import" or "merge with existing chats".');
                    return 'Invalid merge option. Expected "remove all and import" or "merge with existing chats".';
                }
            } else {
                console.error('Invalid JSON format. Expected an object.');
                return "Invalid JSON format. Expected an object.";
            }
        }
        
        formatModelId(modelId) {
            let parts = modelId.split("-");

            let formattedParts = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1));

            let formattedModelId = formattedParts.join(" ");

            return formattedModelId;
            // this was pretty easy actually i didnt expect it
         }

    }
    Scratch.extensions.register(new ThingAI());
})(Scratch);
