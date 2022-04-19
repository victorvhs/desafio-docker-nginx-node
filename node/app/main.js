const express = require('express')
const app = express()
const PORT = 3000
const CONFIG = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')

app.get('/', (req, res) => {
    const conn = mysql.createConnection(CONFIG)
    
    conn.query(`DELETE FROM people`)
    conn.query(`ALTER TABLE people AUTO_INCREMENT = 1`)

    conn.query(`INSERT INTO people(name) VALUES ('Jorge')`)
    conn.query(`INSERT INTO people(name) VALUES ('Junior')`)
    conn.query(`INSERT INTO people(name) VALUES ('Jonas')`)
    conn.query(`INSERT INTO people(name) VALUES ('Judas')`)
    conn.query(`INSERT INTO people(name) VALUES ('Janaina')`)
    conn.query(`INSERT INTO people(name) VALUES ('José')`)
    conn.query(`INSERT INTO people(name) VALUES ('Joao')`)
    conn.query(`INSERT INTO people(name) VALUES ('Jamila')`)

    conn.query(`SELECT name FROM people`, (error, resp, fields) => {
        res.send(`
          <h1>Full Cycle!</h1>
          <ul>
            ${!!resp.length ? resp.map(elem => `<li>${elem.name}</li>`).join('') : ''}
          </ul>
        `)
    })
    conn.end()
})

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})