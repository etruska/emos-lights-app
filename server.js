import express from 'express';
import { doAction } from './doAction.js';
import cors from 'cors';

const app = express()
const port = 3333

app.use(cors())

app.get('/', cors(), async (req, res) => {
	const action = req.query.action;
	console.log('will do action', action);
	await doAction(action === undefined ? 'seq' : action);
	res.sendStatus(200)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
