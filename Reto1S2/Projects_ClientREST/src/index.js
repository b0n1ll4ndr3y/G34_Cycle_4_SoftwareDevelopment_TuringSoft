const express = require('express')
const mongoose = require('mongoose')
const ownerRoute = require('./routes/owner')
const petRoute = require('./routes/pet')
const doctorRoute = require('./routes/doctor')
const veterinaryRoute = require('./routes/veterinary')
require('dotenv').config()

// Puerto de conexión
const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use('/dashboard', ownerRoute)
app.use('/dashboard', petRoute)
app.use('/dashboard', doctorRoute)
app.use('/dashboard', veterinaryRoute)

// Generar conexión con el puerto
app.listen(port, () => console.log('\nConexión exitosa por el puerto', port))

// Generar el tipo de acceso al proyecto desde la web: http://localhost:3000
app.get('/', (req, res) => {res.send('Clinica Veterinaria TuringSoft')})

// Conexión con base de datos de MongoDB
mongoose
    .connect(process.env.MONGODB_CONNECTION)
    .then(() => console.log('Conexión exitosa con Base de Datos Veterinaria!'))
    .catch((error) => console.error(error))


