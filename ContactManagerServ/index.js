const app = require("./src/app");
const { conn } = require('./src/dbs')
const PORT = 3001;

conn.sync({force: false})
.then(() => {
    console.log('DB connection established successfully')
    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`);
    })
})
.catch(err => {
        console.log('Unable to connect to DB', err);
    });
