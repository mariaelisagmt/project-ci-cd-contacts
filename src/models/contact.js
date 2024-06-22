const sqliteConnection = require('../db/connection.js')

class Contato {

    async list() {
        const dbConnection = await sqliteConnection()
        const query = `
            SELECT * FROM contatos
        `
        const results = await dbConnection.all(query)
        dbConnection.close()
        return results
    }

    async getById(id) {
        const dbConnection = await sqliteConnection()

        const query = `
            SELECT
                *
            FROM
                contatos
            WHERE
                _id = '${id}'
        `

        console.log(query);
        const results = await dbConnection.all(query)
        dbConnection.close()
        return results
    }

    async getByName(name) {
        const dbConnection = await sqliteConnection()

        const query = `
            SELECT
                nome,
                telefone,
                email
            FROM
                contatos
            WHERE
                nome ILIKE '%${name}%'
        `
        const results = await dbConnection.all(query)
        dbConnection.close()
        return results
    }

    async getByPhone(phone) {
        const dbConnection = await sqliteConnection()

        const query = `
            SELECT
                nome,
                telefone,
                email
            FROM
                contatos
            WHERE
                telefone ILIKE '%${phone}%'
        `
        const results = await dbConnection.all(query)
        dbConnection.close()
        return results
    }

    async getByEmail(email) {
        const dbConnection = await sqliteConnection()

        const query = `
            SELECT
                nome,
                telefone,
                email
            FROM
                contatos
            WHERE
                email ILIKE '%${email}%'
        `
        const results = await dbConnection.all(query)
        dbConnection.close()
        return results
    }

    async create(name, phone, email) {
        const dbConnection = await sqliteConnection()
        const query = `
            INSERT INTO contatos (nome, telefone, email)
            VALUES ('${name}', '${phone}', '${email}')
        `
        await dbConnection.exec(query)
        dbConnection.close()
    }

    async remove(id) {
        const dbConnection = await sqliteConnection()

        const query = `
            DELETE FROM contatos WHERE id = '${id}'
        `

        await dbConnection.exec(query)
        dbConnection.close()
    }

}

module.exports = Contato