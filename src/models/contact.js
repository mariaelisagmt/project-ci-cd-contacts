const sqliteConnection = require('../db/connection.js')

class Contato {

    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    async list() {
        const dbConnection = await sqliteConnection()
        const query = `
            SELECT * FROM contatos
        `
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

    async getById(id) {
        const dbConnection = await sqliteConnection()

        const query = `
            SELECT
                nome,
                telefone,
                email
            FROM
                contatos
            WHERE
                id = '${id}'
        `
        const results = await dbConnection.all(query)
        dbConnection.close()
        return results
    }


    showDetails() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`E-mail: ${this.email}`);
        console.log('------------------------');
    }

}