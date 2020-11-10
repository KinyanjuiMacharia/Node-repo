const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'node_mysql_db'
});

//connect
db.connect((err) => {
	if(err) throw err;
	console.log('connection successful');
});

/*
db.connect(function(err){
if(err) throw err;
console.log('connection successful');
});
*/




const app = express();

///////// create database //////
/*app.get('/createDatabase', (req, res) => {
	let sql = 'create database node_mysql_db';
	db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('Database has been created successfully');
	});
});*/


/*
///////// normal function //////
app.get('/createdb', function(req, res){
	let sql = 'create database Employees';
	db.query(sql, function(err, result){
		if(err) throw err;
		console.log(result);
		res.send('database created');
	})
});*/


///////// create table ////////
/*app.get('/createTable', (req, res) => {
	let sql = 'create table students(Adm_no varchar(10), FirstName varchar(20), LastName varchar(20), primary key(Adm_no))';
	db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('table students has been created successfully');
	})
});*/



//////// insert records ///////
/*app.get('/addStudents1', (req, res) => {
	let student = {Adm_no : 'S-001', FirstName : 'Kinyanjui', LastName : 'Macharia'};
	let  sql = 'insert into students set ?';
	let query = db.query(sql, student, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('student 1 has been inserted successfully');
	});
});*/

/*app.get('/addStudents2', (req, res) => {
	let student = {Adm_no : 'S-002', FirstName : 'Samuel', LastName : 'Njuguna'};
	let  sql = 'insert into students set ?';
	let query = db.query(sql, student, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('student 2 has been inserted successfully');
	});
});

app.get('/addStudents3', (req, res) => {
	let student = {Adm_no : 'S-003', FirstName : 'Victor', LastName : 'Kangethe'};
	let  sql = 'insert into students set ?';
	let query = db.query(sql, student, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send('student 3 has been inserted successfully');
	});
});*/




/*
//////// normal function /////////
app.listen('3000', function(){
	console.log('Server has been started on port 3000');
});
*/


//////// arrow function /////////
app.listen('3000', () => {
	console.log('Server has been started on port 3000');
});