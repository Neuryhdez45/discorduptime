const { Client, messageLink } = require("discord.js")
const client = new Client({ intents: [3260479]})

const config = require("./config.json")

client.on("messageCreate", async message =>{
    if(message.content == "Hola"){
        message.channel.send("Hola!")
    }

})

client.login(config.token)
console.log("Listo")