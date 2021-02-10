let express = require('express');
let fs = require('fs');
let body_parser = require('body-parser');
let data_account = fs.readFileSync('account.json');
let data_operations = fs.readFileSync('operations.json');
let account = JSON.parse(data_account);
let operations = JSON.parse(data_operations);
const cors = require ('cors');

let app = express();

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));

app.listen(3001, function () {
	console.log('API app started');
})

app.get('/all_account', function (req, res) {
	res.send(account['account']);
})

app.post('/all_trans', function (req, res) {
	let response = []
	operations.map((e) => {
		if (e.id === req.body.id) {
			response.push(e)
		}
	})
	res.send(response);
})

app.post('/refill', function (req, res) {
	let refill = parseFloat(req.body.refill)
	const index = account['account'].findIndex(n => n.id === req.body.id)
	let balance = account['account'][index]['balance']
	delete account['account'][index]['balance']
	account['account'][index]['balance'] = balance + refill
	fs.writeFileSync('account.json', JSON.stringify(account))
	let new_trans = {
		id: req.body.id,
		refill: refill,
		date: req.body.date,
		commit: req.body.commit,
		mark: 1
	}
	operations.push(new_trans)
	fs.writeFileSync('operations.json', JSON.stringify(operations))
	res.sendStatus(200)
})

app.post('/expense', function (req, res) {
	let expense = req.body.expense
	const index = account['account'].findIndex(n => n.id === req.body.id)
	let balance = account['account'][index]['balance']
	delete account['account'][index]['balance']
	account['account'][index]['balance'] = balance - expense
	fs.writeFileSync('account.json', JSON.stringify(account))
	let new_trans = {
		id: req.body.id,
		expense: expense,
		date: req.body.date,
		commit: req.body.commit,
		mark: 0
	}
	operations.push(new_trans)
	fs.writeFileSync('operations.json', JSON.stringify(operations))
	res.sendStatus(200)
})

app.post('/new_account', function (req, res) {
	let new_account = {
		id: req.body.id,
		name: req.body.name,
		balance: 0
	}
	account['account'].push(new_account)
	fs.writeFileSync('account.json', JSON.stringify(account))
	res.sendStatus(200)
})