const sqliteConnection = require('./connection.js')


async function createTable() {
    const db = await sqliteConnection()

    const query = `
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            phone VARCHAR(13),
            name VARCHAR(200)
        )

    `

    await db.exec(query)
}

async function insertData() {
    const db = await sqliteConnection()
    
    const query = `
        INSERT INTO contacts (phone, name)
        VALUES ('teste', 'teste')
    `

    await db.exec(query)
    db.run
}

async function getData() {
    const db = await sqliteConnection()

    const query = `
        SELECT * FROM contacts
    `

    const results = await db.all(query)
    console.log('results', results);
}

async function run() {
    // await createTable()
    await insertData()
    await getData()

}

run()