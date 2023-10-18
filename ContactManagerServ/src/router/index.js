const {Router} = require('express')

const server = Router()

server.get('/', (req, res) => {
    return res.send('Router GET works')
});

server.post('/', (req, res) => {
    return res.send('Router POST works')
});

server.put('/', (req, res) => {
    return res.send('Router PUT works')
});

server.delete('/', (req, res) => {
    return res.send('Router DELET works')
});

module.exports = server