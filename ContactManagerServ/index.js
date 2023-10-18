const app = require('./src/app')
const db = require('./src/db')
const PORT = 3001


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
    db.connect((err) => {
        if (err) {
            console.error("Error de conexion a la base de datos: " + err)
        }else {
            console.log("Conexion exitosa a la base de datos");
        }
    })
})
