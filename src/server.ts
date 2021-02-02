import express, { Application } from "express"
import projects from "./services/projects"

const app: Application = express()
const port = process.env.PORT

app.get('/projects', projects.list)

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

export default app
