const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const config = {
    user: 'yourUser',
    password: 'yourPassword',
    server: 'localhost',
    database: 'yourDatabase',
    options: { encrypt: false, trustServerCertificate: true }
};

app.get("/users", async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query("SELECT * FROM Users");
        res.send(result.recordset);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/users", async (req, res) => {
    const { name, email } = req.body;
    try {
        let pool = await sql.connect(config);
        await pool
          .request()
          .input("name", sql.VarChar, name)
          .input("email", sql.VarChar, email)
          .query("INSERT INTO Users (name, email) VALUES (@name, @email)");

        res.send({ success: true });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));