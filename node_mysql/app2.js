const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'Students'
});

//connect
db.connect((err) => {
	if(err) throw err;
	console.log('connection successful');
});

const app = express();

///////// create database //////
app.get('/createDatabase', (req, res) => {
	let sql = 'create database Students';
	db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Database has been created successfully');
	});
});

///////// create table ////////
app.get('/createTable', (req, res) => {
	let sql = 'create table student_details(Adm_no varchar(10), FirstName varchar(20), LastName varchar(20), primary key(Adm_no))';
	db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('table students has been created successfully');
	})
});

app.listen('3000', () => {
	console.log('Server has been started on port 3000');
});