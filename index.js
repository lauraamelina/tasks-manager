import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import UserRoute from './routes/user.api.route.js'
import TaskRoute from './routes/task.api.route.js'
import StatusRoute from './routes/status.api.route.js'
import { createServer } from 'http'

const app = express();
app.use(bodyParser.json());
app.set('port', 8080);
app.use(cors())

app.use('/users/', UserRoute)
app.use('/task/', TaskRoute)
app.use('/status/', StatusRoute)

app.get('/', (req, res) => {
    res.send({
        message: "Hola"
    })
})

const server = createServer(app)


server.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
});
