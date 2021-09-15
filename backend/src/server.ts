import * as express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import { createConnection } from "net";
import {
    EVENT_CONNECTION,
    EVENT_DATA,
    EVENT_ERROR, EVENT_MESSAGE,
    HOST_LOCAL,
    PATH_HOME,
    PROPERTY_PORT,
    SYMBOL_ASTERISK, SYMBOL_COLON
} from "./common/constants";

const stocks: Stock[] = [];
const app = express();
app.set(PROPERTY_PORT, process.env.PORT || 3001);

const http = createServer();
const server = new Server(http, { cors: { origin: SYMBOL_ASTERISK }});

app.get(PATH_HOME, (req: any, res: any) => res.send('index'));

server.on(EVENT_CONNECTION, function(socket: any) {
    console.log('a user connected');
    const c = createConnection({
        host: HOST_LOCAL,
        port: 8777,
        localPort: 8777
    });
    c.on(EVENT_MESSAGE, (message: string) => {
        const parts = message.split(SYMBOL_COLON);
        const stock: Stock = {
            action: parts[2],
            price: Number(parts[3]),
            timestamp: Number(parts[4])
        };
        stocks.push(stock);
        socket.emit(EVENT_DATA, stock);
    });
    c.on(EVENT_ERROR, console.log);
});

http.listen(3001, () => console.log('listening on *:3001'));
