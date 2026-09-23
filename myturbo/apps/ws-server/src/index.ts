import { WebSocketServer } from "ws";
import {client} from "@repo/db/config"

const wss = new WebSocketServer({
    port:8000
})


wss.on("connection" , async(connection)=>{
    await client.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })

    connection.send("Hi there")

})