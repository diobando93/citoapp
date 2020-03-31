const electron = require('electron')
const Pool = require('pg').Pool
const {app, BrowserWindow, ipcMain} = electron


let win

const pool = new Pool({
  user: 'sammy',
  host: 'localhost',
  database: 'sammy',
  password: 'hola',
  port: 5432,
})


app.on('ready', ()=>{
    win = new BrowserWindow({
        height : 1000,
        width: 1000,
        webPreferences : {
            nodeIntegration: true
        }
    })
    win.loadFile('templates/index.html')
})

ipcMain.on('save', (event, registro) =>{

    let cedula
    //console.log(registro[0])
    //registro[0]=Number(registro[0])
    console.log(typeof(registro[0]))
    cedula = parseFloat(registro[0])
    console.log(typeof(cedula))
    console.log(cedula)
    //pool.query('INSERT INTO persona (cedula, hclinica, apellidos, nombres, fnacimiento, edad, pais, provincia, canton,parroquia, ciudad, barrio, direccion, sector, instruccion, ocupacion, ifamilia, ofamilia), VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)', [cedula, registro[1], 'a', 'i', "19-10-2018", 8, 'b', 'c', 'd', 'e', '3', 'e', 'e', 'a', 't', 'e', 'p', 'y'], (error, results) =>{

    pool.query('INSERT INTO canchas (nombre, longitud, latitud), VALUES ($1, $2, $3)', ['pepe',cedula, 7666], (error, results) =>{
        if (error) {
          throw error
        }
        //response.status(201).send(`User added with ID: ${result.insertId}`)
    })
})

ipcMain.on('query', (event, query) =>{

    pool.connect((err, client, done) => {
        if (err) throw err
        client.query('SELECT * FROM canchas WHERE nombre = $1', ['Pampa'],  (err, res) => {
            done()
            if (err) {
                console.log(err.stack)
            } else {
                console.log(res.rows[0])
            }
        })
    })
})


// funcion para comprobar que es un numero
