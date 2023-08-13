const Express = require ('express')
const app = Express()
const path = require('path')
const socket = require('socket.io')
const cors = require('cors')
const morgan = require('morgan')


app.use(cors())

app.use(morgan('dev'))
app.use(Express.json())

app.use('*', (req, res, next) => {
  console.log('A request was made to the server');
  next()
})

app.use(Express.static(path.join(__dirname, '..', 'public')))


app.get('/', (req, res, next) => {
  res.send({
    success: true,
    message: 'You have connected to the server!'
  })
})

const PORT = 3000
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

const serverSocket = socket(server)

serverSocket.on('connection', (socket) => {
  console.log(`Connection from client ${socket.id}`)
  socket.emit("hello from server", 1, "2", {3: Buffer.from([4])})

  socket.on("hello from client", () => {
    console.log('A message was received from the client')
  })
})