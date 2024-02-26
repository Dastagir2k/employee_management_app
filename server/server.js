const express=require('express')
const mysql=require('mysql2')
const cors=require('cors')

const app=express();
app.use(cors());
app.use(express.json());


const db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'root',
    database:'employee_new',
})

db.connect((err)=>{
    if(!err){
        console.log("coonnected");
    }else{
        console.log("not connected");
    }
})

app.post('/employees', (req, res) => {
    const { name, department, dob, gender, designation, salary, experience, email, address, number } = req.body;

    const sql = 'INSERT INTO employee_detail (name, department, dob, gender, designation, salary, experience, email, address, number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [name, department, dob, gender, designation, salary, experience, email, address, number];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error while inserting into db:", err);
            res.status(500).send("Error while inserting into db");
        } else {
            console.log("Data inserted successfully");
            res.status(200).json({ message: "Data inserted successfully", result: result });
        }
    });
});

app.listen(6060,()=>{
    console.log("server is running");
})