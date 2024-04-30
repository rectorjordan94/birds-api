const express = require('express')
const app = express()

// routes
const birdRoutes = require('./routes/bird_routes')

const PORT = 3000

app.use('/birds', birdRoutes)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})