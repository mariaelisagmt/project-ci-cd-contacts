const sqliteConnection = require('./connection.js')


async function createTable() {
    const db = await sqliteConnection()

    const query = `
        CREATE TABLE IF NOT EXISTS contatos (
            _id INTEGER PRIMARY KEY AUTOINCREMENT,
            telefone VARCHAR(13),
            nome VARCHAR(200),
            email VARCHAR(200)
        )

    `

    await db.exec(query)
}

async function insertData() {
    const db = await sqliteConnection()
    
    const query = `
        INSERT INTO contatos (telefone, nome, email)
        VALUES ('99999-9999', 'teste', 'teste@teste')
    `

    await db.exec(query)
    db.run
}

async function getData() {
    const db = await sqliteConnection()

    const query = `
        SELECT * FROM contatos
    `

    const results = await db.all(query)
    console.log('results', results);
}

async function run() {
    await createTable()
    await insertData()
    await getData()

}

run()