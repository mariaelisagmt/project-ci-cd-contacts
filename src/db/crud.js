function createContact(nome, telefone, email) {
    let newContact = new Contato(nome, telefone, email);
    contatos.push(newContact);
    console.log("Novo contato criado:");
    newContact.showDetails();
}

function listAllContacts() {
    console.log("Lista de contatos:");
    contatos.forEach(contact => {
        contact.showDetails();
    });
}

function updateContact(id, newName, newPhone, newEmail) {
    let contact = contatos.find(contato => contato.id === id);
    if (contact) {
        contact.nome = newName;
        contact.phone = newPhone;
        contact.email = newEmail;
        console.log(`Contato com ID ${id} atualizado com sucesso.`);
        contact.showDetails();
    } else {
        console.log(`Contato com ID ${id} não encontrado.`);
    }
}

function deleteContact(id) {
    let index = contatos.findIndex(contato => contato.id === id);
    if (index !== -1) {
        contatos.splice(index, 1);
        console.log(`Contato com ID ${id} excluído com sucesso.`);
    } else {
        console.log(`Contato com ID ${id} não encontrado.`);
    }
}