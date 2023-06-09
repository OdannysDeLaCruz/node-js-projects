const express = require('express')
const v1WorkoutRoutes = require("./v1/routes/workoutRoutes")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/v1/workouts', v1WorkoutRoutes)

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`) )