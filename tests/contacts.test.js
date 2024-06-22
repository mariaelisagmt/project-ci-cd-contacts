const { get, getAll, insertContato } = require('../src/services/contato.service.js')

describe('Contacts service', () => {

    test('get all contacts if there is contacts', async () => {
        const contacts = await getAll()
        expect(contacts.length).toBeGreaterThan(0)
    })

    test('get specific contact by id', async() => {
        const id = 1
        const contact = await get(id)

        expect(contact).toHaveProperty('nome')
        expect(contact).toHaveProperty('telefone')
        expect(contact).toHaveProperty('email')
    })

    test('create contact', async() => {
        
    })

})
